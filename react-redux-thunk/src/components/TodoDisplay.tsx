import { useSelector, useDispatch } from 'react-redux';
import {v4 as uuidv4} from 'uuid';

import { deleteTodo, updateTodo, toggleIsDone, setSelectedTodo} from '../store/todoListSlice';
import { getAllTodos, getSearchText, getSelectedTodo } from '../utils/selectors';

export const TodoDisplay = () => {
    const dispatch = useDispatch();

    const todos:Todo[] = useSelector(getAllTodos);
    const searchText:string = useSelector(getSearchText);
    const selectedTodo:Todo = useSelector(getSelectedTodo);

    const emptyTodo = {id:uuidv4(),name:'',isDone:false,isActive:false};

    return(<div>
        {
         todos.filter(td=>td.name.includes(searchText)).map((td:Todo)=>
         <div className='flex flex-end flex-gap-10 items-center min-h-[40px]'>
           <div className='mt-[7px]'>
             <input type='checkbox' className='h-[18px] w-[18px]'
               checked={td.isDone}
               onChange={()=>dispatch(toggleIsDone(td))}
               />
           </div>
           {(selectedTodo?.id === td.id)?
             <input className='min-w-[400px] w-[400px] break-words border rounded ml-1 mr-1 p-1' value={selectedTodo.name} 
             onChange={(e)=>{
               const newTodo = {...selectedTodo, name:e.target.value}
               dispatch(setSelectedTodo(newTodo));
             }}/>
             :<div className='min-w-[400px] w-[400px] break-words ml-1 mr-1 p-1'>{td.name}</div>
           }

           {(selectedTodo?.id === td.id)?
             <div className='min-w-[100px]'><button className='p-1 bg-blue-600 text-white rounded min-w-[75px]'
             onClick={()=>{
               dispatch(updateTodo(selectedTodo));
               dispatch(setSelectedTodo(emptyTodo));
             }}>Update</button></div>
             :
             <div className='min-w-[100px]'><button className='p-1 bg-blue-600 text-white rounded min-w-[75px]'
             onClick={()=>{
               console.log('selected td=>',td)
               dispatch(setSelectedTodo(td));
             }}>Edit</button></div>
           }

           <button className='p-1 bg-blue-600 text-white rounded min-w-[75px]'
             onClick={()=>dispatch(deleteTodo(td))}>Delete</button>
         </div>)
       } 
      </div>)
}