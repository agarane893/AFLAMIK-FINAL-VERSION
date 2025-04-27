// actors.js
//database
const dummyData = {
    "johnny depp": {
      age: 60,
      knownFor: "Pirates of the Caribbean",
      awards: "Golden Globe Award",
      image: "https://image.tmdb.org/t/p/w500/ilPBHd3r3ahlipNQtjr4E3G04jJ.jpg",
      trailerEmbed: "https://www.youtube.com/embed/naQr0uTrH_s"
    },
    "emma watson": {
      age: 34,
      knownFor: "Harry Potter",
      awards: "MTV Movie Award",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/A14lLCZYDhfYdBa0fFRpwMDiwRN.jpg",
      trailerEmbed: "https://www.youtube.com/embed/VyHV0BRtdxo"
    },
    "leonardo dicaprio": {
      age: 49,
      knownFor: "Inception",
      awards: "Academy Award",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/zwxeqY7AV9VS2J0nTXp3onRErBg.jpg",
      trailerEmbed: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    "zendaya": {
      age: 27,
      knownFor: "Euphoria",
      awards: "Primetime Emmy Award",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/3WdOloHpjtjL96uVOhFRRCcYSwq.jpg",
      trailerEmbed: "https://www.youtube.com/embed/jCD-I1YVJ9I"
    },
    "tom holland": {
      age: 27,
      knownFor: "Spider-Man: No Way Home",
      awards: "BAFTA Rising Star",
      image: "https://image.tmdb.org/t/p/w500/2qhIDp44cAqP2clOgt2afQI07X8.jpg",
      trailerEmbed: "https://www.youtube.com/embed/JfVOs4VSpmA"
    },
    "brad pitt": {
      age: 60,
      knownFor: "Fight Club",
      awards: "Academy & Golden Globe Awards",
      image: "https://image.tmdb.org/t/p/w500/kU3B75TyRiCgE270EyZnHjfivoq.jpg",
      trailerEmbed: "https://www.youtube.com/embed/SUXWAEX2jlg"
    },
    "meryl streep": {
      age: 74,
      knownFor: "The Devil Wears Prada",
      awards: "3 Academy Awards",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/g5cVxQBAQ3AXt3LhdBXtbbN47Uc.jpg",
      trailerEmbed: "https://www.youtube.com/embed/6ZOZwUQKu3E"
    },
    "dwayne johnson": {
      age: 51,
      knownFor: "Jumanji",
      awards: "People's Choice Awards",
      image: "https://image.tmdb.org/t/p/w500/kuqFzlYMc2IrsOyPznMd1FroeGq.jpg",
      trailerEmbed: "https://www.youtube.com/embed/2QKg5SZ_35I"
    },
    "scarlett johansson": {
      age: 39,
      knownFor: "Black Widow",
      awards: "BAFTA Award",
      image: "https://image.tmdb.org/t/p/w500/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",
      trailerEmbed: "https://www.youtube.com/embed/ybji16u608U"
    },
    "robert downey jr": {
      age: 58,
      knownFor: "Iron Man",
      awards: "Golden Globe Award",
      image: "https://image.tmdb.org/t/p/w500/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg",
      trailerEmbed: "https://www.youtube.com/embed/8ugaeA-nMTc"
    },
    "jennifer lawrence": {
      age: 33,
      knownFor: "The Hunger Games",
      awards: "Academy Award",
      image: "https://image.tmdb.org/t/p/w500/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg",
      trailerEmbed: "https://www.youtube.com/embed/mfmrPu43DF8"
    },
    "chris hemsworth": {
      age: 40,
      knownFor: "Thor",
      awards: "People's Choice Awards",
      image: "https://image.tmdb.org/t/p/w500/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg",
      trailerEmbed: "https://www.youtube.com/embed/ue80QwXMRHg"
    },
    "angelina jolie": {
      age: 48,
      knownFor: "Maleficent",
      awards: "Academy Award",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/bXNxIKcJ5cNNW8QFrBPWcfTSu9x.jpg",
      trailerEmbed: "https://www.youtube.com/embed/gOE2BVRCUkM"
    },
    "keanu reeves": {
      age: 59,
      knownFor: "John Wick",
      awards: "MTV Movie Awards",
      image: "https://image.tmdb.org/t/p/w500/rRdru6REr9i3WIHv2mntpcgxnoY.jpg",
      trailerEmbed: "https://www.youtube.com/embed/pU8-7BX9uxs"
    },
    "margot robbie": {
      age: 33,
      knownFor: "Barbie",
      awards: "Critics' Choice Award",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg",
      trailerEmbed: "https://www.youtube.com/embed/pBk4NYhWNMM"
    },
    "will smith": {
      age: 55,
      knownFor: "Men in Black",
      awards: "Academy Award",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/1QqaRZ8neYlqLx7ODZC4as47wUV.jpg",
      trailerEmbed: "https://www.youtube.com/embed/6kw1UVovByw"
    },
    "ryan reynolds": {
      age: 47,
      knownFor: "Deadpool",
      awards: "People's Choice Awards",
      image: "https://image.tmdb.org/t/p/w500/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg",
      trailerEmbed: "https://www.youtube.com/embed/FyKWUTwSYAs"
    },
    "millie bobby brown": {
      age: 20,
      knownFor: "Stranger Things",
      awards: "Screen Actors Guild Award",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/xbcHTGvYAhJSVT9hwAS54055aHc.jpg",
      trailerEmbed: "https://www.youtube.com/embed/mnd7sFt5c3A"
    },
    "tom cruise": {
      age: 61,
      knownFor: "Mission: Impossible",
      awards: "3 Golden Globe Awards",
      image: "https://image.tmdb.org/t/p/w500/8qBylBsQf4llkGrWR3qAsOtOU8O.jpg",
      trailerEmbed: "https://www.youtube.com/embed/avz06PDqDbM"
    }
  };
  

  
//called when user searches manually
function getActorInfo() {
  const nameInput = document.getElementById("actorName");
  const result = document.getElementById("result");
  const key = nameInput.value.trim().toLowerCase();

  if (!key) {
      result.textContent = "Please enter an actor's name.";
      return;
  }

  renderActorDetails(key); // Reuse renderActorDetails function
}

//called when loading a clicked actor
function renderActorDetails(actorName) {
  const result = document.getElementById("result");
  const key = actorName.trim().toLowerCase();

  const actor = dummyData[key];
  if (!actor) {
      result.textContent = "Actor not found in the local database.";
      return;
  }

  result.innerHTML = `
    <h3>${actorName.charAt(0).toUpperCase() + actorName.slice(1)}</h3>
    <img class="actor-img" src="${actor.image}" alt="${actorName}">
    <p><strong>Age:</strong> ${actor.age}</p>
    <p><strong>Known For:</strong> ${actor.knownFor}</p>
    <p><strong>Awards:</strong> ${actor.awards}</p>
    <iframe
      width="100%" height="315"
      src="${actor.trailerEmbed}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  `;
}

// When the page loads
window.addEventListener('DOMContentLoaded', () => {
  const selectedActor = localStorage.getItem('selectedActor');
  if (selectedActor) {
      renderActorDetails(selectedActor); // Load saved actor
      localStorage.removeItem('selectedActor'); // clear after loading
  }
});

// Wire el search button wel Enter key
document.getElementById("searchBtn")
    .addEventListener("click", getActorInfo);

document.getElementById("actorName")
    .addEventListener("keydown", e => { 
        if (e.key === "Enter") getActorInfo(); 
});

//suggestions display
document.addEventListener('DOMContentLoaded', () => {
    const suggestionsList = document.querySelector('.suggestions-list');
    const actors = Object.entries(dummyData);
    let currentIndex = 0;
    const maxItemsToShow = 5;  // Show only 5 actor cards at a time

    //render actor cards in the suggestions carousel
    function renderSuggestions() {
        suggestionsList.innerHTML = ''; //Clear existing suggestions
        const start = currentIndex;
        const end = Math.min(currentIndex + maxItemsToShow, actors.length);
        const slicedActors = actors.slice(start, end);

        slicedActors.forEach(([key, actor]) => {
            const card = document.createElement('div');
            card.className = 'suggest-card';
            card.innerHTML = `
                <img src="${actor.image}" alt="${key}">
                <span>${
                    key
                        .split(' ')
                        .map(w => w[0].toUpperCase() + w.slice(1))
                        .join(' ')
                }</span>
            `;
            card.addEventListener('click', () => {
                document.getElementById('actorName').value = key;
                getActorInfo();
            });
            suggestionsList.appendChild(card);
        });
    }

    //carousel navigation
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= maxItemsToShow;
            renderSuggestions();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex + maxItemsToShow < actors.length) {
            currentIndex += maxItemsToShow;
            renderSuggestions();
        }
    });

    //render of suggestions
    renderSuggestions();
});
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