let basket = [];

function basketToggle() {
    let basketRef = document.getElementById('basket');
    console.log(basketRef);
    basketRef.classList.toggle('d_none');
}

function dihesRender() {
    let dihesContainerRef = document.getElementById('dishes_container')
    for (let index = 0; index < restaurant.dishes.length; index++) {
        dihesContainerRef.innerHTML += `<div id="dish_container_${index}" class="dish_container" onclick="addToBasket(event)">
        <h4 id="label_dish_container_${index}">${restaurant.dishes[index].name_of_dish}</h4>
        <span class="description_of_dish">${restaurant.dishes[index].ingredients}</span>
        <span  id="price_dish_container_${index}" class="price">${restaurant.dishes[index].price}€</span>
        <svg class="plus_symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 
            0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
          </svg>
          
</div>`;
    }
}

function dessertsRender() {
    let dihesContainerRef = document.getElementById('desserts_container')
    for (let index = 0; index < restaurant.desserts.length; index++) {
        dihesContainerRef.innerHTML += `<div id="dessert_container_${index}" class="dish_container" onclick="addToBasket(event)">
    <h4 id="label_dessert_container_${index}">${restaurant.desserts[index].name_of_dessert}</h4>
    <span class="description_of_dish">${restaurant.desserts[index].ingredients}</span>
    <span  id="price_dessert_container_${index}" class="price">${restaurant.desserts[index].price}€</span>
    <svg class="plus_symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 
        0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>
      
</div>`;

    }
}

function init() {
    dihesRender();
    dessertsRender();
}

function checkClick(event) {
    return event.currentTarget.id;
}

function addToBasket(event) {
    let idOfElement = checkClick(event);
    my_Object = createObject(idOfElement);
    addObjectToBasket(my_Object);

}

function createObject(id) {
    let my_Object = {
        'name': document.getElementById(`label_${id}`).innerHTML,
        'price': parseFloat(document.getElementById(`price_${id}`).innerHTML).toFixed(2),
        'number': 1
    }
    return my_Object;
}

function addObjectToBasket(my_Object) {
    if (basket.length == 0) {
        basket.push(my_Object);
    }
    else {
        indexOfObject = checkObjectPresence(my_Object)
        if(indexOfObject!=null){
            basket[indexOfObject].number += 1;
        }
        else{
            basket.push(my_Object);
        }
    }
    console.log(basket);
}

function checkObjectPresence(my_Object){
    let indexOfObject = null;
    for (let index = 0; index < basket.length; index++) {
        let objectOfBasket = basket[index];
        if (objectOfBasket.name == my_Object.name) {
            indexOfObject = index;
            return indexOfObject;
        }
    }
}


