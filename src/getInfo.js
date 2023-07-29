
function getInfo(book, cardBody, descriptionBtn) {
  const url = `https://openlibrary.org${book.key}.json`;

  fetch(url)
    .then(response => response.json())
    .then(data => {

      const bookDescription = document.createElement("p");
      bookDescription.className = "card-text d-none";
      bookDescription.innerHTML = data.description;
      cardBody.appendChild(bookDescription);

      const closeBtn = document.createElement("button");
      closeBtn.className = "description-btn btn btn-outline-secondary d-none";
      closeBtn.innerHTML = "Close"
      cardBody.appendChild(closeBtn);

      descriptionBtn.addEventListener("click", function () {
        bookDescription.classList.remove("d-none");
        descriptionBtn.className = "d-none";
        closeBtn.classList.remove("d-none");
      });

      closeBtn.addEventListener("click", function () {
        closeBtn.className = "description-btn btn btn-outline-secondary d-none";
        descriptionBtn.className = "description-btn btn btn-outline-secondary";
        bookDescription.className = "d-none";
      });
    })
    .catch(error => console.error(error.message));
}

export default getInfo;