import { useState } from "react";

function Licznik() {
  const [cnt, setCnt] = useState(() => {
    return Number(localStorage.getItem("licznik")) || 0;
  });

  function increase() {
    setCnt((prevCnt) => {
      const newCnt = prevCnt + 1;
      localStorage.setItem("licznik", String(newCnt)); 
      return newCnt; 
    });
  }

  return (
    <div>
      <p>{cnt}</p>
      <button onClick={increase}>Dodaj</button>
    </div>
  );
}

export default Licznik;
