import { Component, For } from 'solid-js'
import { SetStoreFunction } from 'solid-js/store'
import { TodoItem } from '../types/types'
import TodoInput from './TodoInput'
import TodoListItem from './TodoListItem'

interface TodoListProps {
	todos: TodoItem[]
	setTodos: SetStoreFunction<TodoItem[]>
}

const TodoList: Component<TodoListProps> = (props) => {
    let todoId = 0
	const { todos, setTodos } = props
	const addTodo = (task: string) => (
		setTodos(todos => [...todos, { id: ++todoId, task, completed: false }])
	)
	const toggleTodo = (id: number) => (
		setTodos(
			todo => todo.id === id,
			'completed',
			completed => !completed
		)
	)
	const removeTodo = (id: number) => {
		setTodos(todos => [...todos.filter(todo => todo.id !== id)])
	}
	return (
		<>
			<TodoInput addTodo={addTodo} />
			<ul>
				<For each={todos}>
					{todo => (
						<TodoListItem
							todo={todo}
							onChange={toggleTodo}
							onRemove={removeTodo}
						/>
					)}
				</For>
			</ul>
		</>
	)
}

export default TodoList
