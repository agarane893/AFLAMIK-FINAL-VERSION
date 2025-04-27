// --- Données de films ---
const movies = {
  "pirates-of-the-caribbean": {
  id: "pirates-of-the-caribbean",
  title: "pirates-of-the-caribbean",
  year: 2008,
  genre: "Action, Adventure, Sci-Fi",
  runtime: "2h 6min",
  country: "USA",
  imdbRating: 7.9,
  poster: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
  trailer: "https://www.youtube.com/embed/naQr0uTrH_s",
  likes: 11000,
  dislikes: 300,
  synopsis: "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love, the governor\'s daughter, from Jack\'s former pirate allies, who are now undead.",
  cast: [
    { name: 'Johnny Depp', character: "Captain jake", photo: 'https://image.tmdb.org/t/p/w500/ilPBHd3r3ahlipNQtjr4E3G04jJ.jpg' },
  
  ],
  recommendations: [],
  suggestions: [],
  comments: []
}
 
};

let currentMovie = null;
let userData = {
  ratings: {},
  watchlist: []
};

document.addEventListener('DOMContentLoaded', function () {
  const movieId = localStorage.getItem('currentMovie') || "the-dark-knight"; 
  loadMovie(movieId);

  const savedData = localStorage.getItem('aflamikUserData');
  if (savedData) userData = JSON.parse(savedData);

  const exists = userData.watchlist.some(m => m.id === movieId);
  const watchlistBtn = document.querySelector('.button.watchlist');
  if (exists && watchlistBtn) {
    watchlistBtn.innerHTML = '<i class="fas fa-check"></i> Added to Watchlist';
    watchlistBtn.style.backgroundColor = 'var(--success)';
  }

  document.getElementById('ratingStars').addEventListener('click', e => {
    if (e.target.classList.contains('star')) {
      const rating = parseInt(e.target.getAttribute('data-value'));
      userData.ratings[currentMovie.id] = rating;
      localStorage.setItem('aflamikUserData', JSON.stringify(userData));
      highlightStars(rating);
      updateRatingText(rating);
    }
  });

  document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('mouseover', function () {
      highlightStars(parseInt(this.getAttribute('data-value')));
    });
    star.addEventListener('mouseout', function () {
      highlightStars(userData.ratings[currentMovie.id] || 0);
    });
  });
});

function loadMovie(id) {
  currentMovie = movies[id];
  if (!currentMovie) {
    console.error('Movie not found:', id);
    return;
  }

  document.title = `Aflamik - ${currentMovie.title}`;
  document.getElementById('moviePoster').src = currentMovie.poster;
  document.getElementById('movieTrailer').src = currentMovie.trailer;
  document.getElementById('movieTitle').textContent = currentMovie.title;
  document.getElementById('movieSynopsis').textContent = currentMovie.synopsis;

  document.getElementById('movieMeta').innerHTML = `
    <span><i class="fas fa-tag"></i> ${currentMovie.genre}</span>
    <span><i class="fas fa-calendar-alt"></i> ${currentMovie.year}</span>
    <span><i class="fas fa-clock"></i> ${currentMovie.runtime}</span>
    <span><i class="fas fa-globe"></i> ${currentMovie.country}</span>
    <span><i class="fas fa-star"></i> IMDb: ${currentMovie.imdbRating}/10</span>
  `;

  document.getElementById('like-count').textContent = formatNumber(currentMovie.likes);
  document.getElementById('dislike-count').textContent = formatNumber(currentMovie.dislikes);

  highlightStars(userData.ratings[id] || 0);
  updateRatingText(userData.ratings[id]);

  renderCast();
  renderRecommendations();
  renderComments();
  renderSuggestions();
}


function highlightStars(count) {
  document.querySelectorAll('.star').forEach((star, i) => {
    star.style.color = i < count ? 'var(--accent)' : 'var(--text)';
  });
}

