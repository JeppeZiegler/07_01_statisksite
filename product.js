const myProduct = new URLSearchParams(window.location.search).get("category");

console.log("the productid is", myProduct);

const productId = myProduct;
const productContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => showProduct(data));
//   .then(showProduct);

function showProduct(data) {
  productContainer.innerHTML = `
    
    <figure>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="Produktbillede" class="productImage/>
                <img src="img/sahara.png" alt="Sahara">
                </figure>
                <div class="productDetails">
                    <h1 class="productname">${data.productdisplayname}</h1>
                    <h3 class ="brandName">${data.brandname}</h3>
                    <h3 class ="subCategory">${data.subcategory}</h3>
                    <h5>Color</h5>
                    <p class="baseColor">${data.basecolour}</p>
              
                    <h5>Price</h5>
                    <p class="price">DKK ${data.price},- </p>
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
}
