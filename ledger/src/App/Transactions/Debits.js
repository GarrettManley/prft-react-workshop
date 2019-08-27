import React from 'react';
import Transaction from '../../Common/Components/Transaction/transaction';

export default class Debits extends React.Component {
	title = 'Debits';

	render() {
		return <Transaction title={this.title} />;
	}
}
