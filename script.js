 const hourEl=document.getElementById('hour')
 const minuteEl=document.getElementById('min')
 const secondEl=document.getElementById('sec')
 const ampmEl=document.getElementById('ampm')

 function myClock(){
    let hour=new Date().getHours()
    let min=new Date().getMinutes()
    let sec=new Date().getSeconds()
    let ampm= "AM"

    if (hour>12){
        h-h-12
        ampm="PM"
    }
    hour=hour<10?"0"+hour:hour;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;



    hourEl.innerText=hour;
    minuteEl.innerText=min;
    secondEl.innerText=sec;
    ampmEl.innerText=ampm;
     setTimeout(()=>{
        myClock()

     },1000)



 }
 myClock()
