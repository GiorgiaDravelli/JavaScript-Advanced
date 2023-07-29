import getBooks from "./getBooks.js"
import "./css/styles.css"

const searchButton = document.getElementById("search-btn");

const container = document.getElementById("container");

function getData(){
  try {
    const value = document.getElementById("search-bar").value;
    const valueLower = value.toLowerCase();
    if (!value) {
      alert("Please insert a valid search value");
      return false;
    }

    const url = `https://openlibrary.org/subjects/${valueLower}.json`;

    const response = fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
       
        const books = data.works;
        getBooks(books);
    
        return;
      })
      .catch(error => {
        if ( response.status == 404) {
          alert("We could not find the book you are looking for.");
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
    alert ("Something went wrong" + err.message);
    console.error(err.message);
  }
};

searchButton.addEventListener("click", getData);




      
