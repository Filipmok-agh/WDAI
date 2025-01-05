import Produkt from "./Produkt";

function Koszyk() {
  return (
    <div>
      <p>Koszyk</p>
      <Produkt nazwa="piwo" />
      <Produkt nazwa="bułka" />
      <Produkt nazwa="masło" />
      <Produkt nazwa="mleko" />
      <Produkt nazwa="fajkii" />
    </div>
  );
}
export default Koszyk;
