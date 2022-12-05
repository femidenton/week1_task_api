function main() {}
const todoList = []
const todoObj = {
    'todo': '',
    'time': ''
}

const inputText = document.getElementById('inputText')
const submit = document.getElementById('submit')
const todosListBox =document.getElementById('todosList-box')
const addButton = document.getElementById('add')
const editButton = document.getElementById('edit')


submit.addEventListener('click', function(e){
    e.preventDefault()
    const oneTodo = document.createElement('div')
    oneTodo.setAttribute('id', Date.now())
    oneTodo.setAttribute('class', 'todo-box')
  //  oneTodo.textContent = ''
    if(inputText.value != ''){
        const timeElapsed = Date.now()  
        const today = new Date(timeElapsed)
        todoObj.todo = inputText.value 
        todoObj.time = today.toUTCString()

        
        todoList.push(todoObj)
        inputText.value = ''
        console.log(todoList)
    }

    //display todos
    todoList.map((todo, index)=>{
      //  console.log(tol)
        oneTodo.innerHTML = `<p class= todo>${todo.todo}<span> ${todo.time}</span</p>`
        todosListBox.append(oneTodo)
    })
    

    //update todos
    oneTodo.addEventListener('click', function(){
    allTodos = document.querySelectorAll('.todo-box')    
    Array.from(allTodos).map(todo=>{
        if(todo.id === oneTodo.id){
            inputText.value = todo.firstChild.firstChild.data
            addButton.style.display = 'none'
            editButton.style.display = 'block'

            editButton.addEventListener('click', function(){
    
            })

        }
    })
})

})




module.exports = { main }
