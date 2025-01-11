// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector('main');
const backButtonEl = document.getElementById('back');
const posts = []


// TODO: Create a function that builds an element and appends it to the DOM

// ARTICLE is the container, H2 is the title, BLOCKQUOTE is the content, P is the user

function buildPost (i) {
    const post = posts[i];

    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const blockquote = document.createElement('blockquote');
    const p = document.createElement('p');

    article.setAttribute('data-index', i)
    h2.textContent = post.title;
    blockquote.textContent = post.content;
    p.textContent = post.username;

    article.appendChild(h2);
    article.appendChild(blockquote);
    article.appendChild(p);

    mainEl.appendChild(article)

}


// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts () {
  if (posts.length === 0) {
    const warning = document.createElement('p');
    warning.textContent = "There are no posts to display right now..."

    mainEl.appendChild(warning)
  }
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList () {
    //create an array for blog posts, get item that was just submitted from localstorage and add it to the array

}
// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
