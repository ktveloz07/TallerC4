import {BrowserRouter as Router,Route} from 'react-router-dom'
import Barra from './components/Barra.jsx';
import RegistrarEstudiante from './components/RegistrarEstudiante.jsx';
import './App.css'; 
function App() {
  return (
  <Router>
    <Route exact path= '/' component={Barra}/>
    <Route path= '/restudiante' exact component={RegistrarEstudiante}/>
  </Router>
  ); 
} 
export default App;
