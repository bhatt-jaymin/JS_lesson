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
        const BMI=(weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=<span>`${BMI}`</span>
        console.log(`${BMI}`);
    }

    //console.log(`Data added Successfully ${results}`);
});