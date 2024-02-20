import { useSelector, useDispatch } from 'react-redux';

import {addTodo, updateNewTodoName} from '../store/todoListSlice';
import { getAllTodos, getNewTodoName } from '../utils/selectors';

export const TodoAdd = () => {
    const dispatch=useDispatch();

    const todos = useSelector(getAllTodos);
    const newTodoText = useSelector(getNewTodoName);

    const addTodoToList = ()=> {
            dispatch(addTodo(
                {
                id:(todos.length+1),
                name:newTodoText,
                isDone:false,
                isActive:true
                }
            ));
            dispatch(updateNewTodoName(''))
        }

    return(<div>
    <div className='text-center text-l font-bold'>Add new item to todo list.</div>
    <input className='mx-2 border p-1 rounded min-w-[300px]' 
      name='newTodoInput' 
      placeholder='Enter your todo text here' 
      value={newTodoText}
      onChange={(e)=>dispatch(updateNewTodoName(e.target.value))}
      onKeyUp={(e)=>e.key==='Enter'?addTodoToList():''}
      />
    <button className='mx-2 bg-blue-600 rounded p-1 px-3 text-white'
      disabled={!Boolean(newTodoText)}
      onClick={()=>
        addTodoToList()
      }
    >Add Todo</button>
 </div>)
}