function updateRatingText(rating) {
  const text = document.getElementById('ratingText');
  text.textContent = rating ? `You rated this ${rating}★` : "Rate this movie";
  text.style.color = rating ? 'var(--accent)' : '';
}

function likeMovie() {
  currentMovie.likes++;
  document.getElementById('like-count').textContent = formatNumber(currentMovie.likes);
}

function dislikeMovie() {
  currentMovie.dislikes++;
  document.getElementById('dislike-count').textContent = formatNumber(currentMovie.dislikes);
}

function addToWatchlist() {
  const btn = document.querySelector('.button.watchlist');

  // Save only what the profile needs
  const movieToSave = {
    id: currentMovie.id,
    title: currentMovie.title,
    poster: currentMovie.poster,
    rating: userData.ratings[currentMovie.id] || currentMovie.imdbRating || 'N/A'
  };

  const exists = userData.watchlist.some(m => m.id === currentMovie.id);

  if (!exists) {
    userData.watchlist.push(movieToSave);
    btn.innerHTML = '<i class="fas fa-check"></i> Added to Watchlist';
    btn.style.backgroundColor = 'var(--success)';
  } else {
    userData.watchlist = userData.watchlist.filter(m => m.id !== currentMovie.id);
    btn.innerHTML = '<i class="fas fa-bookmark"></i> Watchlist';
    btn.style.backgroundColor = 'transparent';
  }

  localStorage.setItem('aflamikUserData', JSON.stringify(userData));
}


function renderCast() {
  const container = document.getElementById('castGrid');
  container.innerHTML = "";
  currentMovie.cast.forEach(actor => {
    container.innerHTML += `
      <div class="cast-member">
        <img src="${actor.photo}" alt="${actor.name}">
        <div>${actor.name}</div>
        <div class="movie-card-year">${actor.character}</div>
      </div>
    `;
  });
}

function renderRecommendations() {
  const container = document.getElementById('recommendationsGrid');
  container.innerHTML = "";
  currentMovie.recommendations.forEach(id => {
    const m = movies[id];
    container.innerHTML += `
      <div class="movie-card" onclick="loadMovie('${m.id}')">
        <img src="${m.poster}" alt="${m.title}">
        <div class="movie-card-info">
          <div class="movie-card-title">${m.title}</div>
          <div class="movie-card-year">${m.year}</div>
        </div>
      </div>
    `;
  });
}

// Function to handle like action for a comment
function likeComment(commentIndex) {
  currentMovie.comments[commentIndex].likes++;
  renderComments();
}

// Function to handle dislike action for a comment
function dislikeComment(commentIndex) {
  currentMovie.comments[commentIndex].dislikes++;
  renderComments();
}

// Function to reply to a comment
function replyToComment(commentIndex) {
  const comment = currentMovie.comments[commentIndex];
  
  // Create a reply input field dynamically
  const replyText = prompt("Enter your reply: ");
  if (replyText) {
    // Add the reply to the comments array under the selected comment
    if (!comment.replies) comment.replies = [];
    comment.replies.push({
      user: "You",  
      text: replyText,
      time: "Just now",
      likes: 0,
      dislikes: 0
    });
    renderComments();
  }
}

// Function to post a new comment
function postComment() {
  const commentText = document.getElementById("commentBox").value.trim();
  if (commentText) {
    const newComment = {
      user: "You",
      avatar: "Y", 
      text: commentText,
      time: "Just now",
      likes: 0,
      dislikes: 0,
      replies: [] // New comments have an empty reply list
    };
    
    // Add new comment to the list
    currentMovie.comments.unshift(newComment);
    renderComments();
    
    // Clear the comment box after posting
    document.getElementById("commentBox").value = "";
  }
}

