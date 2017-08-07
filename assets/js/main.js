var tablero = document.getElementById("tablero");
var tabla = document.createElement("table");
tabla.setAttribute('id','tabla');
tabla.setAttribute = ("class", "tablita");
var x,y;

var mapa=[
"******************",
"*_________*______*",
"*_*****_____******",
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
      //    celda.classList.toggle("todas");
    //  var textoCelda = document.createTextNode(mapa[i][j]);
     // celda.appendChild(textoCelda);
            if(mapa[i][j] == "o" ) {
                celda.setAttribute("class", "inicio");
                x=i;
                y=j;
                console.log(x);
                console.log(y);
            }else if(mapa[i][j] == "W") {
                celda.setAttribute("class", "final");
            }else if(mapa[i][j] == "*") {
                celda.setAttribute("class", "asterisco");
            }else if(mapa[i][j] == "_") {
                celda.setAttribute("class", "subguion");
            }       
            fila.appendChild(celda);

            //  if(mapa[i][j] == "W") {
            //  celda.setAttribute("class", "final")
          //        fila.appendChild(celda);
            // }
            
        } 
            tabla.appendChild(fila);
            tablero.appendChild(tabla);
    }



var tabla2 = document.getElementById("tabla");

var up = document.getElementById("up");
up.onclick = function() {
    if (x>1 && mapa[x-1][y] != "*") {

    tabla2.rows[x].cells[y].setAttribute("class", "subguion");
     x--;
     tabla2.rows[x].cells[y].setAttribute("class", "up");
}

}

var left = document.getElementById("left");
left.onclick = function() {
     if (y>1 &&  mapa[x][y-1] != "*") {
    tabla2.rows[x].cells[y].setAttribute("class", "subguion");
    y--; 
    tabla2.rows[x].cells[y].setAttribute("class", "left");
}

/*
     for(var i =0; i <celda.length; i++) {
        celda[i].setAttribute("class", "todas");
  
        //  celda[i].style.background = "url('assets/imagenes/up.png')";
     }
     alert("sera");*/
}

var right = document.getElementById("right");
right.onclick = function() {
     if (y<16 && mapa[x][y+1] != "*") {
    tabla2.rows[x].cells[y].setAttribute("class", "subguion");
    y++;
    tabla2.rows[x].cells[y].setAttribute("class", "right");
}
}

//18x11

var down = document.getElementById("down");
down.onclick = function() {
     if (x<9 &&  mapa[x+1][y] != "*") {
    tabla2.rows[x].cells[y].setAttribute("class", "subguion");
    x++;
    tabla2.rows[x].cells[y].setAttribute("class", "down");

}

}

var forward = document.getElementById('forward');
forward.onclick = function() {
     alert("sforwardera");
}