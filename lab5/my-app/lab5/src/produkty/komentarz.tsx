import { useState } from "react";

interface User {
  id: number;
  username: string;
  fullName: string;
}

interface KomentarzProps {
  id: number;
  body: string;
  postid: number;
  likes: number;
  user: User;
}
function Komentarz(props: KomentarzProps) {
    const [likes, setLikes]= useState(props.likes)
  return (
    <div style={styles.commentContainer}>
      <div>
        <p><strong>ID:</strong> {props.id}</p>
        <p><strong>User:</strong> {props.user.fullName}</p>
        <p><strong>Username:</strong> @{props.user.username}</p>
      </div>

      <div style={styles.rightSide}>
        <p>{props.body}</p>
      </div>
      <div style={styles.rightSide}>
        <p>like: {likes} <button style={styles.likeButton} onClick={()=>setLikes(likes+1)}>Like</button></p>
            <p><button style={styles.dislikeButton} onClick={()=>setLikes(likes-1)}>Dislike</button></p>
            <p>post id: {props.postid}</p>
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
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  rightSide: {
    width: "65%",
    paddingLeft: "15px",
    fontStyle: "italic",
  },
  likeButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "5px 10px",
    marginRight: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  dislikeButton: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Komentarz;
