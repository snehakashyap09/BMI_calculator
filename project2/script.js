document.addEventListener('DOMContentLoaded',function(){
const form =document.querySelector("form")
let bmi;
form.addEventListener("submit",function (e){
    e.preventDefault()
    const height =parseInt (document.querySelector("#height").value)
    const weight =parseInt (document.querySelector("#weight").value)
    const result = document.querySelector("#result")
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`;
    }
   else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`;    
    }
    else{
      bmi=   (weight/((height*height)/10000)).toFixed(2)
     result.innerHTML = `<span>${bmi}</span>`
    }
if(bmi < 18.6){
    console.log(bmi);
    
    document.getElementById("first").style.visibility = "visible"
    document.getElementById("second").style.visibility.innerHTML = "hidden"
  
    document.getElementById("third").style.visibility.innerHTML = "hidden"

}
else if(bmi >= 18.6 && bmi <= 24.9){
     document.getElementById("second").style.visibility = "visible"
    document.getElementById("first").style.visibility = "hidden"
  
    document.getElementById("third").style.visibility = "hidden"

}
else{
     document.getElementById("third").style.visibility = 'visible'
    document.getElementById("first").style.visibility = "hidden"
    document.getElementById("second").style.visibility = "hidden"

}
})
})