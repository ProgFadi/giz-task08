import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AppBar from './Components/AppBar';
import Content from './Components/Content';
import Home from './Components/Home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/appbar" element={<AppBar/>}/>
      <Route path="/content" element={<Content/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
