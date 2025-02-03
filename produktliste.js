const categary = "Apparel";
const listContainer = document.querySelector(".productListContainer");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100`)
  .then((response) => response.json())
  .then(showList);

function showList(data) {
  const markup = data.map(
    (product) => `
       
     <div class="product_list_container">
                     <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Produktbillede" class="productListImage/>
                    <div class="productListDetails">
                        <h2>${product.productdisplayname}</h2>

                        <h3>${product.brandname}</h3>
                        <h3>${product.subcategory}</h3>
                        <p>DKK ${product.price},- </p>
                        <a href="produkt.html" class="read_more">Read More</a>
                    </div>

                </div>`;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
