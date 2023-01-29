import { Component } from 'solid-js'
import { filter, setFilter } from '../store/TodoStore'
import { TodoFilter } from '../types/types'

const TodoFilterButton: Component<{
	filter: TodoFilter
	children: string
}> = props => {
	return (
		<button
			disabled={filter() === props.filter}
			onClick={[setFilter, props.filter]}
		>
			{props.children}
		</button>
	)
}

function TodoFilterButtons(props) {
	return (
		<>
		    <TodoFilterButton filter='all'>All</TodoFilterButton>
			<TodoFilterButton filter='active'>Active</TodoFilterButton>
			<TodoFilterButton filter='completed'>Completed</TodoFilterButton>
		</>
	)
}

export default TodoFilterButtons
