import Home from './Home';
import Admin from './Admin';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';

const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/admin' element={<Admin />}></Route>
				<Route path='/login' element={<Login />}></Route>
			</Routes>
		</div>
	);
};

export default App;
