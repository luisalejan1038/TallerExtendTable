/*****Declaración de variables globales*****/
var boton;
var val;


/*******Ejecución del Programa*****/
function extenderTabla(selector){
	var papa = $(selector);
	tablaInicial(papa);	
	crearHeader(papa);
	footerInicial(papa);
	configBtn(papa);
}

/*****Función mostrar tablaInicial*******/
function tablaInicial(papa){
	var leng = papa.find("tbody tr").length;
	for (var i = 0; i < 10; i++) {			
			papa.find(".pos" + i).show();		
	}
	for (var i = 10; i < leng; i++) {			
			papa.find(".pos" + i).hide();		
	}
}


/*********Función crearHeader********/
function crearHeader(papa){	
	var tr = $("<tr>");
	tr.text("Show"); 
	var header = $("<thead>");	
	var input = $("<input>"); 
	input.align = "right";
	input.text("Search");	
	input.val("Search");	
	var select = $("<select>");
	select.addClass("span1");
	select.addClass("tamaPag");
	var opcion1 = $("<option>");	
	opcion1.text("10"); 
	select.append(opcion1);
	var opcion2 = $("<option>");
	opcion2.text("25"); 
	select.append(opcion2);
	var opcion3 = $("<option>");
	opcion3.text("50"); 
	select.append(opcion3);
	var opcion4 = $("<option>");
	opcion4.text("100"); 
	select.append(opcion4); 
	tr.append(select);
	tr.append(input);
    header.append(tr);
	papa.append(header);	
} 



/*********Función footerInicial********/
function footerInicial(papa){	
	var tr = $("<tr>");
	var footer = $("<tfoot>");
	var divToolbar = $("<div>");
	divToolbar.addClass("btn-toolbar")
	divToolbar.text("Showing 1 to 10 de 10 entries");
	var divGroup = $("<div>");	
	divGroup.addClass("btn-group");
	var btnFirst = $("<button>");
	btnFirst.addClass("btn");
	btnFirst.addClass("First");
	btnFirst.text("First");
	btnFirst.data("val", "First");
	var btnPrevious = $("<button>");
	btnPrevious.addClass("btn");
	btnPrevious.addClass("Previous");
	btnPrevious.text("Previous");
	btnPrevious.data("val", "Previous");	
	var btnNext = $("<button>");
	btnNext.addClass("btn");
	btnNext.addClass("Next");
	btnNext.text("Next");
	btnNext.data("val", 1);
	var btnLast = $("<button>");	
	btnLast.addClass("btn");
	btnLast.addClass("Last");
	btnLast.text("Last");	
	btnLast.data("val", "Last");
	divGroup.append(btnFirst); 
	divGroup.append(btnPrevious);
	inicialBtnNumPags(papa, divGroup); 
	divGroup.append(btnNext); 
	divGroup.append(btnLast); 
	divToolbar.append(divGroup);	
	tr.append(divToolbar);
	footer.append(tr);
	papa.append(footer);
}


/*********Función inicialBtnNumPags**********/
function inicialBtnNumPags(papa, divGroup){
	var leng = papa.find("tbody tr").length;
	var numsPagInicial = leng/10;
	for (var i = 1; i < numsPagInicial; i++) {
		var btn = $("<button>");
		btn.addClass("btn");
		btn.addClass("numsPag" + i);	
		btn.addClass("boton");	
		btn.text(i);
		btn.data("val", i);		
		divGroup.append(btn);
	}; 
}


/****************Función configBtn*****************/
function configBtn(papa){
	var pageSize = 10;
	papa.find(".tamaPag").click(function(){  //botones Select-Option
		var pageSize = $(this).val();
		console.log(pageSize);
		mostrarTamaPag(papa, pageSize); 
		//mostrarNextPag(papa, pageSize, val);		
	});

	papa.find(".First").click(function(){    //boton clase First
		val = $(this).data("val");
		//console.log(val);
		mostrarFirstPag(papa, pageSize);
	});

	papa.find(".Previous").click(function(){    //boton clase Previous
		val = $(this).data("val");
		//console.log(val);
		mostrarPreviousPag();
	});

	papa.find(".boton").click(function(){    //clase botones numeración página
		val = $(this).data("val");
		//console.log(val);
		mostrarPagNum(papa, pageSize);
	});

	papa.find(".Next").click(function(){    //boton clase Next
		val = $(this).data("val");
		//console.log(val);
		mostrarNextPag(papa, pageSize, val);
	});

	papa.find(".Last").click(function(){    //boton clase Last
		val = $(this).data("val");
		//console.log(val);
		mostrarLastPag(papa, pageSize);
	});
}


