const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


//funzione per aggiungere alla lista di cose da fare
function addTask(){
    if(inputBox.value===''){
        alert("You must write something")
        //controlla che non sia lasciato vuoto
    }else{
        //se qualcosa e' stato scritto aggiunge un li alla lista ul
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //crea uno span al fondo del li che diventa il suo genitore
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
// Aggiungi la funzionalità di premere il tasto spazio quando si inserisce un valore nella "to-do-list"
inputBox.addEventListener("keyup", function (e) {
    if (e.key === "Enter" && inputBox.value.trim() !== "") {
        addTask();
    }
});
//funzione per crossare la lista o eliminarla dipendendo da quale tag html si schiaccia su
listContainer.addEventListener("click", function(e){
    //check and uncheck the tasks
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

//lets store the data:

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//display every time we open/after we have closed and opened the browser
function showList(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showList();