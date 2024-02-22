import './App.css';

import { TodoSearch } from './components/TodoSearch';
import { TodoDisplay } from './components/TodoDisplay';
import { TodoAdd } from './components/TodoAdd';
import { useSelector } from 'react-redux';
import { getError } from './utils/selectors';

function App() {

  const error = useSelector(getError);

  return (
    <div className="container mx-auto">
      <div className='flex flex-col items-center gap-2'>

        <h1 className='text-2xl font-bold'>Dynamic ToDo List</h1>
        <div className='border-t border-gray-200 mb-2 w-[80%]'/>
        {error?
          <div className='border rounded bg-red-400'>
            <div className='p-3 px-8'>{error}</div>
          </div>
          :
          <>
            <TodoSearch/>
            <div className='border-t border-gray-200 mb-2 w-[80%]'/>

            <TodoDisplay />
            <div className='border-t border-gray-200 mb-2 w-[80%]'/>

            <TodoAdd />
          </>
        }
      </div>
    </div>
  );
}

export default App;
