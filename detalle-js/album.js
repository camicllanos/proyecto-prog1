let query = location.search;
let queryObject = new URLSearchParams(query);
let id = queryObject.get("id");
let urlAlbum1 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/albums/${id}`;
// detalle album

fetch(urlAlbum1)
    .then(function(response){
        return response.json();
    }).then(function(data){     
       //Aca muestro código
       console.log(data);
         let contenidoDetalle = document.querySelector(".listaAlbum")
         let informacionAlbum = ""
         informacionAlbum.innnerHTML = `<article>
         <img class="fotoAlbum" src="${data.cover_medium}" alt="">
         <p class="nombreDiscoA">${data.title}</p>
         <p class="nombreArtistaA">${data.artist.name}</p>
         <p class="nombreGenero">${data.genres.data.name}</p>
         <p class="fechaPublicacion">${data.release_date}</p>
     </article>`

        }).catch(function(error){
        console.log(error);
    })
let urlAlbum2 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}/tracks`
fetch(urlAlbum2)
    .then( function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
         let contenidoDetalle2 = document.querySelector(".listaAlbum")
         let informacionAlbum2 = ""
         for(let i=0; i<album.length; i++){
             informacionAlbum2.innerHTML = `<ul>
             <li> ${data[i].data.title}</li>
             </ul>
             `
         }
         contenidoDetalle2.innerHTML += informacionAlbum2
        }).catch(function(error){
            console.log(error);

    })