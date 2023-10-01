import logo from './logo.svg';
import './App.css';
import UiButton from './components/button '
import { useState } from 'react';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function App() {
const [count, setCount] = useState(0)
const [name, setName] = useState('Mary');

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
  let Reset = () => {
    setCount(0)
  }
  return (
    <div className='App'>
      <h1>Hello {Lanuage}. Im a beginner here</h1>
      <h2>Count is {count}</h2>
      <Button variant="outlined" onClick={()=>setCount(count+1)}>Increment</Button>
      <Button variant="outlined" onClick={()=>setCount(count-1)}>Decrement</Button>
      <Button variant="outlined" onClick={Reset}>Reset</Button>


      {/* <UiButton /> */}
      <ul>{toShow}</ul>
      {filtered[0].title}
      <br></br>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <p>Hello, {name}.</p>
      <FormControl>
  <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="A" control={<Radio />} label="A" />
    <FormControlLabel value="B" control={<Radio />} label="B" />
    <FormControlLabel value="C" control={<Radio />} label="C" />
  </RadioGroup>
</FormControl>
      
    </div>
  );
}

export default App;
