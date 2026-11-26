function Input({ label, name, value, onChange, placeholder = "", multiline = false }) {
  const Field = multiline ? "textarea" : "input";

  return (
    <label className="field">
      <span>{label}</span>
      <Field
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}

export default Input;