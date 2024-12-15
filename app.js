import { posts } from "./index.js";

const mainSection = document.getElementById("main-section");

let count = 0;

for (let i = 0; i < posts.length; i++) {
  //console.log(posts[i].name);

  mainSection.innerHTML += `<section class="section-1">
        <img
          src=${posts[i].avatar}
          alt="head shot of Vincent van Gogh "
          class="avatar"
        />
        <div class="name-content">
          <p class="name" id="name">${posts[i].name}</p>
          <p class="address">${posts[i].location}</p>
        </div>
      </section>
      <section class="selfie">
        <img
          src=${posts[i].post}
          alt="sketch drawing of Vincent van Gogh"
          id="selfie"
        />
      </section> <footer>
        <div class="icons">
          <img src="images/like.png" alt="heart icon" id="heart-icon" />
          <img src="images/comment.png" alt="comment bubble icon" />
          <img src="images/share.png" alt="share icon" />
        </div>
        <p class="likes" id="likes">Click on the heart icon if you like this</p>
        <p class="comments">${posts[i].username}<span> ${posts[i].comment}</span></p>
      </footer>
      `;
  const heartIcon = document.getElementById("heart-icon");

  const likes = document.getElementById("likes");
  console.log(likes);

  heartIcon.addEventListener("click", addLikes);

  function addLikes() {
    count++;
    if (count === 1) {
      likes.textContent = `${count} like`;
    } else {
      likes.textContent = `${count} likes`;
    }
  }
}
