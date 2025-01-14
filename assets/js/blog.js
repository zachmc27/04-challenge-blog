// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector('main');
const backButtonEl = document.getElementById('back');
console.log(readLocalStorage('posts'))


// TODO: Create a function that builds an element and appends it to the DOM

// ARTICLE is the container, H2 is the title, BLOCKQUOTE is the content, P is the user

function buildPost (post, i) {
  
   
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const blockquote = document.createElement('blockquote');
    const p = document.createElement('p')
    
    article.setAttribute('data-index', i)
    h2.textContent = post.title;
    blockquote.textContent = post.content;
    p.textContent = post.username;

    article.appendChild(h2);
    article.appendChild(blockquote);
    article.appendChild(p);

    mainEl.appendChild(article)
    
    
    
}
//problem: its posting the submitted post on the board but does not save it when the page is left and list all posts when i revisit

// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts () {
    const warning = document.createElement('p');
    warning.textContent = "No Blog posts yet..."

    mainEl.appendChild(warning)
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList () {
    
    //create an array for blog posts, get item that was just submitted from localstorage and add it to the array
    const posts = readLocalStorage()
    console.log(posts)
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i]
      console.log(post)
      buildPost(post, i)

     
    } if (posts.length === 0) {
        noPosts()
      }
}
// TODO: Call the `renderBlogList` function
renderBlogList()
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked




//formSubmission saves a post to an array of posts and puts that array into local storage.
//Then renderBlogList must go into localStorage, grab the array of posts, 
//and loop through each object in the array and run it through build posts. 
//Build post will put each object in the array on the page.