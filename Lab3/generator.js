
const malelitery = 'abcdefghijklmnopqrstuvwxyz';
const liczby = '0123456789'
const wielkielitery = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const znakispecjalne = '!@#$%^&*()_+-=[]{}|;:,.<>?';
function generowanie()
{
    const wielkie = document.getElementById("wielkie").checked;
    const znaki = document.getElementById("znaki").checked;
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);
    if(max==0)
    {
        alert('max=0');
        return;
    }
    if(max<min)
    {
        alert('Max<min');
        return;
    }
    const length = Math.floor(Math.random() * (max - min + 1)) + min;
    let mozliwehaslo = '';
    mozliwehaslo += malelitery;
    mozliwehaslo += liczby;
    let haslo = '';

    if(wielkie==true)
    {
        mozliwehaslo += wielkielitery;
    }

    if(znaki==true)
    {
        mozliwehaslo+=znakispecjalne;
    }
    

    for(let i=0;i<length;i++)
    {
        let j = Math.floor(Math.random() * mozliwehaslo.length);
        haslo += mozliwehaslo[j];
    }
    alert(haslo)
}
document.getElementById("button").addEventListener('click',generowanie);
