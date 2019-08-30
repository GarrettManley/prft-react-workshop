import React from 'react';
import './styles.scss';

export default class LabeledInput extends React.Component {
	render() {
		return (
			<div className='input-group'>
				<p>{this.props.labelText}:</p>
				<input value={this.props.value} onChange={this.props.onChange} />
			</div>
		);
	}
}
