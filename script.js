window.addEventListener("DOMContentLoaded", init);

const apparelURL = "https://kea-alt-del.dk/t7/api/products";

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
    console.log(apparelClone);

    apparelClone.querySelector(".apparel_image").src = `https://kea-alt-del.dk/t7/images/webp/640/${apparel.id}.webp`;
    apparelClone.querySelector(".apparel_image").alt = apparel.productdisplayname;
    // apparelClone.querySelector(".apparel_link").href = `apparel.html?id=${apparel.id}`;

    apparelClone.querySelector(".apparel_displayname").textContent = apparel.productdisplayname;
    apparelClone.querySelector(".apparel_price span").textContent = apparel.price;
    apparelClone.querySelector(".discount").textContent = apparel.discount;

    apparelClone.querySelector(".apparel_brandname").textContent = apparel.brandname;

    console.log("apparel.discount", apparel.discount);

    if (apparel.discount) {
      apparelClone.querySelector(".udsalg").classList.remove("hide");
    }

    if (apparel.soldout) {
      apparelClone.querySelector(".udsolgt").classList.remove("hide");
    }
    apparelContainer.appendChild(apparelClone);
  });
}

// "id": 2283,
// "gender": "Men",
// "category": "Apparel",
// "subcategory": "Topwear",
// "articletype": "Tshirts",
// "season": "Spring",
// "productionyear": 2014,
// "usagetype": "Sports",
// "productdisplayname": "Poly Black T-shirt",
// "price": 1095,
// "discount": 34,
// "brandname": "Nike",
// "soldout": 0
