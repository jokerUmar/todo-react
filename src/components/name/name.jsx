import React,{useState} from 'react'
import "./name.css"
function Name() {   

    const [todos, setTodos] = useState([]);

    const handleInputValue = (evt) =>{

        if (evt.key==="Enter") {

            
            let newTodo = {
                id: todos.at(-1) ?  todos.at(-1).id+1 : 1 ,
                text:evt.target.value ,
                isCompleted:false 
            }
         
            setTodos( [...todos , newTodo] )   
            
        }
    }

    let handleDelete = (todoId) =>{

      let  filteredTodos = todos.filter(i => i.id !== todoId )
        setTodos(filteredTodos)
      console.log(filteredTodos);
    }

    let handleEdit = (todoId) =>{
        
       let textEdit = prompt("nimdur kiriting")

       let findEdit = todos.find( i => i.id === todoId)

       findEdit.text = textEdit

       console.log(findEdit);

       setTodos( [...todos] )   
     
    }

    let handleChangeCheck = (todoId) => {

        let findCheck = todos.find( e => e.id === todoId )

        findCheck.isCompleted = !findCheck.isCompleted
        setTodos([...todos])

    }


    return (
        <div className="name">
            <input type="text" placeholder='name'  onKeyUp={handleInputValue}   />

            <ul>
              {
                todos.map( (i , idx) =>{
                      return <li key={i.text + idx+1} className ={ i.isCompleted ? "true-mode" : "false-mode" } >
                    <p className='id'>id: <span className='id-num'>{idx+1}</span></p>
                    <p className='item-name'> {i.text}  <input type="checkbox" onChange={() => handleChangeCheck(i.id)} defaultChecked={i.isCompleted} /> </p>
                    <div className='name-btn'>
                    <button className='name-edit' onClick={() => handleEdit(i.id)} >Edit</button>
                    <button className='name-delete' onClick={() => handleDelete(i.id)} >Delete</button>
                    </div>
                </li> 
                })
              }
            </ul>

        </div>
    )
}

export default Name
