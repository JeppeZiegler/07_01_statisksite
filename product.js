const myProduct = new URLSearchParams(window.location.search).get("product_id");

console.log("product_id", myProduct);

const productId = myProduct;
let productContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
    
    <figure>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="Produktbillede" class="productImage"/>
                </figure>
                <div class="productDetails">
                    <h2 class="productName">
                    ${data.productdisplayname}
                    </h2>
                    <h3 class ="brandName">${data.brandname}</h3>
                    <h3 class ="subCategory">${data.subcategory}</h3>
                    <h5>Color</h5>
                    <p class="baseColor">${data.basecolour}</p>
              
                    <h5>Price</h5>
                    <p class="price">DKK ${data.price},- </p>
                    <span class="saleLabel ${data.discount && "isOnSale"} ${!data.discount && "hidden"} ">
                    -${data.discount}%</span>
                    <h5>Size</h5>

                    <select id="size" name="size">
                        <option value="x-small">XS</option>
                        <option value="small">S</option>
                        <option value="medium">M</option>
                        <option value="large">L</option>
                        <option value="X-large">XL</option>
                    </select>

                    <button class="basket">Add to basket</button>
                </div>

            
    `;
  });
