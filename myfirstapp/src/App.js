import logo from './logo.svg';
import './App.css';
import UiButton from './components/button '
import { useState } from 'react';

function App() {
const [count, setCount] = useState(0)

  const toLearn = [
    { title: 'listing', id: 1 },
    { title: 'Props', id: 2 },
    { title: 'Navigation', id: 3 },
  ];
  const Lanuage = "React"
  const toShow = toLearn.map((item) =>
    <li>
      {item.title}
    </li>
  )
  const filtered = toLearn.filter((item) => item.id == 3)
  console.log(filtered)
  return (
    <div className='App'>
      <h1>Hello {Lanuage}. Im a beginner here</h1>
      <h2>Count is {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(count==0)}>Reset</button>


      {/* <UiButton /> */}
      <ul>{toShow}</ul>
      {filtered[0].title}
    </div>
  );
}

export default App;
