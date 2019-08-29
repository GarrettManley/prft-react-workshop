import React from 'react';
import Transactions from './Transactions';
import './App.scss';
import Ledger from './Ledger';
import Container from '../Common/Components/Container';

export default class App extends React.Component {
	transactions = [{ checkNumber: 0, amount: 100 }, { checkNumber: 1, amount: 200 }, { checkNumber: 2, amount: 300 }];

	render() {
		return (
			<div className='App'>
				<header className='header'>
					<h1>Perficient National Bank</h1>
				</header>
				<Container>
					<Transactions />
					<Ledger transactions={this.transactions} />
				</Container>
			</div>
		);
	}
}
