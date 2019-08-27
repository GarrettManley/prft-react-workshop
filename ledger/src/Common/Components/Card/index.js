import React from 'react';
import './styles.scss';

export default class Card extends React.Component {
	render() {
		return <div className={`card ${this.props.className}`}>{this.props.children}</div>;
	}
}
