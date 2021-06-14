let urlTracks="https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556"
fetch(urlTracks)
    .then(function(response){
        return response.json();
    })
    .then( function(data){
        //Aca va mi codigo//
        
        //capturamos los destinos//
        let avatar = document.querySelector(".avatar")
        let nombreCancion = document.querySelector (".nombrecancion");
        let nombreArtista = document.querySelector (".nombreartsita");
        let nombreDisco = document.querySelector (".nombredisco");

        
    })
    .catch(function (error){
        console.log (error);
    })
