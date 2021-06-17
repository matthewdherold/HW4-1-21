const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector("#post-name").value.trim();
    const hash_tag = document.querySelector("#post-tags").value.trim();
    const description = document.querySelector("#post-desc").value.trim();
  
    if ((name && hash_tag && description) || (name && description)) {
      const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({ name, hash_tag, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("Failed to mkae post");
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("Failed to delete post");
      }
    }
  };
  
  const updButtonHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({ name: `post${title}` }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        console.log(response);
      } else {
        alert("Failed to Update post");
      }
    }
  };
  
  const buttonHandler = async (event) => {
    if (event.target.classList.contains("upBtn")) {
      updButtonHandler(event);
    }
    if (event.target.classList.contains("delBtn")) {
      delButtonHandler(event);
    }
  };
  
  document
    .querySelector("#new-post-form")
    .addEventListener("submit", newFormHandler);
  
  document
    .querySelector("#post-list")
    .addEventListener("click", buttonHandler);