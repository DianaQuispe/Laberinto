var tablero = document.getElementById("tablero");
var tabla = document.createElement("table");
var up = document.getElementById("up");
var down = document.getElementById("down");
var left = document.getElementById("left");
var right = document.getElementById("right");
var forward = document.getElementById('forward');
<<<<<<< HEAD
var restart = document.getElementById("restart");
=======

>>>>>>> 5da94bdc83dad95880a6147f69593e83e7633aa6
tabla.setAttribute('id','tabla');
tabla.setAttribute = ("class", "tablita");
var x,y;

var mapa=[
"******************",
"*_________*______*",
"*_****______******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*o*__*________**W*",
"******************"];

for(var i =0; i<mapa.length; i++) {
    var fila = document.createElement("tr");
    for(var j=0; j<mapa[i].length; j++) {
        var celda = document.createElement("td");
            if(mapa[i][j] == "o" ) {
                celda.setAttribute("class", "inicio");
                celda.setAttribute("id","posi");
                x=i;
                y=j;
                console.log(x +"," + y);
                
            }else if(mapa[i][j] == "W") {
                celda.setAttribute("class", "final");
            }else if(mapa[i][j] == "*") {
                celda.setAttribute("class", "asterisco");
            }else if(mapa[i][j] == "_") {
                celda.setAttribute("class", "subguion");
            }       
            fila.appendChild(celda);
        } 
<<<<<<< HEAD
          tabla.appendChild(fila);
          tablero.appendChild(tabla);
}
up.onclick = function() { // X  ^ disminuye y Y -> se mantiene
    if (x >1 && mapa[x-1][y] != "*") {
     console.log(x +"," + y);;
         tabla.rows[x] .cells[y].setAttribute("class", "subguion");
          x--;
         tabla.rows[x].cells[y].setAttribute("class", "up");
     }
}

left.onclick = function() { // X ^ se mantiene Y disminuye ->
console.log(x +"," + y);
     if (y>1 &&  mapa[x][y-1] != "*") {
         tabla.rows[x].cells[y].setAttribute("class", "subguion");
         y--; 
         tabla.rows[x].cells[y].setAttribute("class", "left");
      }   
}

right.onclick = function() { //X  ^ se mantiene y Y aumenta ->
     console.log(x +"," + y);
     if (y<16 && mapa[x][y+1] != "*") {
         tabla.rows[x].cells[y].setAttribute("class", "subguion");
         y++;
         tabla.rows[x].cells[y].setAttribute("class", "right");
     }
}

down.onclick = function() { //X ^ aumenta y Y se mantiene ->
     console.log(x +"," + y);
     if (x<9 &&  mapa[x+1][y] != "*") {
         tabla.rows[x].cells[y].setAttribute("class", "subguion");
         x++;
         tabla.rows[x].cells[y].setAttribute("class", "down");
     }
}


forward.onclick = function() {
     myFunction();  
   console.log(x +"," + y);

      

=======
            tabla.appendChild(fila);
            tablero.appendChild(tabla);
}
var tabla2 = document.getElementById("tabla");

up.onclick = function() {
    if (x>1 && mapa[x-1][y] != "*") {
         tabla2.rows[x]  .cells[y].setAttribute("class", "subguion");
          x--;
         tabla2.rows[x].cells[y].setAttribute("class", "up");
     }
}

left.onclick = function() {
     if (y>1 &&  mapa[x][y-1] != "*") {
         tabla2.rows[x].cells[y].setAttribute("class", "subguion");
         y--; 
         tabla2.rows[x].cells[y].setAttribute("class", "left");
      }   
}

right.onclick = function() {
     if (y<16 && mapa[x][y+1] != "*") {
         tabla2.rows[x].cells[y].setAttribute("class", "subguion");
         y++;
         tabla2.rows[x].cells[y].setAttribute("class", "right");
     }
}

down.onclick = function() {
     if (x<9 &&  mapa[x+1][y] != "*") {
         tabla2.rows[x].cells[y].setAttribute("class", "subguion");
         x++;
         tabla2.rows[x].cells[y].setAttribute("class", "down");
     }
>>>>>>> 5da94bdc83dad95880a6147f69593e83e7633aa6
}
function myFunction() {

    setInterval(function(){ 
     //var posi = document.getElementById("posi");
    var t = true;
     if(mapa[x][y] != "*" ) {
        tabla.rows[x].cells[y].setAttribute("class", "up");
          x--;   
     }else if(tabla.rows[x].cells[y+1].setAttribute("class", "subguion")); {
          tabla.rows[x].cells[y].setAttribute("class", "right"); 
          y++;    }
     }, 400);
} 

restart.onclick = function( ) {

<<<<<<< HEAD
}
  
=======
forward.onmouseup  = function() {
     if (x>1 && mapa[x-1][y] != "*") {
         tabla2.rows[x]  .cells[y].setAttribute("class", "subguion");
          x--;
        tabla2.rows[x].cells[y].setAttribute("class", "up");
     }
}
>>>>>>> 5da94bdc83dad95880a6147f69593e83e7633aa6
