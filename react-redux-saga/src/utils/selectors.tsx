import { createSelector } from 'reselect';
import { todoListState } from "../store/todoListSlice"


const todoList = (state:{todoList:todoListState}) => state.todoList;

export const getAllTodos = createSelector(todoList, todoList => todoList.todos);
export const getSearchText = createSelector(todoList, todoList => todoList.searchText);
export const getSelectedTodo = createSelector(todoList, todoList => todoList.selectedTodo);
export const getNewTodoName = createSelector(todoList, todoList => todoList.newTodoName);