function genDivs(v){ 
    var container = document.getElementById("container"); // whatever you want to append the rows to:
    // container.style.display = 'inline-block';
    container.style.width = '672px';
    container.style.border = "5px solid red"

    let size = (672-v-v)/v;

    for(var i = 0; i < v; i++){ 
      var row = document.createElement("div"); 
      row.style.height = size + "px";
      for(var x = 1; x <= v; x++){ 
        var cell = document.createElement("div"); 
        cell.classList.add("cell");
        cell.style.display = 'inline-block';
        cell.style.border = "1px solid black";
        cell.style.borderCollapse = 'true';
        cell.style.height = size + "px";
        cell.style.width = size + "px";
        cell.style.backgroundColor = 'orange';
        
        //   cell.className = "gridsquare"; 
       // cell.innerText = (i * v) + x;
        row.appendChild(cell); 
      } 
      container.appendChild(row); 
    } 
  }

// genDivs(6);