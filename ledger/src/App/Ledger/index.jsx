import React from 'react';
import Card from '../../Common/Components/Card';

import './styles.scss';

export default class Ledger extends React.Component {
	render() {
		return (
			<Card className={'ledger'}>
				test
				{this.props.transactions.map(transaction => (
					<div key={transaction.checkNumber}>
						{transaction.amount} - {transaction.checkNumber}
					</div>
				))}
			</Card>
		);
	}
}
