let icon = document.querySelector('.fa-cog');
let text_1=document.querySelector('.text-1');
let text_2=document.querySelector('.text-2');
let item = document.querySelectorAll('.item');
let date=document.querySelector('.date');
let button=document.querySelector('.button');
let result1=document.querySelector('.result-1');
let result2=document.querySelector('.result-2');
let html_year=document.querySelector('.year');
let html_month=document.querySelector('.month');
let html_day=document.querySelector('.day');
let html_hour=document.querySelector('.hours');
let html_minute=document.querySelector('.minute');
let html_second=document.querySelector('.second');
const n=new Date();
var arr=[];
let state = 'not-clicked';

icon.addEventListener('click', function () {
    if (state === 'not-clicked') {
        for (let i = 1; i < item.length; i++) {
            if (item[i].classList.contains('hidden')) {
                item[i].classList.remove('hidden');
            }
        }
        state='clicked';
    }
    else{
        for (let i = 1; i < item.length; i++) {
           
                item[i].classList.add('hidden');
            
        }
        state='not-clicked';
    }
})
function calcTimeDifference(startDate,today){
   
    if ((!isNaN(startDate) && startDate > today.getTime()) || date.value=="") {
       result1.classList.remove('hidden');
       result2.classList.add('hidden');
      }
    else{
        result1.classList.add('hidden');
        result2.classList.remove('hidden');
        text_1.classList.add('hidden');
        text_2.classList.remove('hidden');
        var fyear,fmonth,fday,fhour,fminute,fsecond;
        const YEAR=31556926,MONTH=2629743,DAY=86400,HOUR=3600,MINUTE=60,SECOND=1;
        
        fyear=getTime(100,YEAR);
        fmonth=getTime(12,MONTH);
        fday=getTime(30,DAY);
        fhour=getTime(24,HOUR);
        fminute=getTime(60,MINUTE);
        fsecond=getTime(60,SECOND);

        fyear=doubleDigitConverter(fyear)
        fmonth=doubleDigitConverter(fmonth);
        fday=doubleDigitConverter(fday);
        fhour=doubleDigitConverter(fhour);
        fminute=doubleDigitConverter(fminute);
        fsecond=doubleDigitConverter(fsecond);


        html_year.innerHTML=fyear;
        html_month.innerHTML=fmonth;
        html_day.innerHTML=fday;
        html_hour.innerHTML=fhour;
        html_minute.innerHTML=fminute;
        html_second.innerHTML=fsecond;
    }
    
}

function getTime(maxCount,tenur)
{
    let i=0;j=0,p=0,ret=0;
    while(i<=maxCount)
    {
        if((p*tenur)<res)
        {
            p++;
        }else{
            p--;
            res=res-(p*tenur);
            ret=p;
            break;
        }
        i++;
    }
    return ret;
}

function doubleDigitConverter(a)
{
   a=String(a);
   let str="0";
   if(a.length==3)
   {
     str=a;
   }else if(a.length==2){
     str=a;
   }
   else if(a.length==1){
    str+=a;
   }
   return str;
}
button.addEventListener('click',function() {
    startDate = Date.parse(date.value);
    today = new Date();
    res=Math.floor((today-startDate)/(1000));
    
   
  
   calcTimeDifference(startDate,today);
   res=Math.floor((today-startDate)/(1000));
   
  let obj= window.setInterval( changeTime,1000);
   
   
})
function changeTime()
{
    today=new Date();
    res=Math.floor((today-startDate)/(1000));
    calcTimeDifference(startDate,today)
}
