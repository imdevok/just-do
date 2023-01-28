import { Component } from "solid-js"

interface TodoInputProps {
    addTodo: any
}

const TodoInput: Component<TodoInputProps> = (props) => {
    let task: HTMLInputElement
    const { addTodo } = props
    return (
        <form>
            <input 
                type="text"
                ref={task}
            />
            <button
                type="submit"
                onClick={e => {
                    e.preventDefault()
                    if (!task.value.trim()) return;
                    addTodo(task.value)
                    task.value = ""
                }}
            >
                Add
            </button>
        </form>
    )
}

export default TodoInput