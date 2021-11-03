import { useState } from 'react';

export default function CounterSimple(props) {
  // press button to increase counter value
  const [counter, setCounter] = useState(0);

  const onIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className='border border-primary p-4 m-2'>
      <h2>Counter: {props.title}</h2>
      <h3>{counter}</h3>
      <button onClick={onIncrement} className='btn btn-info'>
        inc
      </button>
    </div>
  );
}
