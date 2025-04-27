// --- Tab switching ---
function showTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab');
  
    contents.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
  
    document.getElementById(tabId).classList.add('active');
  
    // Find and activate the clicked button
    const clickedButton = Array.from(buttons).find(btn => btn.textContent.toLowerCase().includes(tabId));
    if (clickedButton) {
      clickedButton.classList.add('active');
    }
  }
  
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
  
  // --- Load watchlist on profile page ---
  function loadWatchlistFromUserData() {
    const userData = JSON.parse(localStorage.getItem("aflamikUserData")) || {};
    const container = document.getElementById("Watchlist");
  
    container.innerHTML = "";
  
    if (!userData.watchlist || userData.watchlist.length === 0) {
      container.innerHTML = "<p>No movies in your watchlist yet.</p>";
      return;
    }
  
    userData.watchlist.forEach(movie => {
      if (!movie.title || !movie.poster) return;
  
      const card = document.createElement("div");
      card.className = "movie-card";
  
      card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <div class="movie-info">
          <h4>${movie.title}</h4>
          <p>Rating: ⭐ ${movie.rating || 'N/A'}</p>
        </div>
      `;
  
      container.appendChild(card);
    });
  }
  
  
  
  document.addEventListener("DOMContentLoaded", loadWatchlistFromUserData);