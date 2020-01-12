import React from 'react';

export default class MInput extends React.Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 创建一个ref引用，跟render函数中的ref属性关联
		this.inputElement = React.createRef();
	}

	componentDidMount() {
		console.log(this.inputElement)
	}

	render() {
		return <div>
			<label>
				{/*使用传入的props*/}
				{this.props.label}
				<input
					onInput={this.inputHandler.bind(this)}
					ref={this.inputElement}
					placeholder={this.props.placeholder}
					type={this.props.type || 'text'}/>
				{/*获取传入所有子组件,类似vue的slot*/}
				{this.props.children}
			</label>
			<button type="button" onClick={() => {
				this.inputElement.current.focus();
			}}>点击可以获取焦点
			</button>
		</div>
	}

	inputHandler(e) {
		e.preventDefault();

		this.props.parent.setState(state => {
			return {
				[this.props.p]: this.inputElement.current.value,
			}
		});
	}
}