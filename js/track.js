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

// window.addEventListener("load", function () {
//     console.log(window.location.search);
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString)
    let id = queryStringObj.get('id');
    // console.log(id)
    //dato en la home, creo qs en la home. 
    let track = document.querySelector(".listaBestTrack")
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (datos) {
            console.log(datos)
            let track = document.querySelector ("#listaBestTrack")
            let nombreTrack = datos.title
            let autorTrack = datos.artist.name
            let imagenTrack = datos.artist.picture_medium
            let albumTrack = datos.album.title
            // let linkTrack = datos.preview
            let artist= datos.artist.id
            track.innerHTML +=
            `<a href="./detail-track.html"><div class= "divtrack"><div class= "divtrackhijo"><img class= "imgtrack" src="${imagenTrack}" alt="${nombreTrack}"></a>
            <a href="./detail-track.html"><h1 class= "headtrack" id="h1track">${nombreTrack}<h1>
            <h3 class= "headtrack" id="h3track">${albumTrack}</h3>
           <a href="./detail-artist.html?id=${artist}"> <h4 class= "headtrack">${autorTrack}</h4></a>
           <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
            </div>
            </div>
            </a>
          `
        })
        .catch(function (error) {
            console.log(error)
        })
// });
