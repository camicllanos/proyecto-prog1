
// Header y Footer

// manejo del input de búsqueda
let formBusqueda = document.getElementById("formBusqueda")
let inputBusqueda = document.getElementById("inputBusqueda")

formBusqueda.addEventListener('submit', function (event) {

    event.preventDefault()
    let busqueda = inputBusqueda.value.trim()
    //                 operador OR
    if (busqueda.length < 3 || busqueda === '') {
        alert("Ingreso inválido")
    } else {

       // redirecciona a la página de search mediante query string 
       window.location.replace(`./search-results.html?search=${busqueda}`)

    }

})

// Fin Header y Footer

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