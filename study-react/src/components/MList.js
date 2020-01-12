import React from 'react';

export default class MList extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		if (this.props.data === null
			|| this.props.data === undefined
			|| this.props.data.length === 0) {
			return <ul>空空如也！</ul>
		} else {
			return <ul>
				{this.props.data.map((item) => {
					return <li key={item.id}>{item.name}-{item.hobby}</li>
				})}
			</ul>

		}
	}

}