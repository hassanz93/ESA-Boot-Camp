

function search(){
    let textToSearch = document.getElementById("text-to-search").value;     // take value of input field we want to search for
    let paragraph = document.getElementById("paragraph");                   // paragraph where text needs to be searched   
 
    let pattern = new RegExp(`${textToSearch}`,"gi");                       // search for the word | g = all matched | i = case sensitive

    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`) 
    // replace matched word with <mark> between them to highlight the searched word
}