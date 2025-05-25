const output = document.querySelector("#output");
const button = document.querySelector("#get-posts-btn");
const form = document.querySelector("#add-post-form");

async function showPosts() {
  try {
    const res = await fetch("http://localhost:8000/api/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await res.json();
    output.innerHTML = "";

    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.textContent = post.title;
      output.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

//submit the form
async function addPost(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  const formData = new FormData(this); // Get the form data
  const title = formData.get("title"); // Get the title from the form data

  try {
    const res = await fetch("http://localhost:8000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }), // Send the title as JSON
    });

    if (!res.ok) {
      throw new Error("Failed to add post");
    }

    const newPost = await res.json();
    const postElement = document.createElement("div");

    postElement.textContent = newPost.title;
    output.appendChild(postElement);
    showPosts(); // Refresh the posts list
  } catch (error) {
    console.error("Error adding post:", error);
  }
}

// Add event listener to the button
button.addEventListener("click", showPosts);
form.addEventListener("submit", addPost);
