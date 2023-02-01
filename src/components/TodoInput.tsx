import { Component, createSignal } from 'solid-js'
import { addTodo } from '../store/TodoStore'
import Button from './UI/Button/Button'
import Input from './UI/Input/Input'

const TodoInput: Component = () => {
	const [task, setTask] = createSignal('')
	const onInput = e => setTask(e.currentTarget.value)
	const onClick = e => {
		e.preventDefault()
		addTodo(task())
		setTask('')
	}
	return (
		<form>
			<Input type='text' value={task()} onInput={onInput} />
			<Button onClick={onClick}>Add</Button>
		</form>
	)
}

export default TodoInput
