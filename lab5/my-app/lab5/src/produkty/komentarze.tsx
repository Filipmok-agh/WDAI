import { useState, useEffect } from "react";
import Komentarz from "./komentarz";

function Komentarze() {
  const [komentarze, setkomentarze] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch("https://dummyjson.com/comments");
        const data = await response.json();
        setkomentarze(data.comments);
        setLoading(false);
      } catch (error) {
        console.error("Błąd pobierania komentarzy:", error);
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  if (loading) {
    return <p>Ładowanie komentarzy...</p>;
  }

  return (
    <div>
      <h2>Komentarze:</h2>
      {komentarze.map((comment: any) => (
        <Komentarz
          key={comment.id}
          id={comment.id}
          body={comment.body}
          postid={comment.postId}
          likes={comment.likes}
          user={comment.user}
        />
      ))}
    </div>
  );
}

export default Komentarze;
