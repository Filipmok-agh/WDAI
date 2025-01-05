import React, { useState } from "react";

function Haslo() {
  const [haslo1, setTekst1] = useState("");
  const [haslo2, setTekst2] = useState("");


  function handleChange1(event: React.ChangeEvent<HTMLInputElement>) 
  {
    setTekst1(event.target.value);
  }
  function handleChange2(event: React.ChangeEvent<HTMLInputElement>) 
  {
    setTekst2(event.target.value);
  }
  let tekst ="";
  if (haslo1!==haslo2)
  {
    tekst = "Hasła nie są zgodne"
  }
  if( haslo1==="" && haslo2==="")
  {
    tekst = "Prosze wprowadzic haslo"
  }

  return (
    <div>
        <p>haslo</p>
      <input 
        type="text" 
        value={haslo1} 
        onChange={handleChange1} 
      />
      <br></br>
      <p>powtorz haslo</p>
      <input 
        type="text" 
        value={haslo2} 
        onChange={handleChange2} 
      />
      <div>{tekst}</div>
    </div>
  );
}
export default Haslo;
