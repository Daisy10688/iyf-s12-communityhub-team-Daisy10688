function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function CardExercise() {
  return (
    <div>
      <h2>Card Exercise</h2>

      <Card>
        <h3>Welcome to CommunityHub</h3>
        <p>This is my first reusable Card component.</p>
      </Card>

      <Card>
        <h3>About Daisy</h3>
        <p>I am learning React component composition.</p>
      </Card>
    </div>
  );
}

export default CardExercise;