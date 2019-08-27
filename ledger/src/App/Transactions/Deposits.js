import React from 'react';
import Transaction from '../../Common/Components/Transaction';

export default class Deposits extends React.Component {
	title = 'Deposits';

	render() {
		return <Transaction isDebit={false} />;
	}
}
