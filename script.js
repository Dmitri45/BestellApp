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

function checkClick2(event) {
    return event.target.closest('[id]');
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
        if (indexOfObject != null) {
            basket[indexOfObject].number += 1;
        }
        else {
            basket.push(my_Object);
        }
    }
    renderBasket();
}

function checkObjectPresence(my_Object) {
    let indexOfObject = null;
    for (let index = 0; index < basket.length; index++) {
        let objectOfBasket = basket[index];
        if (objectOfBasket.name == my_Object.name) {
            indexOfObject = index;
            return indexOfObject;
        }
    }
}

function renderBasket() {
    let totalPrice = 0;
    let basketMainRef = document.getElementById('basket_main');
    basketMainRef.innerHTML = '';
    for (let index = 0; index < basket.length; index++) {
        basketMainRef.innerHTML += getBasketHtml(basket[index]);
        totalPrice += basket[index].number * basket[index].price ;
    }
    basketMainRef.innerHTML +=`<div class="basket_total">
    <div class="basket_total_1"> <span>Zwischensume</span><span>${parseFloat(totalPrice).toFixed(2)}€</span></div>
    <div class="basket_total_1"><span>Lieferkosten</span><span>4.50€</span></div>
    <div class="basket_total_1 bold"><span>Gesamt</span><span>${parseFloat(totalPrice + 4.50).toFixed(2)}€</span></div></div>`;
    getEmptyBasketHtml();
}

function getBasketHtml(my_Object) {
    return ` <div id="${my_Object.name.replace(/ /g, "_").toLowerCase()}">
        <h5>${my_Object.name}</h5>
        <div class="basket_symbols_container">
            <svg class="basket_symbols" onclick="decreaseBasketItemQuantity(event)" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
            </svg>
            <span class="number">${my_Object.number}x</span>
            <svg class="basket_symbols basket_symbols_plus" onclick="increaseBasketItemQuantity(event)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                stroke="currentColor" stroke-width="1.5" class="size-6" fill="currentColor">
                <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 
        0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
            </svg>
            <span class="basket_price">${parseFloat(my_Object.number * my_Object.price).toFixed(2)}€</span>
            <svg class="basket_symbols" xmlns="http://www.w3.org/2000/svg" onclick="removeFromBasket(event)" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244
                     2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0
                      0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09
                       2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>


        </div>
        

    </div>`

}

function increaseBasketItemQuantity(event) {
    let containerOfDish = checkClick2(event);
    let nameOfDish = containerOfDish.querySelector('h5').textContent;
    for (let index = 0; index < basket.length; index++) {
        let objectOfBasket = basket[index];
        if (objectOfBasket.name == nameOfDish) {
            objectOfBasket.number += 1;
            break;
        }
    }
    renderBasket();
}

function decreaseBasketItemQuantity(event) {
    let containerOfDish = checkClick2(event);
    let nameOfDish = containerOfDish.querySelector('h5').textContent;
    for (let index = 0; index < basket.length; index++) {
        let objectOfBasket = basket[index];
        if (objectOfBasket.name == nameOfDish) {
            if (objectOfBasket.number == 1) {
                basket.splice(index, 1);
                break;
            }
            else {
                objectOfBasket.number -= 1;
                break;
            }
        }
    }
    renderBasket();
}

function removeFromBasket(event) {
    let containerOfDish = checkClick2(event);
    let nameOfDish = containerOfDish.querySelector('h5').textContent;
    for (let index = 0; index < basket.length; index++) {
        let objectOfBasket = basket[index];
        if (objectOfBasket.name == nameOfDish) {
            basket.splice(index, 1);
            break;
        }
    }
    renderBasket();
}

function getEmptyBasketHtml() {
    if (basket.length == 0) {
        let basketMainRef = document.getElementById('basket_main');
        basketMainRef.innerHTML = '';
        basketMainRef.innerHTML += `  <div class="shopping_bag_container">
    <svg class="shopping_bag" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
    <span>Wähle leckere Gerichte aus der Karte und bestelle Dein Menü.</span>
    </div>
</div>`;
    }
}






