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
    let albumes = document.querySelector("#albumes-artista");
    //FETCH
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`)
      .then(function (response) {
        console.log(response);
        return response.json()
      })
      .then(function (datos) {
        //DECLARO NUEVAS VARIABLES
        let fotoArtist = data.picture_medium;
        let nombreArtist = data.name;
        artista.innerHTML += `<img class="fotoArtist" src="${data.picture_medium}" alt="">
        <p class="nombreArtist">${data.name}</p>                               
        `
      }
      )
      .catch(function (error) {
        console.log(error);
      })
    //SEGUNDO FETCH PARA BUSCAR ALBUMES POR ARTISTA
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${busqueda}/albums`)
      .then(function (response) {
        console.log(response);
        return response.json()
      })
      .then(function (datos) {
        console.log(datos);
        //PREPARO BUCLE
        for (let i = 0; i<5; i++) {
          let albumTitulo = datos.data[i].title;
          let albumFoto = datos.data[i].cover;
          albumes.innerHTML += `
        <article class="track">
        <a href="./playlist.html" class="corazon"></a>
        <a href="./detail-album.html"><img src="${albumFoto}" alt="${albumTitulo}"></a>
        <div>
        <a href="detail-track.html"><h2>${albumTitulo}</h2></a>
        </div>
        <a href="detail-track.html" class="punto"><i class="fas fa-ellipsis-h"></i></a>
        </article>
        `
        }
      })
      .catch(function (error) {
        console.log(error);
  })