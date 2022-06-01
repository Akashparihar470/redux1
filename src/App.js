import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import addcount from './redux/action';

function App() {
  const count= useSelector((store)=>store.count)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>counter:{count}</h1>
      <button onClick={()=>{dispatch(addcount(1))}}>Add</button>
      <button onClick={()=>{dispatch(addcount(-1))}}>Reduce</button>
    </div>
  );
}

export default App;
