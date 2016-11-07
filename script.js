

function addNew(){
  var taskElem = document.getElementById('idtask');
  var task = taskElem.value;

  var mytable = document.getElementById('mytable');
  var row   = mytable.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  var checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  document.getElementById("stam").appendChild(checkbox);

  cell1.innerHTML = task;
  cell2.innerHTML = document.getElementById("stam").innerHTML;
};
