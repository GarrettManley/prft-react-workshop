import React from 'react';
import Card from '../Card';
import LabeledInput from '../LabeledInput';

import './styles.scss';

export default class Transaction extends React.Component {
	render() {
		return (
			<Card className='transactions-box'>
				<h2>{this.props.title}</h2>
				<LabeledInput labelText='Check Number' />
				<LabeledInput labelText='Amount' />
				<button>Submit</button>
			</Card>
		);
	}
}
