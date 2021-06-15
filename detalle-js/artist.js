let urlArtist = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27"
fetch(urlArtist)
    .then(function(response){
        return response.json();
    })
    .then( function(data){
        //Aca va mi codigo//
        
        //capturamos los destinos//
       console.log (data);
        
    })
    .catch(function (error){
        console.log (error);
    })
