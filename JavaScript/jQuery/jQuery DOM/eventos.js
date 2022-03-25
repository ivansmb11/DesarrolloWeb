// $(document).ready(function(){
// 	var boton = $('#boton');

// 	boton.on('click', function(){
// 		document.body.style.background = '#000'   //javascript
// 	});	

// });

// $(document).ready(function(){
// 	var boton = $('#boton');

// 	boton.on('mouseenter', function(){
// 		document.body.style.background = '#000'   //javascript
// 	});	

// });

// $(document).ready(function(){
// 	var boton = $('#boton');

// 	boton.on('mouseenter', function(){
// 		document.body.style.background = '#000'  //javascript
// 	});	
// 	boton.on('mouseleave', function(){
// 		document.body.style.background = '#fff'  //javascript
// 	});	
// });

// $(document).ready(function(){
// 	var boton = $('#boton');

// 	boton.on('click', function(){
// 		alert('Saludos');
// 	});

// 	$('#desactivar').on('click', function(){
// 		boton.off('click');
// 	 	alert ('ha quedado desactivado el botón "Ejecutar"')
// 	});

// });

$(document).ready(function(){
	$('a').on('click', function(e){
	e.preventDefault();
	alert('link desactivado');
	});
});