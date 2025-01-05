import React, { useState } from "react";

function Logowanie() {
  const [haslo1, setTekst1] = useState("");
  const [haslo2, setTekst2] = useState("");
  const [użytkownik, setTekst3] = useState("");




  function handleChange1(event: React.ChangeEvent<HTMLInputElement>) 
  {
    setTekst1(event.target.value);
  }
  function handleChange2(event: React.ChangeEvent<HTMLInputElement>) 
  {
    setTekst2(event.target.value);
  }
  function handleChange3(event: React.ChangeEvent<HTMLInputElement>) 
  {
    setTekst3(event.target.value);
  }
  let isDisabled = false
  if( haslo1==="" || haslo2==="" || użytkownik==="")
  {
    isDisabled = true
  }

  function check()
  {
    if(haslo1!==haslo2)
    {
        alert("Hasła nie są zgodne")
    }
    else
    {
        alert("Zalogowano poprawnie")
    }
  }
  return (
    <div>
        <p>Nazwa użytkownika</p>
      <input 
        type="text" 
        value={użytkownik} 
        onChange={handleChange3} 
      />
      <br></br>
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
      <br></br>
      <button type="button" disabled={isDisabled} onClick={check}>Logowanie</button>
    </div>
  );
}
export default Logowanie;
