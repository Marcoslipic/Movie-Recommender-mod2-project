const form = document.querySelector('form')
const input = document.querySelector('#searchTerm')
const resultsSection = document.querySelector('#results')
const watchLaterSection = document.querySelector('#watch-later')
const apikey = "api_key=e6c80bcc6c22dfddc5cc43795406ed56"
const genreURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=e6c80bcc6c22dfddc5cc43795406ed56&language=en-US"
const baseURL = `https://api.themoviedb.org/3/discover/movie?${apikey}`
const imgURL = `https://image.tmdb.org/t/p/w500`
let genreInput = "&with_genres="
let searchURL = ""

form.addEventListener('submit', formSubmitted)

function formSubmitted(event){
  event.preventDefault()
  const searchTerm = input.value
  fetch(genreURL)
    .then(response => response.json())
    .then(data => getName(data["genres"]))  
}

function getName(result){
  const searchGenre = result.find(genre => {
    return genre.name === input.value
  })
  genreInput = `${genreInput}${searchGenre.id}`
  searchURL = baseURL + genreInput
  getMovie()
}

  function renderInfo(data){
    const randomRes = data[Math.floor (Math.random() * data.length)]
    resultsSection.innerHTML =  `
      <div class="card">
        <img src="${imgURL}${randomRes["poster_path"]}" class="card-img-top" alt="${randomRes["title"]}"
        style="width: 33%;margin-left: 33%">
        <div class="card-body">
          <h5 class="card-title">${randomRes["title"]}</h5>
          <p class="card-text">${randomRes["overview"]}</p>
          <form>
            <input type="button" onclick="getMovie()" value="Next" style="margin-left: 45%"/>
          </form>
          <button data-id="${randomRes['title']} type="button" class="btn btn-danger watch-later-button"
          style="margin-left: 41.3%">Watch Later</button>
        </div>
      </div>
    `
    const watchLaterButton = document.querySelector('.watch-later-button');
    watchLaterButton.addEventListener('click', (event) => {
      const { id } = watchLaterButton.dataset;
      watchLaterSection.innerHTML = watchLaterSection.innerHTML +  `<div class="card">
      <img src="${imgURL}${randomRes["poster_path"]}" class="card-img-top" alt="${randomRes["title"]}">
    </div>`
    })
  }

  function getMovie(){
    fetch(searchURL)
      .then(result => result.json())
      .then(data => renderInfo(data["results"]))
  }


