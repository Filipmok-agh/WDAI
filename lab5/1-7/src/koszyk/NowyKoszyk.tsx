import React from "react";
import Produkt from "./Produkt";

function NowyKoszyk() 
{
    const produkty: string[] = ["piwo","bakalje","babka","woda"];
    return (
        <div>
        <p>Nowy Koszyk</p>
        {produkty.map((nazwaProduktu, index) => (
        <Produkt key={index} nazwa={nazwaProduktu} />
      ))}
      </div>
    );
  }
  export default NowyKoszyk;