import { defineStore } from "pinia"
import { computed, ref } from "vue";
import { Todo } from "../model/todo.ts";

export const useTodoStore = defineStore('todos', () => {
    const todos = ref<Todo[]>([
        { id: 1, title: 'this is a test', is_finished: false },
        { id: 2, title: 'this is a test 2', is_finished: true },
        { id: 3, title: 'this is a test 3', is_finished: false },
        { id: 4, title: 'this is a test 4', is_finished: true },
        { id: 5, title: 'this is a test 5', is_finished: false },
        { id: 6, title: 'this is a test 6', is_finished: true },
    ])

    const nextId = computed(() => {
        return todos.value.length + 1
    })

    const addTodo = (todo: Todo): void => {
        todos.value.push(todo)
        setLocalStorage()
    }

    const allTodos = computed(() => {
        return todos.value.length
    })

    const doneTodos = computed(() => {
        const done: Todo[] = todos.value.filter((item: Todo) => item.is_finished)
        return done.length
    })

    const changeTodoStatus = (id: number): void => {
        const index = todos.value.findIndex((item: Todo) => item.id === id)
        todos.value[index].is_finished = !todos.value[index].is_finished
        setLocalStorage()
    }

    const deleteAllTodos = (): void => {
        todos.value = []
        setLocalStorage()
    }

    const deleteDoneTodos = (): void => {
        const unDone: Todo[] = todos.value.filter((item: Todo) => !item.is_finished)
        todos.value = [...unDone]
        let id = 0
        todos.value.map((item: Todo) => item.id = ++id)
        setLocalStorage()
    }

    const deleteTodo = (id: number): void => {
        const index = todos.value.findIndex((item: Todo) => item.id === id)
        todos.value.splice(index, 1)
        for (let i = index ; i < todos.value.length ; i++) {
            todos.value[i].id -= 1
        }
        setLocalStorage()
    }

    const setLocalStorage = () => {
        localStorage.setItem('todos', JSON.stringify(todos.value))
    }

    return {
        todos,
        nextId,
        addTodo,
        allTodos,
        doneTodos,
        changeTodoStatus,
        deleteAllTodos,
        deleteDoneTodos,
        deleteTodo
    }
})