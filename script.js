//your JS code here. If required.
 const form = document.getElementById('book-form');
    const bookList = document.getElementById('book-list');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const title = document.getElementById('title').value.trim();
      const author = document.getElementById('author').value.trim();
      const isbn = document.getElementById('isbn').value.trim();

      if (!title || !author || !isbn) return;

      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
      `;

      bookList.appendChild(row);

      form.reset();
    });

    bookList.addEventListener('click', function (e) {
      if (e.target.classList.contains('delete')) {
        const row = e.target.closest('tr');
        if (row) row.remove();
      }
    });