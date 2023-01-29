import 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserList from './components/UserList';

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/users" element={<UserList />} />
		</Routes>
	);
}
