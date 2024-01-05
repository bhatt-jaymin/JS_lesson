const form=document.querySelector('form')

form.addEventListener('submit',function (frmsubmit){
    frmsubmit.preventDefault();

    const height= parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const results= document.querySelector('#results');

    if (height === ' '|| height < 0 || isNaN(height)) {
        results.innerHTML=`Invalid ${height} Input Value`;
        console.log(`Invalid ${height} Height Value`);
    }else if (weight === ' '|| weight < 0 || isNaN(weight)) {
        results.innerHTML=`Invalid ${weight} Input Value`;
        console.log(`Invalid ${weight} Weight Value`);

    }else{
        const BMI= (weight / ((height * height) / 10000)).toFixed(2);;
        //results.innerHTML=`<span>${BMI}</span>`
        if(BMI<18.6){
            results.innerHTML=`<br><span> BMI value is ${BMI} Person is Under weight </span></br>`
        }else if(BMI>=18.6 && BMI<24.9){
            results.innerHTML=`<br><span> BMI value is ${BMI} Person is Normal weight </span></br>`
        }else if(BMI>24.9){
            results.innerHTML=`<br><span> BMI value is ${BMI} Person is Overweight </span></br>`
        }
        console.log(`${BMI}`);
        
       
    }
});