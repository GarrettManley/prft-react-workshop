import React from 'react';
import Card from '../Card';
import LabeledInput from '../LabeledInput';

import './styles.scss';

export default class Transaction extends React.Component {
	constructor(props) {
		super(props);
		this.handleAmountChanged = this.handleAmountChanged.bind(this);
		this.handleCheckChanged = this.handleCheckChanged.bind(this);

		if (this.props.isDebit) {
			this.title = 'Subtract Debit:';
		} else {
			this.title = 'Add Deposit:';
		}

		this.state = {
			amount: '$0.00',
			check: '000',
		};
	}

	// Event Handlers
	handleAmountChanged(e) {
		this.amount = this.formatAsCurrency(e.target.value);

		if (this.amount.length > 9) {
			return;
		}

		if (this.stripNonNumeric(this.amount) >= 10000) {
			this.amount = this.formatAsCurrency('$10,000.00');
		}

		this.setState({
			amount: this.amount,
		});
	}

	handleCheckChanged(e) {
		this.check = e.target.value;

		this.setState({
			check: this.check,
		});
	}

	// Helper Methods
	formatAsCurrency(val) {
		this.num = this.stripNonNumeric(val);

		// NOTE:: Don't do this in a real financial app due to loss of precision with floating point numbers.
		this.num = (this.num / 100).toFixed(2);
		return `$${this.num}`;
	}

	stripNonNumeric(val) {
		return val.replace(/\D/g, '');
	}

	// Lifecycle Hooks

	render() {
		return (
			<Card className='transactions-box'>
				<h2>{this.title}</h2>
				<LabeledInput labelText='Check Number' value={this.state.check} onChange={this.handleCheckChanged} />
				<LabeledInput labelText='Amount' value={this.state.amount} onChange={this.handleAmountChanged} />
				<button>Submit</button>
			</Card>
		);
	}
}
