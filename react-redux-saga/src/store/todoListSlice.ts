import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';  

const emptyTodo:Todo = {id:uuidv4(),name:'',isDone:false,isActive:false};
const initialState:{todos:Todo[],selectedTodo:Todo,searchText:string,newTodoName:string, isLoading?:boolean, error?:''}={
    todos:[],
    selectedTodo:emptyTodo,
    searchText:'',
    newTodoName:'',
    isLoading:false,
    error:''
};

export const todoListSlice = createSlice({
    name:'todoList',
    initialState,
    reducers:{
        fetchAllTodos:(state)=>{ 
            state.isLoading = true; 
            state.error=''; 
        },
        fetchAllTodosSuccess:(state, action)=>{ state.todos = action.payload },
        fetchAllTodosError:(state, action)=>{ state.error = action.payload },

        addTodo:(state, action)=>{ state.todos.push(action.payload); },
        deleteTodo: (state, action) => { state.todos = state.todos.filter(td => td.id!=action.payload.id);},
        updateTodo:(state, action)=>{ state.todos = state.todos.map(td=> (td.id===action.payload.id)? action.payload : td)},
        toggleIsDone:(state, action)=>{ 
            state.todos = state.todos.map(td=> {
            if(td.id===action.payload.id){
                td.isDone = !td.isDone
            } 
                return td;
            });
        },

        setSelectedTodo(state, action){ state.selectedTodo = action.payload},
        updateSearchText: (state, action)=>{state.searchText = action.payload;},
        updateNewTodoName: (state, action) => {state.newTodoName = action.payload}
    }
});

export const {fetchAllTodos, fetchAllTodosSuccess, addTodo, deleteTodo, updateTodo, toggleIsDone, setSelectedTodo, updateSearchText, updateNewTodoName} = todoListSlice.actions;
export default todoListSlice.reducer;
export type todoListState = ReturnType<typeof todoListSlice.reducer>;