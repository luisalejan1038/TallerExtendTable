/*****Declaración de variables globales*****/
var equiposTabla = new Array();
var fila; 


/*******Ejecución del Programa*****/
$(document).ready(function(){	
	crearTabla(equiposTabla);
	//extenderTabla(".miTabla2");
	extenderTabla(".miTabla");
}); 

function crearTabla(leenTabla){
	var papa = $(".miTabla")	
	for(var i = 0; i < 500; i++)
	{
		var team = new Object(); 
		team.id = "item" + i;
		team.pos = i;
		team.equipo = "equipo" + i; 
		team.puntos = (2 * i) - 1; 
		team.posicion = i;	
	    leenTabla.push(team);	
	}

	var tr = $("<tr>");
	var th1 = $("<th>");
	th1.text("#");
	var th2 = $("<th>");
	th2.text("Equipo");	
	var th3 = $("<th>");
	th3.text("Puntos");
	var th4 = $("<th>");
	th4.text("Cambio de posicion");
	tr.append(th1);
	tr.append(th2);
	tr.append(th3);
	tr.append(th4);
	papa.append(tr);

	for (var i = 0; i < leenTabla.length; i++) {
		fila = $("<tr>").addClass("pos" + i); 
		var pos = $("<td>")
		var equipo = $("<td>");
		var puntos = $("<td>");
		var posicion = $("<td>");
		fila.append(pos.text(leenTabla[i].pos));
		fila.append(equipo.text(leenTabla[i].equipo));
		fila.append(puntos.text(leenTabla[i].puntos));
		fila.append(posicion.text(leenTabla[i].posicion));		
		if (i%2 == 0)
		{
			fila.css("backgroundColor", "#C5CAE8");
		}else{
			fila.css("backgroundColor", "#A6B5BF");
		}
		papa.append(fila);
	}
} 
