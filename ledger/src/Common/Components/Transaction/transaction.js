import React from 'react';
import Card from '../Card/card';

import './transaction.scss';

export default class Transaction extends React.Component {
	render() {
		return (
			<Card className='transactions-box'>
				<h2>{this.props.title}</h2>
				<div className='input-group'>
					<p>Check Number:</p>
					<input />
				</div>
			</Card>
		);
	}
}
