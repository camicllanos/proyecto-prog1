alert ("hola");
let urlAlbum= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127"
fetch(urlAlbum)
    .then(function(response){
        return response.json();
    })
    .then( function(data){
        //Aca va mi codigo//
        
        //capturamos los destinos//
        let avatarAlbum = document.querySelector(".avatarAlbum")
        let nombreDiscoA = document.querySelector (".nombreDiscoA");
        let nombreArtistaA = document.querySelector (".nombreArtistaA");
        let nombreGenero = document.querySelector (".nombreGenero");
        let listaCancionesA = document.querySelector (".listaCancionesA")
        console.log (data)
        
    })
    .catch(function (error){
        console.log (error);
    })