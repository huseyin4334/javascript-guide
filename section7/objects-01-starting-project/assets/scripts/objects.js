const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const movieListArea = document.getElementById("movie-list");
const filterInput = document.getElementById("filter-title");

const movies = [];

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const name = document.getElementById("extra-name").value;
    const value = document.getElementById("extra-value").value;

    if (!title.trim() || !name.trim() || !value.trim()) {
        return;
    }

    const newMoive = {
        info: {
            title: title,
            [name]: value,
        },
        id: parseInt(Math.random() * 10000)
    };

    movies.push(newMoive);
    renderMovies();

    console.log(movies);
}

const renderMovies = (filter = '') => {
    if (movies.length === 0) {
        movieListArea.classList.remove("visible");
        return;
    } else {
        movieListArea.classList.add("visible");
    }

    movieListArea.innerHTML = '';

    const filteredMovies = !filter ? 
    movies : 
    movies.filter((movie) => {
        return movie.info.title.includes(filter);
    });

    filteredMovies.forEach((movie) => {
        const movieElement = document.createElement("li");

        const { info } = movie;

        let text = info.title + " - ";
        for (const key in info) {
            if (key !== 'title') {
                text = text + `${key} : ${info[key]} `
            }
        }
        movieElement.textContent =  text;
        movieListArea.appendChild(movieElement);
    });
}

addMovieBtn.addEventListener("click", addMovieHandler);


const searchHandler = () => {
    const search = filterInput.value;

    renderMovies(search);
}

searchBtn.addEventListener('click', searchHandler);