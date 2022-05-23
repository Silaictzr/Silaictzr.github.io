var i =0;
var images=['https://i.pinimg.com/564x/20/e5/f6/20e5f6c0b510b78346ee5a3ec1c17588.jpg','https://i.pinimg.com/564x/f7/1d/58/f71d58d4e4a16adc050e6f1a7178c1fa.jpg','https://i.pinimg.com/originals/ef/e4/de/efe4dee862454a6df609df0f417c1e79.jpg','https://i.pinimg.com/originals/8e/0d/ab/8e0dab8699be85720ce55845065bf6dc.jpg','https://i.pinimg.com/564x/f9/5d/59/f95d59863ed2c4613af627c4795c6f1e.jpg'];

var duration = 2000;

function slideImg() {
    document.slide.src = images[i];

    if ( i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("slideImg()",duration);
}
window.onload = slideImg;





document.querySelector("#git").onclick=function()
{
    window.location.href="https://www.netflix.com/watch/81161626?trackId=255824129&tctx=0%2C2%2CNAPA%40%40%7Cfd3a212d-dacb-4430-9543-ff05d29901cf-85480649_titles%2F1%2F%2Fred%20%2F0%2F0%2CNAPA%40%40%7Cfd3a212d-dacb-4430-9543-ff05d29901cf-85480649_titles%2F1%2F%2Fred%20%2F0%2F0%2C%2C%2Cfd3a212d-dacb-4430-9543-ff05d29901cf-85480649%7C1%2C%2C81161626"
}

document.querySelector("#git").onclick=function()
{
    window.location.href="https://www.netflix.com/watch/81245432?trackId=254977086&tctx=2%2C1%2C6cca8314-52cf-4eb0-8633-dd28d98d40ef-96903415%2C9d07fe94-d4d6-4193-b9ea-33ec89c685b0_60651619X94XX1653161249168%2C9d07fe94-d4d6-4193-b9ea-33ec89c685b0_ROOT%2C%2C%2C%2C"
}

document.querySelector("#git").onclick=function()
{
    window.location.href="https://www.netflix.com/watch/80077368?trackId=255824129&tctx=0%2C0%2CNAPA%40%40%7C4cbc7183-f6e3-4b64-bc4a-665c8b91f811-98983974_titles%2F1%2F%2Fstra%2F0%2F0%2CNAPA%40%40%7C4cbc7183-f6e3-4b64-bc4a-665c8b91f811-98983974_titles%2F1%2F%2Fstra%2F0%2F0%2Cunknown%2C%2C4cbc7183-f6e3-4b64-bc4a-665c8b91f811-98983974%7C1%2C%2C"
}


document.querySelector("#git").onclick=function()
{
    window.location.href="https://www.netflix.com/watch/81309354?trackId=255824129&tctx=0%2C0%2CNAPA%40%40%7C3e67706b-5432-479c-b2bd-5e9ec4181010-83269554_titles%2F1%2F%2Fthe%20ada%2F0%2F0%2CNAPA%40%40%7C3e67706b-5432-479c-b2bd-5e9ec4181010-83269554_titles%2F1%2F%2Fthe%20ada%2F0%2F0%2Cunknown%2C%2C3e67706b-5432-479c-b2bd-5e9ec4181010-83269554%7C1%2CtitlesResults%2C81309354"
}






 
          function fonk1()
          {
            window.alert('Görüşmek Üzere');
          }







          setInterval(function(){
            window.location.reload(false);
            },60000);








            const türler = document.getElementById("türler");
            const selectText = document.getElementById("selectText");
            const options = document.getElementsByClassName("options");
            const list = document.getElementById("list");


            türler.onclick = function(){
                list.classList.toggle("hide");
            }

            for(option of options){
                option.onclick = function(){
                    selectText.innerHTML = this.textContent;
                    list.classList.toggle("hide");
                };


            };






            var tamEkranButon = document.getElementById("tamekran-button");
 
            function tamEkranYap() {
            
            var tamEkranDiv = document.getElementById("tamekran");
             
            
            var tamEkranFonk=tamEkranDiv.requestFullscreen||
            tamEkranDiv.mozRequestFullScreen||
            tamEkranDiv.msRequestFullscreen||
            tamEkranDiv.webkitRequestFullScreen;
             
            tamEkranFonk.call(tamEkranDiv); 
            }
            tamEkranButon.addEventListener('click', tamEkranYap);



            
            var saatZemin = document.getElementById("zemin");











 
 
            window.onmousemove=function(olay)
            {
            
             
            var xpos=olay.clientX;
            var ypos=olay.clientY;

             
            document.getElementById('x').innerHTML=xpos;
            document.getElementById('y').innerHTML=ypos;
             
             
            }  




           







            
                     



           

		  

