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

let allTask=document.querySelector('.allTask')

let currentTask=[]

if(localStorage.getItem('currentTask')){
   currentTask=JSON.parse(localStorage.getItem('currentTask'))
}
else {
   
}
function rendorTask(){
    localStorage.setItem('currentTask',JSON.stringify(currentTask))
    let sum = ''
currentTask.forEach(function(e){
    sum += `<div class="task">
                <h4>${e.task}</h4>
                <button>Mark as Completed</button>
            </div>`
})
allTask.innerHTML=sum
}
rendorTask()

let input = document.querySelector('.addTask form input')
let inputDetails = document.querySelector('.addTask form textarea')
let addBtn = document.querySelector('.addTask form button')
let form = document.querySelector('.addTask form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    currentTask.push({task:input.value,description:inputDetails.value})
    input.value=""
    inputDetails.value=""
    rendorTask()
})

