import Koszyk from "./koszyk/Koszyk"
import NowyKoszyk from "./koszyk/NowyKoszyk";
import Licznik from "./licznik/licznik";
import NowyLicznik from "./licznik/nowylicznik";
import Formularz from "./formularze/formularz";
import Haslo from "./formularze/hasło";
import Logowanie from "./formularze/logowanie";
import Ternary from "./inne/Ternary";
import Aktualizacja from "./inne/aktualizacja";
import Studenci from "./studenci/studenci";
import StudentManager from "./studenci/StudentManager";
import Licznikkopia from "./efekty/licznikkopia";
import Tytul from "./efekty/Tytuł";
import Odliczanie from "./efekty/odliczanie";
import Komentarze from "./produkty/komentarze";
export default function App() {
  return (
    <div>
      <Koszyk />
      <br></br>
      <NowyKoszyk/>
      <br></br>
      <Licznik/>
      <br></br>
      <NowyLicznik/>
      <br></br>
      <Formularz/>
      <br></br>
      <Haslo/>
      <br></br>
      <Logowanie/>
      <br></br>
      <Ternary/>
      <br></br>
      <Aktualizacja/>
      <br></br>
      <Studenci/>
      <br></br>
      <StudentManager/>
      <br />
      <Licznikkopia/>
      <br />
      <Tytul/>
      <br />
      <Odliczanie/>
      <br />
      <Komentarze/>
    </div>
  );
}

