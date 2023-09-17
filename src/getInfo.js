import newElement from "./newElement.js";
let bookContainer = document.getElementById("container");

function getInfo(book, cardBody, descriptionBtn) {
  const url = `https://openlibrary.org${book.key}.json`;

  fetch(url)
    .then(response => response.json())
    .then(data => {

      const bookDescription = newElement("p", "card-text d-none", data.description)
      cardBody.appendChild(bookDescription);

      // const closeBtn = newElement("button", "description-btn btn btn-outline-secondary d-none", "Close")
      // cardBody.appendChild(closeBtn);

      // descriptionBtn.addEventListener("click", function () {
      //   bookDescription.classList.remove("d-none");
      //   descriptionBtn.className = "d-none";
      //   closeBtn.classList.remove("d-none");
      // });

      // closeBtn.addEventListener("click", function () {
      //   closeBtn.className = "description-btn btn btn-outline-secondary d-none";
      //   descriptionBtn.className = "description-btn btn btn-outline-secondary";
      //   bookDescription.className = "d-none";
      // });

      bookContainer.addEventListener('click', (e) => {
        if(e.target.tagName === "BUTTON"){
          if(bookDescription.className === 'card-text d-none'){
            bookDescription.classList.remove("d-none");
            descriptionBtn.innerHTML = "Close"
          } else {
            bookDescription.className = "card-text d-none"
            descriptionBtn.innerHTML = "Description"
          }
        } else return;
      })
    })
    .catch( error => {
      alert ("Something went wrong, we couldn't find the description for this book. Error: " + error.message);
      console.error(error.message);
    });
}

export default getInfo;