const form = document.querySelector('form')
const genre = document.getElementsByName('genres')
const year = document.getElementsByName('year')
let genreInput = document.querySelector('#genre')
const yearInput = document.querySelector('#yearDrop')
const keywordInput = document.querySelector('#keyword')
const resultsSection = document.querySelector('#results')
const watchLaterSection = document.querySelector('#watch-later')
const apikey = "api_key=e6c80bcc6c22dfddc5cc43795406ed56"
const genreURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=e6c80bcc6c22dfddc5cc43795406ed56&language=en-US"
const baseURL = `https://api.themoviedb.org/3/discover/movie?${apikey}`
const imgURL = `https://image.tmdb.org/t/p/w500`
let genre_Input = "&with_genres="
let searchURL = ""
let year_Input = "&year="
let keyword_Input = "&with_keywords="

form.addEventListener('submit', formSubmitted)

// genre.addEventListener('change', genreChanged);
// year.addEventListener('change', yearChanged);

// function genreChanged(event) {
//   genreInput.value 
// }

// function yearChanged(event) {

// }


function formSubmitted(event){
  event.preventDefault()
  console.log(genreInput.value);
  // console.log(event)
  searchURL = baseURL + `${genre_Input}${genreInput.value}${year_Input}${yearInput.value}${keyword_Input}${keywordInput.value}`
  console.log(searchURL);
  getMovie()

    // fetch(genreURL)
    //   .then(response => response.json())
    //   .then(data => getName(data["genres"])) 
}

// function getName(result){
//   console.log(genreInput.value);
//   const searchGenre = result.find(genre => {
//     return genre.name === genreInput.value
//   })
//     year_Input = `${year_Input}${yearInput.value}`
//     genre_Input = `${genre_Input}${searchGenre.id}`
//   searchURL = baseURL + year_Input + genre_Input
//   console.log(searchURL);
//   getMovie()
// }

  function renderInfo(data){
    let randomRes = data[0];
    randomRes = data[Math.floor (Math.random() * data.length)]
    resultsSection.innerHTML = ''; 
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
      watchLaterSection.innerHTML = watchLaterSection.innerHTML +  `<div class="card" style='margin-left: 2.5rem;'>
      <img src="${imgURL}${randomRes["poster_path"]}" class="card-img-top" alt="${randomRes["title"]}">
    </div>`
    })
  }

  function getMovie(){
    fetch(searchURL)
      .then(result => result.json())
      .then(data => renderInfo(data["results"]))
  }


