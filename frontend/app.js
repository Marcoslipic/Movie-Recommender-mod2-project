const form = document.querySelector('form')
const input = document.querySelector('#searchTerm')
console.log(input)

const apikey = "api_key=apie6c80bcc6c22dfddc5cc43795406ed56"
const genres = "https://api.themoviedb.org/3/genre/movie/list?api_key=e6c80bcc6c22dfddc5cc43795406ed56&language=en-US"

const genreURL = `https://api.themoviedb.org/3/discover/movie?${apikey}`
let genreInput = "&with_genres="
let searchURL = ""

// fetch(genres)
// .then(response => response.json())
// .then(data => getName(data))

function getName(data){
  data["genres"].map(entry => {
    if entry.name == input.value
    

    console.log(data["genres"])
  })
}
    
//   // data["genres"].map(entry =>{
//   //   // if (entry.name == input.value)
      
  




form.addEventListener('submit', formSubmitted)

function formSubmitted(event){
  event.preventDefault()
  const searchTerm = input.value
  console.log(searchTerm)
}


