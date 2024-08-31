const year=document.getElementById('year')
const days=document.getElementById('days')
const hour=document.getElementById('hours')
const minute=document.getElementById('minutes')
const second=document.getElementById('seconds')

const getYearCountdown=()=>{
    const newYr=new Date().getFullYear()
    const nextYear=newYr+1;
    const newYearTime=new Date(`Jan 1,${nextYear} 00:00:00`).getTime();
    const now=new Date().getTime()
    const gap=newYearTime-now;

    const s=1000;
    const m=s*60;
    const h=m*60;
    const d=h*24;

    const remDay=Math.floor(gap/d)
    const remHours=Math.floor((gap %d)/h)
    const remMinutes=Math.floor((gap %h)/m)
    const remSeconds=Math.floor((gap %m)/s)
    year.innerText=nextYear
    days.innerText=remDay
    hour.innerText=remHours
    minute.innerText=remMinutes
    second.innerText=remSeconds

    setTimeout(()=>{
        getYearCountdown()
    },1000)
}

getYearCountdown()