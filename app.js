const app = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(container);

var request = new XMLHttpRequest();

request.open("GET", "http://acnhapi.com/v1/fish/", true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach((fish) => {
      // console.log(fish["file-name"]);
      // console.log(fish.price);

      let name = fish["file-name"];
      const nameNoUS = name.replace(/_|\-/g, " ");

      let price = fish.price;

      const card = document.createElement("div");
      card.className = "card";

      let h3 = document.createElement("h3");
      h3.textContent = nameNoUS;

      let p = document.createElement("p");
      p.textContent = price + " bells";

      let img = document.createElement("img");
      img.setAttribute("src", fish["icon_uri"]);

      let btn = document.createElement("button");
      btn.innerHTML = "Add to Cart";
      btn.value = price;
      btn.onclick = bellTotal(this);

      card.appendChild(img);
      card.appendChild(h3);
      card.appendChild(p);
      card.appendChild(btn);

      container.appendChild(card);
    });
  } else {
    console.log("error");
  }
};

function bellTotal() {
  let item = document.getElementById.this;
  console.log(item);
}

request.send();
