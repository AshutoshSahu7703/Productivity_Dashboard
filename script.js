function opencard(){
    let allElems=document.querySelectorAll('.elem')
let allFullElems=document.querySelectorAll('.fullElem')
let allFullElemsBack=document.querySelectorAll('.fullElem .back')
allElems.forEach(function(elem){
    elem.addEventListener('click',function(){
        allFullElems[elem.id].style.display='block'
    }) 
})
allFullElemsBack.forEach(function(elem,id){
    elem.addEventListener('click',function(){
        allFullElems[id].style.display = 'none'
    }) 
})
}  
opencard()