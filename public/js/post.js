const newFormHandler = async (event) => {
    event.preventDefault();
  
    const postTitle = document.querySelector('#post-title').value.trim();
    const postBody = document.querySelector('#post-body').value.trim();
  
    if (postTitle && postBody) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ postTitle, postBody }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/{{post.id}}');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);

  