
function Ternary()
{
    let a = true
    let b = false
    return (
        <div>
            <div>stwierdzenie a {a ? "jest prawdziwe" : "jest fałszywe"}</div>
            <div>stwierdzenie b {b ? "jest prawdziwe" : "jest fałszywe"}</div>
        </div>
    )
}
export default Ternary;