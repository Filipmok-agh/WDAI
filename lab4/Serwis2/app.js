const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();

app.use(express.json()); 

function connect() 
{
    return new sqlite3.Database('../Serwis1/db.db');
}
const db = connect();
// db.run(`CREATE TABLE orders (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     userid INTEGER,
//     bookid INTEGER,
//     quantity INTEGER,
//     FOREIGN KEY (bookid) REFERENCES books(id)
// )`);

// db.run(`INSERT INTO orders(userid,bookid,quantity) VALUES (?,?,?)`,[1,2,3])
// db.run(`INSERT INTO orders(userid,bookid,quantity) VALUES (?,?,?)`,[1,4,2])
// db.run(`INSERT INTO orders(userid,bookid,quantity) VALUES (?,?,?)`,[2,7,1]) 
app.get('/api/orders/:id', (req, res) => {
    const id = req.params.id; 
    db.all("SELECT id, bookid, quantity FROM orders WHERE userid = ?", [id], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ orders: rows });
        }
    });
});
app.post('/api/orders',(req,res) =>
{
    const {userid,bookid,quantity} = req.body;
    if(!bookid || !quantity || !userid)
        {
            return res.status(400).json({message: "Musisz podać id książki oraz ilość oraz userid"});
        }
        const db = connect();
        db.get("SELECT 1 FROM books WHERE id=?",[bookid],(err,row) =>
        {
            if(err){ return res.status(500).json({error: err.message})}
            if(!row)
            {
                return res.status(400).json({ error: "Książka o podanym id nie istnieje"});
            }
            if(row)
            {
                db.run("INSERT INTO orders (userid, bookid, quantity) VALUES (?, ?, ?)", [userid, bookid, quantity],(err) =>{
                    if(err){ return res.status(500).json({error: err.message})}
                    const lastid = "SELECT id FROM orders ORDER BY id DESC LIMIT 1";
                    db.get(lastid,[],(err,row) =>res.status(200).json({ orderid: row.id }))
                })
            }
        })
})

app.delete('/api/orders/:id',(req,res) =>
    {
        const id = req.params.id;
        const db= connect()
        db.run("DELETE FROM orders WHERE id=?",[id],(err) =>
        {
            if(err) 
            {
                return res.status(200).json({err: err.message})
            }
            res.status(200).json({message: "git"})
        })
    })

app.patch('/api/orders/:id',(req,res)=>
{
    const orderid=req.params.id;
    const {bookid,quantity} = req.body;
    if(!orderid || !bookid || !quantity)
    {
        res.status(400).json({messsage: "Wymagane,orderid,bookid oraz quantity"})
    }
    const db = connect();
    db.run(`UPDATE orders SET bookid = ? , quantity =? WHERE id=?`,[bookid,quantity,orderid],(err)=>
    {
        if(err)
        {
            return res.status(500).json({error: err.message});
        }
        res.status(200).json({message: "git"})
        
    })
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Serwer włączony!");
});


