import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from "./Components/Home"
import Content from './Components/Content';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/content" element={<Content/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
