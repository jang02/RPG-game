var exp = 0;
var test = 115;
var levelcost = 100;
var level = 1

document.getElementById("freexp").onclick = xp;

function xp(){
	alert('You got ' + test + ' exp points!');
	exp += test;
	if (exp > levelcost){
		document.getElementById("freexp").onclick = levelup;
}
}

function levelup(){
	for (level = 1; level < 9; level++){
}
	alert('Congratulations on reaching level ' + level + '!');
	for (levelcost = 100; levelcost < 10000; levelcost *= 1.2){	
}
}
