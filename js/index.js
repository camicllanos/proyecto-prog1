
// Header y Footer

let formBusqueda = document.getElementById("formBusqueda")
let inputBusqueda = document.getElementById("inputBusqueda")


formBusqueda.addEventListener('submit', function (event) {

    event.preventDefault()
    let busqueda = inputBusqueda.value.trim()
    
 // Aca estamos armando las condiciones para el buscador 

    if (busqueda.length < 3 || busqueda === '') {
        alert("Ingreseo inválido")

    } else {

        let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${busqueda}`


        fetch(url)
            .then( function (response) { 
                return response.json() 
            } )
            .then( function (respuesta) {
    
                // acá escribo todo lo que quiero hacer con la respuesta
                console.log(respuesta.data[0])



            })

    }
  
})


let buscador = document.querySelector(`.buscador1`);
let mensaje = " ";

if (buscador != null){
    mensaje = "El campo esta vacio"
} else if (buscador.length < 3){
    mensaje = "Al menos 3 caracteres"
} else if(buscador);

//TRACKS//
let urlTracks = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks`

fetch (urlTracks)
    .then(function(response){
        return response.json();
    })
    .then( function(data){
        //Aca va mi codigo//
        let arrayTracks = data.data;
        let topTracks = document.querySelector(".listaBestTrack");
        let info = "";
        console.log(data);

        for(let i=0; i<5; i++)
            info += ` <article>
            <a href="detail-track.html?id=${arrayTracks[i].id}">
            <img class= "trackAvatar" src="${arrayTracks[i].album.cover_medium}" alt="Cancion">
            <h3><a class="nombreArtista" href="detail-track.html?id=${arrayTracks[i].artist.id}">${arrayTracks[i].artist.name}</a></h3>
            <h4><a href="detail-track.html?id=${arrayTracks[i].id}">${arrayTracks[i].title}</a></h4>
            </article>`

            topTracks.innerHTML += info; 
        
    })
    .catch(function (error){
        console.log (error);
})
//ALBUM

