import { useState } from 'react';

export default function Counter() {
  // press button to increase counter value
  const [counter, setCounter] = useState(0);
  const [counterTitle, setCounterTitle] = useState('Cat');

  const onIncrement = () => {
    setCounter(counter + 1);
  };

  const onTitleChange = (event) => {
    console.log('title change');
    // get value entered and update counterTitle
    setCounterTitle(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <h2>Counter: {counterTitle}</h2>
      <h3>{counter}</h3>
      <button onClick={onIncrement} className='btn btn-info'>
        inc
      </button>{' '}
      <br />
      <input type='text' placeholder='start value' /> <br />
      <input
        type='text'
        placeholder='title'
        value={counterTitle}
        onChange={onTitleChange}
      />
    </div>
  );
}
