let key=358509,nul="";function random(n,i){return n=Math.ceil(n),i=Math.floor(i),Math.floor(Math.random()*(i-n+1)+n)}var nhentai_service_domain="net",string=new String,v=3;function changeString(n,r=9,e=0){for(;;){for(i=0;i<n;i++)string+=String(Math.abs(random(e,r)));if(Number(string)>key+100)string=nul,i=-1;else{if("net"===nhentai_service_domain||"com"===nhentai_service_domain){if("0"===string.split("")[0]){string=nul;continue}break}if("00"!=string&&"000"!=string&&"0000"!=string&&"00000"!=string&&"000000"!=string)break;string=nul}}}function search(){switch(random(v,6)){case 2:changeString(2),console.log("2/"+string);break;case 3:changeString(3),console.log("3/"+string);break;case 4:changeString(4),console.log("4/"+string);break;case 5:changeString(5),console.log("5/"+string);break;case 6:changeString(6),console.log("6/"+string)}window.open("https://nhentai."+nhentai_service_domain+"/g/"+string+"/","_blank"),string=nul}