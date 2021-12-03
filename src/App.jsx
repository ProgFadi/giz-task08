import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Categories from './Categories'
import Products from './Products'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'


function App() {
  return (
    <ChakraProvider>
    <Router>
        <Nav/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
    </Router>
    </ChakraProvider>

  )
}
export default App;