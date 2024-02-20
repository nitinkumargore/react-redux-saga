import { createSlice } from "@reduxjs/toolkit";

const emptyTodo:Todo = {id:0,name:'',isDone:false,isActive:false};
const initialState:{todos:Todo[],selectedTodo:Todo,searchText:string,newTodoName:string}={
    todos:[{
        id:1,
        name:'Learn NextJS',
        isDone:false,
        isActive:true
    }],
    selectedTodo:emptyTodo,
    searchText:'',
    newTodoName:''
};

export const todoListSlice = createSlice({
    name:'todoList',
    initialState,
    reducers:{
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

export const {addTodo, deleteTodo, updateTodo, toggleIsDone, setSelectedTodo, updateSearchText, updateNewTodoName} = todoListSlice.actions;
export default todoListSlice.reducer;
export type todoListState = ReturnType<typeof todoListSlice.reducer>;