let nul="";function random(n,r){return n=Math.ceil(n),r=Math.floor(r),Math.floor(Math.random()*(r-n+1)+n)}var string=new String,assistVariable=3;let log=(n,r=nul)=>{console.log(n+"/"+string)};function changeString(n,r=9,t=0,g=!1){for(;;){for(i=0;i<n;i++)string+=String(Math.abs(random(t,r))),!0===g&&Number(string)>4e5&&(string=nul,i=-1);if("00"!=string&&"000"!=string&&"0000"!=string&&"00000"!=string&&"000000"!=string)break;string=nul}}function search(){switch(random(assistVariable,6)){case 2:changeString(2),console.log("2/"+string);break;case 3:changeString(3),console.log("3/"+string);break;case 4:changeString(4),console.log("4/"+string);break;case 5:changeString(5),console.log("5/"+string);break;case 6:changeString(6,9,0,!0),console.log("6/"+string)}window.open("https://nhentai.xxx/g/"+string+"/","_blank"),string=nul}