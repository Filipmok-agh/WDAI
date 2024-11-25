let produkty =[]
function show()
{
fetch('https://dummyjson.com/products')
    .then(function(response) 
    {
        return response.json();
    })
    .then(function(data) 
    {
        produkty = data.products
        main(produkty);
    })
    .catch(function(error) 
    {
        console.error('Błąd podczas pobierania danych:', error);
    });
}

function main(products)
{
    let parent = document.getElementById("table");
    let array = products.slice(0,30);
    parent.innerHTML = '';
    for(let i=0;i<30;i++)
    {
        let el = array[i];

        let row = document.createElement('tr');
        let first = document.createElement('td');
        let img = document.createElement('img');
        img.src = el.images;
        img.style.width='100px';
        img.style.height='100px';
        first.appendChild(img);
        row.appendChild(first);
        let second = document.createElement('td');
        second.textContent = el.title;
        row.appendChild(second);
        let third = document.createElement('td');
        third.textContent = el.description;
        row.appendChild(third);
        parent.appendChild(row);
    }
}

function filtr() 
{
    let key = document.getElementById("wysz").value.toLowerCase();
    let choice = document.getElementById("wybor").value;
    let array = produkty.filter(produkt => produkt.title.toLowerCase().includes(key));
    if (choice === "ros") 
    {
        array.sort((a, b) => a.title.localeCompare(b.title));
    } 
    else if (choice === "mal") 
    {
        array.sort((a, b) => b.title.localeCompare(a.title));
    }

    main(array);
}

show();
document.getElementById("wysz").addEventListener("input",filtr);
document.getElementById("wybor").addEventListener("change",filtr);
