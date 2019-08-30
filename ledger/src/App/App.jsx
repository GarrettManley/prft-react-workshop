import React from 'react';
import Container from '../Common/Components/Container';
import './App.scss';
import Ledger from './Ledger';
import Transactions from './Transactions';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			transactions: [
				{ checkNumber: 0, amount: 100 },
				{ checkNumber: 1, amount: 200 },
				{ checkNumber: 2, amount: 300 },
			],
		};
	}

	render() {
		return (
			<div className='App'>
				<header className='header'>
					<h1>Perficient National Bank</h1>
				</header>
				<Container>
					<Transactions />
					<Ledger transactions={this.state.transactions} />
				</Container>
			</div>
		);
	}
}
