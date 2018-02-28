function chocoRedirect(){
	 $('ul.tabs').tabs('select_tab', 'tab_id');
}
function selection(a){
	//Recojo el objeto del cual hace del id test 2
	var div = document.getElementById('test2');
	//Limpio el objeto en caso de que el cliente halla hecho back hacia atrás
	div.innerHTML="";

	if(a==='premadePizza'){
		//Agrego el html necesario que se incluirá dentro de tab.
		div.innerHTML += 'Esta tab es para las pizzas prefabricadas';
		//alert('Se manda a crear una pizza prefabricada: ' + document.getElementById('test2').id);
	} else if(a==='ownPizza'){
		//Agrego el html necesario que se incluirá dentro de tab.
		div.innerHTML += 'Esta tab es para las pizzas que se crean desde cero';
		//alert('Se manda a crear una Pizza desde cero: ' + document.getElementById('test2').id);
	}

	redireccionATab2();
}
function redireccionATab2(){
	//Redirecciono a la tab deseada.
	$(document).ready(function(){
    $('ul.tabs').tabs('select_tab', 'test2');
  });
}