// Function to render comments
function renderComments() {
  const container = document.getElementById("comments");
  container.innerHTML = ""; // Clear the current comment list
  
  currentMovie.comments.forEach((comment, index) => {
    container.innerHTML += `
      <div class="comment" data-comment-index="${index}">
        <div class="comment-header">
          <div class="comment-avatar">${comment.avatar}</div>
          <div>
            <div class="comment-user">${comment.user}</div>
            <div class="comment-time">${comment.time}</div>
          </div>
        </div>
        <p>${comment.text}</p>
        <div class="comment-actions">
          <button class="comment-action like-btn" onclick="likeComment(${index})">
            <i class="fas fa-thumbs-up"></i> ${comment.likes}
          </button>
          <button class="comment-action dislike-btn" onclick="dislikeComment(${index})">
            <i class="fas fa-thumbs-down"></i> ${comment.dislikes}
          </button>
          <button class="comment-action reply-btn">Reply</button>
        </div>
        
        <!-- Reply Input (hidden initially) -->
        <div class="reply-input" style="display: none;">
          <textarea class="comment-box" placeholder="Write your reply..."></textarea>
          <button class="comment-action submit-reply">Submit Reply</button>
        </div>
        
        <!-- Replies Section -->
        <div class="replies">
          ${comment.replies.map((reply, replyIndex) => `
            <div class="reply">
              <div class="reply-user">${reply.user}</div>
              <div class="reply-text">${reply.text}</div>
              <div class="reply-actions">
                <button class="reply-action like-btn" onclick="likeReply(${index}, ${replyIndex})">
                  <i class="fas fa-thumbs-up"></i> ${reply.likes}
                </button>
                <button class="reply-action dislike-btn" onclick="dislikeReply(${index}, ${replyIndex})">
                  <i class="fas fa-thumbs-down"></i> ${reply.dislikes}
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  // Attach event listeners for replies after rendering
  document.querySelectorAll('.reply-btn').forEach(replyBtn => {
    replyBtn.addEventListener('click', function () {
      const replyInput = this.closest('.comment').querySelector('.reply-input');
      const submitReplyBtn = replyInput.querySelector('.submit-reply');
      
      // Show the reply input box
      replyInput.style.display = 'block';
      
      // Add event listener for submitting the reply
      submitReplyBtn.addEventListener('click', function () {
        const replyText = replyInput.querySelector('textarea').value.trim();
        if (replyText) {
          const commentIndex = this.closest('.comment').getAttribute('data-comment-index');
          currentMovie.comments[commentIndex].replies.push({
            user: "You",  
            text: replyText,
            time: "Just now",
            likes: 0,
            dislikes: 0
          });
          
          renderComments(); // Re-render comments to include the new reply
        }
      });
    });
  });
}

// Function to like a reply
function likeReply(commentIndex, replyIndex) {
  currentMovie.comments[commentIndex].replies[replyIndex].likes++;
  renderComments();
}

// Function to dislike a reply
function dislikeReply(commentIndex, replyIndex) {
  currentMovie.comments[commentIndex].replies[replyIndex].dislikes++;
  renderComments();
}




function addSuggestion() {
  const input = document.getElementById("suggestionInput");
  const title = input.value.trim();
  if (title && !currentMovie.suggestions.includes(title)) {
    currentMovie.suggestions.push(title);
    renderSuggestions();
    input.value = "";
  }
}

function removeSuggestion(btn) {
  const title = btn.parentElement.textContent.trim();
  currentMovie.suggestions = currentMovie.suggestions.filter(t => t !== title);
  renderSuggestions();
}

function renderSuggestions() {
  const container = document.getElementById("suggestedMovies");
  container.innerHTML = "";
  currentMovie.suggestions.forEach(title => {
    container.innerHTML += `
      <li>
        ${title}
        <button onclick="removeSuggestion(this)"><i class="fas fa-times"></i></button>
      </li>
    `;
  });
}

function shareMovie() {
  if (navigator.share) {
    navigator.share({
      title: currentMovie.title,
      text: "Check out this movie!",
      url: window.location.href
    }).catch(err => console.log('Erreur partage:', err));
  } else {
    alert("Copy this link to share: " + window.location.href);
  }
}

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

function formatNumber(num) {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
  if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
  return num;
}
