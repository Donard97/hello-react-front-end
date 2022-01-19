import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greetings/main';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, []);

  // const greeting = useSelector((state) => state.greetings.greeting);
  // console.log(greeting, 'text');

  const greeting = useSelector((state) => state.greetings);
  const [currState, setCurrState] = useState(greeting);

  useEffect(() => {
    setCurrState(greeting);
  }, [greeting]);

  return (
    <div>
      <h1>{currState}</h1>
    </div>
  );
};

export default Greeting;
