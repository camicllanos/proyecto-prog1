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

//Detalle Tracks//
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let id = queryStringObj.get('id'); 

    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (datos) {
            console.log(datos);
            let track = document.querySelector ("#listaBestTrack");
            let nombreTrack = datos.title;
            let autorTrack = datos.artist.name;
            let imagenTrack = datos.artist.picture_medium;
            let albumTrack = datos.album.title;
            let artist= datos.artist.id;
            track.innerHTML +=
                `<div class= "divtrack"><div class= "divtrackhijo"><img class= "imgtrack" src="${imagenTrack}">
                <h1 class= "headtrack">${nombreTrack}<h1>
                <h3 class= "headtrack">${albumTrack}</h3>
                <a href="./detail-artist.html?id=${artist}"> <h4 class= "headtrack">${autorTrack}</h4></a>
                <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
                `
        })
        .catch(function (error) {
            console.log(error);
        })

