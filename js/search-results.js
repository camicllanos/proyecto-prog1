
let query = location.search
let queryStringObj = new URLSearchParams(query)
let busqueda = queryStringObj.get('search')

// si hay algo en LS, hago el llamado a la api para mostrar resultados
if (busqueda !== null) {
    llamarAPI(busqueda)

}

// Header y Footer --> manejo del input de búsqueda

let formBusqueda = document.getElementById("formBusqueda")
let inputBusqueda = document.getElementById("inputBusqueda")

formBusqueda.addEventListener('submit', function (event) {

    event.preventDefault()
    let busqueda = inputBusqueda.value.trim()
    //                 operador OR
    if (busqueda.length < 3 || busqueda === '') {
        alert("Ingreso inválido")
    } else {
        llamarAPI(busqueda)

    }

})



// funcion para llamar a la API y mostrar resultados
function llamarAPI(busqueda) {
    // activar el loader
    let loader = document.getElementById('loader-container')
    loader.style.display = "flex"

    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${busqueda}`

    fetch(url)
        .then(function (response) { return response.json() })
        .then(function (respuesta) {
            // acá escribo todo lo que quiero hacer con la respuesta
            console.log(respuesta.data[0])
            // resultados en DOM

            let contenedorBusquedas = document.getElementById('resultadosBusqueda')
            let tituloBusquedas = document.getElementById('tituloResultado')

            if (respuesta.data.length > 0) {

                tituloBusquedas.innerHTML = `Results for ${busqueda}`

                // vacío el contenedor antes de agregar nuevas búsquedas
                // para que no se acumulen
                contenedorBusquedas.innerHTML = ''

                // crear la lista de canciones con los resultados de la api
                for (let i = 0; i < 10; i++) {
                    contenedorBusquedas.innerHTML += `
                            <li class="caja cancion">
                                <a href="detail-track.html?id=${respuesta.data[i].id}"><i><img src=${respuesta.data[i].album.cover_big} alt=${respuesta.data[i].title}></i></a>
                                <p>${respuesta.data[i].title}</p>
                            </li>
                        `
                }


            } else {
                contenedorBusquedas.innerHTML = ''
                tituloBusquedas.innerHTML = `No Results ${busqueda}`
            }


            // desactivar el loader
            loader.style.display = "none"
        })
        .catch(function (error) {
            console.log(error);
        })
}
