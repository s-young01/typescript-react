import { useReducer } from 'react';
import './App.css';
import ToDoLists from './components/ToDoLists';

const initialState = [
  {
    id: 1,
    text: '이력서, 자소서 쓰기',
    isDone: false
  }
];

type Action = 'ADDTODO' | 'DELTODO' | 'TOGGLETODO'

interface actionType {
  type: Action,
  todo?: dataType,
  id?: number,
} 
export interface dataType {
  id: number,
  text: string,
  isDone: boolean,
}

function reducer(state: dataType[], action: actionType):dataType[] {
  switch(action.type) {
    case 'ADDTODO':
      return [
        ...state,
        action.todo!
        // action.todo가 있을 수도 있고 없을 수도 있어서 !를 붙여줬다
        // ! => null과 undefiend는 안 올 것이다라는 확정표
      ];
    case 'DELTODO':
      return (state as Array<dataType>).filter(li => li.id !== action.id);
    case 'TOGGLETODO':
      return (state as Array<dataType>).map(li => li.id === action.id ? {...li, isDone: !li.isDone} : li);
    default:
      return state;
  }
}
function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <ToDoLists todos={todos}/>
    </div>
  );
}

export default App;
