let query = location.search;
let queryObject = new URLSearchParams(query);
let id = queryObject.get("id");
let urlAlbum1 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`
// detalle album

fetch(urlAlbum1)
    .then(function(response){
        return response.json();
    })
    .then(function(data){     
       //Aca muestro código
       console.log(data);
        let fotoAlbum = document.querySelector(".fotoAlbum")
        let nombreDiscoA = document.querySelector(".nombreDiscoA")
        let nombreArtistaA = document.querySelector(".nombreArtistaA")
        let nombreGenero = document.querySelector(".nombreGenero")
        let fechaPublicacion = document.querySelector(".fechaPublicacion")
        


     })
    .catch(function(error){
        console.log(error);
    })
let urlAlbum2 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}/tracks`
fetch(urlAlbum2)
    .then( function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)

    })