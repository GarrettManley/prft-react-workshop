import React from 'react';
import './styles.scss';
import Transaction from '../../Common/Components/Transaction';

const Transactions = props => {
	return (
		<div className='transactions-container'>
			<Transaction isDebit={true} />
			<Transaction isDebit={false} />
		</div>
	);
};

export default Transactions;
