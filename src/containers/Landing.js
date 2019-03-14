import React, { Component } from 'react';
import { Input, Col, Row, Button, InputGroup } from 'reactstrap';
import '../assets/sass/_Landing.scss';
import Todo from '../components/Todo';

export default class Landing extends Component {
	constructor() {
		super();
		this.state = {
			todos: [ { id: 1, desc: `Learn Something this Weekends` } ],
			tempInput: '',
			id: 2
		};
	}

	tempInput = (e) => this.setState({ tempInput: e.target.value });

	actionAllRemove = () => this.setState({ todos: [] });

	storeTodo = () => {
		let { todos, id, tempInput } = this.state;
		if (tempInput !== '') {
			const todo = { id: id++, desc: tempInput };
			todos.push(todo);
			this.setState({ todos, id: id++, tempInput: '' });
		}
	};

	removeTodo = (id) => {
		let { todos } = this.state;
		const todosList = todos.filter((todo) => todo.id !== id);
		this.setState({ todos: todosList });
	};

	render() {
		const { todos } = this.state;
		return (
			<div className="landing">
				<Row className="h-100">
					<Col className="my-auto mx-5 text-center">
						<h1 className="text-light">Todo App</h1>
						<InputGroup>
							<Input className="input" onChange={this.tempInput} value={this.state.tempInput} />
							<Button color="info" onClick={this.storeTodo}>
								Add +
							</Button>
						</InputGroup>
					</Col>
					<Col className="my-auto mx-5 text-center">
						<h3 className="text-light">My Todo List</h3>
						<Todo todos={todos} actionRemove={this.removeTodo} actionAllRemove={this.actionAllRemove} />
					</Col>
				</Row>
			</div>
		);
	}
}
