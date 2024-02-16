import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import {addTodo, deleteTodo, updateTodo, toggleIsDone, todoListState} from './todoListSlice';


function App() {
  
  const dispatch = useDispatch();
  
  const todos:Todo[] = useSelector((state:{todoList:todoListState})=>state.todoList.todos);

  const [newTodoText, setNewTodoText] = useState('');

  return (
    <div className="container mx-auto">
      <div className='flex flex-col items-center gap-2'>
        <h1 className='text-2xl font-bold'>Dynamic ToDo List</h1>
        <div className='border-t border-gray-200 mb-2 w-[80%]'/>
        <div>
           {
            todos?.map((td:Todo)=>
            <div className='flex flex-end flex-gap-10 flex-[10_2_2%] items-center min-h-[40px]'>
              <div className='min-w-[25px] mt-[7px]'><input type='checkbox' className='h-[18px] w-[18px]'/></div>
              <div className='min-w-[400px] w-[400px] break-words'>{td.name}</div>
              <div className='min-w-[100px]'><button className='p-1 px-3 bg-blue-600 text-white rounded'>Edit</button></div>
              <button className='p-1 px-3 bg-blue-600 text-white rounded'
                onClick={()=>dispatch(deleteTodo(td))}>Delete</button>
            </div>)
          } 
         </div>

         <div className='border-t border-gray-200 mb-2 w-[80%]'/>

         <div>
            <div className='text-center text-l font-bold'>Add new item to todo list.</div>
            <input className='mx-2 border p-1 rounded min-w-[300px]' 
              name='newTodoInput' 
              placeholder='Enter your todo text here' 
              value={newTodoText}
              onChange={(e)=>setNewTodoText(e.target.value)}
              />
            <button className='mx-2 bg-blue-600 rounded p-1 px-3 text-white'
              disabled={!Boolean(newTodoText)}
              onClick={()=>{
                dispatch(addTodo(
                  {
                    id:2,
                    name:newTodoText,
                    isDone:false,
                    isActive:true
                  }
                ));
                setNewTodoText('');
              }}
            >Add Todo</button>
         </div>
      </div>
    </div>
  );
}

export default App;
