let elform = document.querySelector(".form")
let elInputText = document.querySelector(".input__text")
let elList = document.querySelector(".todo-list")



let todos = []



elList.addEventListener("click" , function(evt){    


    const deleteId = evt.target.dataset.deleteBtnId *1
    const checkboxId = evt.target.dataset.checkId *1
    const  foundIndex = todos.findIndex(todo =>todo.id === deleteId)
    let foundcheck  = todos.find((todo) => todo.id === checkboxId)     
    
    
    if (evt.target.matches(".delete-btn")) {        
        todos.splice(foundIndex , 1)
        
    }
    
    else if (evt.target.matches("checkbox")) {   
        foundcheck.isCompleted = !foundcheck.isCompleted    
        
    }
    
    elList.innerHTML = null
    renderTodos(todos , elList)
})


let renderTodos = function(todoArr , htmlElement){
    
    todoArr.forEach(todo => {
        
    let newItem = document.createElement("li")
    let newText = document.createElement("p")
    let newCheckbox= document.createElement("input")
    let newDeleteBtn= document.createElement("button")
    
    newCheckbox.type = "checkbox"
    newText.textContent = todo.title
    newDeleteBtn.textContent = "delete"
    
    newCheckbox.classList.add("checkbox")
    newDeleteBtn.classList.add("delete-btn")


    htmlElement.appendChild(newItem)
    newItem.appendChild(newText)
    newItem.appendChild(newCheckbox)
    newItem.appendChild(newDeleteBtn)

    // DATASET

    newDeleteBtn.dataset.deleteBtnId = todo.id
    newCheckbox.dataset.checkId = todo.id

    console.log(todo.id);


});
}



elform.addEventListener("submit", function (e) {

    e.preventDefault()

    let inputValue = elInputText.value
    let objectId = Math.floor(Math.random() * 1000000000000009)

    let newTodos = {
        title: inputValue,
        id: objectId,
        isCompleted: false
    }

    
    todos.push(newTodos)
    
    
    
    elList.innerHTML = null
    
    elInputText.value = null
    
    renderTodos(todos , elList)
})


// ID DA MUAMMO BOR
