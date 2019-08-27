import React from 'react';
import Transaction from '../../Common/Components/Transaction/transaction';

export default class Deposits extends React.Component {
	title = 'Deposits';

	render() {
		return <Transaction title={this.title} />;
	}
}