/***************Función mostrarTamaPag**************/
function mostrarTamaPag(papa, pageSize){
	var leng = papa.find("tbody tr").length;
	for (var i = 0; i < pageSize; i++) {			
			papa.find(".pos" + i).show();		
	}
	for (var i = pageSize; i < leng; i++) {			
			papa.find(".pos" + i).hide();		
	}
	configNumBtn(papa, pageSize);
}



/***************Función configNumBtn**************/
function configNumBtn(papa, pageSize){
	var leng = papa.find("tbody tr").length;
	leng = Math.floor(leng);
	var numsPag = leng/pageSize;
	numsPag = Math.floor(numsPag);
	var numsPagInicial = leng/10;
	numsPagInicial = Math.floor(numsPagInicial);	
	for (var i = 1; i <= numsPag; i++) {						
			papa.find(".numsPag" + i).show();	
	}
	for (var i = numsPag + 1; i <= numsPagInicial; i++) {			
			papa.find(".numsPag" + i).hide();					
	}
	//var val = 1; 
	//papa.find(".Next").data("val", val);
	//mostrarNextPag(papa, pageSize, val); 
}


/***************Función mostrarFirstPag**************/
function mostrarFirstPag(papa, pageSize){
	var leng = papa.find("tbody tr").length;
	for (var i = 0; i < 10; i++) {			
			papa.find(".pos" + i).show();		
	}
	for (var i = 10; i < leng; i++) {			
			papa.find(".pos" + i).hide();		
	}
}


/***************Función mostrarPreviousPag**************/
function mostrarPreviousPag(papa, pageSize){
	var leng = papa.find("tbody tr").length;
	for (var i = 0; i < 10; i++) {			
			papa.find(".pos" + i).show();		
	}
	for (var i = 10; i < leng; i++) {			
			papa.find(".pos" + i).hide();		
	}
}


/***************Función mostrarPagNum**************/
function mostrarPagNum(papa, pageSize){
	var leng = papa.find("tbody tr").length;
	for (var i = 0; i < 10; i++) {			
			papa.find(".pos" + i).show();		
	}
	for (var i = 10; i < leng; i++) {			
			papa.find(".pos" + i).hide();		
	}
}


/***************Función mostrarNextPag**************/
function mostrarNextPag(papa, pageSize, val){	
	if (val == 1){
		var val = $(".Next").data("val");
		var leng = papa.find("tbody tr").length;
		for (var i = val*pageSize; i < (val + 1)*pageSize; i++) {			
				papa.find(".pos" + i).show();		
		}	
		for (var i = 0; i < val*pageSize; i++) {			
				papa.find(".pos" + i).hide();		
		}
		val += 1;
		papa.find(".Next").data("val", val);
	}else if (val != 1){
		papa.find(".Next").data("val", val);
		var val = $(".Next").data("val");
		var leng = papa.find("tbody tr").length;
		for (var i = val*pageSize; i < (val + 1)*pageSize; i++) {			
				papa.find(".pos" + i).show();		
		}	
		for (var i = 0; i < val*pageSize; i++) {			
				papa.find(".pos" + i).hide();		
		}
		val += 1;
		papa.find(".Next").data("val", val);
	}	
}


/***************Función mostrarLastPag**************/
function mostrarLastPag(papa, pageSize){
	var leng = papa.find("tbody tr").length;
	for (var i = 0; i < 10; i++) {			
			papa.find(".pos" + i).show();		
	}
	for (var i = 10; i < leng; i++) {			
			papa.find(".pos" + i).hide();		
	}
}