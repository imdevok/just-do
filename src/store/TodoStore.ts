import { v4 } from 'uuid'
import { createStore, Store, SetStoreFunction } from 'solid-js/store'
import { createEffect, createMemo } from 'solid-js'
import { TodoFilter, ITodo } from '../types/todo'

interface TodoStore {
	todos: ITodo[]
	filter: TodoFilter
}

export function createLocalStore<T extends object>(
	name: string,
	init: T
): [Store<T>, SetStoreFunction<T>] {
	const localState = localStorage.getItem(name)
	const [state, setState] = createStore<T>(
		localState ? JSON.parse(localState) : init
	)
	createEffect(() => localStorage.setItem(name, JSON.stringify(state)))
	return [state, setState]
}

const [store, setStore] = createLocalStore<TodoStore>('todos', {
	todos: [],
	filter: 'all',
})

export const setTodos = (todos: ITodo[]) => setStore('todos', todos)

export const setFilter = (filter: TodoFilter) => setStore('filter', filter)

export const addTodo = (task: string) => {
	if (task) {
		setTodos([...store.todos, { id: v4(), task, completed: false }])
	}
}

export const removeTodo = (id: string) => {
	setTodos(store.todos.filter(todo => todo.id !== id))
}

export const toggleTodo = (id: string) => {
	setTodos(
		store.todos.map(todo => {
			return todo.id !== id ? todo : { ...todo, completed: !todo.completed }
		})
	)
}

export const completedTodosCount = createMemo(
	() => store.todos.filter(todo => todo.completed).length
)

const filterPredicates = {
	all: (todo: ITodo) => true,
	active: (todo: ITodo) => !todo.completed,
	completed: (todo: ITodo) => todo.completed,
}

export const todos = createMemo(() => {
	return store.todos.filter(filterPredicates[store.filter])
})

export const filter = createMemo(() => store.filter)
