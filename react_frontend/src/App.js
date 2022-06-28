import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Cards from './components/Cards';
import Navbar from './components/Navbar/Navbar';
import ReactLoading from 'react-loading';
import { Container } from '@mui/material';

function App() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	useEffect(() => {
		setLoading(true);
		axios
			.get('http://localhost:6868/api/subscriptions')
			.then((res) => {
				console.log(res.data);
				setData(res.data);
				setLoading(false);
			})
			.catch(function (error) {
				console.log(error);
				setError(true);
				setLoading(false);
			});
	}, []);

	axios.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			setError(true);

			if (!error.response) {
				console.log('Please check your internet connection.');
			}

			return Promise.reject(error);
		}
	);
	return (
		<Container className="App" maxWidth="xl">
			{error && <div className="abs_pos white-txt">Server Error</div>}
			{loading && (
				<div className="abs_pos">
					<ReactLoading type={'spokes'} color="#fff" />
				</div>
			)}
			{data.length == 0 && !loading && !error ? (
				<div className="abs_pos">no data after api calling</div>
			) : (
				''
			)}
			{!loading && (
				<>
					<Navbar />
					<Cards data={data} />
				</>
			)}
		</Container>
	);
}

export default App;
