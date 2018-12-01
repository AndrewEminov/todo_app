var area = document.querySelector('.textarea');
var click = document.querySelector('.btn');
var list = document.querySelector('.list');

function addTask(){
  var li = document.createElement('li');
  li.className = "task";
  li.innerHTML = area.value;
  list.insertBefore(li, list.firstChild);
  area.value = "";
}

function editTask(event){
  var target = event.target;
  area.disabled = true;
  
  //////// --------------- \\\\\\\\\\\\\
  for(var i=0; i < list.children.length; i++){    
    if(list.children[i] != target && target.tagName == "LI"){
      list.children[i].style.display = "none";
    }
    if(target.parentNode.tagName == "DIV"){
      target.parentNode.style.display = "block";
    }
  }
  ////////// --------------- \\\\\\\\\\\\\
  
  if(target.tagName === 'LI'){
    var div = document.createElement('div');
    var inputEdit = document.createElement('input');
    var buttonEdit = document.createElement('button');
    var buttonRemove = document.createElement('button');
    div.className = "divEdit";
    inputEdit.className = "inputEdit";
    buttonEdit.className = "buttonEdit";
    buttonRemove.className = "buttonRemove";
    inputEdit.value = target.innerHTML;
    buttonRemove.innerHTML = 'remove';
    buttonEdit.innerHTML = 'edit';
    list.appendChild(div);
    var divEdit = document.querySelector('.divEdit');
    divEdit.appendChild(inputEdit);
    divEdit.appendChild(buttonEdit);
    divEdit.appendChild(buttonRemove);
    list.removeChild(target);
  }
}

function createTask(event){
  var target = event.target;
  if(target.classList.contains('buttonEdit')){
    var divEdit = document.querySelector('.divEdit');
    for(var i=0; i < divEdit.children.length; i++){
      if(divEdit.children[i].tagName === "INPUT"){
        var li = document.createElement('li');
        li.className = "task";
        li.innerHTML = divEdit.children[i].value;
        list.insertBefore(li, list.firstChild);
      }
    }
    for(var i=0; i < list.children.length; i++){
      list.children[i].style.display = "list-item";
    }  
    list.removeChild(target.parentNode);
    area.disabled = false;
  }
}

function removeTask(event){
  var target = event.target;
  if(target.classList.contains('buttonRemove')){
     for(var i=0; i < list.children.length; i++){
      list.children[i].style.display = "list-item";
    }  
    list.removeChild(target.parentNode);
    area.disabled = false;
  }
}

click.addEventListener('click',addTask);
list.addEventListener('click',editTask);
list.addEventListener('click',createTask);
list.addEventListener('click',removeTask);
