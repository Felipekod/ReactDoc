import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Reports from './pages/Reports'
import Products from './pages/Products'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/reports' element={<Reports/>}/>
          <Route exact path='/products' element={<Products/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
