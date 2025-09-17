function basketToggle() {
    let basketRef = document.getElementById('basket');
    console.log(basketRef);
    basketRef.classList.toggle('d_none');
}

function dihesRender() {
    let dihesContainerRef = document.getElementById('dishes_container')
    for (let index = 0; index < restaurant.dishes.length; index++) {
        dihesContainerRef.innerHTML += `<div id="dish_container_${index}" class="dish_container">
        <h4>${restaurant.dishes[index].name_of_dish}</h4>
        <span class="description_of_dish">${restaurant.dishes[index].ingredients}</span>
        <span class="price">${restaurant.dishes[index].price}€</span>
        <svg class="plus_symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 
            0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
          </svg>
          
</div>`

    }
}

function dessertsRender() {
    let dihesContainerRef = document.getElementById('desserts_container')
    for (let index = 0; index < restaurant.desserts.length; index++) {
        dihesContainerRef.innerHTML += `<div id="dish_container_${index}" class="dish_container">
    <h4>${restaurant.desserts[index].name_of_dessert}</h4>
    <span class="description_of_dish">${restaurant.desserts[index].ingredients}</span>
    <span class="price">${restaurant.desserts[index].price}€</span>
    <svg class="plus_symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 
        0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>
      
</div>`

    }
}

function init() {
    dihesRender()
    dessertsRender()
}
