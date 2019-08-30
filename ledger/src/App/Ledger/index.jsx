import React from 'react';
import Card from '../../Common/Components/Card';
import LedgerItem from './LegerItem';
import './styles.scss';

export default class Ledger extends React.Component {
	render() {
		return (
			<Card className={'ledger'}>
				<h2>Ledger</h2>
				{this.props.transactions.map(transaction => (
					<LedgerItem key={transaction.checkNumber} transaction={transaction} />
				))}
			</Card>
		);
	}
}
