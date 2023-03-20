import logo from './logo.svg';
import './App.css';
import {shoes} from "./data"

import Shoe from './shoe';
import {BrowserRouter,Switch,Link,Route,useHistory} from 'react-router-dom'
import Detail from './detail';

function App() {
  return (
    <>
    <div class="App">
   
    <Detail/>
     
  
   
    </div>
    
    </>
  );
}

export default App;
