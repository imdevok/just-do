export interface TodoItem {
    id: number
    task: string
    completed: boolean
}

export type TodoFilter = "active" | "completed" | "all"