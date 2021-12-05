var inp = []; var inp0 = []; var average_mark; var final_remark; var numb_crs;

    function insert_row() {                                          // function to insert row for entering Grades and Marks
    var table1 = document.getElementById("container1");              // get id for table with Id "container1"
    table1.innerHTML = "";                                           // empty table with every new student
    numb_crs = parseInt(document.getElementById("numb").value);      // get number of marks you need to enter
                
    var row1 = table1.insertRow(0);                                  // insert first row 
    for (i = 0; i < numb_crs; i++) {                                 
        var cell1 = row1.insertCell(i);                              // insert new table cell for first row
        var crs = `<input type= "text" id ="input${i}" placeholder = "Subject">`;
        cell1.innerHTML = crs;                                       // enter subject for each cell
    }
    var row1 = table1.insertRow(1);                                  // insert second row 
    for (i = 0; i < numb_crs; i++) {
        var cell2 = row1.insertCell(i);                              // insert new table cell for second row
        var crs = `<input type= "number" min ="0' max = "100" id ="input0${i}" placeholder = "Grade">`;
        cell2.innerHTML = crs;                                       // enter subject for each cell
    }
}

    function input_admin() {                                                    // function to input subject and marks information
    var total_mark = 0;                                                         // assign total mark to 0 as to restart to 0 for every new student
     numb_crs = parseInt(document.getElementById("numb").value);                // get the number of subjects the student has taken
     let text_name = "Name: " + `<br>`;                                         // add text "Name"
     text_name = text_name.bold();                                              // bold the word "Name"
     inp[0]= text_name + document.getElementById("add1").value;                 // insert student name to inp[0]
     for (var i = 0; i < numb_crs; i++) {                                       // for loop for the number of subjects chosen
        inp[i +1]= document.getElementById("input" + i).value;                  // insert number of subjects to enter
        inp0[i +1]= parseInt(document.getElementById("input0" + i).value);      // insert number of marks to enter 
        total_mark = total_mark + inp0[(i+1)];  }                               // add total marks of the student

    average_mark = total_mark / numb_crs;                                   // calculate average mark
    let text_total = "Total Mark: " + `<br>`;                               // add text "Total Mark"
    text_total = text_total.bold();                                         // bold the word "Total Marks"
    inp0[numb_crs +1]= text_total + total_mark;                             // enter total mark
    let text_average = "Average Mark: " + `<br>`;                           // add text "Average Mark"
    text_average= text_average.bold();                                      // bold the word "Average Mark"
     inp0[numb_crs +2]= text_average + average_mark.toFixed(2);              // enter average mark while only allowing 2 decimals
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
     inp0[numb_crs +3]= text_remark + final_remark; 
                                }

    function insertRow() {                        //function to insert rows and all the info added to the function input_admin()
    input_admin();
    numb_crs = parseInt(document.getElementById("numb").value);
    var table1 = document.getElementById("table1");
     var row1 = table1.insertRow(0);                         // insert row below table header
     var cell1 = row1.insertCell(0);                         // insert name at first cell
     cell1.innerHTML = inp[0];     
    for (i = 1; i <= numb_crs; i++) {
       var cell1 = row1.insertCell(i);                    // insert cells
        let text_grade = inp[i] + `<br>`;
        text_grade = text_grade.bold();
        cell1.innerHTML =  text_grade+ inp0[i];            // insert marks for following cells in the for loop
                                     }
    for (i = numb_crs+1; i < (numb_crs +4); i++) {       
         var cell1 = row1.insertCell(i);                   // insert cells
        cell1.innerHTML = inp0[i];                        // insert N/A for following cells in the for loop
                                                 }
                        }

    function clearFieldsMarks() {                                      // function to clear the fields inside text boxes
    for (i=0; i<numb_crs; i++){
        document.getElementById('input' +i).value = ''; 
        document.getElementById('input0' +i).value = ''; }         // place empty string inside text boxes 
        const container = document.querySelector('.container');    // clear input boxes for the grades with empty strings
        while (container.lastChild) {                              // take last child element of the parent container
        container.removeChild(container.lastChild);                // remove containers with clear is clicked
                              } 
                               }

    function deleteRow() {                                             // function to delete rows
    chose_row = document.getElementById("delete").value;               // note the 0 means first row and 1 is the second row
    document.getElementById("table1").deleteRow(chose_row);
                        }
