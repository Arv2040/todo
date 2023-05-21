const input = document.getElementById("input");
const listitems = document.getElementById("listitems");



function task(){
    if(input.value === ""){
        alert("You have to Enter");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listitems.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    savedata();
    
    
}
listitems.addEventListener("click",function(task1){
    if(task1.target.tagName === "LI"){
        task1.target.classList.toggle("checked");
        savedata();

    }
    else if(task1.target.tagName === "SPAN"){
        task1.target.parentElement.remove();
        savedata();
    }
    
},false);

function savedata(){
    localStorage.setItem("data",listitems.innerHTML);
}
function showdata(){
    listitems.innerHTML = localStorage.getItem("data");
}
showdata();

