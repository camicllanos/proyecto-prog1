
// Header y Footer

let formBusqueda = document.getElementById("formBusqueda")
let inputBusqueda = document.getElementById("inputBusqueda")


formBusqueda.addEventListener('submit', function (event) {

    event.preventDefault()
    let busqueda = inputBusqueda.value.trim()
    
 // Aca estamos armando las condiciones para el buscador 

    if (busqueda.length < 3 || busqueda === '') {
        alert("Ingreseo inválido")

    } else {

        let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${busqueda}`


        fetch(url)
            .then( function (response) { 
                return response.json() 
            } )
            .then( function (respuesta) {
    
                // acá escribo todo lo que quiero hacer con la respuesta
                console.log(respuesta.data[0])



            })

    }
  
})


