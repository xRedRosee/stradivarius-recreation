// show denim items from JSON file
function showCargoProducts(){
    // fetch prodcuts from JSON
    fetch('newin.json')
    .then(res => res.json()).then(jsonData=>{
        const jsondata = jsonData.cargo;
        // show products in HTML
        document.querySelector('.cargo-list').innerHTML = jsondata.reduce((html, product)=> html+= 
        `<li class="glide__slide headingslide">
        <img src="${product.image}" class="cargo-image">
        </li>`, '')
    });
    }
showCargoProducts()