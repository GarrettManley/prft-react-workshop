import React, { Component } from 'react';
import '../styles.scss';
export default class LedgerItem extends Component {
	render() {
		return (
			<div className={'ledger-item'}>
				<div>Amount: {this.props.transaction.amount}</div>
				<div>Check: {this.props.transaction.checkNumber}</div>
			</div>
		);
	}
}
