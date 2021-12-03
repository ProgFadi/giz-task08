import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Nav from './Nav'
import Dashboard from './routes/Dashboard'
import Categories from './routes/Categories'
import Products from './routes/Products'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

function App() {

  const routes = [
    {
      path: "/dashboard",
      component: <Dashboard/>,
      name: "Dashboard",
    },
    {
      path: "/categories",
      component: <Categories/>,
      name: "Categories",
    },
    {
      path: "/products",
      component: <Products/>,
      name: "Products",
    },
  ]

  return (
    <ChakraProvider>
    <Router>
        <Nav routes={routes}/>
        <Routes>
        {routes.map((r, i) => <Route path={r.path} element={r.component} key={i}/>)}
        </Routes>
    </Router>
    </ChakraProvider>
  )
}
export default App;
