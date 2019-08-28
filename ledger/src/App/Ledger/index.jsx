import React from 'react';
import Card from '../../Common/Components/Card';

import './styles.scss';
import Container from '../../Common/Components/Container';

export default class Ledger extends React.Component {
	render() {
		return (
			<Container>
				<div className='ledger'>
					<Card>Test</Card>
				</div>
			</Container>
		);
	}
}
