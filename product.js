const URLParams = new URLSearchParams(window.location.search);
const myProduct = URLParams.get("product");

console.log("product_id", myProduct);

const productId = myProduct;
let productContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
  
    <figure>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="Produktbillede" class="productImage"/>
                <ol class="breadcrumbs">
            <li class="breadcrumbs_items"><a href="" class="breadcrumbs_link">${data.brandname}</a></li>
            <li class="breadcrumbs_items"><a href="" class="breadcrumbs_link">${data.subcategory}</a></li>
            <li class="breadcrumbs_items"><a href="" class="breadcrumbs_link">${data.productdisplayname}</a></li>
        </ol>
                </figure>
                <div class="productDetails">
                    <h2 class="productName">
                    ${data.productdisplayname}
                    </h2>
                    <h3 class ="brandName">${data.brandname}</h3>
                    <h3 class ="subCategory">${data.subcategory}</h3>
                    <h5>Color</h5>
                    <p class="baseColor">${data.basecolour}</p>
              
                    <span class="discount_label ${data.soldout && "sold_out_product"} ${!data.soldout && "hidden"}">Sold out</span>

                    <h5>Price</h5>
                    <p class="price">Pris ${data.price},- </p>
                    <p class="price_discount ${data.discount && "isOnSale"} ${!data.discount && "hidden"}">Pris efter rabat ${(Math.ceil((data.price - data.price * (data.discount / 100)) * 100) / 100).toFixed(0)},- </p>
                    <span class="saleLabel_product ${data.discount && "isOnSale"} ${!data.discount && "hidden"} ">
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
