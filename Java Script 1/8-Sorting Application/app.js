const choseFruits = document.querySelector(".chose-fruits")      // chosing fruits 
const choseLegumes = document.querySelector(".chose-legumes");   // chosing legumes
const buttonSpecific = document.querySelector("#type1");         // button to add to specific category
const buttonGeneral = document.querySelector("#type2");          // button to add to general category
const searchButton = document.querySelector("#first-row");       // search button
const deleteButton = document.querySelector("#first-row2");      // delete button
add_shifter(); 


function specificBtn() {                                        // function to add and specify if item enters to which group
  let input1 = document.querySelector("#input-1").value         // take input value
  if(input1){                                             // check if there is text
  if (choseFruits.checked == true){                             // if fruits is chose, proceed below
    const contain = document.querySelector("#col1");            // select first column for fruits
    newRow = document.createElement("div");                     //create element div
    newRow.className ="alert alert-info fruits"                       // give it class Name
    newRow.id = "row1"                                          // give it id
    newRow.innerHTML += "Fruits! - "+ input1                    // enter the HTML
    contain.appendChild(newRow);                                // add the new row to the fruit column
    
  }
  if (choseLegumes.checked == true){                            // if lugumes is chose, proceed below
    const contain = document.querySelector("#col3");            // select third column for lugumes
    let newRow = document.createElement("div");                 //create element div
    newRow.className ="alert alert-warning legumes"                   // give it class Name
    newRow.id = "row1"                                          // give it id
    newRow.innerHTML += "Legumes! - "+  input1                  // enter the HTML
    contain.appendChild(newRow);                                // add the new row to the legumes column
  }
}
else {alert("nothing was entered")}                             // if no text in entered give this error
}


function generalBtn() {                                              // function to add and specify if item enters to which group
  let input1 = document.querySelector("#input-1").value              // take input value
  if(input1){                                                  // check if there is text
    if (choseFruits.checked == true){                                // if fruits is chose, proceed below
        const contain = document.querySelector("#col2");             // select second column for general
        let newRow = document.createElement("div");                  //create element div
        newRow.className ="alert alert-primary middleItemsList fruits"     // give it class Name
        newRow.id = "row1"                                           // give it id
        newRow.innerHTML = "Fruits! - "+ input1                      // enter the HTML
        contain.appendChild(newRow);                                 // add the new row to the 2nd column
        add_shifter()                               
      }
      if (choseLegumes.checked == true ){                            // if legumes is chose, proceed below
        const contain = document.querySelector("#col2");             // select second column for general
        let newRow = document.createElement("div");                  //create element div
        newRow.className ="alert alert-primary middleItemsList legumes";   // give it class Name
        newRow.id = "row1";                                          // give it id
        newRow.innerHTML += "Legumes! - "+  input1;                  // enter the HTML
        contain.appendChild(newRow);                                 // add the new row to the 2nd column
        add_shifter()                               
      }
    }
    else {alert("nothing was entered")}                              // if no text in entered give this error
  }

  function shifter(item) {                                          // function to move items from general to specific list
    setTimeout(() => {                                              
      this.style.display = "none";                                  // romove the div that is clicked on with delay time
  }, 450);
    let testFruits = item.target.classList.contains('fruits');      
    if (testFruits) {                                               // check if class name contains the word
        Add_fruit(item.target.textContent);                         // if yes, add to fruit
    } else { 
        Add_legume(item.target.textContent);                       // if not, add to legumes
    }
  }
 
  function add_shifter() {                                         // function which allows you to click
    document.querySelectorAll('.middleItemsList')
    .forEach(e => e.addEventListener("click", shifter));
     }

  function Add_fruit(details) {                                    // function to add general item to fruits
    document.getElementById('col1').innerHTML +=
    `<div id="row1" class="alert alert-info fruits element-css ">
    ${details}
    </div>`;
}

function Add_legume(details) {                                    // function to add general item to legumes
    document.getElementById('col3').innerHTML +=
    `<div id="row1" class="alert alert-warning legumes element-css">
    ${details}
    </div>`;
}
  
    searchButton.addEventListener("click", function() {
      let searchedItem = document.getElementById('first-row1');
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
      } else { alert("No text was added to search!"); }
  })


  deleteButton.addEventListener("click", function() {

    let deletedItem = document.getElementById('first-row1');
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
    } else { alert("No text was added to delete!"); }
})
