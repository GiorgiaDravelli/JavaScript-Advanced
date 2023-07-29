import getInfo from "./getInfo.js";

function getBooks (books){
    books.forEach(book => {
      
      const bookContainer = document.getElementById("container");

      const card = document.createElement("div");
      card.className = "card col-sm-3 mt-3 mx-3";
      card.style.width = "18rem";
      bookContainer.appendChild(card);

      const cover = document.createElement("img")
      const coverImg = "https://covers.openlibrary.org/b/id/" + book.cover_id + "-M.jpg"
      cover.setAttribute("src", coverImg);
      card.appendChild(cover);
      cover.className = "card-img-top img-responsive mt-1";

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";
      card.appendChild(cardBody);

      const bookTitle = document.createElement("h5");
      bookTitle.className = "card-title";
      bookTitle.innerHTML = `${book.title}`;
      cardBody.appendChild(bookTitle);

      const bookAuthor = document.createElement("h6");
      bookAuthor.className = "card-text";
      bookAuthor.innerHTML = `${book.authors.map(author => author.name).join(" , ")}`
      cardBody.appendChild(bookAuthor);
      
      const descriptionBtn = document.createElement("button");
      descriptionBtn.className = "description-btn btn btn-outline-secondary";
      descriptionBtn.innerHTML = "Description"
      cardBody.appendChild(descriptionBtn);

      getInfo(book, cardBody, descriptionBtn);
    })
 return;
}

export default getBooks;