/*******Ejecución del Programa*****/
function extenderTabla(selector){
	var papa = $(selector);	
	crearHeader(papa);
	footerInicial(papa);
	configBtns(papa);
}


/*********Función crearHeader********/
function crearHeader(papa){	
	var tr = $("<tr>");
	tr.text("Show "); 
	var header = $("<thead>");		
	var select = $("<select>");
	select.addClass("span1");
	select.addClass("tamaPag");
	var opcion0 = $("<option>");	
	opcion0.text(""); 
	select.append(opcion0);	
	var opcion1 = $("<option>");	
	opcion1.text("10");
	opcion1.addClass("tamaPag1");
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
	var btnPrevious = $("<button>");
	btnPrevious.addClass("btn");
	btnPrevious.addClass("Previous");
	btnPrevious.text("Previous");
	btnPrevious.data("val", 1);	
	var btnNext = $("<button>");
	btnNext.addClass("btn");
	btnNext.addClass("Next");
	btnNext.text("Next");
	btnNext.data("val", 1);
	var btnLast = $("<button>");	
	btnLast.addClass("btn");
	btnLast.addClass("Last");
	btnLast.text("Last");	
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


/****************Función configBtns*****************/
function configBtns(papa){
	configBtnTamaPag(papa);       //Boton que configura tamaño de página 
	configBtnNextPag(papa);       //Boton que configura mostrar página siguiente 
	configBtnPreviousPag(papa);   //Boton que configura mostrar página anterior 	
	configBtnFirstPag(papa);      //Boton que configura mostrar primera página  
	configBtnLastPag(papa);       //Boton que configura mostrar última página
	configBtnNumPags(papa);       //Botones que configuran mostrar páginas  		  		
}


/***************Función configBtnTamaPag**************/
function configBtnTamaPag(papa){
	papa.find(".tamaPag").click(function(pageSize){  //botones Select-Option		
		var pageSize = $(this).val();
		papa.find(".tamaPag").data("pageSize", pageSize);
		if (pageSize != "") {
			console.log(pageSize);
			mostrarTamaPag(papa, pageSize); 			
		}				
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
	papa.find(".btn-group").data("numsPag", numsPag);
}


/***************Función configBtnNextPag**************/
function configBtnNextPag(papa){	
	papa.find(".Next").click(function(){    //boton clase Next
		val = $(this).data("val");
		var pageSize1 = papa.find(".tamaPag").data("pageSize");
		mostrarNextPag(papa, pageSize1, val);		
	})	
}


/***************Función mostrarNextPag**************/
function mostrarNextPag(papa, pageSize1, val){	
	var numsPag = papa.find(".btn-group").data("numsPag");
	if (val < numsPag) {
		var val = $(".Next").data("val");
		var leng = papa.find("tbody tr").length;
		for (var i = val*pageSize1; i < (val + 1)*pageSize1; i++) {			
				papa.find(".pos" + i).show();		
		}	
		for (var i = 0; i < val*pageSize1; i++) {			
				papa.find(".pos" + i).hide();		
		}
		val += 1;
		papa.find(".Next").data("val", val);
		papa.find(".Previous").data("val", val);	
	}	
}


/***************Función configBtnPreviousPag**************/
function configBtnPreviousPag(papa){	
	papa.find(".Previous").click(function(){    //boton clase Previous
		val = $(this).data("val");
		var pageSize1 = papa.find(".tamaPag").data("pageSize");
		mostrarPreviousPag(papa, pageSize1, val);		
	});	
}


/***************Función mostrarPreviousPag**************/
function mostrarPreviousPag(papa, pageSize1, val){	
	if (val > 1) {
		var val = $(".Previous").data("val");
		var leng = papa.find("tbody tr").length;
		for (var i = (val - 2)*pageSize1; i < (val - 1)*pageSize1; i++) {			
				papa.find(".pos" + i).show();		
		}	
		for (var i = (val - 1)*pageSize1; i < leng; i++) {			
				papa.find(".pos" + i).hide();		
		}
		val -= 1;
		papa.find(".Previous").data("val", val);
		papa.find(".Next").data("val", val)
	}				
}


/***************Función configBtnFirstPag**************/
function configBtnFirstPag(papa){	
	papa.find(".First").click(function(){    //boton clase First
		var pageSize1 = papa.find(".tamaPag").data("pageSize");
		mostrarFirstPag(papa, pageSize1);		
	});	
}


/***************Función mostrarFirstPag**************/
function mostrarFirstPag(papa, pageSize1){	
	var leng = papa.find("tbody tr").length;
	for (var i = 0; i < pageSize1; i++) {			
		papa.find(".pos" + i).show();		
	}
	for (var i = pageSize1; i < leng; i++) {			
		papa.find(".pos" + i).hide();		
	}	
	papa.find(".Previous").data("val", 1);
	papa.find(".Next").data("val", 1)		
}


/***************Función configBtnLastPag**************/
function configBtnLastPag(papa){	
	papa.find(".Last").click(function(){    //boton clase Last
		var pageSize1 = papa.find(".tamaPag").data("pageSize");
		mostrarLastPag(papa, pageSize1);		
	});	
}


/***************Función mostrarLastPag**************/
function mostrarLastPag(papa, pageSize1){	
	var numsPag = papa.find(".btn-group").data("numsPag");
	var leng = papa.find("tbody tr").length;
	leng = leng - 1;
	for (var i = (leng - pageSize1); i < leng; i++) {			
		papa.find(".pos" + i).show();		
	}
	for (var i = 0; i < (leng - pageSize1); i++) {			
		papa.find(".pos" + i).hide();		
	}	
	papa.find(".Previous").data("val", numsPag);
	papa.find(".Next").data("val", numsPag);		
}


/***************Función configBtnNumPags**************/
function configBtnNumPags(papa){	
	papa.find(".boton").click(function(){    //botones de enumeración de página
		var pageSize1 = papa.find(".tamaPag").data("pageSize");
		var numPag = $(this).data("val");
		console.log(numPag);
		mostrarNumPag(papa, pageSize1, numPag);		
	});	
}


/***************Función mostrarNumPag**************/
function mostrarNumPag(papa, pageSize1, numPag){	
	var numsPag = papa.find(".btn-group").data("numsPag");
	var leng = papa.find("tbody tr").length;
	for (var i = (numPag - 1)*pageSize1; i < numPag*pageSize1; i++) {			
		papa.find(".pos" + i).show();		
	}
	for (var i = 0; i < (numPag - 1)*pageSize1; i++) {			
		papa.find(".pos" + i).hide();		
	}	
	for (var i = numPag*pageSize1; i < leng; i++) {			
		papa.find(".pos" + i).hide();		
	}
	papa.find(".Previous").data("val", numPag);
	papa.find(".Next").data("val", numPag);		
}