import {format} from 'date-fns';
import './App.css';

function App() {

  return (
    <p className="clock">{format(new Date(), 'PPpp')}</p>
  )
    
};

export default App