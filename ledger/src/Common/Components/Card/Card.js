import React from 'react';
import './Card.scss';
// import styles from './test.css';

export default class Card extends React.Component {
	render() {
		return <div className={`card ${this.props.className}`}>{this.props.children}</div>;
	}
}
