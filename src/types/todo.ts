export interface ITodo {
    id: string
    task: string
    completed: boolean
}

export type TodoFilter = "active" | "completed" | "all"