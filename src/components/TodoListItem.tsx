import { Component } from 'solid-js'
import { TodoItem } from '../types/types'

interface TodoListItemProps {
	todo: TodoItem
	onRemove: any
	onChange: any
}

const TodoListItem: Component<TodoListItemProps> = (props) => {
	const { todo, onChange, onRemove } = props
	return (
		<li
			style={{
				'text-decoration': todo.completed ? 'line-through' : 'none',
			}}
		>
			<label>
				<input
					type='checkbox'
					checked={todo.completed}
					onChange={() => onChange(todo.id)}
				/>
				{todo.task}
			</label>
			<button onClick={() => onRemove(todo.id)}>X</button>
		</li>
	)
}

export default TodoListItem
