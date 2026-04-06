let allElems=document.querySelectorAll('.elem')
let allFullElems=document.querySelectorAll('.fullElem')
let allFullElemsBack=document.querySelectorAll('.fullElem .class')
allElems.forEach(function(elem){
    elem.addEventListener('click',function(){
        allFullElems[elem.id].style.display='block'
    }) 
})
allFullElemsBack.forEach(function(elem){
    
})
    