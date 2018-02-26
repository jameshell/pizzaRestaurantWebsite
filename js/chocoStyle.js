function chocoRedirect(){
	 $('ul.tabs').tabs('select_tab', 'tab_id');
}
function selection(a){
	if(a==='premadePizza'){
		alert("You will buy a prefabricated pizza");
	} else if(a==='ownPizza'){
		alert("You will build your own pizza");
	}
}