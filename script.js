
let taskId = 0;
function addTask(){
    let taskText = document.getElementById("taskInput").value;
    let descText = document.getElementById("descInput").value;
    if(taskText==="")
        return;
    let task = document.createElement("div");
    task.className="task";
    task.id="task"+taskId;
    task.draggable=true;
    task.ondragstart=drag;
    task.innerHTML=`<h3>${taskText}</h3>
    <p>${descText}</p>`;
    document.getElementById("pending").appendChild(task);
   taskId++;
   document.getElementById("taskInput").value="";
   document.getElementById("descInput").value="";
}

function allowDrop(e){
e.preventDefault();
}



function drag(e){
    e.dataTransfer.setData("text",e.target.id);
}

function drop(e){
   e.preventDefault();
  let id=e.dataTransfer.getData("text");
  let task=document.getElementById(id);
  e.target.appendChild(task);
}

function updateTime(){
let now = new Date();
let day = String(now.getDate()).padStart(2,'0');
let month = String(now.getMonth()+1).padStart(2,'0');
let year = now.getFullYear();
let time = now.toLocaleTimeString();
let date = day + "/" + month + "/" + year;
document.getElementById("datetime").innerHTML =
date ;
}
setInterval(updateTime,1000);
updateTime();