import { useState } from 'react';

export default function Counter() {
  // press button to increase counter value
  const [counter, setCounter] = useState(0);

  const onIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <h3>{counter}</h3>
      <button onClick={onIncrement} className='btn btn-info'>
        inc
      </button>{' '}
      <br />
      <input type='text' placeholder='start value' /> <br />
      <input type='text' placeholder='title' />
    </div>
  );
}
