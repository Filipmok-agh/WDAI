interface artykul
    {
        id:number,
        title:string,
        body:string,
        link:string
    }
import { Link } from "react-router-dom";
function Artykul(props:artykul)
{
    return (
        <div style={styles.commentContainer}>
          <div>
            <p>{props.id}</p>
          </div>
          <div style={styles.rightSide}>
            <p>tytuł: {props.title}</p>
          </div>
          <div style={styles.rightSide}>
            <p><Link to={props.link}>Link do artykułu</Link>.</p>
            </div>
        </div>
      );
}
const styles = {
    commentContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "15px",
      padding: "10px",
      border: "1px solid",
      borderRadius: "8px",
      backgroundColor: "wheat",
    },
    rightSide: {
      width: "65%",
      paddingLeft: "15px",
      fontStyle: "italic",
    },
  };
export default Artykul;