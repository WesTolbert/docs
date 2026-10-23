const STORAGE_KEYS = {
  books: "amv-books",
  users: "amv-users",
  currentUser: "amv-current-user",
  shelves: "amv-bookshelves"
};

const DEFAULT_BOOKS = [
  {
    id: 1,
    title: "The Last Signal",
    author: "Aria Quinn",
    genre: "Sci-Fi",
    theme: "Space",
    rating: 4.9,
    amazon: "https://amazon.com",
    audible: "https://audible.com",
    cover: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 55%, #1f2937 100%)",
    blurb: "A lone archivist decodes a buried transmission that could rewrite humanity's future.",
    is_active: true
  },
  {
    id: 2,
    title: "Glass Tides",
    author: "Noah Vale",
    genre: "Fantasy",
    theme: "Adventure",
    rating: 4.8,
    amazon: "https://amazon.com",
    audible: "https://audible.com",
    cover: "linear-gradient(135deg, #14b8a6 0%, #0f766e 40%, #0f172a 100%)",
    blurb: "A hidden sea of living glass reveals a prophecy older than the city itself.",
    is_active: true
  },
  {
    id: 3,
    title: "Paper Horizon",
    author: "Lena Frost",
    genre: "Memoir",
    theme: "Travel",
    rating: 4.7,
    amazon: "https://amazon.com",
    audible: "https://audible.com",
    cover: "linear-gradient(135deg, #f59e0b 0%, #d97706 40%, #7c2d12 100%)",
    blurb: "A reflective journey across borders, memory, and the architecture of belonging.",
    is_active: true
  },
  {
    id: 4,
    title: "Moonlit Circuit",
    author: "Iris Holt",
    genre: "Thriller",
    theme: "Mystery",
    rating: 4.9,
    amazon: "https://amazon.com",
    audible: "https://audible.com",
    cover: "linear-gradient(135deg, #fb7185 0%, #be185d 35%, #312e81 100%)",
    blurb: "A crackling neural network and a missing prototype pull a city into a rogue signal storm.",
    is_active: true
  },
  {
    id: 5,
    title: "Cinder Atlas",
    author: "Milo Hart",
    genre: "Classics",
    theme: "History",
    rating: 4.6,
    amazon: "https://amazon.com",
    audible: "https://audible.com",
    cover: "linear-gradient(135deg, #6b7280 0%, #374151 40%, #111827 100%)",
    blurb: "A sweeping family chronicle of empire, memory, and the long arc of survival.",
    is_active: true
  },
  {
    id: 6,
    title: "Velvet Echo",
    author: "Sana Brooks",
    genre: "Romance",
    theme: "Love",
    rating: 4.8,
    amazon: "https://amazon.com",
    audible: "https://audible.com",
    cover: "linear-gradient(135deg, #f9a8d4 0%, #fca5a5 40%, #7c2d12 100%)",
    blurb: "Two artists find each other in the quiet aftershocks of a city-wide blackout.",
    is_active: true
  }
];

const DEFAULT_USERS = [
  {
    id: "admin-1",
    fullName: "Admin Reader",
    email: "admin@amv.local",
    password: "admin123",
    role: "admin"
  }
];

const DEFAULT_SHELVES = [
  {
    id: "demo-shelf-1",
    userId: "admin-1",
    name: "Spring shelf",
    createdAt: new Date().toISOString(),
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
    entries: [
      { title: "The Left Hand of Darkness", category: "Sci-Fi", author: "Ursula K. Le Guin" },
      { title: "Beloved", category: "Classics", author: "Toni Morrison" },
      { title: "The Secret Life of Bees", category: "Fiction", author: "Sue Monk Kidd" }
    ]
  }
];

const grid = document.getElementById("book-grid");
const searchInput = document.getElementById("searchInput");
const resultsCount = document.getElementById("resultsCount");
const authPanel = document.getElementById("authPanel");
const profilePanel = document.getElementById("profilePanel");
const adminPanel = document.getElementById("adminPanel");
const loginToggle = document.getElementById("loginToggle");
const signupToggle = document.getElementById("signupToggle");
const logoutBtn = document.getElementById("logoutBtn");
const authMessage = document.getElementById("authMessage");
const adminMessage = document.getElementById("adminMessage");
const profileName = document.getElementById("profileName");
const profileRole = document.getElementById("profileRole");
const readingStreak = document.getElementById("readingStreak");
const genreTabs = Array.from(document.querySelectorAll(".chip"));
const authTabs = Array.from(document.querySelectorAll(".auth-tab"));
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const adminBookForm = document.getElementById("adminBookForm");
const addShelfToggle = document.getElementById("addShelfToggle");
const bookshelfFormWrapper = document.getElementById("bookshelfFormWrapper");
const bookshelfForm = document.getElementById("bookshelfForm");
const bookshelfPreview = document.getElementById("bookshelfPreview");
const bookshelfCarousel = document.getElementById("bookshelfCarousel");
const prevShelfBtn = document.getElementById("prevShelf");
const nextShelfBtn = document.getElementById("nextShelf");

