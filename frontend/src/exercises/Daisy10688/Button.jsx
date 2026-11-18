function Button({
  text = "Click me",
  variant = "primary",
  size = "medium",
  disabled = false,
}) {
  return (
    <button
      className={`button ${variant} ${size}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

function ButtonExercise() {
  return (
    <div>
      <h2>Button Exercise</h2>

      <Button />
      <Button text="Save" variant="primary" />
      <Button text="Cancel" variant="secondary" />
      <Button text="Small Button" size="small" />
      <Button text="Disabled Button" disabled={true} />
    </div>
  );
}

export default ButtonExercise;