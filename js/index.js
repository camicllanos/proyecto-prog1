

// Header y Footer

// manejo del input de búsqueda
let formBusqueda = document.getElementById("formBusqueda")
let inputBusqueda = document.getElementById("inputBusqueda")

formBusqueda.addEventListener('submit', function (event) {

    event.preventDefault()
    let busqueda = inputBusqueda.value.trim()
    //                 operador O R
    if (busqueda < 3 || busqueda === '') {
        alert("Ingreso inválido")
    } else {


        // redirecciona a la página de search mediante query string 
        window.location = `./search-results.html?search=${busqueda}`

    }


})

// Fin Header y Footer

// Home del Sitio 

let favoritos = []

let favEnLS = JSON.parse(localStorage.getItem('favoritos'))
// verificar que haya favoritos cargados y mantenerlos
if (favEnLS) {
    favoritos = favEnLS
}


llamarIndexAPI()

function llamarIndexAPI() {

    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/`

    fetch(url)
        .then(function (response) { return response.json() })
        .then(function (respuesta) {
            // acá escribo todo lo que quiero hacer con la respuesta

            // desestructuro la respuesta en distintos arreglos
            let albumsApi = respuesta.albums.data
            let artistasApi = respuesta.artists.data
            let tracksApi = respuesta.tracks.data

            // resultados en DOM
            // selectores de las UL
            let listaAlbums = document.querySelector('#lista-albums')
            let listaArtistas = document.querySelector('#lista-artistas')
            let listaTracks = document.querySelector('#lista-tracks')

            // for para crear la lista de Albums

            for (let i = 0; i < albumsApi.length; i++) {
                listaAlbums.innerHTML += `
                    <li class="caja album">
                        <a href="detail-album.html?id=${albumsApi[i].id}"><img src=${albumsApi[i].cover_big} alt=${albumsApi[i].title}></a>
                        <p>${albumsApi[i].title}</p>
                    </li>
                    `
            }

            // for para crear la lista de Artistas

            for (let i = 0; i < artistasApi.length; i++) {
                listaArtistas.innerHTML += `
                    <li class="caja artista">
                        <a href="detail-artist.html?id=${artistasApi[i].id}"><img src=${artistasApi[i].picture_big} alt=${artistasApi[i].name}></a>
                        <p>${artistasApi[i].name}</p>
                    </li>
                    `
            }

            // for para crear la lista de Canciones

            for (let i = 0; i < tracksApi.length; i++) {
                listaTracks.innerHTML += `
                    <li class="caja cancion" id="${tracksApi[i].id}">
                        <a href="detail-track.html?id=${tracksApi[i].id}"><img src=${tracksApi[i].album.cover_big} alt=${tracksApi[i].title}></a>
                        <p>${tracksApi[i].title}</p>
                        <p>${tracksApi[i].artist.name}</p>
                        <button class="btn-favoritos">Agregar a favoritos</button>
                    </li>
                    `
            }

            // asignar evento a botones de favoritos

            let botonesFavoritos = document.querySelectorAll('.btn-favoritos')
            // rescata img y titulo y guarda en local storage
            for (let i = 0; i < botonesFavoritos.length; i++) {
                botonesFavoritos[i].addEventListener('click', function (event) {
                    let img = event.target.parentElement.children[0].children[0].src
                    let titulo = event.target.parentElement.children[1].innerText
                    let artist = event.target.parentElement.children[2].innerText
                    let id = event.target.parentElement.id

                    favoritos.push({
                        id: id,
                        imagen: img,
                        title: titulo,
                        artist: artist
                    }
                    )

                    localStorage.setItem('favoritos', JSON.stringify(favoritos))
                })
            }

        })
        .catch(function (error) {
            console.log(error);
        })
}


