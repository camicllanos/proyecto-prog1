let urlTracks="https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556"
fetch(urlTracks)
    .then(function(response){
        return response.json();
    })
    .then( function(data){
        //Aca va mi codigo//
        let tracks = data.album[0];
        //capturamos los destinos//

        let trackAvatar = document.querySelector(".avatar")
        let nombreCancion = document.querySelector (".nombrecancion");
        let nombreArtista = document.querySelector (".nombreartsita");
        let nombreDisco = document.querySelector (".nombredisco");
        console.log (data);

        trackAvatar.src =  tracks.album.cover_medium; 
        nombreCancion.innerHTML += tracks.title;
             
    })
    .catch(function (error){
        console.log (error);
    })
