let query = location.search;
let queryObject = new URLSearchParams(query);
let id = queryObject.get("id");
let urlAlbum1 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`;
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
let urlAlbum2 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`
fetch(urlAlbum2)
    .then( function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
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

    // window.addEventListener("load", function(){
    //     console.log(window);
    //     console.log(window.location.search);
    //   let info= document.querySelector("#datosPortada ");
    //   let canciones= document.querySelector(".canciones");
    //   let img=document.querySelector(".banner img");
    //   let h1=document.querySelector("h1")
    //   let imgArtista= document.querySelector(".info-avicii figure img")
    //   let h5=document.querySelector("h5")
    //   let h2= document.querySelector("h2")
    //   let time=document.querySelector("h6 time")
    //   let h6=document.querySelector("h6")
    //   let h4= document.querySelector("h4")
    //   let corazon= document.querySelector(".corazon")
    //   let imagenChicaa= document.querySelector(".track img")
    //   let div= document.querySelector(".track div a")

    //   let queryString= location.search;
    //   let queryStringObj= new URLSearchParams(queryString);
    //   let busqueda= queryStringObj.get('id');
    //   fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${busqueda}`)
    //   .then(function(response){
    //     console.log(response)
    //   return response.json()
    //   })
    //   .then(function(datos){
    //   let nombreAlbum= datos.title
    //   let album= datos.tracks.data
    //   let artistaAlbum= datos.artist.name
    //   let imagenAlbum=datos.cover_medium
    //   let imagenChica= datos.cover_small
    //   let imagenArtista= datos.artist.picture_small
    //   let releaseDate= datos.release_date
    //   let genero= datos.genres.data[0].name
    //   img.src=imagenAlbum
    //   img.alt=nombreAlbum
    //   h1.innerText=nombreAlbum
    //   imgArtista.src=imagenArtista
    //   imgArtista.alt=artistaAlbum
    //   h5.innerText=artistaAlbum
    //   h6.innerText=releaseDate
    //   h4.innerText=genero
    //   for (let i=0; i<album.length; i++){
    //    /* let track=album[i].id
    //   imagenChicaa.src=imagenChica
    //   imagenChicaa.alt=nombreAlbum
    //   h2.innerText=nombreCancion
    //   div.href.innerHTML=`detail-track.html?id=${track}`*/
    //   let nombreCancion= album[i].title
    //   let track=album[i].id
    //      canciones.innerHTML= canciones.innerHTML +
    //     ` <article class="track">
    //     <a href="./playlist.html" class="corazon"><i class="far fa-heart"></i></a>
    //     <a href="./detail-track.html?id="><img src= "${imagenChica}" alt="${nombreAlbum}"></a>
    //     <div>
    //        <a href="detail-track.html?id=${track}"><h2>${nombreCancion}</h2></a>
    //     </div>
    //     <a href="detail-track.html" class="punto"><i class="fas fa-ellipsis-h"></i></a>
    //     </article>`
    //   }
    //   })
    //    .catch(function (error) {
    //   console.log(error)
    //   })
    //   fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${busqueda}`)
    //   .then(function(response){
    //   console.log(response)
    //   return response.json
    //   })
    //   let listaFavoritos= []
    //   //Recuperso datos del storage
    //   //set item agrega una propiedad y sus valores a obj literal
    //   //para ver si habia algo
    //   let recuperoStorage= localStorage.getItem('favoritos');
    //   console.log(recuperoStorage)
    //   //en el caso de que haya elementos en storage. Osea no sea nulo,
    //   if (recuperoStorage != null){
    //       //transformo el string en array
    //       //parse transforma a json en obj literal
    //       listaFavoritos=JSON.parse(recuperoStorage)
    //   }
    //   // Me fijo si el id de la canción esta en la lista
    //   //si esta cambio el texto para sacar
    //   //includes servia para ver si está o no
    //   if (listaFavoritos.includes(busqueda)){
    //   document.querySelector("corazon").innerHTML=`  <a  class="corazon"><i class="far fa-heart"></i></a> `
    //   }
      
    //   })
      