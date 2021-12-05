function click_handler_fruits_or_legumes(item) {
    this.classList.add('itemOutFromList'); // for css transition
    setTimeout(() => {
        this.style.display = "none";
    }, 850);
    let testFruits = item.target.classList.contains('fruits');
    // check if the clicked elements contains the class "fruits"
    if (testFruits) { // if the result is "true", then the clicked item is "fruit"
        // we want to add this item to the fruits list
        // Call the "Add_fruit" function
        Add_fruit(item.target.textContent);
    } else { // the clicked item is "legume"
        // we want to add this item to the legumes list
        // Call the "Add_legume" function
        Add_legume(item.target.textContent);
    }
}

function Add_fruit(details) {
    document.getElementById('leftDiv').innerHTML +=
        `<div class="alert alert-info fruits element-css">
            ${details}
        </div>`;
}

function Add_legume(details) {
    document.getElementById('rightDiv').innerHTML +=
        `<div class="alert alert-warning legumes element-css">
            ${details}
        </div>`;
}

let inputField = document.getElementById('inputFruitOrLegume');
let fruit_option = document.getElementById('fruitOption');
let legume_option = document.getElementById('legumeOption');

function add_input_to_specific_list() {
    if (inputField.value && fruit_option.checked) {
        Add_fruit(`Fruits! - ${inputField.value}`);
    } else if (inputField.value && legume_option.checked) {
        Add_legume(`Legumes! - ${inputField.value}`);
    } else {
        alert("Please make sure that you enter all the details!");
    }
}

function add_input_to_general_list() {
    if (inputField.value && fruit_option.checked) {
        document.getElementById('middleDiv').innerHTML +=
            `<div class="alert alert-primary middleItemsList fruits">
            Fruits! - ${inputField.value}
        </div>`;
        add_click_handler_fruits_or_legumes();
    } else if (inputField.value && legume_option.checked) {
        document.getElementById('middleDiv').innerHTML +=
            `<div class="alert alert-primary middleItemsList legumes">
            Legumes! - ${inputField.value}
        </div>`;
        add_click_handler_fruits_or_legumes();
    } else {
        alert("Please make sure that you enter all the details!");
    }
}

function add_click_handler_fruits_or_legumes() {
    document.querySelectorAll('.middleItemsList')
        .forEach(e => e.addEventListener("click", click_handler_fruits_or_legumes));
}

function search_item() {
    let searchedItem = document.getElementById('searchFruitOrLegume');
    if (searchedItem.value) {
        let isExist = false
        document.querySelectorAll("div.alert")
            .forEach(e => {
                if (e.textContent.toLowerCase().includes(searchedItem.value.trim().toLowerCase())) {
                    isExist = true;
                    e.classList.add('searchedItemClass');
                } else { e.classList.remove('searchedItemClass') }
            });
        if (!isExist) { alert("This item doesn't exist!"); }
    } else { alert("Please make sur that you entered the item for search!"); }
}

function delete_item() {
    let deletedItem = document.getElementById('searchFruitOrLegume');
    if (deletedItem.value) {
        let isExist = false
        document.querySelectorAll("div.alert")
            .forEach(e => {
                if (e.textContent.toLowerCase().includes(deletedItem.value.trim().toLowerCase())) {
                    isExist = true;
                    e.classList.add('deletedItemClass', 'itemOutFromList');
                    setTimeout(() => {
                        e.parentNode.removeChild(e)
                    }, 1000);
                } else { e.classList.remove('deletedItemClass') }
            });
        if (!isExist) { alert("This item doesn't exist!"); }
    } else { alert("Please make sur that you entered the item for delete!"); }
}

add_click_handler_fruits_or_legumes();
document.getElementById('addInputToSpecificList').addEventListener("click", add_input_to_specific_list);
document.getElementById('addInputToGeneralList').addEventListener("click", add_input_to_general_list);
document.getElementById('seachButton').addEventListener("click", search_item);
document.getElementById('deleteButton').addEventListener("click", delete_item);