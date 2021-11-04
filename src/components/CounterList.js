import CounterSimple from './CounterSimple';
import { useState } from 'react';

const initCounters = [
  {
    id: 1,
    title: 'Dogs',
    counterValue: 4,
  },
  {
    id: 2,
    title: 'Cats',
    counterValue: 5,
  },
];
const initCounters2 = [
  {
    id: 1,
    title: 'Dogs',
    counterValue: 5,
  },
  {
    id: 2,
    title: 'Cats',
    counterValue: 5,
  },
  {
    id: 3,
    title: 'Birds',
    counterValue: 7,
  },
];

function CounterList() {
  // get how many counters we have
  // get average counter ammount
  const [counters, setCounters] = useState(initCounters);

  const handleIncrement = (id) => {
    console.log('increse counter with id', id);
    // take counters arr, find the one with id === id and indcrese counter value by 1
  };

  return (
    <div className='d-flex'>
      {counters.map((counterObj) => (
        <CounterSimple
          key={counterObj.id}
          counter={counterObj}
          onIcrement={handleIncrement}
        />
      ))}
    </div>
  );
}

export default CounterList;
