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


let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre`;

fetch (url)
    .then (function (response){
        return response.json();
    })
    .then (function (data){
        console.log(data);
        let arrayInfo = data.data
        let lista = document.querySelector (".listas")

        for (let i=1; i<5; i++){
            lista.innerHTML += `<li class="genero">
                                    <img src="${arrayInfo[i].picture}">
                                    <p> ${arrayInfo[i].name}</p>
                                    <a href="detail-genres.html?id=${arrayInfo[i].id}">
                                    Ver más</a>
                                </li>`
        }
    })
    .catch (function (error){
        console.log(error);
    })