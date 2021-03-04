import React, {useState} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import GoogleFontLoader from 'react-google-font-loader';

import './App.css';

const todoItems = [
  {
    name: 'buy bread',
    id: '1',
    purchased: false,
  },
];

let todoItem = '';

function App () {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  const initialState = {
      todoItems,
      todoItem,
  };
  const [state,setState] = useState(initialState);


  // logic here

  // Class methods to update state
  const addItem = (e, item) => {
    e.preventDefault();

    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
    };

    setState({
      todoItems: [...state.todoItems, newItem],
    });
  };

  const toggleItem = (itemId) => {
    // console.log(itemId);

    setState({
      todoItems: state.todoItems.map((item) => {
        // console.log(item);
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      }),
    });
  };

  const clearCompleted = (e) => {
    e.preventDefault();
    console.log(state.todoItems);
    setState({
      // returns the items that haven't been completed and purges
      // the ones that have been completed
      todoItems: state.todoItems.filter(
        (item) => item.completed === false
      ),
    });
  };

    return (
      <div className='app-wrapper'>
        <GoogleFontLoader
          fonts={[
            {
              font: 'Indie Flower',
              weights: [800, '4000'],
            },
            {
              font: 'Indie Flower',
              weights: [800, 900],
            },
          ]}
          subsets={['cyrillic-ext', 'greek']}
        />

        <h2 style={{ fontFamily: 'Indie Flower', fontSize: '4rem' }}>
          Todo App
        </h2>
        <TodoForm addItem={addItem} clearCompleted={clearCompleted} />
        <TodoList
          todoItems={state.todoItems}
          toggleItem={toggleItem}
        />
        <footer>
          <p className='copyright'>
            Copyright {new Date().getFullYear()} - Luis Abellan
          </p>
        </footer>
      </div>
    );

}

export default App;
