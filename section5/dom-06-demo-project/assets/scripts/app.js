const addMovieModalBtn = document.querySelector('header button');
const addMovieModal = document.getElementById('add-modal');

// add movie modal
const addBtn = document.querySelector('#add-modal button.btn--success');
const cancelBtn = document.querySelector('#add-modal button.btn--passive');
const userInputs = document.querySelectorAll('#add-modal input');

// backdrop
const backdrop = document.getElementById('backdrop');

// Message
const entyText = document.getElementById('entry-text');

// Movie list Area
const movieList = document.getElementById('movie-list');

// Delete movie modal
const deleteModal = document.getElementById('delete-modal');
const deleteCancelBtn = deleteModal.querySelector('.btn--passive');

// movie data
const movies = [];

const openDeleteModal = (movieId) => {
    deleteModal.classList.toggle('visible');

    let deleteOkBtn = deleteModal.querySelector('.btn--danger');

    // deleteOkBtn.removeEventListener('click', deleteMovie.bind(null, movieId)); // not work

    // We are doing this because we are adding event listener to the element and when we delete the element, event listener is deleting too.
    deleteOkBtn.replaceWith(deleteOkBtn.cloneNode(true)); // clone the element and replace it
    
    // We need to refresh the deleteOkBtn because we delete the element
    deleteOkBtn = deleteModal.querySelector('.btn--danger');

    // THAT'S VERY IMPORTANT
    // When we click the delete button, we are calling deleteMovie function with movieId parameter.
    // We are using bind method. Bind method is creating a new function in every call.
    // So when we click button function creating new event listener all the time.
    // We are using cloneNode method to solve this problem.
    deleteOkBtn.addEventListener('click', deleteMovie.bind(null, movieId));
    toggleBackdrop();
};

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const openModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};

const closeModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
    clearInputs();
};

const updateUI = () => {
    if (movies.length === 0) {
        entyText.style.display = 'block';
    } else {
        entyText.style.display = 'none';
    }
};

const closeDeleteModal = () => {
    deleteModal.classList.toggle('visible');
    toggleBackdrop();
}

const closeOpenedModal = () => {
    if (addMovieModal.classList.contains('visible')) {
        closeModal();
    } else if (deleteModal.classList.contains('visible')) {
        closeDeleteModal();
    }
};

// Close modal functions
addMovieModalBtn.addEventListener('click', openModal);
cancelBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeOpenedModal);
deleteCancelBtn.addEventListener('click', closeDeleteModal);

// Add movie function
function addMovie() {
    const title = userInputs[0].value;
    const imageUrl = userInputs[1].value;
    const rating = userInputs[2].value;

    if (validForm(title, imageUrl, rating)) {
        addAMovieTheList(title, imageUrl, rating);
    } else {
        alert('Please enter valid values');
    }

    closeModal();
}

function clearInputs() {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
}

function validForm(title, imageUrl, rating) {
    if (
        title.trim() || 
        imageUrl.trim() || 
        rating.trim() || 
        +rating > 0 || 
        +rating < 6
    ) {
        return true;
    }
    return false;
}

function addAMovieTheList(...args) {
    const newMovie = {
        "id": Math.random().toString(),
        "title": args[0],
        "imageUrl": args[1],
        "rating": args[2]
    };
    movies.push(newMovie);
    console.log(movies);

    renderNewMovie(newMovie);
    updateUI();
}

function renderNewMovie(movie) {
    const newLi = document.createElement('li');
    newLi.classList.add('movie-element');

    newLi.innerHTML = `
        <div class="movie-element__image">
            <img src="${movie.imageUrl}" alt="${movie.title}">
        </div>
        <div class="movie-element__info">
            <h2>${movie.title}</h2>
            <p>${movie.rating}/5 stars</p>
        </div>
    `;

    newLi.addEventListener('click', openDeleteModal.bind(null, movie.id))
    movieList.appendChild(newLi);
}

function deleteMovie(movieId) {
    const index = getMoiveIndex(movieId);
    movieList.children[index].remove();
    movies.splice(index, 1); // remove 1 element from index
    closeDeleteModal();
    updateUI();
}

function getMoiveIndex(movieId) {
    let index = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        index++;
    }
    return index;
}

addBtn.addEventListener('click', addMovie);

/*
    Important Note:
    - If you are listen an element and if you delete it, not problem. Because js is deleting every reference of that element.
    - So when we delete an element, listeners deleting too.

*/