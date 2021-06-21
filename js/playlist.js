// get favoritos del LocalStorage 

let favoritos = JSON.parse( localStorage.getItem('favoritos') ) 

console.log(favoritos)

let listaFav = document.querySelector('#lista-favoritos')

listaFav.innerHTML = ''
for (let i = 0; i < favoritos.length; i++) {
    listaFav.innerHTML += `
            <li class="corazon">
                <img src=${favoritos[i].imagen} alt="${favoritos[i].title}">
                <p>${favoritos[i].title}</p>
            </li>
    `
}