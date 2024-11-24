function show()
{
fetch('https://dummyjson.com/products')
    .then(function(response) 
    {
        return response.json();
    })
    .then(function(data) 
    {
        main(data.products);
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
show();