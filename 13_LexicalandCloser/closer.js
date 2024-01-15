//Closer Scope

function clickHandler(color) {
    return function () {
        document.body.style.backgroundColor=`${color}`;
    }
    
}

document.getElementById('Orange').onclick=clickHandler("Orange")
document.getElementById('Green').onclick=clickHandler("Green")