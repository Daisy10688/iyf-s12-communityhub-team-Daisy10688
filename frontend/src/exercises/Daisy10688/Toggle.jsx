import { useState } from "react";

function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h2>Toggle Exercise</h2>

      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>

      {isVisible && (
        <p>Hello Daisy! You have successfully learned React state.</p>
      )}
    </div>
  );
}

export default Toggle;