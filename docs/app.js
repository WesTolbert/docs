const books = [
  {
    title: "The Last Signal",
    author: "Aria Quinn",
    genre: "Sci-Fi",
    theme: "Space",
    rating: 4.9,
    accent: "aurora",
    cover: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 55%, #1f2937 100%)",
    amazon: "https://amazon.com",
    audible: "https://audible.com",
    blurb: "A lone archivist decodes a buried transmission that could rewrite humanity's future."
  },
  {
    title: "Glass Tides",
    author: "Noah Vale",
    genre: "Fantasy",
    theme: "Adventure",
    rating: 4.8,
    accent: "lagoon",
    cover: "linear-gradient(135deg, #14b8a6 0%, #0f766e 40%, #0f172a 100%)",
    amazon: "https://amazon.com",
    audible: "https://audible.com",
    blurb: "A hidden sea of living glass reveals a prophecy older than the city itself."
  },
  {
    title: "Paper Horizon",
    author: "Lena Frost",
    genre: "Memoir",
    theme: "Travel",
    rating: 4.7,
    accent: "amber",
    cover: "linear-gradient(135deg, #f59e0b 0%, #d97706 40%, #7c2d12 100%)",
    amazon: "https://amazon.com",
    audible: "https://audible.com",
    blurb: "A reflective journey across borders, memory, and the architecture of belonging."
  },
  {
    title: "Moonlit Circuit",
    author: "Iris Holt",
    genre: "Thriller",
    theme: "Mystery",
    rating: 4.9,
    accent: "rose",
    cover: "linear-gradient(135deg, #fb7185 0%, #be185d 35%, #312e81 100%)",
    amazon: "https://amazon.com",
    audible: "https://audible.com",
    blurb: "A crackling neural network and a missing prototype pull a city into a rogue signal storm."
  },
  {
    title: "Cinder Atlas",
    author: "Milo Hart",
    genre: "Classics",
    theme: "History",
    rating: 4.6,
    accent: "charcoal",
    cover: "linear-gradient(135deg, #6b7280 0%, #374151 40%, #111827 100%)",
    amazon: "https://amazon.com",
    audible: "https://audible.com",
    blurb: "A sweeping family chronicle of empire, memory, and the long arc of survival."
  },
  {
    title: "Velvet Echo",
    author: "Sana Brooks",
    genre: "Romance",
    theme: "Love",
    rating: 4.8,
    accent: "peach",
    cover: "linear-gradient(135deg, #f9a8d4 0%, #fca5a5 40%, #7c2d12 100%)",
    amazon: "https://amazon.com",
    audible: "https://audible.com",
    blurb: "Two artists find each other in the quiet aftershocks of a city-wide blackout."
  }
];

const grid = document.getElementById("book-grid");
const searchInput = document.getElementById("searchInput");
const resultsCount = document.getElementById("resultsCount");
const chips = Array.from(document.querySelectorAll(".chip"));

let activeGenre = "All";

function renderBooks(list) {
  if (!grid) return;

  grid.innerHTML = list
    .map((book) => {
      const uppercaseGenre = book.genre.toUpperCase();
      const uppercaseTheme = book.theme.toUpperCase();

      return `
        <article class="book-card">
          <div class="book-cover" style="background: ${book.cover};">
            <div class="cover-meta">
              <span>${uppercaseGenre}</span>
              <span>${book.accent}</span>
            </div>
          </div>

          <div class="card-body">
            <h3>${book.title}</h3>
            <div class="meta-row">
              <span>${book.author}</span>
              <span>${uppercaseTheme}</span>
            </div>
            <p>${book.blurb}</p>

            <div class="card-footer">
              <span class="rating">★ ${book.rating.toFixed(1)}</span>
              <div class="links">
                <a href="${book.amazon}" target="_blank" rel="noreferrer">Amazon</a>
                <a href="${book.audible}" target="_blank" rel="noreferrer">Audible</a>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  if (resultsCount) {
    resultsCount.textContent = String(list.length);
  }
}

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = books.filter((book) => {
    const matchesQuery =
      !query ||
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.genre.toLowerCase().includes(query) ||
      book.theme.toLowerCase().includes(query);

    const matchesGenre = activeGenre === "All" || book.genre === activeGenre;
    return matchesQuery && matchesGenre;
  });

  renderBooks(filtered);
}

searchInput.addEventListener("input", applyFilters);

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((button) => button.classList.toggle("active", button === chip));
    activeGenre = chip.textContent.trim();
    applyFilters();
  });
});

renderBooks(books);
