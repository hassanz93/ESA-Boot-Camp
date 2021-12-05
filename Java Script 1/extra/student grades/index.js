var inp = []; var average_mark; var final_remark; var numb_crs;
    

    function removeElement(){                                // function to remove text boxes
    let d = document.getElementById("main_body");            // chose the parent that containes the text boxes
    let items = d.querySelectorAll('input')                  // chose the input type from the parent body 'main_body'
    items.forEach(function(item) { 
        for (i=2; i<22; i++)   {                              // allows to show hidden input type boxes
    document.getElementById('add' +i).type = 'number';}       
    item.style.display = 'inline';            
});

    numb_crs = parseInt(document.getElementById("numb").value); // take numb of courses from text box with Id 'numb'
    for (let i = 21; i > (numb_crs+1); i--){                    // depening on the nub_crs for loop the text boxes that will hide
        document.getElementById("add" +i).style.display="none"  // remove the text boxes by displaying them as none and hidng them
    //d.removeChild(document.getElementById("add" +i));
}
    }

    function input_admin() {   // function to input and save data as inp[]
        
     var total_mark = 0;                                                    // assign total mark to 0 as to restart to 0 for every new student
     numb_crs = parseInt(document.getElementById("numb").value);  
     let text_name = "Name: " + `<br>`;
     text_name = text_name.bold();                                          // take from text box number of subjects
     inp[0]= text_name + document.getElementById("add1").value;             // insert student name to inp[0]
     for (var i = 1; i <= numb_crs; i++) {                                  // for loop for the number of subjects chosen
        inp[i]= parseInt(document.getElementById("add" + (i +1)).value);    // insert marks for the subjects
        total_mark = total_mark + inp[(i)];  }                              // print N/A for subjects not taken by students
        
        
        average_mark = total_mark / numb_crs;  
        let text_total = "Total Mark: " + `<br>`;
        text_total = text_total.bold(); 
        inp[numb_crs +1]= text_total + total_mark; 
        let text_average = "Average Mark: " + `<br>`;
        text_average= text_average.bold();
        inp[numb_crs +2]= text_average + average_mark.toFixed(2); 
        if (average_mark>=0 && average_mark<=49) {
            final_remark = `<div style="padding:0.5rem; margin:0.1rem;" class="alert alert-danger" role="alert">
                             Unfortunately you failed!`; 
        } 
        else if(average_mark>=50 && average_mark<=59){
            final_remark = `<div style="padding:0.5rem; margin:0.1rem;" class="alert alert-warning" role="alert">
                             Congratulations, you passed but you have to work better`;
        }
        else if(average_mark>=60 && average_mark<=79){
            final_remark = `<div style="padding:0.5rem; margin:0.1rem;" class="alert alert-primary" role="alert">
                             Congratulations, you succeeded`;
            
        }
        else if(average_mark>=80 && average_mark<=100){
            final_remark = `<div style="padding:0.5rem; margin:0.1rem;" class="alert alert-success" role="alert">
                             Congratulations, you’ve achieved an excellent score!`;
        }
        else{
            final_remark = `<div style="padding:0.5rem; margin:0.1rem;" class="alert alert-danger" role="alert">
                             Invalid or Failed Input!`; 
            }
        let text_remark = "Final Remark: " + `<br>`;
        text_remark = text_remark.bold(); 
        inp[numb_crs +3]= text_remark + final_remark; 
                           }

    function insertRow() {  //function to insert rows and all the info added to the function input_admin()
    input_admin();
    numb_crs = parseInt(document.getElementById("numb").value);
    var table1 = document.getElementById("table1");
    var row1 = table1.insertRow(1);          // insert row below table header
    var cell1 = row1.insertCell(0);          // insert name at first cell
    cell1.innerHTML = inp[0];     
    for (i = 1; i <= numb_crs; i++) {
         var cell1 = row1.insertCell(i);     // insert cells
         let text_grade = "Grade" +i + `<br>`;
         text_grade = text_grade.bold();
         cell1.innerHTML =  text_grade+ inp[i];           // insert marks for following cells in the for loop
                             }
    for (i = numb_crs+1; i < (numb_crs +4); i++) {
         var cell1 = row1.insertCell(i);     // insert cells
         cell1.innerHTML = inp[i];           // insert N/A for following cells in the for loop
                             }
        }
    
    function clearFields() {                                       // function to clear the fields inside text boxes
    for (i=1; i<22; i++){
        document.getElementById('add' +i).value = '';  }           // place empty string inside text boxes 
        const container = document.querySelector('.container');    // clear input boxes for the grades with empty strings
        while (container.lastChild) {                              // take last child element of the parent container
            container.removeChild(container.lastChild);            // remove containers with clear is clicked
                                }
      }
            
    function deleteRow() {                                     // function to delete rows
    chose_row = document.getElementById("delete").value;
    document.getElementById("table1").deleteRow(chose_row);
                                   }