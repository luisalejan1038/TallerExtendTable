/*****Declaración de variables globales*****/
var equiposTabla = new Array();



/*******Ejecución del Prgrama*****/
$(document).ready(function(){	
	crearTabla(equiposTabla);
}); 

function crearTabla(leenTabla){
	var papa = $(".miTabla")	
	for(var i = 0; i < 20; i++)
	{
		var team = new Object(); 
		team.pos = i;
		team.equipo = "equipo" + i; 
		team.puntos = (2 * i) - 1; 
		team.posicion = i;	
	    leenTabla.push(team);	
	}

	var tbody = $("<tbody>");
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
	tbody.append(tr); 
	papa.append(tbody);

	for (var i = 0; i < leenTabla.length; i++) {
		var fila = $("<tr>"); 
		var pos = $("<td>")
		var equipo = $("<td>");
		var puntos = $("<td>");
		var posicion = $("<td>");
		var tbody = $("<tbody>");
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
		tbody.append(fila);
		papa.append(tbody);
	}
} 
