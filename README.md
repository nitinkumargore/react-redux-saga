# react-redux-saga

Repository created for POC of React-Redux-Thunk and React-Redux-Saga integration -
This repo has 3 folders, which can be independent repos but I have grouped them together for the demo purpose and to limit the actual number of repos to avoid the confusion later.

I am using @redux/toolkit here in which thunk is already build-in and you don't need to install redux-thunk package.
https://redux-toolkit.js.org/api/createAsyncThunk
https://www.youtube.com/watch?v=93CR_yURoII

If you are using only react-redux, then you will have to install redux-thunk middleware to add thunk support to your project - https://redux.js.org/usage/writing-logic-thunks

1. react-redux-saga => For actual integration of React Redux and Saga
2. react-redux-thunk => For actual integration of React Redux and Thunk
3. server => This is nestJS server to rune some APIs locally. We need these APIs from this server to integrate APIs in react-redux-saga POC.
