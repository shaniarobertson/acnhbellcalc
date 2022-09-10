const searchBox = document.getElementById("searchBox");
let allItems = [];

searchBox.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredItems = allItems.filter((item) => {
    return item.name.toLowerCase().includes(searchString);
  });
  displayAllItems(filteredItems);
});

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

function displayAllItems() {
  renderFish();
  renderSea();
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
