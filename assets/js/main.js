var tablero = document.getElementById("tablero");
var tabla = document.createElement("table");
tabla.setAttribute = ("class", "tablita");

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
	//	var textoCelda = document.createTextNode(mapa[i][j]);
     //	celda.appendChild(textoCelda);
     		if(mapa[i][j] == "o" ) {
	     		celda.setAttribute("class", "inicio")
     		}else if(mapa[i][j] == "W") {
   				celda.setAttribute("class", "final")
     		}else if(mapa[i][j] == "*") {
     			celda.setAttribute("class", "asterisco")
     		}else if(mapa[i][j] == "_") {
     			celda.setAttribute("class", "subguion")
     		}		
     		fila.appendChild(celda);

     		//  if(mapa[i][j] == "W") {
     		// 	celda.setAttribute("class", "final")
	      // 		fila.appendChild(celda);
     		// }
			
		} 
			tabla.appendChild(fila);
			tablero.appendChild(tabla);
	}

