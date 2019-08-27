import React from 'react';
import Card from '../Card';
import LabeledInput from '../LabeledInput';

import './styles.scss';

export default class Transaction extends React.Component {
	title = ':';

	constructor(props) {
		super(props);

		if (this.props.isDebit) {
			this.setupDebit();
		} else {
			this.setupDeposit();
		}
	}

	setupDebit() {
		this.title = 'Subtract Debit:';
	}

	setupDeposit() {
		this.title = 'Add Deposit:';
	}

	render() {
		return (
			<Card className='transactions-box'>
				<h2>{this.title}</h2>
				<LabeledInput labelText='Check Number' />
				<LabeledInput labelText='Amount' />
				<button>Submit</button>
			</Card>
		);
	}
}
