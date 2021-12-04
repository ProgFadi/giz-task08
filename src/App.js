// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from "./componot/MainPage"
import MiniDrawer from './componot/Drawer';
import ProductApp from './componot/ProductApp';
import DashboardPage from './componot/DashBoard';
import CategoriesPage from './componot/Categories';

function App() {
  return (
    // <div className="App">
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/drawer" element={<MiniDrawer />} />

      <Route path="/dasboard" element={<DashboardPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/products" element={<ProductApp />}/>
    </Routes>
  );
}

// {/* <Route path="/drawer" element={<MiniDrawer />}/> */}
// {/* </div> */}

export default App;
