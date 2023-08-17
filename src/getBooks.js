import getInfo from "./getInfo.js";
import newElement from "./newElement.js";

let bookContainer = document.getElementById("container");

function getBooks (books){

  books.forEach(book => {

    const card = newElement("div", "card col-sm-3 mt-3 mx-3", "");
    card.style.width = "18rem";
    bookContainer.appendChild(card);

    const cover = newElement("img", "card-img-top img-responsive mt-1", "");
    const coverImg = "https://covers.openlibrary.org/b/id/" + book.cover_id + "-M.jpg"
    cover.setAttribute("src", coverImg);
    card.appendChild(cover);

    const cardBody = newElement("div", "card-body", "");
    card.appendChild(cardBody);

    const bookTitle = newElement("h5", "card-title", `${book.title}`);
    cardBody.appendChild(bookTitle);

    const bookAuthor = newElement("h6", "card-text", `${book.authors.map(author => author.name).join(" , ")}`);
    cardBody.appendChild(bookAuthor);

    const descriptionBtn = newElement("button", "description-btn btn btn-outline-secondary", "Description");
    cardBody.appendChild(descriptionBtn);

    getInfo(book, cardBody, descriptionBtn);
  })
 return;
}

export default getBooks; 