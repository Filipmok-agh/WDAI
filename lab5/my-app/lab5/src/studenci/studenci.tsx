
function Studenci()
{
    interface Student {
        imie: string,
        nazwisko: string,
        rocznik: number
    }
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
    const Students: Student[] = [student1,student2,student3]
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
        </div>
    )
}
export default Studenci;