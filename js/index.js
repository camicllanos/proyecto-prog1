

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

// Home del Sitio 

let favoritos = []

let favEnLS = JSON.parse(localStorage.getItem('favoritos'))
// verificar que haya favoritos cargados y mantenerlos
if (favEnLS) {
    favoritos = favEnLS
}


llamarIndexAPI()

function llamarIndexAPI() {
    // activar el loader
    let loader = document.getElementById('loader-container')
    loader.style.display = "flex"
    let proxy = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/`

    fetch(proxy)
        .then(function (response) { return response.json() })
        .then(function (respuesta) {
            // acá escribo todo lo que quiero hacer con la respuesta
            console.log(respuesta)

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
            listaAlbums.innerHTML = ''
            for (let i = 0; i < albumsApi.length; i++) {
                listaAlbums.innerHTML += `
                    <li class="caja album">
                        <a href="detail-album.html"><i><img src=${albumsApi[i].cover_big} alt=${albumsApi[i].title}></i></a>
                        <p>${albumsApi[i].title}</p>
                    </li>
                    `
            }

            // for para crear la lista de Artistas
            listaArtistas.innerHTML = ''
            for (let i = 0; i < artistasApi.length; i++) {
                listaArtistas.innerHTML += `
                    <li class="caja artista">
                        <a href="detail-album.html"><i><img src=${artistasApi[i].cover_big} alt=${artistasApi[i].title}></i></a>
                        <p>${artistasApi[i].title}</p>
                    </li>
                    `
            }

            // for para crear la lista de Canciones
            listaTracks.innerHTML = ''
            for (let i = 0; i < tracksApi.length; i++) {
                listaTracks.innerHTML += `
                    <li class="caja cancion">
                        <a href="detail-album.html"><i><img src=${tracksApi[i].cover_big} alt=${tracksApi[i].title}></i></a>
                        <p>${tracksApi[i].title}</p>
                        <button class="btn-favoritos">Agregar a favoritos</button>
                    </li>
                    `
            }


            // seleccionamos todos los LI y les asignamos evento para redireccionarse a la pág correspondiente
            // manda el título del elemento al localStorage para cargarlo en otra página.
            let albums = document.querySelectorAll('.album')

            for (let i = 0; i < albums.length; i++) {
                albums[i].addEventListener('click', function () {
                    let titulo = albums[i].children[1].innerText
                    localStorage.setItem('albumAPI', titulo)
                })
            }

            let artistas = document.querySelectorAll('.artista')

            for (let i = 0; i < artistas.length; i++) {
                artistas[i].addEventListener('click', function () {
                    let artista = artistas[i].children[1].innerText
                    localStorage.setItem('artistaAPI', artista)
                })
            }

            let canciones = document.querySelectorAll('.cancion')

            for (let i = 0; i < canciones.length; i++) {
                canciones[i].addEventListener('click', function () {
                    let cancion = canciones[i].children[1].innerText
                    localStorage.setItem('cancionAPI', cancion)
                })
            }

            // asignar evento a botones de favoritos

            let botonesFavoritos = document.querySelectorAll('.btn-favoritos')
            // rescata img y titulo y guarda en local storage
            for (let i = 0; i < botonesFavoritos.length; i++) {
                botonesFavoritos[i].addEventListener('click', function (event) {
                    let img = event.target.parentElement.children[0].src
                    let titulo = event.target.parentElement.children[1].innerText

                    favoritos.push({ imagen: img, title: titulo })

                    localStorage.setItem('favoritos', JSON.stringify(favoritos))
                })
            }
            // desactivar el loader
            loader.style.display = "none"
        })

}


