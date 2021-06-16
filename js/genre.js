let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"

fetch (url)
    .then (function (response){
        return response.json();
    })
    .then (function (data){
        console.log(data);

        console.log(data.data)
        console.log(data.data[1])
        let arrayInfo = data.data
        let lista = document.querySelector (".listas")

        for (let i=1; i<5; i++){
            lista.innerHTML += `<li>
                                    <a href="detail-genres.html?id=${arrayInfo[i].id}">
                                    ${arrayInfo[i].name} <img src="${arrayInfo[i].picture}">
                                    </a>
                                </li>`
        }
    })
    .catch (function (error){
        console.log(error);
    })