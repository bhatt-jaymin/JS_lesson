const btns=document.querySelectorAll('.button')
const bdy=document.querySelector('body')

btns.forEach(function (btn) {
    console.log(btn);
    btn.addEventListener('click',function(evnt){
        //console.log(evnt)
        //console.log(evnt.target)
        if (evnt.target.id==="grey") {
            bdy.style.backgroundColor=evnt.target.id;
        }else if(evnt.target.id==="white"){
            bdy.style.backgroundColor=evnt.target.id;
        }else if(evnt.target.id==="blue"){
            bdy.style.backgroundColor=evnt.target.id;
        }else if(evnt.target.id==="yellow"){
            bdy.style.backgroundColor=evnt.target.id;
        }

    })
    
})