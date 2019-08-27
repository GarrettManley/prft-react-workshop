import React from 'react';
import './card.scss';

export default class Card extends React.Component {
	render() {
		return <div className={`card ${this.props.className}`}>{this.props.children}</div>;
	}
}
