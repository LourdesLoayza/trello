
// Versión 0.0.1 ----------------------------------------

window.addEventListener('load', function () {
  var insertList= document.getElementById('insert-list');
  var btnNewLIst = document.getElementById('new-list');
  var containerListOne= document.getElementById('container-list-one');
  var containerListTwo= document.getElementById('container-list-two');
  var btnSaveTask = document.getElementById('btn-new-list')

  var newTask = document.createElement('textarea');
  var btnSaveTask = document.createElement('button');
  var nameList = document.createElement('ul');
  var newSubTask = document.createElement('li');
    
  
  // mostrar formulario para agregar lista de actividades
  function addContainerOne(text) {   
    btnSaveTask.textContent = 'Guardar';
    newTask.setAttribute ('placeholder', 'Añade una lista...');
    btnSaveTask.setAttribute('id','btn-new-list')
    containerListOne.style.background = ('#e2e4e6');
    
    containerListOne.insertBefore(newTask, containerListOne.childNodes[0]);
    containerListOne.insertBefore(btnSaveTask, containerListOne.childNodes[1]);
  }

  // mostrar formulario para agregar sub lista de actividades
  function addContainerTwo(text) {   
    btnSaveTask.textContent = 'Guardar';
    newTask.setAttribute ('placeholder', 'Añade una lista...');
    btnSaveTask.setAttribute('id','btn-new-list')
    containerListTwo.style.background = ('#e2e4e6');
    nameList.textContent = newTask.value;
    
    newSubTask.setAttribute('id','new-sub-task')
    newSubTask.textContent = 'Añadir una tarea'

    containerListTwo.insertBefore(newTask, containerListTwo.childNodes[0]);
    containerListTwo.insertBefore(btnSaveTask, containerListTwo.childNodes[1]);
    containerListOne.insertBefore(nameList, containerListOne.childNodes[0]);
    containerListOne.insertBefore(newSubTask, containerListOne.childNodes[1]);
  }

  // muestra formulario para agregar lista de actividades
  btnNewLIst.addEventListener('click', function() {
    btnNewLIst.parentNode.removeChild(btnNewLIst);
    addContainerOne(btnNewLIst.value); 
  }); 
  
  // mostrar formulario genera para nuevas actividades
  btnSaveTask.addEventListener('click', function() {
    btnSaveTask.parentNode.removeChild(btnSaveTask);
    newTask.parentNode.removeChild(newTask);
    addContainerTwo(btnSaveTask.value);
    newTask.value = '';
  }); 

  



});  