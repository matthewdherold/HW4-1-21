const commentSelect = document.querySelector("#comment");

const newCommentHandler = () => {
  const form = document.createElement("div");
  const textArea = document.createElement("input");
  const commentButton = document.createElement("button");
  commentButton.textContent = "Submit";
  commentButton.classList.add("submitComment");
  commentSelect.appendChild(form);
  form.appendChild(textArea);
  form.appendChild(commentButton);
  const submitComment = async (e) => {
    e.preventDefault();
    const post_id = document.location.pathname.split("/")[2];
    const content = textArea.value;
    if (content) {
      const response = await fetch(`/api/comments`, {
        method: "POST",
        body: JSON.stringify({ post_id, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert("Error, failed to comment");
      }
    }
  };
  document
    .querySelector(".submitComment")
    .addEventListener("click", submitComment);
};

document
  .querySelector("#addComment")
  .addEventListener("click", newCommentHandler);

const commentingInfo = async () => {
  const post_id = document.location.pathname.split("/")[2];
  const commentRequest = await fetch("/comment/:id", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};