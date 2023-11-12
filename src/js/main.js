import { db } from "./db.js";
let parent = document.getElementsByClassName("container")[0];

for (let i = 0; i < db.length; i++) {
  let card = `
  <div class="card">
  <img src="${db[i].img}" alt="">
  <div class="info">
      <div class="info__top-side">
          <p class="name">${db[i].name}</p>
          <p class="artist">${db[i].artist}</p>
      </div>
      <div class="info_bottom-side">
          <p class="description">${db[i].description}</p>
      <div class="info_bottom-menu"> 
          <a href="${db[i].museum}" target="_blank">Museum</a>
          <a href="#/">More</a>
      </div>
      </div>
  </div>
</div>
    `;
  parent.innerHTML = parent.innerHTML + card;
}
