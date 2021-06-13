let urlTracks="https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556"
fetch(urlTracks)
    .then(function(response){
        return response.json();
    })
    .then( function(data){
        console.log(data)
        let listabesttrack = document.querySelector(".listabesttrack");
    })
    .catch(function (error){
        console.log (error);
    })
