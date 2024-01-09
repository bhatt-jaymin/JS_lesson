const form=document.querySelector('form')

form.addEventListener('submit',function (frmsubmit) {
    frmsubmit.preventDefault();

    const name=document.querySelector('#name');
    const roll=parseInt(document.querySelector('#Rollno').value);
    const sub1=parseInt(document.querySelector('#sub1').value);
    const sub2=parseInt(document.querySelector('#sub2').value);
    const sub3=parseInt(document.querySelector('#sub3').value);
    const sub4=parseInt(document.querySelector('#sub4').value);
    const sub5=parseInt(document.querySelector('#sub5').value);
    const Msg=document.querySelector('#Msg');
    const Marks=document.querySelector('#Mrks');
    const Percentage=document.querySelector('#prcnt');

    if(name===''||name===0||name>=0||name<=0)
    {
        Msg.innerHTML=`<span> <h4> Invalid Name </h4> </span>`;
    }else if (roll===''||roll<=0) {
        Msg.innerHTML=`<span> <h4>  Invalid ${roll}Roll Number </h4> </span>`;
    }else if (sub1===''||sub1<=0) {
        Msg.innerHTML=`<span> <h4> Invalid Maths Subject ${sub1} Marks </h4> </span>`;
    }else if (sub2===''||sub2<=0) {
        Msg.innerHTML=`<span> <h4> Invalid English Subject ${sub2} Marks </h4>  </span>`;
    }else if (sub3===''||sub3<=0) {
        Msg.innerHTML=`<span> <h4>  Invalid Social Studies Subject ${sub3} Marks </h4> </span>`;
    }else if (sub4===''||sub4<=0) {
        Msg.innerHTML=`<span> <h4> Invalid Science Subject ${sub4} Marks </h4> </span>`;
    }else if(sub5===''||sub5<=0) {
        Msg.innerHTML=`<span> <h4> Invalid Hindi Subject ${sub5} Marks </h4> </span>`;
    }else{
        const StudMrks=sub1+sub2+sub3+sub4+sub5;
        Marks.innerHTML=`<span> <h4>  Student Get ${StudMrks} Marks</h4> </span>`
        const StudePrcnt=StudMrks/5;
        Percentage.innerHTML=`<span> <h4>  Student Get ${StudePrcnt} % </h4></span>`

        if (StudePrcnt>90) {
            Msg.innerHTML=`<span> <h4> Student get A++ Grade </h4>> </span>`;
        }else if(StudePrcnt<=90 && StudePrcnt>75){
            Msg.innerHTML=`<span> <h4> Student get A Grade </h4> </span>`;
        }else if(StudePrcnt<=75 && StudePrcnt>60){
            Msg.innerHTML=`<span> <h4> Student get B Grade </h4> </span>`;
        }else if(StudePrcnt<=60 && StudePrcnt>35){
            Msg.innerHTML=`<span> <h4> Student get C Grade </h4> </span>`;
        }else{
            Msg.innerHTML=`<span> <h4> Student get F Grade </h4> </span>`;
        }
}

})
