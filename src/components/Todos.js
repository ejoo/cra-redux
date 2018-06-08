import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../store/actions';

class Todos extends React.Component{

	constructor() {
		super();
		this.state = {
			todoText: '',
		}
	}

	render() {
		return (
			<div>
				<h1>Todos</h1>

				<ul>
				{this.props.todos.map(item => <li key={item.text.length}>{item.text}</li>)}
				</ul>

				<input type='text' onChange={(e) => this.setState({todoText: e.target.value})}  value={this.state.todoText}/>
				<button onClick={() => this.props.addTodo(this.state.todoText)}>Add Todo</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (payload) => dispatch(addTodo(payload)),
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Todos);