// Mảng dữ liệu phim
const movies = [
    {
        id: 1,
        title: "Inception",
        year: 2010,
        poster: "https://play-lh.googleusercontent.com/buKf27Hxendp3tLNpNtP3E-amP0o4yYV-SGKyS2u-Y3GdGRTyfNCIT5WAVs2OudOz6so5K1jtYdAUKI9nw8",
        genres: ["Science Fiction", "Action", "Thriller"],
        description: "A thief who enters the dreams of others to steal their secrets is given a final mission to plant an idea into a target's subconscious.",
        director: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
    },
    {
        id: 2,
        title: "The Matrix",
        year: 1999,
        poster: "https://m.media-amazon.com/images/M/MV5BZGM1NDM3MTAtMmI0ZC00ZDAwLWEwY2EtNDdhYjZmMjJkNzM0XkEyXkFqcGc@._V1_.jpg",
        genres: ["Science Fiction", "Action"],
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        director: "The Wachowskis",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
        id: 3,
        title: "Pulp Fiction",
        year: 1994,
        poster: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/344/2024/10/21172318/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        genres: ["Crime", "Drama"],
        description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        director: "Quentin Tarantino",
        cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
    },
    {
        id: 4,
        title: "Forrest Gump",
        year: 1994,
        poster: "https://resizing.flixster.com/hqcqFfWf1syt2OrGlbW7LDvfj9Y=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15829_v_v13_aa.jpg",
        genres: ["Drama", "Romance"],
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        director: "Robert Zemeckis",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
    },
    {
        id: 5,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        poster: "https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg",
        genres: ["Fantasy", "Adventure", "Action"],
        description: "A young hobbit, Frodo Baggins, inherits a ring of immense power and embarks on a journey with a fellowship to destroy it and save Middle-earth from the Dark Lord Sauron.",
        director: "Peter Jackson",
        cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"]
    },
    {
        id: 6,
        title: "Interstellar",
        year: 2014,
        poster: "https://cinema.momocdn.net/img/129192456259428825-interstellar.png?size=M",
        genres: ["Science Fiction", "Adventure", "Drama"],
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        director: "Christopher Nolan",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
    },
    {
        id: 7,
        title: "Parasite",
        year: 2019,
        poster: "https://i0.wp.com/cedars.cedarville.edu/wp/wp-content/uploads/2020/05/Parasite-scaled.jpg?fit=1657%2C2560&ssl=1",
        genres: ["Comedy", "Thriller", "Drama"],
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        director: "Bong Joon-ho",
        cast: ["Song Kang-ho", "Choi Woo-shik", "Park So-dam"]
    },
    {
        id: 8,
        title: "The Dark Knight",
        year: 2008,
        poster: "https://upload.wikimedia.org/wikipedia/vi/thumb/2/2d/Poster_phim_K%E1%BB%B5_s%C4%A9_b%C3%B3ng_%C4%91%C3%AAm_2008.jpg/250px-Poster_phim_K%E1%BB%B5_s%C4%A9_b%C3%B3ng_%C4%91%C3%AAm_2008.jpg",
        genres: ["Action", "Crime", "Drama"],
        description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, compelling Batman to face one of the greatest psychological and physical tests of his ability to fight injustice.",
        director: "Christopher Nolan",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
    },
    {
        id: 9,
        title: "1917",
        year: 2019,
        poster: "https://www.studyphim.vn/system/movies/7908/thumbnails/original/thumbnail.jpg",
        genres: ["War", "Drama"],
        description: "Two young British soldiers during the First World War are given an impossible mission: deliver a message deep in enemy territory that will stop 1,600 men, and one of the soldiers' brothers, from walking straight into a deadly trap.",
        director: "Sam Mendes",
        cast: ["George MacKay", "Dean-Charles Chapman", "Mark Strong"]
    },
    {
        id: 10,
        title: "Spider-Man: Into the Spider-Verse",
        year: 2018,
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Spider-Man_Into_the_Spider-Verse_poster.png/250px-Spider-Man_Into_the_Spider-Verse_poster.png",
        genres: ["Animation", "Action", "Science Fiction"],
        description: "Teen Miles Morales becomes Spider-Man of his universe and must team up with five spider-powered individuals from other dimensions to save all realities from a threat.",
        director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
        cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"]
    },
];

// --- PHẦN LIGHT/DARK MODE VỚI LOCALSTORAGE ---

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Hàm kiểm tra và áp dụng theme đã lưu
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    } else {
        body.classList.remove('dark-mode');
        themeToggle.checked = false;
    }
}

