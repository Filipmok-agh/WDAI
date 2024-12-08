const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();

app.use(express.json()); 

function connect() {
    return new sqlite3.Database('../database.db');
}

/*
    db.all - POBIERANIE paru wierszu danych
*/
app.get('/posts', (req, res) => {
  const db = connect()

  db.all("SELECT * from posts", [], (err, rows) => {
    res.status(200).json({
        message: 'Pobrano posty',
        posts: rows
    });
  })
});

/*
    db.run - MODYFIKOWANIE danych
*/
app.post("/posts", (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ 
            message: "Musisz podać title oraz content!" 
        });
    }

    const db = connect();

    db.run(
        "INSERT INTO posts (title, content) VALUES (?, ?)", 
        [title, content], 
        (err) => {
            /*
                Ćwiczenie:
                    W tym miejscu można dodać handling dla err
                    np. return res.status(500) .....
            */

            res.status(201).json({
                message: "Post dodany poprawnie!"
            });
        }
    );
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Serwer włączony!");
});