const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();

app.use(express.json()); 

function connect() 
{
    return new sqlite3.Database('db.db');
}

app.get('/api/books', (req,res) =>
{
    const db = connect();
    db.all("SELECT * FROM books",[],(err,rows) =>
    {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ books: rows });
        }
    });
});
app.get('/api/books/:id', (req,res) =>
    {
        const db = connect();
        const id=req.params.id;
        db.get("SELECT * FROM books WHERE id = ?",[id],(err,row) =>
        {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(200).json({book: {
                    id: row.id,
                    name: row.name,
                    author: row.author,
                    year: row.year
            }});
            }
        });
    });
app.post('/api/books', (req,res) =>
{
    const {name, author, year} = req.body;
    if(!name || !author || !year)
    {
        return res.status(400).json({message: "Musisz podać tytuł, autora oraz rok"});
    }
    const db = connect();
        db.run("INSERT INTO books (name, author, year) VALUES (?, ?, ?)", [name, author, year],(err) =>{
        if(err){ return res.status(500).json({error: err.message})}
        const lastid = "SELECT id FROM books ORDER BY id DESC LIMIT 1";
        db.get(lastid,[],(err,row) =>res.status(200).json({ id: row.id }))
    })
});

app.delete('/api/books/:id',(req,res) =>
{
    const id = req.params.id;
    const db= connect()
    db.run("DELETE FROM books WHERE id=?",[id],(err) =>
    {
        if(err) 
        {
            return res.status(200).json({err: err.message})
        }
        res.status(200).json({message: "git"})
    })
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Serwer włączony!");
});