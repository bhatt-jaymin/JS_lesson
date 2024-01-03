// Data Object Model [DOM]

/*

title.textContent  ===> display hidden and visible both text


title.innerHTML ===> display hidden tag and element with text


title.innerText ===> display visble text only.

title.style.padding=1.5rem ===> set any CSS style in js file


document.getElementById('title').setAttribute('class','test') ==> set class name

document.getElementById('title').getAttribute('class') ===> get class element

document.getElementById('title') ===> get page id element

document.querySelector('h2') ==> first any element tag display of the page

document.querySelectorAll('h2') ==> All  element tag display in page

document.querySelector('input[type="password"]') any input element display in html page

*/


/* query selector

const newLiTemp=document.querySelectorAll('li')

newLiTemp[2].style.backgroundColor='green'

newLiTemp.forEach(function (li){
    li.style.backgroundColor='wheat'
})
*/

/*

Array.from(myGrpLiItem)
*/


/* convert into array
const myConvrtArry=Array.from(myGrpLiItem)

myConvrtArry.forEach(function (liitm){
    liitm.style.color="orange"
})
*/