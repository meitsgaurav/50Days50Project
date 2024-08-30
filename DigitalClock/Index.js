let hour=document.getElementById('hours');
let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');
let am=document.getElementById('ampm');
let ms=document.getElementById('milliseconds');


function updateClock(){
    let getHour=new Date().getHours();
    let getMinute=new Date().getMinutes();
    let getSecond=new Date().getSeconds();
    let getMillisecond=new Date().getMilliseconds();


    let ampm='AM'

    if(getHour>12){
        getHour=getHour-12;
        ampm='PM';
    }

    hour.innerText=getHour
    minutes.innerText=getMinute
    seconds.innerText=getSecond
    am.innerText=ampm
    ms.innerText=getMillisecond

    setTimeout(()=>{
        updateClock()
    },100)
}

updateClock()
