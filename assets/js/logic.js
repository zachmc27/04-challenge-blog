// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const themeButtonEl = document.querySelector('.theme-button-js')
const pageTheme = document.querySelector('.theme')
console.log(pageTheme)
console.log(themeButtonEl)
themeButtonEl.addEventListener('click', (event) => {
 console.log('test')
 pageTheme.setAttribute("class", "test")
 /*const element = event.target

 let state = element.getAttribute('data-state')

 if (element.matches('theme-button-js')) {
  if (state === 'light') {
    pageTheme.setAttribute("class", "dark")
  } else if (state === 'dark') {
    pageTheme.setAttribute("class", "light")
  }
 } */
}) 

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage () {
  return JSON.parse(localStorage.getItem('blogPosts')) || []
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage (formData) {
  localStorage.setItem("blogPosts", JSON.stringify(formData))
}


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
