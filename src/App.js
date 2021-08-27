import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/about';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
function App() { 
  return (
    <>
<Router>
<Navbar/>
<Switch>

          <Route path="/about">
            <About />
          </Route>
      <Route path="/">
             
     <Textform/>
     </Route> 
         
        </Switch>
        </Router>
    </>
  );
}

export default App;
