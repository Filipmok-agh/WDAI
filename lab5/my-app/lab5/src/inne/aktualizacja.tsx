import { useState } from "react";

function Aktualizacja()
{
    const [produkt, setProdukt] = useState({nazwa : "Pomidor", cena :50});
    const changePrice = () =>{setProdukt (prevProduct => ({...prevProduct, cena :100}))}

    return(
        <div>
            <p>Aktualnie {produkt.nazwa} kosztuje {produkt.cena}</p>
            <button onClick={changePrice}>Zmien cene</button>
        </div>
    )
}
export default Aktualizacja;