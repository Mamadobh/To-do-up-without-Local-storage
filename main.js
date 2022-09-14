 window.onload =function(){ 
let formElement= document.querySelector(".form")
let addTasck = document.querySelector(".input");
let addBtn= document.querySelector(".bt");
addTasck.focus();
formElement.addEventListener("submit", (e) => {
 e.preventDefault();
 
   if(addTasck.value === ""){
    addTasck.focus(); 
    alert("Please add a task");
   }
else {
 let taskValue=addTasck.value;

 let taskElemnt = document.createElement("div");
 taskElemnt.className="tsk";
 let spanElement = document.createElement("input");
 spanElement.className="my_input";
 spanElement.type="text"
 let actionElement = document.createElement("div")
 actionElement.className="action";
 let editElement = document.createElement("button")
 editElement.className="btn1";
 spanElement.setAttribute("readonly","readonly")
 let textEdit= document.createTextNode("EDIT");
 editElement.appendChild(textEdit);
 actionElement.appendChild(editElement);
 let buttonElement = document.createElement("button");
 buttonElement.className="btn";
 let textElement= document.createTextNode("DELETE");
 buttonElement.appendChild(textElement);
 actionElement.appendChild(buttonElement);
 taskElemnt.appendChild(spanElement);
 taskElemnt.appendChild(actionElement);
 let ListElement = document.querySelector(".taskList");

 ListElement.appendChild(taskElemnt);
 spanElement.value=taskValue;
 addTasck.value="";
 
editElement.addEventListener("click",(e) => {
if(editElement.innerText === "EDIT"){
  editElement.innerText="SAVE"
  spanElement.removeAttribute("readonly");
  spanElement.focus();
  spanElement.style.color="rgb(226 93 15)";
}
else{
 spanElement.value=spanElement.value
 editElement.innerText="EDIT";
 spanElement.setAttribute("readonly","readonly");
 spanElement.style.color="#fff";

}
  
})
 
 buttonElement.addEventListener("click", (ev) => {
 ListElement.removeChild(taskElemnt)
 }
)
}
})




 }
 


