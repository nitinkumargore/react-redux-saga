import './App.css';

import { TodoSearch } from './components/TodoSearch';
import { TodoDisplay } from './components/TodoDisplay';
import { TodoAdd } from './components/TodoAdd';

function App() {

  return (
    <div className="container mx-auto">
      <div className='flex flex-col items-center gap-2'>

        <h1 className='text-2xl font-bold'>Dynamic ToDo List</h1>
        <div className='border-t border-gray-200 mb-2 w-[80%]'/>
        
        <TodoSearch/>
        <div className='border-t border-gray-200 mb-2 w-[80%]'/>

        <TodoDisplay />
         <div className='border-t border-gray-200 mb-2 w-[80%]'/>

         <TodoAdd />
      </div>
    </div>
  );
}

export default App;
