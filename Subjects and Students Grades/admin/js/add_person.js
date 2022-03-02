document.getElementById("new_student").addEventListener("click", () => {
    document.getElementById("student_specification").required = true;
    document.getElementById("student_specification").classList.remove('student_specification_before');
    document.getElementById("student_specification").classList.add('student_specification');
    document.getElementById("student_specification").classList.remove('itemOutFromList');
});
document.getElementById("new_admin").addEventListener("click", () => {
    document.getElementById("student_specification").required = false;
    document.getElementById("student_specification").classList.add('itemOutFromList');
    setTimeout(() => {
        document.getElementById("student_specification").classList.add('student_specification_before');

    }, 1000);
    document.getElementById("student_specification").classList.remove('student_specification');
});