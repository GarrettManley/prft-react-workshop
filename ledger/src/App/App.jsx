import React from 'react';
import Transactions from './Transactions';
import './App.scss';
import Ledger from './Ledger';
import Container from '../Common/Components/Container';

export default class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<header className='header'>
					<h1>Perficient National Bank</h1>
				</header>
				<Container>
					<Transactions />
					<Ledger />
				</Container>
			</div>
		);
	}
}
