import './App.css';
import Navbar from './Components/Navbar';
import Grid from '@mui/material/Grid';
import Sidebar from './Components/Sidebar';
import Container from './Components/Container';
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div >
      <BrowserRouter>

        <Navbar />
        <Grid container>
            <Grid item sm={3} > <Sidebar/> </Grid>
            <Grid item sm={9} > <Container/> </Grid>
        </Grid>
       
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
