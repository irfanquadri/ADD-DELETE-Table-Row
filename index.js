function myCreateFunction(){
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    
    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // var cell3 = row.insertCell(2);
    // var cell4 = row.insertCell(3);
    // cell1.innerHTML = newRow;
    // cell2.innerHTML = newRow;
    // cell3.innerHTML = newRow;
    // cell4.innerHTML = newRow;
    for(var i=0; i<4; i++){
      var cell1 = row.insertCell(i);
      var inputItem = document.createElement('input');
      cell1.appendChild(inputItem);
    }
  }
  
  function myDeleteFunction(){
    document.getElementById("myTable").deleteRow(2);
    
  }
// function DeleteTableRow(){
//     var check_boxes=new Array();
//     for(j=0; j<i ;j++){
//     check_boxes[j]= document.getElementById("check_box"+(j+1));
//     if(check_boxes[j].checked==true){document.getElementById("TABLE").deleteRow(j+1);}  
//  }
// }