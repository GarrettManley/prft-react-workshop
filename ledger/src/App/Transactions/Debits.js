import React from 'react';
import Transaction from '../../Common/Components/Transaction';

export default class Debits extends React.Component {
	title = 'Debits';

	render() {
		return <Transaction isDebit={true} />;
	}
}
