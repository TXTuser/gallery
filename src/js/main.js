import { db } from "./db.js";
let parent = document.getElementsByClassName("container")[0];

for (let i = 0; i < db.length; i++) {
  let card = `
    <div class="card">
    <img src="${db[i].img}" alt="">
    <div class="info">
        <p class="name">${db[i].name}</p>
        <p class="artist">${db[i].artist}</p>
        <p class="description">${db[i].description}</p>
        <a href="${db[i].museum}" target="_blank">Museum</a>
        <a href="#/">More</a>
    </div>
</div>
    `;
  parent.innerHTML = parent.innerHTML + card;
}
