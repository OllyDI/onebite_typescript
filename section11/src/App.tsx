import React, { useContext, useEffect, useReducer, useRef } from 'react';
import './App.css';
import Editor from './components/Editor';
import { Todo } from './types'; // 여러 번 사용되는 인터페이스는 새로운 파일을 생성해서 export 하여 사용
import TodoItem from './components/TodoItem';


type Action = {
  type: 'CREATE';
  data: {
    id: number;
    content: string;
  }
} | {
  type: 'DELETE';
  id: number;
}


function reducer(state: Todo[], action: Action) {
  switch(action.type) {
    case 'CREATE': {
      return [...state, action.data]
    }
    case 'DELETE': {
      return state.filter((it) => it.id !== action.id);
    }
  }
}


export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);


// 위에서 생성한 컨텍스트가 null을 포함한 유니온 타입이라 타입 좁히기를 사용
export function useTodoDisaptch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("TodoDispatchContext Error");
  return dispatch;
}


function App() {

  /**
   * useState: 모든 값을 받을 수 있는 제네릭 함수
   * typescript react에서는 useState 값을 비우면 undefined로 추론됨 -> 사용X
   */
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        content: text,
      }
    })
  }
  const onClickDelete = (id: number) => {
    dispatch({
      type: 'DELETE',
      id: id,
    })
  }

  useEffect(() => {
    console.log(todos);
  }, [todos])

  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{onClickAdd, onClickDelete}}>
          <Editor><div>child</div></Editor>
          <div>
              {todos.map((todo)=>(
                <TodoItem key={todo.id} {...todo} />
              ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
