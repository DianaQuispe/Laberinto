var tablero = document.getElementById("tablero");
var tabla = document.createElement("table");
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
var asi = new Array(mapa.length);
console.log(asi);
for(var i =0; i<mapa.length; i++) {
    var fila = document.createElement("tr");
    for(var j=0; j<mapa[i].length; j++) {
        var celda = document.createElement("td");
            if(mapa[i][j] == "o" ) {
                var img = document.createElement("img");
                img.src = "assets/imagenes/start.png";
                img.id = "img_uno";
                celda.appendChild(img);
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

document.getElementById("up").addEventListener("click", upFunction);
function upFunction() { // X  ^ disminuye y Y -> se mantiene
 if (x >1 && mapa[x-1][y] != "*") {
     console.log(x +"," + y);;
         tabla.rows[x] .cells[y].setAttribute("class", "color");
          x--;
         tabla.rows[x].cells[y].setAttribute("class", "up");
     }
}


var down = document.getElementById("down").addEventListener("click", downFunction);
function downFunction() {
          console.log(x +"," + y);;

     if (x<9 &&  mapa[x+1][y] != "*") {
         tabla.rows[x] .cells[y].setAttribute("class", "color");
         x++;
         tabla.rows[x].cells[y].setAttribute("class", "down");
     }
     ganaste();
}
document.getElementById("left").addEventListener("click", leftFunction);
function leftFunction() {
     if (y>1 &&  mapa[x][y-1] != "*") {
         tabla.rows[x] .cells[y].setAttribute("class", "color");
         y--; 
         tabla.rows[x].cells[y].setAttribute("class", "left");
      }   
}
document.getElementById("right").addEventListener("click", rightFunction);
function rightFunction() {
     if (y<16 && mapa[x][y+1] != "*") {
         tabla.rows[x] .cells[y].setAttribute("class", "color");
         y++;
         tabla.rows[x].cells[y].setAttribute("class", "right");
     }
}

restart.onclick = function( ) {
    if(mapa[x][y] != "*" ) {
        tabla.rows[x].cells[y].setAttribute("class", "subguion");
    x=9;
    y = 1;
    x--;
    tabla.rows[x].cells[y].setAttribute("class", "up");
    tabla.rows[x].cells[y].setAttribute("class", "subguion");

  // console.log(x +"," + y);
    }
}

  
forward.onclick  = function() {
     setInterval(function(){myFunction()}, 350);
   
}

function ganaste() {
     if(x==9 && y==16) {
alert("ganaste");

     }
    

  // console.log(x +"," + y);
         //y<16 
}
function myFunction() {
     upFunction();
     rightFunction();
    // alert(x + "." + y);
     if(mapa[x-1][y] == "*" && mapa[x-1][y+1] == "*" ) { 

          downFunction();
      } 
}    
     //     if(mapa[x+1][y] != "*") {
     //    if (y>1 &&  tabla.rows[x+1].cells[y].getAttribute("class", "subguion")) {
     //     tabla.rows[x].cells[y].setAttribute("class", "subguion");
     //     y--; 
     //     tabla.rows[x].cells[y].setAttribute("class", "left");
     //    }   
     //       }else if(mapa[x][y-1] != "*") { 
     //    if (y>1 &&  tabla.rows[x].cells[y-1].getAttribute("class", "subguion")) {
     //         tabla.rows[x].cells[y].setAttribute("class", "subguion");
     //         y--; 
     //         tabla.rows[x].cells[y].setAttribute("class", "left");
     //        }   
     // }


    //   var array = [ 
    // [x-1,y],[x,y+1],[x+1,y],[x,y-1]
    // ];
    // for(var pri =0; pri<array.length; pri++) {
    //       array = new String(array);
    //       console.log(array);
    // }
    
    //     if(array[0] == tabla.rows[x].cells[y].setAttribute("class", "subguion")) {
    //     tabla.rows[x].cells[y].setAttribute("class", "subguion");
    //     x--
    //     tabla.rows[x].cells[y].setAttribute("class", "up");
        
    // }else 
    // tabla.rows[x].cells[y].setAttribute("class", "subguion");
    // y++;
    //   tabla.rows[x].cells[y].setAttribute("class", "right");
    // }
