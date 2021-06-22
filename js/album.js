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

let query = location.search;
let queryObject = new URLSearchParams(query);
let id = queryObject.get("id");
// id=238277122
let urlAlbum1 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`;
// detalle album
fetch(urlAlbum1)
    .then(function(response){
        return response.json();
    }).then(function(data){     
       //Aca muestro código
     // console.log(data.cover_medium);
         let contenidoDetalle = document.querySelector(".listaAlbum")
         let arrayGeneros = data.genres.data
         console.log(arrayGeneros)
        let informacionAlbum = ""
        contenidoDetalle.innerHTML += `<article>
         <img class="fotoAlbum" src="${data.cover_medium}" alt="">
         <p class="nombreDiscoA">${data.title}</p>
         <p class="nombreArtistaA">${data.artist.name}</p>
         <p class="nombreGenero"><a href="detail-genres.html?id=${arrayGeneros[0].id}">${arrayGeneros[0].name}</a></p>
         <p class="fechaPublicacion">${data.release_date}</p>
     </article>`

    // contenidoDetalle.innerHTML += informacionAlbum

        }).catch(function(error){
        console.log(error);
    })
/*   
let urlAlbum2 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`
 
fetch(urlAlbum2)
    .then( function(response){
        return response.json();
    })
    .then(function(data){
       // console.log(data)
         let album = data.track;
         let contenidoDetalle2 = document.querySelector(".listaAlbum");
         let informacionAlbum2 = ""
         console.log(data)
         for(let i=0; i<album.length; i++){
             informacionAlbum2.innerHTML += `<ul>
             <li> ${data[i].data.title}</li>
             </ul>
             `
         }
         contenidoDetalle2.innerHTML += informacionAlbum2
        }).catch(function(error){
            console.log(error);

    })
*/
    