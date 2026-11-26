function Button({
  text = "Click me",
  variant = "primary",
  size = "medium",
  disabled = false,
  type = "button",
  onClick,
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;