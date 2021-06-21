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