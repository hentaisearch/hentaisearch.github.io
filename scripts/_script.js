//! Outdated code

// // AutoSave
// let autosave_enabled = new Boolean();

// let key = 380000;

// function random(min, max){
// 	min = Math.ceil(min);
//  	max = Math.floor(max);
// 	return Math.floor(Math.random() * (max - min + 1) + min);
// }

// // Some stuff
// var nhentai_domain = "nhentai."
// var nhentai_domain_ending = "net";

// var string = new String();
// var temp_string = new String();
// var v = 3;

// // Key generating algorithm
// function generate(T, int2 = 9, int1 = 0){
// 	for(;;){
// 		// Generating key
// 		for(i = 0; i < T; i++){
//    			string += String(Math.abs(random(int1, int2)));
//    		}

//    		// Check if key is valid
//      	if(Number(string) > (key + 1000)){
//    			string = "";
//    			i = -1;
//   			continue;
//    		}
//    		if(nhentai_domain_ending === "net" || nhentai_domain_ending === "com"){
//    			if (string.split("")[0] === "0"){
//    				string = "";
//    				continue;
//    			} else {
//    				break;
//    			}
//    		}
//       	if (string == "00" || string == "000" || string == "0000" || string == "00000" || string == "000000"){
//    			string = "";
//    			continue;
//    		} else {
//    			break;
//    		}

//    	}
// }	

// function search(){
//    	//document.cookie="string=" + "https://nhentai.xxx/g/" + string + "; Secure; SameSite=None";
//    	textUnderButton.onclick = "";
//    	// textUnderButton.removeAttribute("href");
//    	textUnderButton.style.color = "orange";
//    	textUnderButton.textContent = "Generating link...";
//    	textUnderButton.style.display = "initial";
//    	textUnderButton.style.width = "131px";
//    	$tub();
//    	setTimeout(function(){
//    		generate(random(v, 6));
// /*
// 		switch(random(v, 6)){
// 			case 2:
// 				generate(2);
// 				console.log("2" + "\/" + string);
// 				break;
// 			case 3:
// 				generate(3);
// 				console.log("3" + "\/" + string);
// 				break;
// 			case 4:
// 				generate(4);
// 				console.log("4" + "\/" + string);
// 				break;
// 			case 5:
// 				generate(5);
// 				console.log("5" + "\/" + string);
// 				break;
// 			case 6:
// 				generate(6);
// 				console.log("6" + "\/" + string);
// 				break;*/
//    		textUnderButton.textContent = "Your link is " + 'https://' + nhentai_domain + nhentai_domain_ending + '/g/' + string;
//    		textUnderButton.style.width = "300px";
//    		textUnderButton.style.color = "lime";
//    		// textUnderButton.href = "javascript:void(0)";
//    		textUnderButton.style.textDecoration = "none";
//    		$tub();
//    		textUnderButton.addEventListener("click", $clipboard);
//    		if(autosave_enabled === true){
//    			navigator.clipboard.writeText('https://' + nhentai_domain + nhentai_domain_ending + '/g/' + string + "\nLink was received on hentaisearch.github.io");
//  		} else console.log(autosave_enabled)
//    		setTimeout(function(){ $open() }, 500);
// 	}, 750);
// }

// function $open() {
// 	window.open('https://' + nhentai_domain + nhentai_domain_ending + '/g/' + string + "\/", '_blank');
// 	temp_string = string;
// 	string = "";
// }

// function $clipboard(){
// 		navigator.clipboard.writeText('https://' + nhentai_domain + nhentai_domain_ending + '/g/' + temp_string + "\nLink was received on hentaisearch.github.io");
// 		alert("Link has been copied to the clipboard");

// }