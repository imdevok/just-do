import { Component, For } from 'solid-js'
import { removeTodo, todos, toggleTodo } from '../store/TodoStore'
import TodoFilterButtons from './TodoFilterButtons'
import TodoInput from './TodoInput'
import TodoListItem from './TodoListItem'

const TodoList: Component = () => {
	return (
		<>
			<TodoInput />
			<ul>
				<For each={todos()}>
					{todo => (
						<TodoListItem
							todo={todo}
							onToggle={toggleTodo}
							onRemove={removeTodo}
						/>
					)}
				</For>
			</ul>
			<TodoFilterButtons />
		</>
	)
}

export default TodoList
