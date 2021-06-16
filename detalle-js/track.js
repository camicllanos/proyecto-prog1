let urlTracks="https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556"
fetch(urlTracks)
    .then(function(response){
        return response.json();
    })
    .then( function(data){
        //Aca va mi codigo//
        let tracks = data.album;
        //capturamos los destinos//

        let trackAvatar = document.querySelector(".trackAvatar");
        let urlAvatar = data.album.cover_medium;
        let nombreCancion = document.querySelector(".nombreCancion");
        let nombreArtista = document.querySelector(".nombreArtista");
        let nombreDisco = document.querySelector(".nombreDisco");
        console.log (data);

        trackAvatar.src =  urlAvatar; 
        nombreCancion.innerHTML += data.title;
        nombreArtista.innerHTML += data.artist.name;
        nombreDisco.innerHTML += data.album.title;
             
    })
    .catch(function (error){
        console.log (error);
    })
