import React from 'react';
import Transactions from './Transactions';
import './App.scss';
import Ledger from './Ledger';

function App() {
	return (
		<div className='App'>
			<header className='header'>
				<h1>Perficient National Bank</h1>
			</header>
			<Transactions />
			<Ledger />
		</div>
	);
}

export default App;
