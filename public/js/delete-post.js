async function deleteFormHandler(event) {
    event.preventDefault();

    // What will the value of has_nuts be if the box in the form is checked? 
  // The value of has_nuts will be true if the box is checked. 
  // What do we call this kind of operator?
  // We call this a ternary operator. It begins with a condition followed by a question mark and two code blocks separated by a :.
  // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // What part of our application will handle this 'put' request?
  // The Controller will handle this 'put' request.
    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE'
    });

    // What happens if the response is ok?
  // If the response is ok, that means that the event was updated successfully. 
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);