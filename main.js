// - vars - //
var file = "note.txt";
// --- Get filename --- //
function askForFile(){
    var pickFile = prompt("What note file do you want to edit?", "note.txt");
    if (pickFile == null || pickFile == "") {
      console.log('No file picked');
    } else {
      file = pickFile;
      getNote();
    }
}
// -- Window loaded -- //
window.onload = askForFile();
    
// --- Get note from file --- //
function getNote(){
    var note = document.getElementById("note");
    var getNoteFile = new XMLHttpRequest();
    getNoteFile.open('GET', 'notes/'+file, true);
    getNoteFile.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(getNoteFile.responseText);
            note.value = getNoteFile.responseText;
        }
    };
    getNoteFile.send();
}
// --- Set content of file from textarea --- //
function sendNote(){
    var xmlHttp = new XMLHttpRequest();
    var note = document.getElementById("note");
    xmlHttp.open("POST", "send.php", true);
    xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xmlHttp.responseText);
        }
    };
    xmlHttp.send("text=" + note.value + "&file=" + file);
}
