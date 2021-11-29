
var result=document.getElementById('result')



const submit = document.querySelector('#submit')
submit.addEventListener('click',()=>{
    if(confirm('are you sure this is your final answer?')){
        let ni_age = document.forms['myforms']['ni_age'].value
        let day = document.forms['myforms']['day'].value
        let state_are = document.forms['myforms']['state_are'].value
        let club = document.forms['myforms']['club'].value
        let day_week = document.forms['myforms']['day_week'].value

        if( ni_age=='euro' ){a=1}else{
            a=0
            }
        if(day=='Asia' ){b=1 }else{
             b=0
            }
        if(state_are=='bochum' ){c=1 }else{
            c=0
             } 
        if(club=='liverpool' ){ d=1 }else{
            d=0
            } 
        if(day_week=='seven' ){e=1 }else{
            e=0
             }
             let sum=a+b+c+d+e 
             if(sum<=2){
                result.innerHTML+=  " oops! &#128542; you didn't pass the quiz! try again you scored " + sum + ' out of five'
             }else{
                result.innerHTML+='Good job! &#128521; you passed the quiz!  you scored ' + sum + ' out of five'

             }
           
      
        }
    }
)

