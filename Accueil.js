const bannerImages = [
    './Assets/image 24.png',
    './Assets/image 25.jpg'
];

let currentBanner = 0;
const heroBanner = document.getElementById('heroBanner');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

function updateBanner() {
    heroBanner.style.backgroundImage = `url('${bannerImages[currentBanner]}')`;
}

leftArrow.addEventListener('click', () => {
    currentBanner = (currentBanner - 1 + bannerImages.length) % bannerImages.length;
    updateBanner();
});

rightArrow.addEventListener('click', () => {
    currentBanner = (currentBanner + 1) % bannerImages.length;
    updateBanner();
});

updateBanner();
  // --- Connexion demo ---
  function showLoginModal() {
    alert('Login modal');
    simulateLogin();
  }
  
  function showSignupModal() {
    alert('Signup modal');
    window.location.href = 'signup.html';
  }
  
  function simulateLogin() {
    document.getElementById('authButtons').style.display = 'none';
    document.getElementById('userProfile').style.display = 'flex';
  }
  function scrollLeftTrending() {
    const container = document.getElementById('trendingMovieList');
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }
  
  function scrollRightTrending() {
    const container = document.getElementById('trendingMovieList');
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }
  
  
  function setupCarousel(sectionId) {
    const container = document.querySelector(`#${sectionId} .movie-list-scrollable`);
    const leftBtn = document.querySelector(`#${sectionId} .carousel-controls button:first-child`);
    const rightBtn = document.querySelector(`#${sectionId} .carousel-controls button:last-child`);
    
    leftBtn.addEventListener('click', () => {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    rightBtn.addEventListener('click', () => {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }
  
  // Initialize all carousels
  document.addEventListener('DOMContentLoaded', () => {
    setupCarousel('trending');
    setupCarousel('top-rated');
    setupCarousel('most-viewed');
  });
  function navigateToMovie(movieSlug) {
    // Save the movie ID in localStorage bech el movie page can access it
    localStorage.setItem('currentMovie', movieSlug);
    
    // Redirect to the movie page
    window.location.href = 'movie.html';
  }