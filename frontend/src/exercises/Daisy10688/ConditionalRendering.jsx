function ConditionalRendering() {
  const isLoggedIn = true;
  const hasNotifications = true;
  const isAdmin = false;

  // Example 1: Using an if statement
  let welcomeMessage;

  if (isLoggedIn) {
    welcomeMessage = "Welcome back, Daisy!";
  } else {
    welcomeMessage = "Please log in.";
  }

  return (
    <div>
      <h2>Conditional Rendering Exercise</h2>

      {/* Example 1: If statement */}
      <p>{welcomeMessage}</p>

      {/* Example 2: Ternary operator */}
      <p>
        {isAdmin ? "Welcome, Administrator!" : "Welcome, Member!"}
      </p>

      {/* Example 3: Logical AND operator */}
      {hasNotifications && <p>You have new notifications!</p>}
    </div>
  );
}

export default ConditionalRendering;