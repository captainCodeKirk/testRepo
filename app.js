var clicked = false;
document.getElementById("btn1").addEventListener('click', function(e){
	if(clicked == false){
		var h2 = document.createElement("h2");
		h2.innerText = "hello";
		document.body.append(h2);
	}
	clicked = true;
});