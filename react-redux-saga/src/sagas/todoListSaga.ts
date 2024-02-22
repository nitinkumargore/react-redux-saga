import { call, put, takeEvery} from 'redux-saga/effects';
import {getAllTodos , createTodo, updateTodo, deleteTodo } from '../apis/todoApis';

function* workGetAllTodos(){
    const todos:Todo[] = yield call(()=>getAllTodos());
    yield put({type:'todoList/fetchAllTodosSuccess',payload:todos});
}

function* workCreateTodo({payload}:{type:string, payload:string}){
    const todos:Todo[] = yield createTodo(payload);
}

function* workUpdateTodo({payload}:{type:string, payload:Todo}){
    const todos:Todo[] = yield updateTodo(payload);
}

function* workDeleteTodo({payload}:{type:string, payload:Todo}){
    const todos:Todo[] = yield deleteTodo(payload);
}

function* todoListRootSaga(){
    yield takeEvery('todoList/fetchAllTodos',workGetAllTodos);
    yield takeEvery('todoList/addTodo',workCreateTodo);
    yield takeEvery('todoList/updateTodo',workUpdateTodo);
    yield takeEvery('todoList/deleteTodo',workDeleteTodo);
} 

export default todoListRootSaga;