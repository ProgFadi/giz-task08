import './App.css'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Categories from './Categories'
import Products from './Products'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'


function App() {
  // let routes = (
//   <Switch>
//     <Route exact path="/">
//       <Home />
//     </Route>
//     <Route path="/Dashboard">
//       <Dashboard />
//     </Route>
//     <Route path="/Categories">
//       <Categories />
//     </Route>
//     <Route path="/Products">
//       <Products />
//     </Route>
//     <Route>
//       <NoMatch />
//     </Route>
//   </Switch>
// );

  return (
    <Router>
        <Nav/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
    </Router>

  )
}

export default App;