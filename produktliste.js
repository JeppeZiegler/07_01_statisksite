const category = new URLSearchParams(window.location.search).get("category");

console.log("category", category);

const listContainer = document.querySelector(".productListContainer");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}`)
  .then((response) => response.json())
  .then(showList);

function showList(data) {
  const markup = data
    .map(
      (product) =>
        `<div class="product_list_container ${product.discount && "discount"} ${product.soldout && "sold_out"} ">
                     <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Produktbillede" class="productListImage/>
                    <div class="productListDetails">
                        <h2>${product.productdisplayname}</h2>

                        <h3>${product.brandname}</h3>
                        <h3>${product.subcategory}</h3>
                        <p>DKK ${product.price},- </p>
                        <a href="produkt.html?product=${product.id}" class="read_more">Read More</a>
                    </div>

                </div>`
    )
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
