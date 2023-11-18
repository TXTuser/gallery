import { db } from "./db.js";
let parent = document.getElementsByClassName("container")[0];
let popUp = document.getElementById("PopUp");

for (let i = 0; i < db.length; ++i) {
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
          <a href="#/"class="open_pop_up" id="openPopUp">More</a>
      </div>
      </div>
  </div>
</div>
    `;
  parent.innerHTML = parent.innerHTML + card;
}

for (let b of document.getElementsByClassName("open_pop_up")) {
  b.onclick = (event) => openModal(event);
}

for (let b of document.getElementsByClassName("pop_up_close")) {
  b.onclick = (event) => closeModal(event);
}

function openModal(e) {
  e.preventDefault();
  popUp.classList.add("active");
  popUpImg.src = `${e.target.parentNode.parentNode.parentNode.parentNode.children[0].src}`;
}

function closeModal(e) {
  e.preventDefault();
  popUp.classList.remove("active");
}
