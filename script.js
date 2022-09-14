function collapse() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "flex") {
        content.style.display = "none";
      } else {
        content.style.display = "flex";
      }
    });
  }
}

/*
let urlFish = fetch("http://acnhapi.com/v1a/fish/");
let urlSea = fetch("http://acnhapi.com/v1a/sea/");
let urlBugs = fetch("http://acnhapi.com/v1a/bugs/");
let urlFossils = fetch("http://acnhapi.com/v1a/fossils/");
*/

// Fish
async function getFish() {
  let url = "http://acnhapi.com/v1a/fish/";
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderFish() {
  let data = await getFish();
  let html = "";

  data.forEach((fish) => {
    let name = fish["file-name"].replace(/_|\-/g, " ");
    let price = fish.price;

    let htmlSegment = `<div class="item">
                              <h2>${name}</h2>
                              <h3>${fish.price}</h3>
                              <button class="priceButton" value=${fish.price} onclick="btnEvent()">Add to Cart</button>
                          </div>`;
    html += htmlSegment;
  });

  let fishContainer = document.querySelector(".fish-container");
  fishContainer.innerHTML = html;
}

// Sea
async function getSea() {
  let url = "http://acnhapi.com/v1a/sea/";
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderSea() {
  let data = await getSea();
  let html = "";

  data.forEach((sea) => {
    let name = sea["file-name"].replace(/_|\-/g, " ");
    let price = sea.price;

    let htmlSegment = `<div class="item">
                              <h2>${name}</h2>
                              <h3>${sea.price}</h3>
                              <button class="priceButton" value=${sea.price} onclick="btnEvent()">Add to Cart</button>
                          </div>`;
    html += htmlSegment;
  });

  let seaContainer = document.querySelector(".sea-container");
  seaContainer.innerHTML = html;
}

// Bugs
async function getBugs() {
  let url = "http://acnhapi.com/v1a/bugs/";
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderBugs() {
  let data = await getBugs();
  let html = "";

  data.forEach((bugs) => {
    let name = bugs["file-name"].replace(/_|\-/g, " ");
    let price = bugs.price;

    let htmlSegment = `<div class="item">
                              <h2>${name}</h2>
                              <h3>${bugs.price}</h3>
                              <button class="priceButton" value=${bugs.price} onclick="btnEvent()">Add to Cart</button>
                          </div>`;
    html += htmlSegment;
  });

  let bugsContainer = document.querySelector(".bugs-container");
  bugsContainer.innerHTML = html;
}

// Fossils
async function getFossils() {
  let url = "http://acnhapi.com/v1a/fossils/";
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderFossils() {
  let data = await getFossils();
  let html = "";

  data.forEach((fossils) => {
    let name = fossils["file-name"].replace(/_|\-/g, " ");
    let price = fossils.price;

    let htmlSegment = `<div class="item">
                              <h2>${name}</h2>
                              <h3>${fossils.price}</h3>
                              <button class="priceButton" value=${fossils.price} onclick="btnEvent()">Add to Cart</button>
                          </div>`;
    html += htmlSegment;
  });

  let fossilsContainer = document.querySelector(".fossils-container");
  fossilsContainer.innerHTML = html;
}

function displayAllItems() {
  renderFish();
  renderSea();
  renderBugs();
  renderFossils();
}

function btnEvent() {
  let btn = document.querySelectorAll(".priceButton");
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", getPrice);
  }
}

function getPrice() {
  let itemPrice = parseInt(this.value);
  //console.log(itemPrice);
  total(itemPrice);
}

let sum = 0;
function total(itemPrice) {
  sum += itemPrice;
  //console.log(sum);

  let html = "";
  let htmlSegment = `<p>Total: ${sum} bells</p>`;
  html += htmlSegment;

  let totalContainer = document.querySelector(".total-container");
  totalContainer.innerHTML = html;
}

displayAllItems();
