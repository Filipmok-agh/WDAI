import { useState } from "react"
interface Student {
    imie: string,
    nazwisko: string,
    rocznik: number
}
function StudentManager()
{
    const student1 :Student =
    {
        imie: "Jan",
        nazwisko: "Kowalski",
        rocznik: 1997
    }
    const student2 :Student =
    {
        imie: "Maciej",
        nazwisko: "Bąk",
        rocznik: 2004
    }
    const student3 :Student =
    {
        imie: "Kamil",
        nazwisko: "Ślimak",
        rocznik: 1999
    }
    const startStudents: Student[] = [student1,student2,student3]
    const [Students, setStudents]=useState(startStudents);
    const addStudent = (newStudent: Student) => {
        setStudents((prevStudents) => [...prevStudents, newStudent]);
      };
    return(
    <div>
        <table>
            <tr>
                <th>imie</th><th>nazwisko</th><th>rocznik</th>
            </tr>
            {Students.map((student,index)=>(
                <tr key={index}>
                    <td>{student.imie}</td>
                    <td>{student.nazwisko}</td>
                    <td>{student.rocznik}</td>
                </tr>
            ))}
        </table>
        <Dodawanie funkcja={addStudent}/>
    </div>
)
}
export default StudentManager;

function Dodawanie(props : {funkcja: (student: Student) => void;}) {
    const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [rocznik, setRocznik] = useState(0);
  const newStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imie || !nazwisko || !rocznik) {
        alert("Wszystkie pola muszą być wypełnione.");
        return;
      }
    props.funkcja({imie: imie,nazwisko:nazwisko,rocznik:rocznik});
    setImie("");
    setNazwisko("");
    setRocznik(0);
    }
    return(
        <div>
            <label>Imie</label>
            <input type="text" value={imie} onChange={(e) => setImie(e.target.value)}/>
            <label>Nazwisko</label>
            <input type="text" value={nazwisko} onChange={(e) => setNazwisko(e.target.value)}/>
            <label>rocznik</label>
            <input type="number"value={rocznik} onChange={(e)=>setRocznik(Number(e.target.value))}/>
            <button onClick={newStudent}>Dodaj</button>
        </div>
    )
}
