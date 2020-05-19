var container = document.getElementById("container");
var randCol = document.getElementById('randCols');
var blackColor = document.getElementById('blackCol');

function genDivs(v){ 
    
    container.style.width = '700px';
    // container.style.height = '700px';
    container.style.border = "5px solid black"
    // container.style.margin = "0 auto"

    let size = (700-v-v)/v;

    for(var i = 0; i < v; i++){ 
      var row = document.createElement("div"); 
      row.style.height = size  + "px";
      row.style.margin = "0 auto";

      for(var x = 1; x <= v; x++){ 
        var cell = document.createElement("div"); 
        cell.classList.add("cell");
        cell.style.display = 'inline-block';
        cell.style.border = "0.5px solid black";
        cell.style.borderCollapse = 'true';
        cell.style.height = size + "px";
        cell.style.width = size + "px";

        cell.addEventListener("mouseover", function(e) {
          // e.target.style.backgroundColor = 'lightblue';
          e.target.style.backgroundColor = toggleColor();

        });

        row.appendChild(cell); 
      } 
      container.appendChild(row); 
    } 
  }
function clearGrid() {
  mainColor = false;
  container.innerHTML = "";
  container.style.border = "none";
  let size = "";
  do {
    size = parseInt(prompt("New Grid: \n How many squares per side?"));
    if(!isNaN(size)) {
      genDivs(size);
    }
  }
  while(isNaN(size));
}

genDivs(16);

let mainColor = false;
randCol.onclick = function() {
  mainColor = true;
};
blackColor.onclick = function() {
  mainColor = false;
}

function toggleColor() {
  
  if (mainColor) {
    var color = Math.floor(Math.random() * 16777216).toString(16);
    return '#000000'.slice(0, -color.length) + color;
  }
  else {
    return '#000000';
  }

}