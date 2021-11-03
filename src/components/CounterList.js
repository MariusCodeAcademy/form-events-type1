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

function CounterList() {
  // get how many counters we have
  // get average counter ammount
  const [counters, setCounters] = useState(initCounters);

  return (
    <div className='d-flex'>
      {counters.map((counterObj) => (
        <CounterSimple key={counterObj.id} title={counterObj.title} />
      ))}
    </div>
  );
}

export default CounterList;
