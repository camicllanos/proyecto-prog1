

const formBusqueda = document.getElementById("formBusqueda")
const inputBusqueda = document.getElementById("inputBusqueda")


formBusqueda.addEventListener('submit', function (event) {

    event.preventDefault()
    const busqueda = inputBusqueda.value.trim()
    
 // Aca estamos armando las condiciones para el buscador 

    if (busqueda.length < 3 || busqueda === '') {
        alert("Ingreseo inválido")

    } else {

        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${busqueda}`)
            .then( function (response) { 
                return response.json() 
            } )
            .then( function (respuesta) {
    
                // acá escribo todo lo que quiero hacer con la respuesta
                console.log(respuesta.data[0])
    
                // resultados en DOM
                const contenedorBusquedas = document.getElementById('resultadosBusqueda')
                
                for (let i = 0; i < 5; i++) {
                    
                    contenedorBusquedas.innerHTML += `
                        <li class="caja">
                            <a href="detail-album.html"><i><img src=${respuesta.data[i].album.cover_big} alt=${respuesta.data[i].title}></i></a>
                            <p>${respuesta.data[i].title}</p>
                        </li>
                    `


                }



            })

    }
  
})


let buscador = document.querySelector(`.buscador1`);
let mensaje = " ";

if (buscador != null){
    mensaje = "El campo esta vacio"
} else if (buscador.length < 3){
    mensaje = "Al menos 3 caracteres"
} else if(buscador);
