let basket = [];

function dihesRender() {
    let dihesContainerRef = document.getElementById('dishes_container')
    for (let index = 0; index < restaurant.dishes.length; index++) {
        dihesContainerRef.innerHTML += getDishContainerHtml(index);
    }
}

function dessertsRender() {
    let dihesContainerRef = document.getElementById('desserts_container')
    for (let index = 0; index < restaurant.desserts.length; index++) {
        dihesContainerRef.innerHTML += getDessertContainerHtml(index);
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
    let myObject = {
        'name': document.getElementById(`label_${id}`).innerHTML,
        'price': parseFloat(document.getElementById(`price_${id}`).innerHTML).toFixed(2),
        'number': 1
    };
    return myObject;
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
    let basketMainRef = document.getElementById('basket_main');
    let totalPrice = 0;
    basketMainRef.innerHTML = '';
    for (let index = 0; index < basket.length; index++) {
        basketMainRef.innerHTML += getBasketHtml(basket[index]);
        totalPrice += basket[index].number * basket[index].price;
    }
    renderBasketTotal(totalPrice);
    getEmptyBasketHtml();
}

function renderBasketTotal(totalPrice) {
    let basketRef = document.getElementById('basket_total');
    basketRef.innerHTML = '';
    basketRef.innerHTML += getBasketTotalContainerHtml(totalPrice);
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
        let basketRef = document.getElementById('basket_total');
        basketRef.innerHTML = '';
        basketMainRef.innerHTML = '';
        basketMainRef.innerHTML += getSoppingBagContainerHtml();
    }
}

function basketShow() {
    document.getElementById('basket_wrapper').classList.toggle('d_none_mobile');
    document.body.style.overflow = 'hidden';
    document.getElementById('basket_button_container').classList.toggle('d_none_mobile');
    document.getElementById('basket_button_container_2').classList.toggle('d_none');
}

function basketClose() {
    document.getElementById('basket_wrapper').classList.toggle('d_none_mobile');
    document.body.style.overflow = '';
    document.getElementById('basket_button_container').classList.toggle('d_none_mobile');
    document.getElementById('basket_button_container_2').classList.toggle('d_none');
}

function acceptOrder(){
    let basketMain = document.getElementById('basket_main');
    let basketTotal = document.getElementById('basket_total');
    basketMain.innerHTML = '';
    basketTotal.innerHTML = '';
    basket = [];
    basketMain.innerHTML = getOrderInformationHtml();
}









