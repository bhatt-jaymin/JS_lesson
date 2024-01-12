const ProjectchangeTxt=()=>
                        {
                            document.querySelector('h1')
                            .innerHTML='Aschronization Project 1'
                        }

const sayHi= () =>{
    console.log('Say Hi');
}


const setTimeChange=setTimeout(ProjectchangeTxt,2000)

document.querySelector('#stop').addEventListener('click',()=>{
    clearTimeout(setTimeChange)
    console.log('Stopped');

})
