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

//Detalle Artista//
    //QUERYSTRING
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);//de obj en js
    let id = queryStringObj.get('id');
    //DECLARO VARIABLES
    let artista = document.querySelector(".listaArtist");
    let albumes = document.querySelector(".lista5Albums");
    //FETCH
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`)
      .then(function (response) {
        console.log(response);
        return response.json()
      })
      .then(function (data) {
        artista.innerHTML += `<img class="fotoArtist" src="${data.picture_medium}" alt="">
          <p class="nombreArtist">${data.name}</p>                               
          `
      })
      .catch(function (error) {
        console.log(error);
      })
    //SEGUNDO FETCH PARA BUSCAR ALBUMS POR ARTISTA
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`)
      .then(function (response) {
        console.log(response);
        return response.json()
      })
      .then(function (data) {
        console.log(data);
        //PREPARO BUCLE
        for (let i = 0; i<5; i++) {
          albumes.innerHTML += `
            <ul class=".lista5Albums">
            <a href="./detail-album.html?id=${data.data[i].id}"><img src="${data.data[i].cover_medium}" alt="${data.data[i].title}"></a>
            `
        }
      })
      .catch(function (error) {
        console.log(error);
  })
 