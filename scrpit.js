let table = document.querySelector('tbody');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        table.innerHTML = "";
        data.map((item) => {
            table.innerHTML += `
            <tr> 
                <td>${item.id}</td>
                <td>${item.title}</td>    
            </tr>
            `
        })
    })