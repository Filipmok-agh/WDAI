import { useEffect, useState } from "react";

function Licznikkopia() {
    const [cnt, setCnt] = useState(0);

    function increase() {
      setCnt(cnt + 1); 
    }
    useEffect(() => {
        console.log("Hello World")
    }, []);
    useEffect(()=>{
        if(cnt!=0)
        {
            console.log("Licznik zwiększył się do ",{cnt})
        }
    })
    
  return (
    <div>
      <p>{cnt}</p>
      <button onClick={increase}>Dodaj</button>
    </div>
  );
}

export default Licznikkopia;
