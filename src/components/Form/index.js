import React, {  useEffect, useState } from 'react'


function Form({justArray,setArray}) {
    const [addTodo,setAddTodo]=useState({inTodo:"",key:"",completed:false})
   

    const addTodoFunction=(e)=>{
        
        setAddTodo({...addTodo,[e.target.name]:e.target.value,key:Date.now()})
        
        
    }
    
    useEffect(()=>{
        setAddTodo({inTodo:"",key:"",completed:false})
    },[justArray])
    
    const onFormSubmit=(e)=>{
        e.preventDefault();
        const trix=addTodo.inTodo.trim()
        if(trix==="")
        {return false }
        else{
            setArray([...justArray,addTodo])
        }
        
    }

    

  return (
  <header className='header'>
    <h1>Todos</h1>
      <form onSubmit={onFormSubmit}>
      
        
        <input
        className='new-todo'
        id='check'
        name='inTodo'
        placeholder='Ne yapmaya karar verdin'
        onChange={addTodoFunction}
        value={addTodo.inTodo}
        
        
        />
        
    </form>
  </header>
  )
}

export default Form