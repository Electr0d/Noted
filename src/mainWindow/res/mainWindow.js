//Swap notebook pages and notbook

var tabHTML = '<input type="button" onclick="tabClick()" id="noteBook-tab"/>';
var tabInfo; //store information about tab like name and colour

//Use for quick getelement
function $ (id) {
     return document.getElementById(id);
}

//for test purposes
function tabClick()  {
    $('noteBook-cover').innerHTML = "";
}

//for test purposes
function filerClick() {
    $('noteBook-tabContainer').innerHTML += tabHTML;
}


/*
Info for sqlite database

Table notebook:
note_id || note_name || note_date || note_back_path

 - note_id needs to have auto increment added
 - note_date doesnt work for some reason, I made it a timestamp

Table tabs:

Table pages:

*/ 