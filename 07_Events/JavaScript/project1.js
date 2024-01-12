// document.getElementById("owl").onclick=  () =>  {
  //   alert('owl Clicked')
  // }

                      //type,timeStamp,defaultprevented
                      //target,toElement,srcElement
                      //clientX, Clienty,Screenx,screeny
                      //altkey,ctrlkey,shiftkey,keycode

  //  Event Listener

  // Bubbling Mode  ===> Bottom to top ===> false
  // Capturing Mode ===> Top to Bottom ===> true


/* document.getElementById('images').addEventListener('click',(e)=>{
    //alert('Owl clicked')
    console.log('Click on Images');
},false) // Bubbling Mode

document.getElementById("owl").addEventListener('click',(e) =>  {
     console.log('owl Clicked')
     e.stopPropagation()
   },false) // Bubbling Mode
document.getElementById('google').addEventListener('click',(e)=>{
    e.preventDefault()
    e.stopPropagation()
    console.log('google clicked');
    
},false) */

/*

document.getElementById('images').addEventListener('click',(e)=>{
    //alert('Owl clicked')
    console.log('Click on Images');
},true) // Capturing Mode

document.getElementById("owl").addEventListener('click',(e) =>  {
     console.log('owl Clicked')
   },true) // Capturing Mode
*/


const pickImg=document.querySelector('#images').addEventListener('click',(e)=>{
e.preventDefault()
console.log(e.target.tagName);
if (e.target.tagName==='IMG') {
    console.log(`${e.target.id} Image removed`);
    let removeimg=e.target.parentNode
    removeimg.remove()    
   
}
},false)