let hour=document.getElementById('hours');
let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');
let am=document.getElementById('ampm');


function updateClock(){
    let getHour=new Date().getHours();
    let getMinute=new Date().getMinutes();
    let getSecond=new Date().getSeconds();

    let ampm='AM'

    if(getHour>12){
        getHour=getHour-12;
        ampm='PM';
    }

    hour.innerText=getHour
    minutes.innerText=getMinute
    seconds.innerText=getSecond
    am.innerText=ampm

    setTimeout(()=>{
        updateClock()
    },1000)
}

updateClock()
