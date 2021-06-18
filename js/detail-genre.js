let query = location.search;
let queryObject = new URLSearchParams(query);
let id = queryObject.get("id");

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`;

fetch (url)
    .then (function (response){
        return response.json();
    })
    .then (function (data){
        //console.log(data);
        let genre = document.querySelector (".tipo-genero")

        genre.innerText = data.name;

    })
    .catch( e => { console.log(e) })


let url1 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`;

fetch (url1)
    .then (function (response){
        return response.json();
    })
    .then (function (data){
        console.log(data);
        let info = data.data
        let detailGenre = document.querySelector (".lista-det1")

        for (let i=0; i<4; i++){
            detailGenre.innerHTML += `<li class="genero">
                                        <img src= "${info[i].picture}">
                                        <p>"${info[i].name}"</p>
                                    </li>`
        }
    })
    .catch( e => { console.log(e) })