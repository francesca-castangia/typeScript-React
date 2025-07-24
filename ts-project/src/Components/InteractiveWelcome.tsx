import { useState } from "react";
import Welcome from "./Welcome";

function InteractiveWelcome() {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <Welcome name={value} />
    </>
  );
}

export default InteractiveWelcome;
