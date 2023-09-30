const btnEl= document.getElementById("btn");
const bmiInputEl= document.getElementById("bmi-result");
const weightCondition= document.getElementById("weight-condition");



function calculateBMI(){
    const heightValue = document.getElementById("height").value/100;
    const weightValue = document.getElementById("weight").value;

    const bmiValue= weightValue/ (heightValue*heightValue);
    bmiInputEl.value = bmiValue;

    if (bmiValue<18){

        weightCondition.classList.add("under-weight");
        weightCondition.innerHTML="You are in Under weight! <br> <a href=\"http.bestlifequotes.com\">click here!</a> for advices.";
   }
   else if (bmiValue>=18.5 && bmiValue<=24.5){
    weightCondition.classList.add("normal-weight");
    weightCondition.innerHTML="You are in <b>Normal State!</b> Congratulations!!!";
}
else if (bmiValue>24.5 && bmiValue<=30){
    weightCondition.classList.add("danger-obesity");
    weightCondition.innerHTML="You are in <b>Obesity!<br><a href=\"http.bestlifequotes.com\"> click here!</a> for advices.";
}
else{
    weightCondition.classList.add("danger");
    weightCondition.innerHTML="You are in Danger Obesity!<br><a href=\"http.bestlifequotes.com\"> click here!</a> for advices.";  
}
}
btnEl.addEventListener("click",calculateBMI);




