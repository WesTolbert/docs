const books = [
  {
    title: "The Example Book",
    author: "Jane Doe",
    genre: "Fantasy",
    theme: "Adventure",
    cover: "https://via.placeholder.com/200x300",
    amazon: "https://amazon.com/example",
    audible: "https://audible.com/example"
  },
  {
    title: "Another Great Read",
    author: "John Writer",
    genre: "Sci-Fi",
    theme: "Space",
    cover: "https://via.placeholder.com/200x300",
    amazon: "https://amazon.com/example2",
    audible: "https://audible.com/example2"
  }
];

const grid = document.getElementById("book-grid");
const searchInput = document.getElementById("searchInput");

function renderBooks(list) {
  grid.innerHTML = "";

  list.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";

    card.innerHTML = `
      <img src="${book.cover}" alt="${book.title}" />
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Genre:</strong> ${book.genre}</p>
      <p><strong>Theme:</strong> ${book.theme}</p>

      <div class="links">
        <a href="${book.amazon}" target="_blank">Amazon</a>
        <a href="${book.audible}" target="_blank">Audible</a>
      </div>
    `;

    grid.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();

  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(q) ||
    book.author.toLowerCase().includes(q) ||
    book.genre.toLowerCase().includes(q) ||
    book.theme.toLowerCase().includes(q)
  );

  renderBooks(filtered);
});

renderBooks(books);