// Lắng nghe sự kiện thay đổi trên nút toggle và lưu vào localStorage
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

// Gọi hàm áp dụng theme khi trang được tải
applySavedTheme();

// --- PHẦN LOGIC CHÍNH CHO ỨNG DỤNG ---

const movieListElement = document.getElementById('movie-list');
const genresContainerElement = document.getElementById('genres-container');
const searchInputElement = document.getElementById('search-input');
const noResultsElement = document.getElementById('no-results');

// Lấy các element của modal
const movieModal = document.getElementById('movie-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalBody = movieModal.querySelector('.modal-body');

// Hàm tạo thẻ phim từ dữ liệu
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title} Poster">
        <div class="movie-info">
            <div>
                <h3>${movie.title}</h3>
                <p>Năm: ${movie.year}</p>
            </div>
        </div>
    `;
    
    // Thêm event listener để mở modal khi click vào card
    card.addEventListener('click', () => {
        displayModal(movie);
    });

    return card;
}

// Hàm hiển thị danh sách phim
function displayMovies(filteredMovies) {
    movieListElement.innerHTML = '';
    if (filteredMovies.length === 0) {
        noResultsElement.style.display = 'block';
    } else {
        noResultsElement.style.display = 'none';
        filteredMovies.forEach(movie => {
            const card = createMovieCard(movie);
            movieListElement.appendChild(card);
        });
    }
}

// Hàm lấy danh sách thể loại duy nhất
function getUniqueGenres(movies) {
    const allGenres = movies.flatMap(movie => movie.genres);
    return [...new Set(allGenres)].sort();
}

// Hàm tạo checkbox cho các thể loại
function createGenreCheckboxes() {
    const uniqueGenres = getUniqueGenres(movies);
    genresContainerElement.innerHTML = '';
    uniqueGenres.forEach(genre => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="checkbox" name="genre" value="${genre}">
            ${genre}
        `;
        genresContainerElement.appendChild(label);
    });
}

// Hàm áp dụng tất cả các bộ lọc
function applyFilters() {
    const selectedGenres = Array.from(document.querySelectorAll('#genres-container input[type="checkbox"]:checked')).map(cb => cb.value);
    const searchTerm = searchInputElement.value.toLowerCase().trim();

    let filteredMovies = movies;

    // Lọc theo thể loại
    if (selectedGenres.length > 0) {
        filteredMovies = filteredMovies.filter(movie => 
            selectedGenres.every(genre => movie.genres.includes(genre))
        );
    }

    // Lọc theo tên phim
    if (searchTerm) {
        filteredMovies = filteredMovies.filter(movie => 
            movie.title.toLowerCase().includes(searchTerm)
        );
    }

    displayMovies(filteredMovies);
}

// Kỹ thuật Debounce để tối ưu hóa hiệu năng tìm kiếm
let debounceTimeout;
function debounce(callback, delay) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(callback, delay);
}

// Hàm hiển thị modal chi tiết phim
function displayModal(movie) {
    modalBody.innerHTML = `
        <img class="modal-poster" src="${movie.poster}" alt="${movie.title} Poster">
        <div class="modal-info">
            <h2>${movie.title} (${movie.year})</h2>
            <p><strong>Đạo diễn:</strong> ${movie.director}</p>
            <p><strong>Diễn viên:</strong> ${movie.cast.join(", ")}</p>
            <p><strong>Thể loại:</strong> ${movie.genres.join(", ")}</p>
            <p>${movie.description}</p>
        </div>
    `;
    movieModal.classList.add('visible');
    document.body.style.overflow = 'hidden'; // Ngăn cuộn trang chính khi modal mở
}

// Hàm đóng modal
function closeModal() {
    movieModal.classList.remove('visible');
    document.body.style.overflow = 'auto'; // Cho phép cuộn trang chính
}

// Lắng nghe sự kiện thay đổi trên các checkbox thể loại
genresContainerElement.addEventListener('change', applyFilters);

// Lắng nghe sự kiện gõ phím trên ô tìm kiếm và áp dụng debounce
searchInputElement.addEventListener('input', () => {
    debounce(applyFilters, 300);
});

// Lắng nghe sự kiện click để đóng modal
modalCloseBtn.addEventListener('click', closeModal);
movieModal.addEventListener('click', (event) => {
    if (event.target === movieModal) {
        closeModal();
    }
});

// Khởi tạo ứng dụng khi trang tải xong
createGenreCheckboxes();
applyFilters();
