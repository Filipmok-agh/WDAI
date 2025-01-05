import React, { useState } from "react";

function Formularz() {
  const [tekst, setTekst] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTekst(event.target.value);
  }

  return (
    <div>
      <input 
        type="text" 
        value={tekst} 
        onChange={handleChange} 
      />
      <div>{tekst}</div>
    </div>
  );
}

export default Formularz;
