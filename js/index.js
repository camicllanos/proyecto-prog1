
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


<<<<<<< HEAD
=======
let buscador = document.querySelector(`.buscador1`);
let mensaje = " ";

if (buscador != null){
    mensaje = "El campo esta vacio"
} else if (buscador.length < 3){
    mensaje = "Al menos 3 caracteres"
} else if(buscador);
>>>>>>> 5af23755eef0a57ef22b31a3419847880490b5bc
