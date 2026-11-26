# MamaCare Testing Log

Owner: Denis (application shell and integration).

## 1. Test environments

| Environment | Frontend URL | API URL | Date tested | Tester |
|---|---|---|---|---|
| Local | http://localhost:5173 | http://localhost:(port) | | Denis |
| Deployed | (add link) | (add link) | | |

## 2. Results so far

| Date | Environment | Check | Result | Notes |
|---|---|---|---|---|
| (add date) | Local | Community Feed renders inside the app shell | Pass | Feed uses mock data (postsApi.js) until the posts API is connected |
| (add date) | Local | Logged-out visit to /feed redirects to /login | Pass | Uses the placeholder AuthContext |
| (add date) | Local | Mobile menu opens and closes | Pass | |

## 3. End-to-end checklist

Use a fresh browser session (private window) for each full run. Mark each step Pass, Fail or Blocked.

| # | Step | Expected result | Local | Deployed | Notes / bug # |
|---|---|---|---|---|---|
| 1 | Open the app while logged out | Redirected to Login. Navbar shows Log in and Create account | | | |
| 2 | Register with a new email | Account created, success message or redirect | | | |
| 3 | Register with the same email again | Clear error, no crash | | | |
| 4 | Register with empty or invalid fields | Validation messages, nothing submitted | | | |
| 5 | Log in with wrong password | Clear error, stays on Login | | | |
| 6 | Log in with correct details | Redirected to Feed. Navbar shows Community, My profile, Log out | | | |
| 7 | Refresh the page while logged in | Still logged in | | | |
| 8 | Open My profile | Own details shown | | | |
| 9 | Edit profile and save | Changes saved and still there after refresh | | | |
| 10 | Create a post on the Feed | Post appears in the feed and is still there after refresh (needs the real API) | | | |
| 11 | Create an empty post | Blocked with a message | | | |
| 12 | Add a comment to a post | Comment appears under the post | | | |
| 13 | Read the comments on a post | All comments shown in order | | | |
| 14 | Log out | Returned to Login. Navbar shows Log in and Create account | | | |
| 15 | After logout, open /feed and /profile directly | Redirected to Login | | | |
| 16 | Open a nonsense URL such as /hello | "Page not found" message | | | |

## 4. API checks

| # | Request | Expected | Local | Deployed |
|---|---|---|---|---|
| 1 | GET /api/health | 200 and a short OK message | | |
| 2 | GET /api/posts | 200 and a list of posts | | |
| 3 | POST /api/posts without logging in | Rejected (401) | | |
| 4 | POST /api/posts while logged in | 201 and the new post | | |

Add the register, login, profile and comment endpoints here once the backend is merged and the team has agreed the paths.

## 5. Device checks

| Check | Phone | Desktop |
|---|---|---|
| Menu opens and closes | | |
| Text readable, nothing cut off or sideways scrolling | | |
| Forms usable with the on-screen keyboard | | |
| Full flow works on the deployed link | | |

## 6. Bug table

| Bug # | Date | What failed (steps to repeat) | Expected vs actual | Owner | Status | Retested |
|---|---|---|---|---|---|---|
| 1 | | App.jsx replaced by exercises after PR #6 and PR #8, so routes disappeared | Expected the app shell and routes. Got only the exercises | Daisy | Fix in review | No |

Status values: Open, Fixed, Won't fix. After the owner fixes a bug, retest it and set Retested to Yes with the date.

## 7. Before the presentation

- [ ] Every checklist row passes on the deployed link
- [ ] No bug is left Open without a decision
- [ ] Tested on a phone, in a fresh browser session
- [ ] Live links written in the README
