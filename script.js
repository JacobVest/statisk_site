window.addEventListener("DOMContentLoaded", init);

const apparelURL = "https://api.punkapi.com/v2/beers";

let apparelTemplate;
let apparelContainer;

function init() {
  console.log("init");

  apparelTemplate = document.querySelector(".apparel_template");
  console.log(".apparel_template", apparelTemplate);

  apparelContainer = document.querySelector(".apparel_container");
  console.log(".apparel_container", apparelContainer);

  fetch(apparelURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showApparel(json);
    });
}

function showApparel(apparelJSON) {
  let apparelClone;

  apparelJSON.forEach((apparel) => {
    let apparelClone = apparelTemplate.cloneNode(true).content;
    console.log("apparel", apparel);
    apparelClone.querySelector(".apparel_image").src = apparel.image_url;
    apparelClone.querySelector(".apparel_image").alt = apparel.image_url;
    apparelClone.querySelector(".apparel_name").textContent = apparel.name;
    apparelClone.querySelector(".apparel_tagline span").textContent = apparel.price;
    apparelClone.querySelector(".apparel_description").textContent = apparel.description;
    apparelContainer.appendChild(apparelClone);
  });
}
