
import './App.css';
import {BrowserRouter,Route,Router,Routes} from 'react-router-dom'
import Drawer from './components/Drawer'
function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={Drawer}/>
      <Route exact path="Dashboard" element={Drawer}/>
      <Route exact path="Categories" element={Drawer}/>
      <Route exact path="Products" element={Drawer}/>
    </Routes>
    </div>
  );
}

export default App;
