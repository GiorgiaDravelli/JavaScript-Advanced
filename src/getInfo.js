import newElement from "./newElement.js";

function getInfo(book, cardBody, descriptionBtn) {
  const url = `https://openlibrary.org${book.key}.json`;

  fetch(url)
    .then(response => response.json())
    .then(data => {

      const bookDescription = newElement("p", "card-text d-none", data.description)
      cardBody.appendChild(bookDescription);

      const closeBtn = newElement("button", "description-btn btn btn-outline-secondary d-none", "Close")
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
    .catch( error => {
      alert ("Something went wrong, we couldn't find the description for this book. Error: " + err.message);
      console.error(err.message);
    });
}

export default getInfo;