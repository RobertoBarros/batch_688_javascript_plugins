const insertMovies = (data) => {
  const moviesList = document.getElementById('movies-list');

  moviesList.innerHTML = '';

  const movies = data.Search;

  movies.forEach((movie)=>{
    const item = `<li class='list-inline-item'><img src='${movie.Poster}' height='150'></li>`;

    moviesList.insertAdjacentHTML('beforeend', item);
  });
};

const fetchMovies = (query) => {
  const url = `http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`

  fetch(url)
    .then(response => response.json())
    .then(insertMovies);
};

const updateResultList = (event) => {
  event.preventDefault();

  const keyword = document.getElementById('keyword').value;
  fetchMovies(keyword);
};

export { fetchMovies, updateResultList };
