let productId = 1165;
let productContainer = document.querySelector(".productContainer");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
     <div class="product_site_grid">
                <div><img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="Productbillede" class="productImage></div>
                <div>
                    <h1 class="productname">${data.productdisplayname}</h1>
                    <h3>Nike | T-shirts</h3>
                    <h5>Color</h5>
                    <p>Blue</p>
                    <h5>Price</h5>
                    <p>DKK 1595,-</p>
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

            </div>
    `;
  });
