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



// get favoritos del LocalStorage 

let favoritos = JSON.parse( localStorage.getItem('favoritos') ) 

console.log(favoritos)

let listaFav = document.querySelector('#lista-favoritos')

listaFav.innerHTML = ''
for (let i = 0; i < favoritos.length; i++) {
    listaFav.innerHTML += `
            <li class="corazon">
                <img src=${favoritos[i].imagen} alt="${favoritos[i].title}">
                <p>${favoritos[i].title}</p>
            </li>
            `
}