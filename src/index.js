import getBooks from "./getBooks.js"
import "./css/styles.css"

const searchButton = document.getElementById("search-btn");
const searchBar = document.getElementById("search-bar");
let bookContainer = document.getElementById("container");

function getData(){

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
        getBooks(books);
    
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
    
        if (response.status == 200) {
          data.work_count === 0 ? alert("Subject not found") : books;
        } else {
          alert("An error occurred: " + error.message);
          return;
        }

        console.error(error.message);
        alert("An error has occurred during your request.");
      })
    
  } catch (err) {
    alert ("Something went wrong, we couldn't find the book you are searching for. Error: " + err.message);
    console.error(err.message);

  } finally {
    searchBar.value = "";
  }
};

searchButton.addEventListener("click", getData);
searchBar.addEventListener('keydown', (e)=> {  
  if (e.key === 'Enter') {
      e.preventDefault()
      getData()
      }
    })




      
