// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const themeButtonEl = document.querySelector('.theme-button-js')
const pageTheme = document.querySelector('.theme')
const circleEl = document.querySelector('aside');


pageTheme.classList.add(localStorage.getItem('theme') || 'light')
circleEl.style.setProperty('--circle-color', localStorage.getItem('circleColor'))

themeButtonEl.textContent = `${localStorage.getItem('theme-icon')}` 

if (themeButtonEl.textContent === 'null') {
  themeButtonEl.textContent = "☀️"
}

themeButtonEl.addEventListener('click', (event) => {

 
 const element = event.target
 
  if(element.matches('.theme-button-js')) {
  if (pageTheme.classList.contains('light')) {
    themeButtonEl.textContent = "🌙"
    pageTheme.setAttribute("class", "dark")
    circleEl.style.setProperty('--circle-color', '#563d7c')

    localStorage.setItem('circleColor', '#563d7c')
    localStorage.setItem('theme', 'dark')
    localStorage.setItem('theme-icon', '🌙')
  } else if (pageTheme.classList.contains('dark')) {
    themeButtonEl.textContent = "☀️"
    pageTheme.setAttribute("class", "light")
    circleEl.style.setProperty('--circle-color', '#ffb100')

    localStorage.setItem('circleColor', '#ffb100')
    localStorage.setItem('theme', 'light')
    localStorage.setItem('theme-icon', '☀️')
  }
}
}) 

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage () {
  return JSON.parse(localStorage.getItem('posts')) || []
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage (posts) {
  localStorage.setItem('posts', JSON.stringify(posts))
}


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
