let rndmNum=parseInt(Math.random()*100+1)

const submitBtn=document.querySelector('#subt');
const guessFieldTxt=document.querySelector('#guessField')
const assumeTxt=document.querySelector('.guesses')
const remainTxt=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const resultOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true

if (playGame) {
    submitBtn.addEventListener('click',function(begin) {
        begin.preventDefault()
        const guess=parseInt(guessFieldTxt.value)
        console.log(guess)
        validateGuess(guess)
    })
    
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter Valid Number between 1 to 100')
    }else if(guess<1){
        alert('Please Enter valid Number between 1 to 100')
    }else if(guess>100){
        alert('Please Enter valid Number between 1 to 100')
    }else{
        prevGuess.push(guess)
        if (numGuess===11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${rndmNum}`)
            CloseGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess) {
    if (guess=== rndmNum) {
        displayMessage(`Congratulation.. Guess Right Number`)
        CloseGame()
    } else if (guess < rndmNum) {
        displayMessage('Number is Too Low')
    }else if (guess > rndmNum) {
        displayMessage('Number is Too High')
    }
}


function displayGuess(guess) {
guessFieldTxt.value='' 
assumeTxt.innerHTML+=`${guess}, `   
numGuess++;
remainTxt.innerHTML=`${11- numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function CloseGame() {
    guessFieldTxt.value=''
    guessFieldTxt.setAttribute('disabled','') 
    p.classList.add('button')
    p.innerHTML=`<h2 id="newgme">Start New Game</h2>`  
    resultOver.appendChild(p)
    startNewGame()
    playGame=false
    
}

function startNewGame() {
    const newGamebtn=document.querySelector('#newgme')
    newGamebtn.addEventListener('click',function (e) {
    rndmNum=parseInt(Math.random()*100+1)
    prevGuess=[];
    numGuess=1;
    assumeTxt.innerHTML=``;
    remainTxt.innerHTML=`${11- numGuess}`;
    guessFieldTxt.removeAttribute('disabled');
    resultOver.removeChild(p)
    playGame =true
    })
}

