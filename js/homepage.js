
// show denim items from JSON file
function showDenimProducts(){
// fetch prodcuts from JSON
fetch('newin.json')
.then(res => res.json()).then(jsonData=>{
    var data = jsonData.denim;
    // show products in HTML
    document.querySelector('.denim-list').innerHTML = data.reduce((html, product)=> html+= 
    `<li class="denim-card">
    <figure class="denim-container">
    <img src="${product.images[0].image1}" class="denim-image">
    <figcaption class="size-container">
    <h2 class="size-header"> SIZES </h2>
    <p class="size-text"> ${product.sizes} </p>
    </figcaption>
    </figure>
    <h1 class="denim-price"> $ ${product.price}</h1>
    <h2 class="denim-name"> ${product.name}</h2>
    </li>`, '')

});
}
showDenimProducts()

