let nul = "";

function random(min, max){
	min = Math.ceil(min);
 	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

var btn = document.getElementById('search');
var string = new String();
// var aV = 2;

let log = (x, y = nul) => {
	console.log(x + "\/" + string);
}

function changeString(T, int2 = 9, int1 = 0){
	for(i = 0; i < T; i++){
   		string += String(Math.abs(random(int1, int2)));
   		if (string == "00" || string == "000" || string == "0000" || string == "00000" || string == "000000"){
   			string = nul;
   			i--;
   		}
   	}
}

function search(){

	switch(random(2, 6)){
		case 2:
			changeString(2);
			console.log("2");
			break;
		case 3:
			changeString(3);
			console.log("3");
			break;
		case 4:
			changeString(4);
			console.log("4");
			break;
		case 5:
			changeString(5);
			console.log("5");
			break;
		case 6:
			changeString(6);
			console.log("6");
			break;
	}

   	//document.cookie="string=" + "https://nhentai.xxx/g/" + string + "; Secure; SameSite=None";
   window.open('https://nhentai.xxx/g/' + string + "\/", '_blank');
   string = nul;
}
