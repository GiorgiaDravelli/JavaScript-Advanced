import getBooks from "./getBooks.js"
import "./css/styles.css"
import newElement from "./newElement.js";

const searchButton = document.getElementById("search-btn");
const searchBar = document.getElementById("search-bar");
const bookContainer = document.getElementById("container");
const form = document.getElementById("form");
const loader = document.getElementById("loader");

function getData(e){
  e.preventDefault();

  let isLoading = true;

  bookContainer.innerHTML = "";

  try {
    
    const value = searchBar.value;
    const valueLower = searchBar.value.trim().toLowerCase().replaceAll(" ", "");
    if (!value) {
      alert("Please insert a valid search value");
      return false;
    }

    const url = `https://openlibrary.org/subjects/${valueLower}.json`;

    const response = fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        let books = data.works;
        let isLoading = false;
        getBooks(books);
        

        if (!books || books.length === 0) {
          const noBooks = newElement("div", "card-body text-center", "We couldn't find the books you were looking for. Please make sure you entered a valid subject and try again.")
          bookContainer.appendChild(noBooks);
        } else if (isLoading == true) {
          loader.style.visibility = "visible";
        }
    
        return;
      })
      .catch(error => {
        if ( response.status == 404) {
          alert("We could not find the book you are looking for. Try typing a valid category.");
          return;
        } else if (response.status != 200) {
          alert ("An error has occurred during your request: " + error.message);
          return
          }
      })
    
  } catch (err) {
    alert ("Something went wrong, we couldn't find the book you are searching for. Error: " + err.message);
    console.error(err.message);

  } finally {
    searchBar.value = "";
  }
};

form.addEventListener("submit", getData);




      
