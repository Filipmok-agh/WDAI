import { Link } from "react-router-dom";

function Home() {
    document.title = "homepage"
  return (
    <div>
      <h1>Witaj na naszym blogu!</h1>
      <p>
        Przejdź do <Link to="/blog">listy artykułów</Link>.
      </p>
    </div>
  );
}

export default Home;
