import logo from './logo.svg';
import './App.css';
import { Allroutes } from './Allroutes';
import { Nav } from './components/Nav';
import { Home } from './Pages/Home';


function App() {
  return (
    <div className="App" style={{backgroundColor:'#FFFEF2'}}>
      <Nav/>
      <Allroutes/>
     
    </div>
  );
}

export default App;
