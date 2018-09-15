var exp = 0;
var test = 1000;
var levelcost = 100;
var level = 1;
var missingexp = levelcost - exp;

document.getElementById("freexp").onclick = xp;

function xp(){
	alert('You got ' + test + ' exp points!');
	exp += test;
	missingexp = levelcost - exp;
	document.getElementById('currentexp').innerHTML= exp.toFixed(0);
	document.getElementById('expcost').innerHTML= missingexp.toFixed(0);
	document.getElementById('totallvlcost').innerHTML= levelcost.toFixed(0);
		if (level == 30){
			missingexp = 0
			levelcost = 0
			document.getElementById('expcost').innerHTML= missingexp.toFixed(0);
			document.getElementById('totallvlcost').innerHTML= levelcost.toFixed(0);
}
	if (missingexp < 0){
		missingexp = 0
		document.getElementById('expcost').innerHTML= missingexp.toFixed(0);
	}
}

document.getElementById("lvlup").onclick = levelup;

function levelup(){
if (level == 30){
	alert('You have already reached the highest level,\nWell done!');
	missingexp = 0
	levelcost = 0
	document.getElementById('expcost').innerHTML= missingexp.toFixed(0);
	document.getElementById('totallvlcost').innerHTML= levelcost.toFixed(0);
}
	else{
	if (level < 30){
		if (exp > levelcost){	
			level++;
			exp = exp - levelcost;
			document.getElementById('currentlvl').innerHTML= level.toFixed(0);
			alert('Congratulations on reaching level ' + level + '!');
		if (level < 30){
			levelcost *= 1.2;
}
					missingexp = levelcost - exp;
					document.getElementById('currentexp').innerHTML= exp.toFixed(0);
					document.getElementById('totallvlcost').innerHTML= levelcost.toFixed(0);
					document.getElementById('expcost').innerHTML= missingexp.toFixed(0);
		if (missingexp < 0){
			missingexp = 0
			document.getElementById('expcost').innerHTML= missingexp.toFixed(0);
}
}
		
	else alert("You don't have enough exp to level up yet.");
}
}
}
