const form=document.querySelector('form')

form.addEventListener('submit',function (frmsubmit) {
    frmsubmit.preventDefault();

    const date=new Date()
    const billDate=document.querySelector('#BillNo');
    
    const item1=parseInt(document.querySelector('#itm1').value);
    const item2=parseInt(document.querySelector('#itm2').value);
    const item3=parseInt(document.querySelector('#itm3').value);
    const item4=parseInt(document.querySelector('#itm4').value);
    const item5=parseInt(document.querySelector('#itm5').value);
    const Msg=document.querySelector('#Msg1');
    const Billing=document.querySelector('#Bill');
    
    billDate.innerHTML =`<span><h4>${date.getDate()}${date.getMonth() + 1}${date.getFullYear()+Math.floor(Math.random()*100000)}</h4></span>`;

    


    if (item1===''||item1<=0) {
        Msg.innerHTML=`<span> <h4> Invalid Sugar ${item1} Value </h4> </span>`;
    }else if (item2===''||item2<=0) {
        Msg.innerHTML=`<span> <h4> Invalid Oil ${item2} Value </h4> </span>`;
    }else if (item3===''||item3<=0) {
        Msg.innerHTML=`<span> <h4> Invalid Crockery Items ${item3} Value </h4> </span>`;
    }else if (item4===''||item4<=0) {
        Msg.innerHTML=`<span> <h4> Invalid Tea ${item4} Value </h4> </span>`;
    }else if (item5===''||item5<=0) {
        Msg.innerHTML=`<span> <h4> Invalid Soap ${item5} Value </h4> </span>`;
    }else{
        const ItmTotal=item1+item2+item3+item4+item5;
        const itmdiscnt=ItmTotal/5
        Billing.innerHTML=`<span> <h4> Your Total Bill is ${ItmTotal} ₹ </h4> </span>`
        
        if (itmdiscnt>10000) {
            
            Msg.innerHTML=`<span> <h4> you get ${itmdiscnt} ₹ Discount and After discount your bill is ${ItmTotal-itmdiscnt} ₹ </h4>> </span>`;
        }else if(itmdiscnt<=10000 && itmdiscnt>5000){
            Msg.innerHTML=`<span> <h4> you get ${itmdiscnt} ₹ Discount and After discount your bill is ${ItmTotal-itmdiscnt} ₹ </h4> </span>`;
        }else if(itmdiscnt<=5000 && itmdiscnt>1000){
            Msg.innerHTML=`<span> <h4> you get ${itmdiscnt} ₹ Discount and After discount your bill is ${ItmTotal-itmdiscnt} ₹ </h4> </span>`;
        }else if(itmdiscnt<1000){
            Msg.innerHTML=`<span> <h4> you get ${itmdiscnt} ₹ Discount and After discount your bill is ${ItmTotal-itmdiscnt} ₹ </h4> </span>`;
        }else{
            Msg.innerHTML=`<span> <h4> you did not get any Discount </h4> </span>`;
        }
        
} 

})

function resetpage(){  
    window.location.reload()
}