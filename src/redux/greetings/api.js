const fetchGreetings = async () => {
  const response = await fetch('http://localhost:3000/api/greeting');
  const greetings = await response.json();
  return greetings;
};

export default fetchGreetings;
