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

        // guardar la búsqueda en localStorage
        localStorage.setItem('searchAPI', busqueda)

        // redirecciona a la página de search
        window.location.replace('./search-results.html')
    }

})

// Fin Header y Footer

window.addEventListener("load", function () {
    console.log(window.location.search);
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString)
    let id = queryStringObj.get('id');
    let track = document.querySelector(".listaBestTrack")
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (datos) {
            console.log(datos)
            let nombreTrack = datos.title
            let autorTrack = datos.artist.name
            let imagenTrack = datos.artist.picture_medium
            let albumTrack = datos.album.title
            let linkTrack = datos.preview
            let artist= datos.artist.id
            track.innerHTML +=
            `<a href="./detail-track.html"><div class= "divtrack"><div class= "divtrackhijo"><img class= "imgtrack" src="${imagenTrack}" alt="${nombreTrack}"></a>
            <a href="./detail-track.html"><h1 class= "headtrack" id="h1track">${nombreTrack}<h1>
            <h3 class= "headtrack" id="h3track">${albumTrack}</h3>
           <a href="./detail-artist.html?id=${artist}"> <h4 class= "headtrack">${autorTrack}</h4></a>
           <iframe title="deezer-widget" src="${linkTrack}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
            </div>
            </div>
            </a>
          `
        })
        .catch(function (error) {
            console.log(error)
        })
 //Defino array para guardar lista de favoritos
let listaFavoritos= []
//Recupero datos del storage
//set item agrega una propiedad y sus valores a obj literal
//para ver si habia algo
let recuperoStorage= localStorage.getItem('favoritos');
console.log(recuperoStorage)
//en el caso de que haya elementos en storage. Osea no sea nulo,
if (recuperoStorage != null){
    //transformo el string en array
    //parse transforma a json en obj literal
    listaFavoritos=JSON.parse(recuperoStorage)//Parse toma cadena de texto en JSON y lo transforma en objeto literal
}
// Me fijo si el id de la canción esta en la lista
//si esta cambio el texto para sacar
//includes servia para ver si está o no
if (listaFavoritos.includes(id)){
document.querySelector(".agregarFav").innerHTML=` <a class="divplayer" id="agregarFav"><button>Agregar a mi playlist</button><i class="fas fa-plus"></i></a>`
}
//Agregar a favs
let agregarAFav= document.querySelector('.agregarFav');
agregarAFav.addEventListener('click', function(e){
    e.preventDefault();
    //si esta en la lista
    if (listaFavoritos.includes(id)){
        //lo localizo en array INDEXOF-->LOCALIZAR
        let sacarID= listaFavoritos.indexOf(id);
        //y lo saco SPLICE-->SACAR
        listaFavoritos.splice(sacarID, 1);
        //Si ya lo saque --> cambio el texto de link
        document.querySelector(".agregarFav").innerHTML =`
        <a class="divplayer" id="agregarFav"><button>Agregar a mi playlist</button><i class="fas fa-plus"></i></a>`
        console.log(listaFavoritos)
    }
    //si no esta en mi lista
   else {
        //se agrega la canción actual
        listaFavoritos.push(id);
        //si ya lo agregué-->cambio texto
        document.querySelector(".agregarFav").innerHTML=`
        <a class="divplayer" id="agregarFav"><button>Quitar de mi Playlist</button><i class="fas fa-plus"></i></a>`;
    }
    //guardo el array actualizado como string
    let trackAStorage= JSON.stringify(listaFavoritos);
    //Guardo el string en local storage
    localStorage.setItem('favoritos', trackAStorage)
    //chequeo*/
    console.log(localStorage)
})
});
