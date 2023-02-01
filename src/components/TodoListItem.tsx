import { Component } from 'solid-js'
import { ITodo } from '../types/todo'

interface TodoListItemProps {
	todo: ITodo
	onRemove?: (id: string) => void
	onToggle?: (id: string) => void
}

const TodoListItem: Component<TodoListItemProps> = props => {
	const { todo, onToggle, onRemove } = props
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
					onChange={[onToggle, todo.id]}
				/>
				{todo.task}
			</label>
			<button onClick={[onRemove, todo.id]}>X</button>
		</li>
	)
}

export default TodoListItem
