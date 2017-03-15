var data = [
	{question: "Who makes it, has no need of it.\nWho buys it, has no use for it.\nWho uses it can neither see nor feel it.\nWhat is it?", answer:"A coffin"},
	{question: "What kind of room has no doors or windows?", answer:"A Mushroom"},
	{question: "Which creature walks on four legs in the morning,\n two legs in the afternoon, and\n three legs in the evening?", answer:"Man"}
];
var clicked = false;
document.getElementById("btn1").addEventListener('click', function(e){
	if(clicked === false){
		var h2 = document.createElement("h2");
		h2.innerText = "hello";
		document.body.append(h2);
	}
	clicked = true;
});
