$(document).ready(function() {
    async function getSubjects() {
        let url = '../php/get_subjects.php';
        try {
            let res = await fetch(url);
            // console.log(res);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }

    var edt_arr = [];
    var del_arr = [];
    async function renderSubjects() {
        let subjects = await getSubjects();
        // for (let i = 0; i < Object.keys(subjects).length; i++) {
        //     console.log(Object.values(subjects));
        // }
        console.log(subjects);
        let tbody_subjects = '';
        Object.keys(subjects).forEach(subject => {

            let subject_record = `<tr class='table'>
            <td>${subjects[subject].name}</td>
            <td>${subjects[subject].semester}</td>
            <td>
                <button type="button" class="btn btn-warning" id='edt${subject}'>Edit</button>
                <button type="button" class="btn btn-danger" id="del${subject}">Delete</button>
            </td>
            </tr>`;
            tbody_subjects += subject_record;
            edt_arr.push(`edt${subject}`);
            del_arr.push(`del${subject}`);
        });
        // console.log(edt_arr);
        $('#show_subject_details').append(tbody_subjects);
        $('#show_sub_count').html(Object.keys(subjects).length);

        for (let i = 0; i < edt_arr.length; i++) {
            document.getElementById(edt_arr[i]).addEventListener("click", (e) => {
                e.preventDefault();
                console.log(e.target.id);
            });
            document.getElementById(del_arr[i]).addEventListener("click", (e) => {
                e.preventDefault();
                $(e.target).closest('tr').remove();
                console.log(e.target.id);
                console.log(del_arr);
                console.log(subjects);
            });
        }
    }
    renderSubjects();


    // // using fetch
    // fetch('../php/get_subjects.php')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data["sub_count"]);
    //         console.log(data);


    //         for (let i = 0; i < data["sub_count"]; i++) {
    //             var new_row = ` < tr class = 'table' >
    //             <td>${data[i].name}</td>
    //             <td>${data[i].semester}</td>
    //             <td>
    //             <button type="button" class="btn btn-warning" id=edt${i} onclick="(e)=> {console.log("l")};">Edit</button>
    //             <button type="button" class="btn btn-danger" id=del${i}  onclick="del(this.id)>Delete</button></td>
    //             </tr>`;
    //             $('#show_subject_details').append(new_row);
    //         }
    //         $('#show_sub_count').html(data["sub_count"]);
    //     });


    // using ajax
    // $.ajax({
    //     type: "POST",
    //     dataType: "json",
    //     url: "../php/get_subjects.php",
    //     success: function(received_data) {
    //         console.log(received_data);
    //         for (let i = 0; i < received_data["sub_count"]; i++) {
    //             var new_row = `<tr class='table bg-info'><td>${received_data[i].name}</td><td>${received_data[i].semester}</td></tr>`;
    //             $('#show_subject_details').append(new_row);
    //         }
    //         $('#show_sub_count').html(received_data["sub_count"]);
    //     },
    //     error: function(request, status, error) {
    //         console.log(error);
    //     }
    // });


    $('#add_subject').click(function(e) {
        e.preventDefault();
        var sub_name = $("#sub_name").val();
        var semester = $("#semester").val();
        // console.log(sub_name + " " + semester);
        if (sub_name && semester) {
            sub_name = sub_name.trim();
            semester = semester.trim();
            $.ajax({
                type: "POST",
                url: "../php/add_subject_handler.php",
                dataType: "json",
                data: { sub_name: sub_name, semester: semester },
                success: function(received_data) {
                    console.log(received_data);
                    if (received_data["name"] && received_data["sem"]) {
                        let counter_id = received_data["sub_count"] - 1;
                        new_subject_row = `<tr>
                        <td> ${received_data["name"]} </td>
                        <td> ${received_data["sem"]} </td> 
                        <td>
                            <button type="button" class="btn btn-warning" id='edt${counter_id}'>Edit</button>
                            <button type="button" class="btn btn-danger" id="del${counter_id}">Delete</button>
                        </td>
                        </tr>`;
                        $('#show_subject_details').append(new_subject_row);
                        $('#show_sub_count').html(received_data["sub_count"]);
                        edt_arr.push(`edt${counter_id}`);
                        del_arr.push(`del${counter_id}`);
                        let last = edt_arr.length - 1;
                        document.getElementById(edt_arr[last]).addEventListener("click", (e) => {
                            e.preventDefault();
                            console.log(e.target.id);
                        });
                        document.getElementById(del_arr[last]).addEventListener("click", (e) => {
                            e.preventDefault();
                            $(e.target).closest('tr').remove();
                            console.log(e.target.id);
                        });
                    }

                    // alert received data from the JSON object 
                    // for (let i in received_data)
                    //     alert(i + " " + received_data[i]);

                    // alert received data from the JSON array 
                    // received_data.forEach(element => {
                    //     alert(element);
                },
                error: function(request, status, error) {
                    console.log(error);
                }
            });
        } else alert("Please enter the data");
    });
});