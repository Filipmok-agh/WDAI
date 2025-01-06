import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
interface artykul
    {
        id:number,
        title:string,
        body:string,
        link:string
    }
function Articlebody()
{
    const {id} = useParams<{id: string}>()
    const [article, setArticle] = useState<artykul | null>(null)
    useEffect(()=>
    {
        
        const storedArticles:artykul[]= JSON.parse(localStorage.getItem("articles") || "[]");
        if (!id) {
            setArticle(null);
            console.log("aha?")
            return;
          }
        const index = parseInt(id,10)
        const foundArticle = storedArticles.find((item) => item.id === index);
        setArticle(foundArticle || null);}, [id]);
    if (!article) 
        {
            return <p>Artykuł nie został znaleziony.</p>;
        }
    return(
        <div>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
        </div>
    )
}
export default Articlebody;