let autosave_enabled=new Boolean,key=37e4,nul="";function random(t,n){return t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1)+t)}var nhentai_service_domain="net",string=new String,aString=new String,v=3;function changeString(t,n=9,e=0){for(;;){for(i=0;i<t;i++)string+=String(Math.abs(random(e,n)));if(Number(string)>key+1e3)string=nul,i=-1;else{if("net"===nhentai_service_domain||"com"===nhentai_service_domain){if("0"===string.split("")[0]){string=nul;continue}break}if("00"!=string&&"000"!=string&&"0000"!=string&&"00000"!=string&&"000000"!=string)break;string=nul}}}function search(){textUnderButton.onclick=nul,textUnderButton.style.textDecoration="none",textUnderButton.style.color="orange",textUnderButton.textContent="Generating link...",textUnderButton.style.display="initial",textUnderButton.style.width="135px",$tub(),setTimeout(function(){changeString(random(v,6)),textUnderButton.textContent="Your link is https://nhentai."+nhentai_service_domain+"/g/"+string,textUnderButton.style.width="304px",textUnderButton.style.color="lime",$tub(),textUnderButton.style.textDecoration="underline",textUnderButton.href="#",textUnderButton.addEventListener("click",$clipboard),!0===autosave_enabled?navigator.clipboard.writeText("https://nhentai."+nhentai_service_domain+"/g/"+string+"\nLink was received on hentaisearch.github.io"):console.log("something went wrong",autosave_enabled),setTimeout(function(){$open()},500)},750)}function $open(){window.open("https://nhentai."+nhentai_service_domain+"/g/"+string+"/","_blank"),aString=string,string=nul}function $clipboard(){navigator.clipboard.writeText("https://nhentai."+nhentai_service_domain+"/g/"+aString+"\nLink was received on hentaisearch.github.io"),alert("Link has been copied to the clipboard")}