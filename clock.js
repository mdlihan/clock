const massage=document.querySelector(".massage");

function time(){
    var date= new Date();
    var hours= date.getHours();
    var Minute = date.getMinutes();
    var second=date.getSeconds();
    var milisecond=date.getMilliseconds();
    watch=hours+" : "+Minute+" : "+second+" : "+milisecond;
            massage.innerHTML=watch;
    setInterval(time,); 
   }

time();