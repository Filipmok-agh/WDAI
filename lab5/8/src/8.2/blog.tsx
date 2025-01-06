import  { useState, useEffect } from "react";
import Artykul from "./artykul";
import { Link } from "react-router-dom";
interface artykul
    {
        id:number,
        title:string,
        body:string,
        link:string
    }

function Blog() {
    const [articles, setArticles] = useState<artykul[]>([]);
  useEffect(() => {
    console.log(localStorage.getItem("articles"));
    const storedArticles = localStorage.getItem("articles");
    try {
      const parsedArticles = storedArticles ? JSON.parse(storedArticles) : [];
      setArticles(parsedArticles);
    } catch (error) {
      console.error("Błąd podczas parsowania danych z localStorage:", error);
      setArticles([]);
    }
  }, []);

  return (
    <div>
        <Link to="/dodaj">Dodaj artykul</Link>
      <h1>Lista artykułów</h1>
      {articles.length > 0 ? (
        articles.map((article) => <Artykul key={article.id} {...article} />)
      ) : (
        <p>Brak artykułów do wyświetlenia.</p>
      )}
    </div>
  );
}

export default Blog;
