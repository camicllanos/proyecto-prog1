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
       window.location = `./search-results.html?search=${busqueda}`

    }

})

// Fin Header y Footer

//Detalle Album//
let query = location.search;
let queryObject = new URLSearchParams(query);
let id = queryObject.get("id");
let urlAlbum1 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`;

fetch(urlAlbum1)
    .then(function(response){
        return response.json();
    }).then(function(data){     
        //Aca muestro código
         console.log(data);
         let contenidoDetalle = document.querySelector(".listaAlbum");
         let arrayGeneros = data.genres.data;
        //  console.log(arrayGeneros)
         contenidoDetalle.innerHTML += `<article>
                <img class="fotoAlbum" src="${data.cover_medium}" alt=""> 
                <p class="nombreDiscoA">${data.title}</p>
                <p class="nombreArtistaA">${data.artist.name}</p>
                <p class="nombreGenero"><a href="detail-genres.html?id=${arrayGeneros[0].id}">${arrayGeneros[0].name}</a></p>
                <p class="fechaPublicacion">${data.release_date}</p>
             </article>`
         let album = data.tracks.data;
         let listaCanciones = document.querySelector(".listaAlbum");
         let informacionCancion = ""
            for(let i=0; i<album.length; i++){
             informacionCancion += `
                <li><a href="./detail-track.html?id=${album[i].id}"> ${album[i].title}<a></li>         `
            }
         listaCanciones.innerHTML += informacionCancion
        })
    .catch(function(error){
     console.log(error);
    })
  

    