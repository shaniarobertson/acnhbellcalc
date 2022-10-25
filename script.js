// Collapse Divs
function collapse() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "grid") {
        content.style.display = "none";
      } else {
        content.style.display = "grid";
      }
    });
  }
}

/*
fetch("http://acnhapi.com/v1a/fish/");
fetch("http://acnhapi.com/v1a/sea/");
fetch("http://acnhapi.com/v1a/bugs/");
fetch("http://acnhapi.com/v1a/fossils/");
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
    let photo = fish["icon_uri"];
    let price = fish.price;

    let htmlSegment = `<div class="card">
                          <h6 class="card-header">${name}</h6>
                          <img class="card-img-top" src=${photo} alt=${name} + "Image">
                          <div class="card-body>
                            <h3 class="card-title">${price} bells</h3>
                            <p>
                            <button class="priceButton" value=${price} onclick="btnEvent()">Add to Cart</button>
                            </p>
                          </div>
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
    let photo = sea["icon_uri"];
    let price = sea.price;

    let htmlSegment = `<div class="card">
                          <h6 class="card-header">${name}</h6>
                          <img class="card-img-top" src=${photo} alt=${name} + "Image">
                          <div class="card-body>
                            <h3 class="card-title">${price} bells</h3>
                            <p>
                            <button class="priceButton" value=${price} onclick="btnEvent()">Add to Cart</button>
                            </p>
                          </div>
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
    let photo = bugs["icon_uri"];
    let price = bugs.price;

    let htmlSegment = `<div class="card">
                          <h6 class="card-header">${name}</h6>
                          <img class="card-img-top" src=${photo} alt=${name} + "Image">
                          <div class="card-body>
                            <h3 class="card-title">${price} bells</h3>
                            <p>
                            <button class="priceButton" value=${price} onclick="btnEvent()">Add to Cart</button>
                            </p>
                          </div>
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
    let photo = fossils["image_uri"];
    let price = fossils.price;

    let htmlSegment = `<div class="card">
                          <h6 class="card-header">${name}</h6>
                          <img class="card-img-top" src=${photo} alt=${name} + "Image">
                          <div class="card-body>
                            <h3 class="card-title">${price} bells</h3>
                            <p>
                            <button class="priceButton" value=${price} onclick="btnEvent()">Add to Cart</button>
                            </p>
                          </div>
                        </div>`;
    html += htmlSegment;
  });

  let fossilsContainer = document.querySelector(".fossils-container");
  fossilsContainer.innerHTML = html;
}

// Fruit
function getFruit() {
  fetch("./fruits.json")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function renderFruit() {}

// Display
function displayAllItems() {
  renderFish();
  renderSea();
  renderBugs();
  renderFossils();
}

// "Add to Cart"
function btnEvent() {
  let btn = document.querySelectorAll(".priceButton");
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", getPrice);
  }
}

// Total Logic
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
  let htmlSegment = `<p>Total: ${sum} bells </p>`;
  html += htmlSegment;

  let totalContainer = document.querySelector("#total");
  totalContainer.innerHTML = html;
}

function resetTotal() {
  sum = 0;

  let html = "";
  let htmlSegment = `<p>Total: ${sum} bells </p>`;
  html += htmlSegment;

  let totalContainer = document.querySelector("#total");
  totalContainer.innerHTML = html;
}

displayAllItems();
