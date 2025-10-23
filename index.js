// Write your code here!


// fucntion to display the posts
function displayPosts(posts) {
const ul = document.getElementById('post-list');
if (!ul) return;
ul.innerHTML = "";

//looping through the list of posts
posts.forEach(post => {

    //creating the li tag
    const li = document.createElement('li');

    //creating the new h1 tag
    const h1 = document.createElement('h1');
    h1.textContent = post.title; // to add the tittle as textContent

    //creating the new p tag
    const p = document.createElement('p');
    p.textContent = post.body; // to add the body as textContent

    // append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);

    //apend li to the ul
    ul.appendChild(li);

});
}

// refactor with async/await
  async function loadPosts() {
      try {    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!response.ok) throw new error(`HTTP ${response.status}`)
    const data = await response.json();
    //calling displayPosts finction after fetch
    displayPosts(data);
    return data;
} catch (error) {
    console.error('error fetching posts:', error);
    return [];
}
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => { loadPosts(); });
} else {
  loadPosts();
}