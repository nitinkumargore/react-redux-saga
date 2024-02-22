import { call, put, takeEvery} from 'redux-saga/effects';
import {getAllTodos , createTodo, updateTodo, deleteTodo } from '../apis/todoApis';

function* workGetAllTodos(){
    try{
        const resp:Todo[] & ApiError = yield call(()=>getAllTodos());
        if(resp.statusCode && resp.statusCode != 200){
            yield put({type:'todoList/fetchAllTodosError', payload:(resp.message+' '+resp.error)});
        }else{
            yield put({type:'todoList/fetchAllTodosSuccess',payload:resp});
        }
    }catch(error){
        yield put({type:'todoList/fetchAllTodosError', payload:error});
    }
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