import { Component, createSignal } from 'solid-js'
import { addTodo } from '../store/TodoStore'

const TodoInput: Component = props => {
	const [task, setTask] = createSignal('')
	const onInput = e => setTask(e.currentTarget.value)
	const onClick = e => {
		e.preventDefault()
		addTodo(task())
		setTask('')
	}
	return (
		<form>
			<input type='text' value={task()} onInput={onInput} />
			<button onClick={onClick}>Add</button>
		</form>
	)
}

export default TodoInput
