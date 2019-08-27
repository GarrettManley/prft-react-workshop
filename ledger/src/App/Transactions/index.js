import React from 'react';
import Deposits from './Deposits';
import Debits from './Debits';
import './styles.scss';

const Transactions = props => {
	return (
		<div className='transactions-container'>
			<Deposits />
			<Debits />
		</div>
	);
};

export default Transactions;
