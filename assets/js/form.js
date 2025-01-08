// TODO: Create a variable that selects the form element
const formEl = document.querySelector('form')

// TODO: Create a function that handles the form submission.
// Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. 
// If the form is submitted with missing data, display an error message to the user.
function formSubmission(event) {
    event.preventDefault()
    const formData = {
    username:  document.getElementById('username').value,
    title: document.getElementById('title').value,
    content: document.getElementById('content').value
    }

   
    
     if (formData.username === "" || formData.title === "" || formData.content === "") {
        document.getElementById('error').textContent = 'Please complete the form.'
        setTimeout(() => {
            document.getElementById('error').textContent = ''
        }, 5000)
        return
    } 

    localStorage.setItem('formData', JSON.stringify(formData))
    redirectPage('blog.html')
    
}
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
const submitButton = document.querySelector('.submit-js')
submitButton.addEventListener('click', (event) => {
    formSubmission(event)
})

