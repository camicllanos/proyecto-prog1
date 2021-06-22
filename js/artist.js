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

// CARGAR PAGINA ANTES DE TODO
// window.addEventListener("load", function () {
//     console.log(window);
//     console.log(location);
//     console.log(location.search);
    //QUERYSTRING
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);//modelo de obj en js
    let id = queryStringObj.get('id');
    //DECLARO PRIMERAS VARIABLES
    let artista = document.querySelector(".listaArtist");
    let albumes = document.querySelector(".lista5Albums");
    //FETCH
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`)
      .then(function (response) {
        console.log(response);
        return response.json()
      })
      .then(function (data) {
        //DECLARO NUEVAS VARIABLES
        artista.innerHTML += `<img class="fotoArtist" src="${data.picture_medium}" alt="">
        <p class="nombreArtist">${data.name}</p>                               
        `
      }
      )
      .catch(function (error) {
        console.log(error);
      })
    //SEGUNDO FETCH PARA BUSCAR ALBUMES POR ARTISTA
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
        <a href="./detail-album.html"><img src="${data.data[i].cover_medium}" alt="${data.data[i].title}"></a>
        <div>
        <a href="detail-track.html"><h2>${data.data[i].title}</h2></a>
        </div>
        <a href="detail-track.html" class="punto"><i class="fas fa-ellipsis-h"></i></a>
        </ul>
        `
        }
      })
      .catch(function (error) {
        console.log(error);
  })