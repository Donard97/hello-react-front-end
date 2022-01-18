export default async function fetchGreetings() {
  const response = await fetch('/api/greeting');
  const greetings = await response.json();
  return greetings;
}
