import { useState } from "react";

function Licznik() {
    const [cnt, setCnt] = useState(0);

    function increase() {
      setCnt(cnt + 1); 
    }
  return (
    <div>
      <p>{cnt}</p>
      <button onClick={increase}>Dodaj</button>
    </div>
  );
}

export default Licznik;
