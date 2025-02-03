const indexContainer = document.querySelector(".index_container");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then(showCategory);

function showCategory(data) {
  const markup = data
    .map(
      (category) => `
    
            
            <div class="category_list_container">
                <div class="category">
                    <a href="produktliste.html?category=${category.category}">${category.category}</a>
                </div>
               
            </div>

       
    `
    )
    .join("");
  console.log(markup);
  indexContainer.innerHTML = markup;
}
