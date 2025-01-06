import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface artykul
    {
        id:number,
        title:string,
        body:string,
        link:string
    }

function AddArticle() {
  const [title, setTitle] = useState<string>("");
  const [body, setContent] = useState<string>(""); 
  const navigate = useNavigate();

  function handleAddArticle(e: React.FormEvent) {
    e.preventDefault();
    const lastId = Number(localStorage.getItem("lastId") || 0);
    localStorage.setItem("lastId", String(lastId+1));
    const newArticle: artykul = {
      id: lastId +1,
      title,
      body,
      link: `/article/${lastId + 1}`
    };

    const storedArticles: artykul[] = JSON.parse(localStorage.getItem("articles") || "[]");
    localStorage.setItem("articles", JSON.stringify([...storedArticles, newArticle]));

    navigate("/blog");
  }

  return (
    <div>
      <h1>Dodaj nowy artykuł</h1>
      <form onSubmit={handleAddArticle}>
        <div>
          <label>Tytuł:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Treść:</label>
          <textarea
            value={body}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
}

export default AddArticle;
