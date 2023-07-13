      // Get the like button element and the like count element
      const likeButton = document.querySelector(".like-button");
      const likeCountElement = document.getElementById("like-count");

      // Function to toggle the like button and update the like count
      function toggleLike() {
        const action = likeButton.classList.contains("active")
          ? "decrement"
          : "increment";
        fetch("http://localhost:3000/likes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ action }),
        })
          .then((response) => response.json())
          .then((data) => {
            likeCount = data.count;
            likeButton.classList.toggle("active");
            likeCountElement.textContent = likeCount;
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }

      // Function to fetch the like count on page load
      function fetchLikeCount() {
        fetch("http://localhost:3000/likes")
          .then((response) => response.json())
          .then((data) => {
            likeCount = data.count;
            likeCountElement.textContent = likeCount;
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }

      // Add event listener to the like button
      likeButton.addEventListener("click", toggleLike);

      // Fetch the initial like count on page load
      fetchLikeCount();