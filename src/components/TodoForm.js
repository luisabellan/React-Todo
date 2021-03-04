import React, {useState} from 'react';
import GoogleFontLoader from 'react-google-font-loader';

export default function  TodoForm (props) {
    const initialState = {
      todoItem1: '',
    };
    const [state, setState] = useState(initialState);

  const handleChanges = (e) => {
    // update state with each keystroke
    // console.log(e)
    setState({ [e.target.name]: e.target.value });
    // console.log(state);
  };

  // class property to submit form
  const submitItem = (e) => {
    e.preventDefault();
    console.log(props);
    props.addItem(e, state.todoItem1);
    setState({ todoItem1: '' });
  };

    console.log('rendering form', state.todoItem);

    return (
      <>
        <GoogleFontLoader
          fonts={[
            {
              font: 'Anton',
              weights: [400, '400i'],
            },
            {
              font: 'Montserrat',
              weights: [400, 700],
            },
            {
              font: 'Jomhuria',
              weights: [400, 700],
            },
            {
              font: 'Ubuntu',
              weights: [400, 700],
            },
          ]}
          subsets={['cyrillic-ext', 'greek']}
        />
        <form onSubmit={submitItem}>
          <input
            type='text'
            value={state.todoItem1}
            placeholder='Add new task here'
            name='todoItem1'
            onChange={handleChanges}
            style={{ fontFamily: 'Ubuntu, sans-serif', outline: 'none' }}
          ></input>
          <button
            className='add-to-do-btn'
            style={{
              fontFamily: 'Jomhuria,sans-serif',
              outline: 'none',
              fontSize: '3.2rem',
            }}
          >
            <span>Add Todo</span>
          </button>
          <button
            className='clear-btn'
            onClick={props.clearCompleted}
            style={{
              fontFamily: 'Jomhuria,sans-serif',
              outline: 'none',
              fontSize: '3.2rem',
            }}
          >
            <span>Clear List</span>
          </button>
        </form>
      </>
    );
  }


