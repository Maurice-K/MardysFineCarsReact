import Home from './Home';
import Admin from './Admin';
import { Routes, Route } from 'react-router-dom'
import Login from './Login';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/admin' exact element={<Admin />}></Route>
        <Route path='/login' exat element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
