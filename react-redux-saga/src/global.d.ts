interface Todo{
    id:string,
    name:string,
    isDone:boolean,
    isActive:boolean,
};

interface ApiError{
    statusCode?:number, 
    message?:string, 
    error?:string
}; 