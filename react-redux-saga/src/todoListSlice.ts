import { createSlice } from "@reduxjs/toolkit";


const initialState:{todos:Todo[]}={
    todos:[{
        id:1,
        name:'Learn NextJS',
        isDone:false,
        isActive:true
    }]
};

export const todoListSlice = createSlice({
    name:'todoList',
    initialState,
    reducers:{
        addTodo:(state, action)=>{ state.todos.push(action.payload); },
        deleteTodo(state, action){ state.todos = state.todos.filter(td => td.id!=action.payload.id);},
        updateTodo(state, action){ state.todos = state.todos.map(td=> (td.id===action.payload.id)? action.payload : td)},
        toggleIsDone(state, action){ state.todos = state.todos.map(td=> {if(td.id===action.payload.id){td.isDone = !td.isDone} return td}) },
    }
});

export const {addTodo, deleteTodo, updateTodo, toggleIsDone} = todoListSlice.actions;
export default todoListSlice.reducer;
export type todoListState = ReturnType<typeof todoListSlice.reducer>;