let activeGenre = "All";
let currentUser = null;
let currentShelfIndex = 0;

function loadJSON(key, fallback) {
  const raw = localStorage.getItem(key);
  if (!raw) {
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getBooks() {
  return loadJSON(STORAGE_KEYS.books, DEFAULT_BOOKS);
}

function setBooks(value) {
  saveJSON(STORAGE_KEYS.books, value);
}

function getUsers() {
  return loadJSON(STORAGE_KEYS.users, DEFAULT_USERS);
}

function setUsers(value) {
  saveJSON(STORAGE_KEYS.users, value);
}

function getCurrentUser() {
  const stored = localStorage.getItem(STORAGE_KEYS.currentUser);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

function setCurrentUser(user) {
  if (!user) {
    localStorage.removeItem(STORAGE_KEYS.currentUser);
    return;
  }

  localStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(user));
}

function getBookshelves() {
  return loadJSON(STORAGE_KEYS.shelves, DEFAULT_SHELVES);
}

function setBookshelves(value) {
  saveJSON(STORAGE_KEYS.shelves, value);
}

function showAuthStatus(message, type = "info") {
  if (!authMessage) return;
  authMessage.textContent = message;
  authMessage.className = "status-text" + (type === "error" ? " error" : "");
}

function showAdminStatus(message, type = "info") {
  if (!adminMessage) return;
  adminMessage.textContent = message;
  adminMessage.className = "status-text" + (type === "error" ? " error" : "");
}

function renderBooks(list) {
  if (!grid) return;

  grid.innerHTML = list
    .map((book) => {
      const genreText = (book.genre || "General").toUpperCase();
      const themeText = (book.theme || "General").toUpperCase();

      return `
        <article class="book-card">
          <div class="book-cover" style="background: ${book.cover};">
            <div class="cover-meta">
              <span>${genreText}</span>
              <span>${book.rating ? `★ ${book.rating.toFixed(1)}` : "NEW"}</span>
            </div>
          </div>

          <div class="card-body">
            <h3>${book.title}</h3>
            <div class="meta-row">
              <span>${book.author}</span>
              <span>${themeText}</span>
            </div>
            <p>${book.blurb || "A thoughtful recommendation waiting to be discovered."}</p>

            <div class="card-footer">
              <span class="rating">★ ${book.rating ? Number(book.rating).toFixed(1) : "4.8"}</span>
              <div class="links">
                <a href="${book.amazon || "https://amazon.com"}" target="_blank" rel="noreferrer">Amazon</a>
                <a href="${book.audible || "https://audible.com"}" target="_blank" rel="noreferrer">Audible</a>
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
  const books = getBooks();

  const filtered = books.filter((book) => {
    const matchesQuery =
      !query ||
      (book.title && book.title.toLowerCase().includes(query)) ||
      (book.author && book.author.toLowerCase().includes(query)) ||
      (book.genre && book.genre.toLowerCase().includes(query)) ||
      (book.theme && book.theme.toLowerCase().includes(query));

    const matchesGenre = activeGenre === "All" || book.genre === activeGenre;
    return matchesQuery && matchesGenre;
  });

  renderBooks(filtered);
}

function setAuthTab(tabName) {
  authTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.authTab === tabName));
  const loginFormEl = document.getElementById("loginForm");
  const signupFormEl = document.getElementById("signupForm");

  if (loginFormEl) loginFormEl.classList.toggle("active", tabName === "login");
  if (signupFormEl) signupFormEl.classList.toggle("active", tabName === "signup");
}

function renderAuthState() {
  const isLoggedIn = Boolean(currentUser);

  if (loginToggle) loginToggle.classList.toggle("hidden", isLoggedIn);
  if (signupToggle) signupToggle.classList.toggle("hidden", isLoggedIn);
  if (logoutBtn) logoutBtn.classList.toggle("hidden", !isLoggedIn);

  if (authPanel) authPanel.classList.toggle("hidden", isLoggedIn);
  if (profilePanel) profilePanel.classList.toggle("hidden", !isLoggedIn);

  if (currentUser) {
    const name = currentUser.fullName || currentUser.email?.split("@")[0] || "Reader";
    if (profileName) profileName.textContent = name;
    if (profileRole) {
      profileRole.textContent = currentUser.role || "user";
      profileRole.classList.toggle("admin", currentUser.role === "admin");
    }
    if (readingStreak) readingStreak.textContent = `${currentUser.role === "admin" ? 12 : 5} days`;
  }

  if (adminPanel) {
    const isAdmin = currentUser?.role === "admin";
    adminPanel.classList.toggle("hidden", !isAdmin);
  }
}

function renderBookshelfCarousel() {
  if (!bookshelfCarousel) return;

  const shelves = getBookshelves().filter((shelf) => shelf.userId === currentUser?.id || currentUser?.role === "admin");

  if (!shelves.length) {
    bookshelfCarousel.innerHTML = `
      <div class="bookshelf-slide active">
        <div class="bookshelf-meta">
          <h5>No bookshelf yet</h5>
          <p class="label">Add your first shelf to start tracking your library.</p>
        </div>
      </div>
    `;
    return;
  }

  bookshelfCarousel.innerHTML = shelves
    .map(
      (shelf, index) => `
        <article class="bookshelf-slide ${index === currentShelfIndex ? "active" : ""}">
          <img src="${shelf.image || "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80"}" alt="${shelf.name}" />
          <div class="bookshelf-meta">
            <h5>${shelf.name || "My bookshelf"}</h5>
            <div class="bookshelf-stats">
              <span>${(shelf.entries || []).length} books</span>
              <span>${new Date(shelf.createdAt).toLocaleDateString()}</span>
            </div>
            <div class="bookshelf-items">
              ${(shelf.entries || []).slice(0, 5).map((entry) => `<span class="mini-tag">${entry.category || "General"}</span>`).join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");

  if (prevShelfBtn) prevShelfBtn.disabled = shelves.length <= 1;
  if (nextShelfBtn) nextShelfBtn.disabled = shelves.length <= 1;
}

function setCurrentUserState() {
  currentUser = getCurrentUser();
  renderAuthState();
  renderBookshelfCarousel();
  applyFilters();
}

function handleSignup(event) {
  event.preventDefault();

  const fullName = new FormData(signupForm).get("fullName").toString().trim();
  const email = new FormData(signupForm).get("email").toString().trim();
  const password = new FormData(signupForm).get("password").toString();

  if (!fullName || !email || password.length < 6) {
    showAuthStatus("Please enter a valid name, email, and password longer than 6 characters.", "error");
    return;
  }

  const users = getUsers();
  const existing = users.find((user) => user.email.toLowerCase() === email.toLowerCase());

  if (existing) {
    showAuthStatus("An account with that email already exists.", "error");
    return;
  }

  const newUser = {
    id: `user-${Date.now()}`,
    fullName,
    email,
    password,
    role: "user"
  };

  users.push(newUser);
  setUsers(users);

  currentUser = newUser;
  setCurrentUser(newUser);
  signupForm.reset();
  showAuthStatus("Account created successfully.");
  renderAuthState();
  renderBookshelfCarousel();
}

function handleLogin(event) {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");

  const users = getUsers();
  const match = users.find(
    (user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password
  );

  if (!match) {
    showAuthStatus("Invalid email or password.", "error");
    return;
  }

  currentUser = match;
  setCurrentUser(match);
  loginForm.reset();
  showAuthStatus("Login successful.");
  renderAuthState();
  renderBookshelfCarousel();
}

function handleLogout() {
  currentUser = null;
  setCurrentUser(null);
  renderAuthState();
  renderBookshelfCarousel();
  showAuthStatus("You have been logged out.");
}

function handleAddBook(event) {
  event.preventDefault();

  if (!currentUser || currentUser.role !== "admin") {
    showAdminStatus("Only administrators can add books.", "error");
    return;
  }

  const formData = new FormData(adminBookForm);
  const title = String(formData.get("title") || "").trim();
  const author = String(formData.get("author") || "").trim();
  const genre = String(formData.get("genre") || "").trim();
  const theme = String(formData.get("theme") || "").trim();
  const rating = Number(formData.get("rating") || 4.8);
  const amazon = String(formData.get("amazon") || "").trim();
  const audible = String(formData.get("audible") || "").trim();
  const cover = String(formData.get("cover") || "").trim();

  if (!title || !author || !genre) {
    showAdminStatus("Please complete the required fields before saving a book.", "error");
    return;
  }

  const books = getBooks();
  books.unshift({
    id: Date.now(),
    title,
    author,
    genre,
    theme,
    rating,
    amazon,
    audible,
    cover,
    blurb: `${genre} picks curated for an unforgettable reading experience.`,
    is_active: true
  });

  setBooks(books);
  adminBookForm.reset();
  showAdminStatus("Book added successfully.");
  applyFilters();
}

function handleBookshelfPreview(event) {
  const [file] = event.target.files || [];
  if (!file) {
    bookshelfPreview.classList.add("hidden");
    bookshelfPreview.innerHTML = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = (loadEvent) => {
    bookshelfPreview.classList.remove("hidden");
    bookshelfPreview.innerHTML = `<img src="${loadEvent.target.result}" alt="Bookshelf preview" />`;
  };
  reader.readAsDataURL(file);
}

function handleBookshelfSubmit(event) {
  event.preventDefault();

  if (!currentUser) {
    showAuthStatus("Please log in to save a bookshelf.", "error");
    return;
  }

  const formData = new FormData(bookshelfForm);
  const title = String(formData.get("shelfTitle") || "").trim() || `${currentUser.fullName}'s shelf`;
  const imageFile = formData.get("shelfImage");

  let imageData = "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80";

  if (imageFile && imageFile.name) {
    const reader = new FileReader();
    reader.onload = () => {
      const shelves = getBookshelves();
      shelves.unshift({
        id: `shelf-${Date.now()}`,
        userId: currentUser.id,
        name: title,
        createdAt: new Date().toISOString(),
        image: String(reader.result),
        entries: [
          { title: "Shelf pick 1", category: "Fantasy", author: "Curated" },
          { title: "Shelf pick 2", category: "Classics", author: "Curated" },
          { title: "Shelf pick 3", category: "Memoir", author: "Curated" }
        ]
      });
      setBookshelves(shelves);
      currentShelfIndex = 0;
      renderBookshelfCarousel();
      bookshelfForm.reset();
      bookshelfPreview.classList.add("hidden");
      bookshelfPreview.innerHTML = "";
      bookshelfFormWrapper.classList.add("hidden");
    };
    reader.readAsDataURL(imageFile);
    return;
  }

  const shelves = getBookshelves();
  shelves.unshift({
    id: `shelf-${Date.now()}`,
    userId: currentUser.id,
    name: title,
    createdAt: new Date().toISOString(),
    image: imageData,
    entries: [
      { title: "Shelf pick 1", category: "Fantasy", author: "Curated" },
      { title: "Shelf pick 2", category: "Classics", author: "Curated" },
      { title: "Shelf pick 3", category: "Memoir", author: "Curated" }
    ]
  });
  setBookshelves(shelves);
  currentShelfIndex = 0;
  renderBookshelfCarousel();
  bookshelfForm.reset();
  bookshelfFormWrapper.classList.add("hidden");
}

function cycleShelf(direction) {
  const shelves = getBookshelves().filter((shelf) => shelf.userId === currentUser?.id || currentUser?.role === "admin");
  if (!shelves.length) return;

  currentShelfIndex = (currentShelfIndex + direction + shelves.length) % shelves.length;
  renderBookshelfCarousel();
}

function initialize() {
  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }

  if (signupForm) {
    signupForm.addEventListener("submit", handleSignup);
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", handleLogout);
  }

  if (adminBookForm) {
    adminBookForm.addEventListener("submit", handleAddBook);
  }

  if (loginToggle) {
    loginToggle.addEventListener("click", () => setAuthTab("login"));
  }

  if (signupToggle) {
    signupToggle.addEventListener("click", () => setAuthTab("signup"));
  }

  authTabs.forEach((tab) => {
    tab.addEventListener("click", () => setAuthTab(tab.dataset.authTab));
  });

  genreTabs.forEach((chip) => {
    chip.addEventListener("click", () => {
      genreTabs.forEach((button) => button.classList.toggle("active", button === chip));
      activeGenre = chip.textContent.trim();
      applyFilters();
    });
  });

  if (addShelfToggle) {
    addShelfToggle.addEventListener("click", () => {
      bookshelfFormWrapper.classList.toggle("hidden");
    });
  }

  if (bookshelfForm) {
    bookshelfForm.addEventListener("submit", handleBookshelfSubmit);
  }

  if (bookshelfFormWrapper) {
    const fileInput = bookshelfForm.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.addEventListener("change", handleBookshelfPreview);
    }
  }

  if (prevShelfBtn) prevShelfBtn.addEventListener("click", () => cycleShelf(-1));
  if (nextShelfBtn) nextShelfBtn.addEventListener("click", () => cycleShelf(1));

  setCurrentUserState();
  applyFilters();
}

initialize();

window.addEventListener("storage", () => {
  setCurrentUserState();
  applyFilters();
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize);
}

if (profileRole && currentUser && currentUser.role === "admin") {
  profileRole.classList.add("admin");
}
