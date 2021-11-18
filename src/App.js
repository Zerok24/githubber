import './App.css';
import {useSelector} from 'react-redux';
import { Repository } from './Repository';
import { useState } from 'react';


function App() {
  const matches = useSelector(state => state.matches);
  const [word, setWord] = useState("");
  

  // dispatch
  // const dispatch = useDispatch();
  // dispatch(startSearching({word}));

  return (
    <div className="App">
      <div>
        <input type="search" value = {word} 
        onChange={event => setWord(event.target.value)}/>
        <button onClick={matches.filter(elem => elem.full_name.includes({word}))}>Search</button>  
        <Repository match = {matches[0]}/>

        {}

        

        {/* {match.map((mat, i) => <a href={mat.html_url} key={i}>{mat.full_name}</a>)} */}


      </div>
    </div>
  );
}

export default App;
