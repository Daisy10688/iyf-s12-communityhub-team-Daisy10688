// Smoke test for the MamaCare API. Needs Node 18+ (built-in fetch).
// Usage: node scripts/smoke-test.js [baseUrl]
// Example: node scripts/smoke-test.js https://your-api.onrender.com

const BASE = (process.argv[2] || "http://localhost:5000").replace(/\/$/, "");

// Change these if the team agrees different paths.
const PATHS = {
  health: "/api/health",
  register: "/api/auth/register",
  login: "/api/auth/login",
  posts: "/api/posts",
};

let passed = 0;
let failed = 0;

function report(name, ok, detail = "") {
  if (ok) passed++;
  else failed++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? "  (" + detail + ")" : ""}`);
}

async function call(method, path, { body, token } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;
  try {
    const res = await fetch(BASE + path, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    let data = null;
    try { data = await res.json(); } catch { /* not JSON */ }
    return { status: res.status, data };
  } catch (err) {
    return { status: 0, data: null, error: err.message };
  }
}

async function main() {
  console.log(`Testing ${BASE}\n`);

  const health = await call("GET", PATHS.health);
  report("GET health returns 200", health.status === 200, `status ${health.status}`);
  if (health.status === 0) {
    console.log("\nCannot reach the server. Is it running, and is the address right?");
    process.exit(1);
  }

  const posts = await call("GET", PATHS.posts);
  report(
    "GET posts returns 200 and a list",
    posts.status === 200 && (Array.isArray(posts.data) || Array.isArray(posts.data?.posts)),
    `status ${posts.status}`
  );

  const noAuth = await call("POST", PATHS.posts, { body: { content: "smoke test" } });
  report("POST posts without a token is rejected", noAuth.status === 401, `status ${noAuth.status}`);

  const email = `smoke${Date.now()}@example.com`;
  const password = "Test12345!";

  const reg = await call("POST", PATHS.register, { body: { name: "Smoke Test", email, password } });
  report(
    "Register returns a user and token",
    [200, 201].includes(reg.status) && !!reg.data?.token && !!reg.data?.user,
    `status ${reg.status}`
  );

  const dup = await call("POST", PATHS.register, { body: { name: "Smoke Test", email, password } });
  report("Register with the same email is rejected", [400, 409].includes(dup.status), `status ${dup.status}`);

  const bad = await call("POST", PATHS.login, { body: { email, password: "wrong-password" } });
  report("Login with a wrong password is rejected", [400, 401].includes(bad.status), `status ${bad.status}`);

  const login = await call("POST", PATHS.login, { body: { email, password } });
  report("Login returns a user and token", login.status === 200 && !!login.data?.token, `status ${login.status}`);

  const token = login.data?.token;
  if (token) {
    const created = await call("POST", PATHS.posts, { token, body: { content: "Smoke test post" } });
    report("POST posts with a token returns 201", created.status === 201, `status ${created.status}`);
  } else {
    report("POST posts with a token returns 201", false, "skipped: no token");
  }

  console.log(`\n${passed} passed, ${failed} failed`);
  process.exit(failed ? 1 : 0);
}

main();
