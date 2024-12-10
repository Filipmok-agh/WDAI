const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();

app.use(express.json()); 

function connect() 
{
    return new sqlite3.Database('../Serwis1/db.db');
}
const db = connect();
//db.run(`CREATE TABLE users(id INTEGER PRIMARY KEY AUTOINCREMENT,email TEXT,password TEXT)`);
// db.run(`INSERT INTO users(email,password) VALUES(?,?)`,["gigibufon@o2.pl","koxbramkarz"]);
app.post(`/api/register`,(req,res)=>
{
    const {email,password} = req.body;
    if(!email || !password)
    {
        return res.status(400).json({message: "Wymagany mail oraz haslo"});
    }
    const db=connect();
    db.run(`INSERT INTO users (email,password) VALUES (?,?)`,[email,password],(err)=>
    {
        if(err)
        {
            return res.status(500).json({error: err.message})
        }
        const lastid = "SELECT id FROM users ORDER BY id DESC LIMIT 1";
        db.get(lastid,[],(err,row) =>res.status(200).json({ orderid: row.id }))
    })
})
app.post(`/api/login`,(req,res)=>
{
    const{email,password} = req.body;
    if(!email || !password)
    {
        return res.status(400).json({message: "Wymagany mail oraz haslo"});
    }
    const db=connect();
    db.get(`SELECT 1 FROM users WHERE email=?`,[email],(err,row)=>
    {
        if(err){ return res.status(500).json({error: err.message})}
        if(!row)
        {
            return res.status(400).json({ error: "Podanego emailu nie ma w bazie"});
        }
        db.get(`SELECT 1 FROM users WHERE email=? and password=?`,[email,password],(err,row)=>
        {
            if(err){ return res.status(500).json({error: err.message})}
            if(!row)
            {
                return res.status(400).json({ error: "Błędne hasło"});
            }
            return res.status(200).json({ message: "zalogowano"});
        })
    })
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Serwer włączony!");
});
