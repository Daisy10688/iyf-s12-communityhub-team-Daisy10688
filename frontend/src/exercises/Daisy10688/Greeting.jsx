function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function GreetingExercise() {
  return (
    <div>
      <h1>Greeting Exercise</h1>

      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}

export default GreetingExercise;