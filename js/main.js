async function getData (url){
    const data = await fetch(url)
    let films = await data.json()
    return films
}
const apiStarWars = 'https://swapi.co/api/films/4/'
const filmsP = getData(apiStarWars)
const lienzo = document.querySelector ('#pinta')

async function pintame(lienzo,films ) {
    films = await films
    lienzo = await films
    lienzo.innerHTML = films.name
    
} 
 pintame ( lienzo, filmsP)