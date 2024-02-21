import { useSelector, useDispatch } from 'react-redux';

import {updateSearchText} from '../store/todoListSlice';
import { getSearchText } from '../utils/selectors';

export const TodoSearch = () => {
      const dispatch = useDispatch();

      const searchText = useSelector(getSearchText);

    return(<div>
            <div className='text-center text-l font-bold'>Search Todo</div>
            <input className='border rounded min-w-[300px] p-1' 
                  placeholder='Type hear to search the Todo in the list' 
                  value={searchText} 
                  onChange={(e)=>dispatch(updateSearchText(e.target.value))}
            />
      </div>)
}