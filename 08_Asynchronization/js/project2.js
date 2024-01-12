let IntervalId
const timedisp=document.getElementById('start').addEventListener('click',()=>{
   function dispDate(){
    console.log('hello',Date.now());
    
}
IntervalId=setInterval(dispDate,1000)
})


document.getElementById('stop').addEventListener('click',()=>{
   clearInterval(IntervalId)  
 })
  


