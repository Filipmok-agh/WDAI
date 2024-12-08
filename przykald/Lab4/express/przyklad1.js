const express = require('express');
const app = express();

/* Linijka istotna, aby nie pojawiały się błędy z przetwarzaniem danych z req.body */
app.use(express.json()); 

app.post('/student', (req, res) => {
  const { imie, nazwisko, semestr } = req.body;

  const nazwa = imie.slice(0, 1) + nazwisko

  res.status(200).json({
    message: 'Pobrano dane studenta',
    student: { 
        nazwa: nazwa,
        semestr: semestr
    },
  });
});

app.get("/student/:id", (req, res) => {
    res.status(200).json({
      message: 'Wyświetlanie danych studenta',
      id: req.params.id
    });
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Serwer włączony!");
});