var tablero = document.getElementById("tablero");
var tabla = document.createElement("table");
var up = document.getElementById("up");
var down = document.getElementById("down");
var left = document.getElementById("left");
var right = document.getElementById("right");
var forward = document.getElementById('forward');
var restart = document.getElementById("restart");
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
            tabla.appendChild(fila);
            tablero.appendChild(tabla);
}
var tabla2 = document.getElementById("tabla");

up.onclick = function() {
    if (x>1 && mapa[x-1][y] != "*") {
         tabla.rows[x]  .cells[y].setAttribute("class", "subguion");
          x--;
         tabla.rows[x].cells[y].setAttribute("class", "up");
         console.log( tabla.rows[x].cells[y]);
     }
}

left.onclick = function() {
     if (y>1 &&  mapa[x][y-1] != "*") {
         tabla.rows[x].cells[y].setAttribute("class", "subguion");
         y--; 
         tabla.rows[x].cells[y].setAttribute("class", "left");
      }   
}

right.onclick = function() {
     if (y<16 && mapa[x][y+1] != "*") {
         tabla.rows[x].cells[y].setAttribute("class", "subguion");
         y++;
         tabla.rows[x].cells[y].setAttribute("class", "right");
     }
}

down.onclick = function() {
     if (x<9 &&  mapa[x+1][y] != "*") {
         tabla.rows[x].cells[y].setAttribute("class", "subguion");
         x++;
         tabla.rows[x].cells[y].setAttribute("class", "down");
     }
}

restart.onclick = function( ) {
    if(mapa[x][y] != "*" ) {
        tabla.rows[x].cells[y].setAttribute("class", "subguion");
    x=9;
    y = 1;
    x--;
    tabla.rows[x].cells[y].setAttribute("class", "up");
    console.log(x +"," + y);
    }
}

  
forward.onclick  = function() {
     setInterval(function(){myFunction()}, 400);
   
}
function myFunction() {
    //   var array = [ 
    // [x-1,y],[x,y+1],[x+1,y],[x,y-1]
    // ];
    // for(var pri =0; pri<array.length; pri++) {
    //       array = new String(array);
    //       console.log(array);
    // }
    if(mapa[x-1][y] != "*") {
         if(y<16 && tabla.rows[x-1].cells[y].getAttribute("class", "subguion")){
        tabla.rows[x].cells[y].setAttribute("class", "subguion");
        x--;
        tabla.rows[x].cells[y].setAttribute("class", "up");    
         } 
    }else if(mapa[x][y+1] != "*"){
       if (y<16 && tabla.rows[x].cells[y+1].getAttribute("class", "subguion")) {
         tabla.rows[x].cells[y].setAttribute("class", "subguion");
         y++;
         tabla.rows[x].cells[y].setAttribute("class", "right");
            } 
    }else if(mapa[x+1][y] != "*") {
        if (y>1 &&  tabla.rows[x+1].cells[y].getAttribute("class", "subguion")) {
         tabla.rows[x].cells[y].setAttribute("class", "subguion");
         y--; 
         tabla.rows[x].cells[y].setAttribute("class", "left");
        }   
    }else if(mapa[x][y-1] != "*")
        if (y>1 &&  tabla.rows[x].cells[y-1].getAttribute("class", "subguion")) {
             tabla.rows[x].cells[y].setAttribute("class", "subguion");
             y--; 
             tabla.rows[x].cells[y].setAttribute("class", "left");
            }   
 }

    //     if(array[0] == tabla.rows[x].cells[y].setAttribute("class", "subguion")) {
    //     tabla.rows[x].cells[y].setAttribute("class", "subguion");
    //     x--
    //     tabla.rows[x].cells[y].setAttribute("class", "up");
        
    // }else 
    // tabla.rows[x].cells[y].setAttribute("class", "subguion");
    // y++;
    //   tabla.rows[x].cells[y].setAttribute("class", "right");
    // }
