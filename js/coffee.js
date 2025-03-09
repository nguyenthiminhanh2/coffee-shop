const url = "https://fake-coffee-api.vercel.app/api"


function fetchCoffees() {
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const container = document.querySelector("#row_api");
    console.log(container)

    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      container.innerHTML += `
          <div class="col-md-4">
              <a href="detail.html?id=${item.id}" class="cream_box">
                  <div class="cream_img"><img src="${item.image_url}" alt="${item.name}"></div>
                  <div class="price_text">$ ${item.price}</div>
                  <h6 class="strawberry_text">${item.name}</h6>
                  <div class="cart_bt"><span>Add To Cart</span></div>
              </a>
          </div>
      `;
  }
});
}

function fetchCoffee() {
  const urlParams = new URLSearchParams(window.location.search);
  const itemId = urlParams.get('id');
  const url = `https://fake-coffee-api.vercel.app/api/${itemId}`;

  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const container = document.querySelector("#cream_detail");
    console.log(container)

      const item = data[0];
      container.innerHTML += `
          <div class="col-md-4">
              <a href="detail.html?id=${item.id}" class="cream_box">
                  <div class="cream_img"><img src="${item.image_url}" alt="${item.name}"></div>
                  <div class="price_text">$ ${item.price}</div>
                  <h6 class="strawberry_text">${item.name}</h6>
              </a>
          </div>
      `;
});
}

fetchCoffees();
fetchCoffee();
