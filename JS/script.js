window.onload=()=>{
    getAdvice();
}

const button = document.querySelector('.advice_btn');
const adviceText = document.querySelector('.advice_text');
const adviceNumber = document.querySelector('.advice_number span');

button.addEventListener('click',getAdvice);

async function getAdvice(){
    try{
         response = await fetch('https://api.adviceslip.com/advice');
         data = await response.json();
        id= data.slip.id;
        advice=data.slip.advice;
        adviceNumber.innerText=id;
        adviceText.innerText=advice; 
    }
    catch(error){
        console.log(error);
    }
}