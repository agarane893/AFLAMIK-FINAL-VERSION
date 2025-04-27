

// Placeholder for handling search
document.querySelector('.search-btn')?.addEventListener('click', () => {
  const query = document.querySelector('.search-input').value.trim();
  const genre = document.querySelector('.genre-select').value;
  alert(`Search for "${query}" in genre "${genre}"`);
});




document.addEventListener('DOMContentLoaded', () => {
  const movieSlug = localStorage.getItem('currentMovie');
  const movieData = moviesDatabase[movieSlug];
  
  if (movieData) {
    console.log('Loading movie:', movieData); // Debug
    
    // Update hero section
    document.querySelector('.trailer-content h1').textContent = movieData.title;
    document.querySelector('.trailer-content p').textContent = 
      `${movieData.details.genre} • ${movieData.releaseDate.split(' ')[2]}`;
    

const trailerContainer = document.querySelector('.trailer-hero');
const videoElement = document.getElementById('trailer-video');
//  hide the HTML5 video element 
videoElement.style.display = 'none';

// Create YouTube iframe
const youtubeId = getYouTubeId(movieData.trailerUrl);
if (youtubeId) {
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0`;
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  iframe.setAttribute('allowfullscreen', '');
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  
  // Insert the iframe before the overlay
  trailerContainer.insertBefore(iframe, trailerContainer.firstChild);
}

// Helper function to extract YouTube ID
function getYouTubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}
    
    // Update description
    const descEl = document.querySelector('.movie-description-text');
    if (descEl) {
      descEl.textContent = movieData.description;
    } else {
      console.error('Description element not found');
    }
    
    // Update details
    const detailsEl = document.querySelector('.details-content');
    if (detailsEl) {
      detailsEl.innerHTML = `
        <p><strong>Release Date:</strong> ${movieData.releaseDate}</p>
        <p><strong>Country:</strong> ${movieData.details.country}</p>
        <p><strong>Language:</strong> ${movieData.details.language}</p>
        <p><strong>Production:</strong> ${movieData.details.production}</p>
        <p><strong>Director:</strong> ${movieData.details.director}</p>
        <p><strong>Runtime:</strong> ${movieData.details.runtime}</p>
      `;
    }
    
  // Update actors
const actorsContainer = document.querySelector('.actor-cards');
if (actorsContainer) {
  actorsContainer.innerHTML = movieData.actors.map(actor => `
    <div class="actor-card" data-actor-name="${actor.name}">
      <img src="${actor.image}" alt="${actor.name}" loading="lazy">
      <div class="actor-info">
        <h4>${actor.name}</h4>
        <p>${actor.bio}</p>
      </div>
    </div>
  `).join('');

  // attach event listeners to each actor-card after they are created
  const actorCards = document.querySelectorAll('.actor-card');
  actorCards.forEach(card => {
    card.addEventListener('click', () => {
      const actorName = card.getAttribute('data-actor-name');
      localStorage.setItem('selectedActor', actorName); // Save the clicked actor's name
      window.location.href = 'actors.html'; // Go to actor page
    });
  });
}

  } else {
    console.error('Movie data not found for:', movieSlug);
    window.location.href = 'Accueil.html';
  }
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
const moviesDatabase = {
  'pirates-of-the-caribbean': {
    title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
    releaseDate: '09 Jul 2003',
    description: 'Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love, the governor\'s daughter, from Jack\'s former pirate allies, who are now undead.',
    trailerUrl: "https://www.youtube.com/embed/naQr0uTrH_s",
    actors: [
      {
        name: 'Johnny Depp',
        bio: 'Johnny Depp is known for his versatile roles in films like Edward Scissorhands and Sweeney Todd.',
        image: 'https://image.tmdb.org/t/p/w500/ilPBHd3r3ahlipNQtjr4E3G04jJ.jpg'
      }
      
    ],
    details: {
      country: 'United States',
      language: 'English',
      production: 'Walt Disney Pictures',
      genre: 'Action, Adventure, Fantasy',
      director: 'Gore Verbinski',
      runtime: '143 min'
    }
  },
  'Harry potter': {
    title: 'Harry Potter and the Philosopher\'s Stone',
    releaseDate: '10 Nov 2001',
    description: 'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family, and the terrible evil that haunts the magical world.',
    trailerUrl: "https://www.youtube.com/embed/VyHV0BRtdxo",
    actors: [
      {
        name: 'Emma Watson',
        bio: 'Emma Watson is an English actress and activist known for her role as Hermione Granger.',
        image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/A14lLCZYDhfYdBa0fFRpwMDiwRN.jpg"
      }
    ],
    details: {
      country: 'United Kingdom, United States',
      language: 'English',
      production: 'Warner Bros. Pictures',
      genre: 'Adventure, Family, Fantasy',
      director: 'Chris Columbus',
      runtime: '152 min'
    }
  },
  'Inception': {
    title: 'Inception',
    releaseDate: '16 Jul 2010',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    actors: [
      {
        name: 'Leonardo DiCaprio',
        bio: 'Leonardo DiCaprio is an American actor and film producer known for his work in Titanic and The Revenant.',
        image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/zwxeqY7AV9VS2J0nTXp3onRErBg.jpg"
      }
    ],
    details: {
      country: 'United States, United Kingdom',
      language: 'English',
      production: 'Warner Bros. Pictures',
      genre: 'Action, Adventure, Sci-Fi',
      director: 'Christopher Nolan',
      runtime: '148 min'
    }
  },
  'Euphoria': {
    title: 'Euphoria',
    releaseDate: '16 Jun 2019',
    description: 'A look at life for a group of high school students as they grapple with issues of drugs, sex, and violence.',
    trailerUrl: "https://www.youtube.com/embed/jCD-I1YVJ9I",
    actors: [
      {
        name: 'Zendaya',
        bio: 'Zendaya is an American actress and singer known for her roles in Spider-Man films and Euphoria.',
        image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/3WdOloHpjtjL96uVOhFRRCcYSwq.jpg"
      }
    ],
    details: {
      country: 'United States',
      language: 'English',
      production: 'HBO',
      genre: 'Drama',
      director: 'Sam Levinson',
      runtime: 'TV Series (60 min episodes)'
    }
  },
  'Spider-Man: No Way Home': {
    title: 'Spider-Man: No Way Home',
    releaseDate: '17 Dec 2021',
    description: 'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.',
    trailerUrl: "https://www.youtube.com/embed/JfVOs4VSpmA",
    actors: [
      {
        name: 'Tom Holland',
        bio: 'Tom Holland is an English actor known for playing Spider-Man in the Marvel Cinematic Universe.',
        image: "https://image.tmdb.org/t/p/w500/2qhIDp44cAqP2clOgt2afQI07X8.jpg"
      }
    ],
    details: {
      country: 'United States',
      language: 'English',
      production: 'Marvel Studios',
      genre: 'Action, Adventure, Fantasy',
      director: 'Jon Watts',
      runtime: '148 min'
    }
  },
  'Fight club': {
    title: 'Fight Club',
    releaseDate: '15 Oct 1999',
    description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
    trailerUrl: "https://www.youtube.com/embed/SUXWAEX2jlg",
    actors: [
      {
        name: 'Brad Pitt',
        bio: 'Brad Pitt is an American actor and producer known for his roles in Fight Club and Once Upon a Time in Hollywood.',
        image: "https://image.tmdb.org/t/p/w500/kU3B75TyRiCgE270EyZnHjfivoq.jpg"
      }
    ],
    details: {
      country: 'United States, Germany',
      language: 'English',
      production: '20th Century Fox',
      genre: 'Drama',
      director: 'David Fincher',
      runtime: '139 min'
    }
  },
  'the devil wears prada': {
    title: 'The Devil Wears Prada',
    releaseDate: '30 Jun 2006',
    description: 'A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.',
    trailerUrl: "https://www.youtube.com/embed/6ZOZwUQKu3E",
    actors: [
      {
        name: 'Meryl Streep',
        bio: 'Meryl Streep is an American actress often regarded as one of the greatest actresses of her generation.',
        image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/g5cVxQBAQ3AXt3LhdBXtbbN47Uc.jpg"
      }
    ],
    details: {
      country: 'United States',
      language: 'English',
      production: '20th Century Fox',
      genre: 'Comedy, Drama',
      director: 'David Frankel',
      runtime: '109 min'
    }
  },
  'Jumanji': {
    title: 'Jumanji: Welcome to the Jungle',
    releaseDate: '20 Dec 2017',
    description: 'Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.',
    trailerUrl: 'videos/jumanji-trailer.mp4',
    actors: [
      {
        name: 'Dwayne Johnson',
        bio: 'Dwayne Johnson is an American actor and former professional wrestler known as "The Rock".',
        image: 'actors/dwayne-johnson.jpg'
      },
      {
        name: 'Kevin Hart',
        bio: 'Kevin Hart is an American comedian and actor known for his stand-up comedy and film roles.',
        image: 'actors/kevin-hart.jpg'
      },
      {
        name: 'Jack Black',
        bio: 'Jack Black is an American actor, comedian, and musician known for his energetic comedic style.',
        image: 'actors/jack-black.jpg'
      }
    ],
    details: {
      country: 'United States',
      language: 'English',
      production: 'Columbia Pictures',
      genre: 'Action, Adventure, Comedy',
      director: 'Jake Kasdan',
      runtime: '119 min'
    }
  },
  'Black widow': {
    title: 'Black Widow',
    releaseDate: '09 Jul 2021',
    description: 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.',
    trailerUrl: 'videos/black-widow-trailer.mp4',
    actors: [
      {
        name: 'Scarlett Johansson',
        bio: 'Scarlett Johansson is an American actress known for her role as Black Widow in the MCU.',
        image: 'actors/scarlett-johansson.jpg'
      },
      {
        name: 'Florence Pugh',
        bio: 'Florence Pugh is an English actress known for her roles in Midsommar and Little Women.',
        image: 'actors/florence-pugh.jpg'
      },
      {
        name: 'David Harbour',
        bio: 'David Harbour is an American actor known for his role in Stranger Things and Hellboy.',
        image: 'actors/david-harbour.jpg'
      }
    ],
    details: {
      country: 'United States',
      language: 'English',
      production: 'Marvel Studios',
      genre: 'Action, Adventure, Sci-Fi',
      director: 'Cate Shortland',
      runtime: '134 min'
    }
  },
  
  'Iron man': {
    title: 'Iron Man',
    releaseDate: '02 May 2008',
    description: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
    trailerUrl: "https://www.youtube.com/embed/naQr0uTrH_s",
    actors: [
      {
        name: 'Robert Downey Jr.',
        bio: 'Robert Downey Jr. is an American actor known for his role as Iron Man in the MCU.',
        image: 'actors/robert-downey-jr.jpg'
      },
      {
        name: 'Gwyneth Paltrow',
        bio: 'Gwyneth Paltrow is an American actress and businesswoman known for her role as Pepper Potts.',
        image: 'actors/gwyneth-paltrow.jpg'
      },
      {
        name: 'Jeff Bridges',
        bio: 'Jeff Bridges is an American actor known for his roles in The Big Lebowski and True Grit.',
        image: 'actors/jeff-bridges.jpg'
      }
    ],
    details: {
      country: 'United States',
      language: 'English',
      production: 'Marvel Studios',
      genre: 'Action, Adventure, Sci-Fi',
      director: 'Jon Favreau',
      runtime: '126 min'
    }
  },
  'The hunger games': {
    title: 'The Hunger Games',
    releaseDate: '23 Mar 2012',
    description: 'Katniss Everdeen voluntarily takes her younger sister\'s place in the Hunger Games, a televised competition in which two teenagers from each of the twelve Districts are chosen at random to fight to the death.',
    trailerUrl: 'videos/hunger-games-trailer.mp4',
    actors: [
      {
        name: 'Jennifer Lawrence',
        bio: 'Jennifer Lawrence is an American actress known for her roles in The Hunger Games and Silver Linings Playbook.',
        image: 'actors/jennifer-lawrence.jpg'
      },
      {
        name: 'Josh Hutcherson',
        bio: 'Josh Hutcherson is an American actor known for his role as Peeta Mellark in The Hunger Games series.',
        image: 'actors/josh-hutcherson.jpg'
      },
      {
        name: 'Liam Hemsworth',
        bio: 'Liam Hemsworth is an Australian actor known for his role as Gale Hawthorne in The Hunger Games series.',
        image: 'actors/liam-hemsworth.jpg'
      }
    ],
    details: {
      country: 'United States',
      language: 'English',
      production: 'Lionsgate',
      genre: 'Action, Adventure, Sci-Fi',
      director: 'Gary Ross',
      runtime: '142 min'
    }
  },
  'Thor': {
    title: 'Thor',
    releaseDate: '06 May 2011',
    description: 'The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.',
    trailerUrl: 'videos/thor-trailer.mp4',
    actors: [
      {
        name: 'Chris Hemsworth',
        bio: 'Chris Hemsworth is an Australian actor known for his role as Thor in the Marvel Cinematic Universe.',
        image: 'actors/chris-hemsworth.jpg'
      },
      {
        name: 'Natalie Portman',
        bio: 'Natalie Portman is an American actress known for her roles in Black Swan and the Star Wars prequels.',
        image: 'actors/natalie-portman.jpg'
      },
      {
        name: 'Tom Hiddleston',
        bio: 'Tom Hiddleston is an English actor known for his role as Loki in the Marvel Cinematic Universe.',
        image: 'actors/tom-hiddleston.jpg'
      }
    ],
    details: {
      country: 'United States',
      language: 'English',
      production: 'Marvel Studios',
      genre: 'Action, Adventure, Fantasy',
      director: 'Kenneth Branagh',
      runtime: '115 min'
    }
  },
  'Maleficent': {
    title: 'Maleficent',
    releaseDate: '28 May 2014',
    description: 'A vengeful fairy is driven to curse an infant princess, only to discover that the child may be the one person who can restore peace to their troubled land.',
    trailerUrl: 'videos/maleficent-trailer.mp4',
    actors: [
      {
        name: 'Angelina Jolie',
        bio: 'Angelina Jolie is an American actress, filmmaker, and humanitarian known for her action film roles.',
        image: 'actors/angelina-jolie.jpg'
      },
      {
        name: 'Elle Fanning',
        bio: 'Elle Fanning is an American actress known for her roles in Super 8 and The Neon Demon.',
        image: 'actors/elle-fanning.jpg'
      },
      {
        name: 'Sharlto Copley',
        bio: 'Sharlto Copley is a South African actor known for his roles in District 9 and Elysium.',
        image: 'actors/sharlto-copley.jpg'
      }
    ],
    details: {
      country: 'United States, United Kingdom',
      language: 'English',
      production: 'Walt Disney Pictures',
      genre: 'Action, Adventure, Family',
      director: 'Robert Stromberg',
      runtime: '97 min'
    }
  },
  'John-wick': {
    title: 'John Wick',
    releaseDate: '24 Oct 2014',
    description: 'An ex-hitman comes out of retirement to track down the gangsters who took everything from him.',
    trailerUrl: 'videos/john-wick-trailer.mp4',
    actors: [
      {
        name: 'Keanu Reeves',
        bio: 'Keanu Reeves is a Canadian actor known for his roles in The Matrix and John Wick series.',
        image: 'actors/keanu-reeves.jpg'
      },
      {
        name: 'Michael Nyqvist',
        bio: 'Michael Nyqvist was a Swedish actor known for his roles in the Millennium trilogy and John Wick.',
        image: 'actors/michael-nyqvist.jpg'
      },
      {
        name: 'Alfie Allen',
        bio: 'Alfie Allen is an English actor known for his role as Theon Greyjoy in Game of Thrones.',
        image: 'actors/alfie-allen.jpg'
      }
    ],
    details: {
      country: 'United States',
      language: 'English',
      production: 'Summit Entertainment',
      genre: 'Action, Crime, Thriller',
      director: 'Chad Stahelski',
      runtime: '101 min'
    }
  },
  'Barbie': {
    title: 'Barbie',
    releaseDate: '21 Jul 2023',
    description: 'Barbie suffers a crisis that leads her to question her world and her existence.',
    trailerUrl: 'videos/barbie-trailer.mp4',
    actors: [
      {
        name: 'Margot Robbie',
        bio: 'Margot Robbie is an Australian actress and producer known for her roles in The Wolf of Wall Street and I, Tonya.',
        image: 'actors/margot-robbie.jpg'
      },
      {
        name: 'Ryan Gosling',
        bio: 'Ryan Gosling is a Canadian actor known for his roles in The Notebook and La La Land.',
        image: 'actors/ryan-gosling.jpg'
      },
      {
        name: 'America Ferrera',
        bio: 'America Ferrera is an American actress known for her role in Ugly Betty and Superstore.',
        image: 'actors/america-ferrera.jpg'
      }
    ],
    details: {
      country: 'United States',
      language: 'English',
      production: 'Warner Bros. Pictures',
      genre: 'Adventure, Comedy, Fantasy',
      director: 'Greta Gerwig',
      runtime: '114 min'
    }
  }
};

// --- Go to Rate Movie page ---
function goToRateMovie() {
  if (movieSlug) {
    localStorage.setItem('currentMovie', movieSlug);
    window.location.href = 'rating.html';
  }
}