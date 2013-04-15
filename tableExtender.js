/*****Declaración de variables globales*****/
var equiposTabla = new Array();



/*******Ejecución del Prgrama*****/
$(document).ready(function(){	
	crearHeader();
	crearFooter();
}); 

function crearHeader(){	
	var papa = $(".miTabla");
	var tr = $("<tr>");
	tr.text("Show"); 
	var header = $("<thead>");	
	var input = $("<input>"); 
	input.align = "right";
	input.text("Search");
	input.addClass("span1");	
	input.val("Search");	
	var select = $("<select>");
	select.addClass("span1");
	var opcion1 = $("<option>");	
	opcion1.text("1"); 
	select.append(opcion1);
	var opcion2 = $("<option>");
	opcion2.text("2"); 
	select.append(opcion2);
	var opcion3 = $("<option>");
	opcion3.text("3"); 
	select.append(opcion3);
	var opcion4 = $("<option>");
	opcion4.text("4"); 
	select.append(opcion4);
	var opcion5 = $("<option>");
	opcion5.text("5"); 
	select.append(opcion5);
	tr.append(select);
	tr.append(input);
    header.append(tr);
	papa.append(header);	
} 


function crearFooter(){	
	var papa = $(".miTabla"); 
	var tr = $("<tr>");
	var footer = $("<tfoot>");
	var divToolbar = $("<div>");
	divToolbar.addClass("btn-toolbar")
	divToolbar.text("Showing 1 to 10 de 10 entries");
	var divGroup = $("<div>");	
	divGroup.addClass("btn-group");
	var btnFirst = $("<button>");
	btnFirst.addClass("btn");
	btnFirst.text("First");
	var btnPrevious = $("<button>");
	btnPrevious.addClass("btn");
	btnPrevious.text("Previous");
	var btn1 = $("<button>");
	btn1.addClass("btn");
	btn1.text("1");
	var btn2 = $("<button>");
	btn2.addClass("btn");
	btn2.text("2");
	var btn3 = $("<button>");
	btn3.addClass("btn");
	btn3.text("3");
	var btn4 = $("<button>");
	btn4.addClass("btn");
	btn4.text("4");
	var btn5 = $("<button>");
	btn5.addClass("btn");
	btn5.text("5");
	var btnNext = $("<button>");
	btnNext.addClass("btn");
	btnNext.text("Next");
	var btnLast = $("<button>");	
	btnLast.addClass("btn");
	btnLast.text("Last");
	divGroup.append(btnFirst); 
	divGroup.append(btnPrevious); 
	divGroup.append(btn1); 
	divGroup.append(btn2); 
	divGroup.append(btn3); 
	divGroup.append(btn4); 
	divGroup.append(btn5); 
	divGroup.append(btnNext); 
	divGroup.append(btnLast); 
	divToolbar.append(divGroup);	
	tr.append(divToolbar);
	footer.append(tr);
	papa.append(footer);
}