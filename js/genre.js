let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre`;

fetch (url)
    .then (function (response){
        return response.json();
    })
    .then (function (data){
        console.log(data);
        let arrayInfo = data.data
        let lista = document.querySelector (".listas")

        for (let i=1; i<5; i++){
            lista.innerHTML += `<li class="genero">
                                    <img src="${arrayInfo[i].picture}">
                                    <p> ${arrayInfo[i].name}</p>
                                    <a href="detail-genres.html?id=${arrayInfo[i].id}">
                                    Ver más</a>
                                </li>`
        }
    })
    .catch (function (error){
        console.log(error);
    })