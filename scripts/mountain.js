"use strict";

const mountainField = document.getElementById("mountainsField");
const cardSection = document.getElementById("card-section");

function loadMountSelect() {
  mountainField.innerHTML = "";
  let option = new Option("Select...", " ");
  mountainField.appendChild(option);
  mountainsArray.forEach((mountain) => {
    let newOption = new Option(mountain.name, mountain.name);
    mountainField.appendChild(newOption);
  });
}

function loadMountainInfo() {
  let selectedValue = mountainField.value;
  mountainsArray.forEach((mountain) => {
    if (selectedValue === mountain.name) {
      buildMountainCard(cardSection, mountain);
    }
  });
}



function buildMountainCard(section, mountain) {
  //create col div for BS
  let colDiv = document.createElement("div");
  colDiv.className = "col";

  //created the card
  const div = document.createElement("div");
  div.className = "card";
  div.style = "width: 22em;";
  //put inside the document or card section which is a div being used
  section.appendChild(colDiv);
  colDiv.appendChild(div);

  //create image
  let cardImg = document.createElement("img");
  cardImg.className = "card-img-top";
  cardImg.alt = mountain.name;
  cardImg.src = "../images/" + mountain.img;

  //create the title
  let cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.innerText = mountain.name;

  //add the description
  let desc = document.createElement("p");
  desc.innerText = mountain.desc;
  //add the elevation
  let elevation = document.createElement("p");
  elevation.innerText = `${mountain.elevation} ft`;
  //add additional info
  let addInfo = document.createElement("p");
  addInfo.innerText = `Effort: ${mountain.effort}
    Coordinates: ${mountain.coords.lat}, ${mountain.coords.lng}`;

  const divBody = document.createElement("div");
  divBody.className = "card-body";
  div.append(cardImg, cardTitle, desc, elevation, addInfo);

  //div.appendChild(cardTitle);
}

// function mountainImage(item) {
//   const img = document.createElement("img");
//   img.src = "images/" + item.img;
//   return img;
// }

// function mountainTitle(item) {
//   const text = document.createElement("div");
//   text.classList.add("card-title");
//   text.innerHTML = item.name;
//   return text;
// }

// function mountainCard(item) {
//   const card = document.createElement("div");
//   card.classList.add("card");
//   card.appendChild(mountainImage(item));
//   card.appendChild(mountainTitle(item));
//   return card;
// }

// document.addEventListener("DOMContentLoaded", () => {
//   mountainsArray.forEach((m) => document.body.appendChild(mountainCard(m)));
// });

window.onload = () => {
  loadMountSelect();
  //onclick = loadMountSelect;
  mountainField.onchange = loadMountainInfo;
};
