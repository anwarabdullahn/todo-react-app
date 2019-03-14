import React from 'react';
import { Input, Button, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

const Todo = (props) => {
	const { todos, actionRemove, actionAllRemove } = props;
	const todoList = todos.map((todo, index) => {
		return (
			<div className="col my-1" key={todo.id}>
				<InputGroup>
					<InputGroupAddon addonType="prepend">
						<InputGroupText>{index + 1}</InputGroupText>
					</InputGroupAddon>
					<Input value={todo.desc} disabled />
					<Button color="danger" onClick={() => actionRemove(todo.id)}>
						Remove -
					</Button>
				</InputGroup>
			</div>
		);
	});

	return (
		<div className="col">
			{[ todoList ]}
			<div className="col">
				<InputGroup>
					<Input value="Clear All List" disabled />
					<Button color="warning" onClick={() => actionAllRemove()}>
						Remove All
					</Button>
				</InputGroup>
			</div>
		</div>
	);
};

export default Todo;
