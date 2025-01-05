import React, { useEffect, useState } from "react";

function Tytul() {
  const [tytul, setTekst1] = useState("");

  function handleChange1(event: React.ChangeEvent<HTMLInputElement>) 
  {
    setTekst1(event.target.value);
  }

  useEffect(() => {
    document.title = tytul});
  return (
    <div>
        <p>Tytuł</p>
      <input 
        type="text" 
        value={tytul} 
        onChange={handleChange1} 
      />
    </div>
  );
}
export default Tytul;
