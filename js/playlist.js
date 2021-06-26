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
        window.location = (`./search-results.html?search=${busqueda}`)

    }
})

// Fin Header y Footer

// get favoritos del LocalStorage 


let favoritos = JSON.parse(localStorage.getItem('favoritos'))

console.log(favoritos)

let listaFav = document.querySelector('#lista-favoritos')

//Vacio la lista por las dudas. 
listaFav.innerHTML = ''

// recorro el arreglo favoritos y llamo a la api por cada id guardado

for (let i = 0; i < favoritos.length; i++) {
    buscarYMostrarFavoritos(favoritos[i])
}

function buscarYMostrarFavoritos(id) {
    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`

    fetch(url)
        .then(function(response) { 
            return response.json();
        })
        .then(function(data) {
            console.log(data)
            
            listaFav.innerHTML += `
                    <li class="corazon">
                        <a href="./detail-track.html?id=${data.id}"><img src=${data.album.cover_big} alt="${data.title}"></a>
                        <p>${data.title}</p>
                        <p>${data.artist.name}</p>
                    </li>
                    `
            
        })
}