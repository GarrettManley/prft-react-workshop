import React from 'react';
import './styles.scss';
import Transaction from '../../Common/Components/Transaction';

export default class Transactions extends React.Component {
	render() {
		return (
			<div className='transactions-container'>
				<Transaction isDebit={true} />
				<Transaction isDebit={false} />
			</div>
		);
	}
}
