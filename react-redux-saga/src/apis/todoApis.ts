const BASE_URL = 'http://localhost:4000/todos';

export const getAllTodos = async():Promise<Todo[]> => {
    return fetch(BASE_URL).then(res=>res.json())
}

export const createTodo = async (name:string):Promise<Todo> => {
    return fetch(BASE_URL,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({name}),
    }).then(res=>res.json());
}

export const updateTodo = async(todo:Todo):Promise<Todo> => {
   return fetch(BASE_URL,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({todo})
    }).then(res=>res.json());
}

export const deleteTodo = async(todo:Todo):Promise<Todo> => {
    return fetch(BASE_URL,{
        method:'DELETE',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({todo})
    }).then(res=>res.json());
}
