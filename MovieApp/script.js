const API_KEY = 'bb91d3d'; // Replace with your OMDb API key
const BASE_URL = 'https://www.omdbapi.com/';
const IMG_PLACEHOLDER = 'http://via.placeholder.com/1080x1580';
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const overlayContent = document.getElementById('overlay-content');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const current = document.getElementById('current');
let currentPage = 1;
let totalPages = 1;
let lastUrl = '';

// Check if user is logged in
document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        window.location.href = 'login.html';
    } else {
        fetchMovies();
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm) {
        searchMovies(searchTerm);
    }
});

function fetchMovies() {
    const url = `${BASE_URL}?s=popular&type=movie&apikey=${API_KEY}&page=${currentPage}`;
    lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        if (data.Response === "True") {
            displayMovies(data.Search);
            totalPages = Math.ceil(data.totalResults / 10);
            updatePagination();
        } else {
            main.innerHTML = `<h1 class="no-results">No Results Found</h1>`;
        }
    });
}

function searchMovies(query) {
    const url = `${BASE_URL}?s=${query}&apikey=${API_KEY}&page=${currentPage}`;
    lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        if (data.Response === "True") {
            displayMovies(data.Search);
            totalPages = Math.ceil(data.totalResults / 10);
            updatePagination();
        } else {
            main.innerHTML = `<h1 class="no-results">No Results Found</h1>`;
        }
    });
}

function displayMovies(movies) {
    main.innerHTML = '';
    movies.forEach(movie => {
        const { Title, Poster, imdbID } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="${Poster !== 'N/A' ? Poster : IMG_PLACEHOLDER}" alt="${Title}">
            <div class="movie-info">
                <h3>${Title}</h3>
                <button class="know-more" onclick="getMovieDetails('${imdbID}')">Know More</button>
            </div>
        `;
        main.appendChild(movieEl);
    });
}

function getMovieDetails(id) {
    fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`).then(res => res.json()).then(movie => {
        overlayContent.innerHTML = `
            <h2>${movie.Title}</h2>
            <p><strong>Director:</strong> ${movie.Director}</p>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
            <p><strong>Actors:</strong> ${movie.Actors}</p>
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : IMG_PLACEHOLDER}" alt="${movie.Title}">
        `;
        openNav();
    });
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function updatePagination() {
    current.innerText = currentPage;
    if (currentPage <= 1) {
        prev.classList.add('disabled');
    } else {
        prev.classList.remove('disabled');
    }
    if (currentPage >= totalPages) {
        next.classList.add('disabled');
    } else {
        next.classList.remove('disabled');
    }
}

prev.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        changePage();
    }
});

next.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        changePage();
    }
});

function changePage() {
    const searchTerm = search.value;
    if (searchTerm) {
        searchMovies(searchTerm);
    } else {
        fetchMovies();
    }
}


