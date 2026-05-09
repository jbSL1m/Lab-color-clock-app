import {format} from 'date-fns';
import './App.css';

function App() {

  return (
    <h1 className="clock">{format(new Date(), 'PPpp')}</h1>
  )
    
};

export default App