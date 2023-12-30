import { defineStore } from 'pinia'
import { computed, onMounted, ref } from 'vue'
import { Todo } from '../model/todo.ts'

export const useTodoStore = defineStore('todos', () => {
  const todos = ref<Todo[]>([])

  const nextId = computed(() => {
    return todos.value.length + 1
  })

  const addTodo = (todo: Todo): void => {
    todos.value.push(todo)
    setLocalStorage()
  }

  const editTodo = (id: number, title: string) => {
    const index = todos.value.findIndex((item: Todo) => item.id === id)
    todos.value[index].title = title
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
    todos.value.map((item: Todo) => (item.id = ++id))
    setLocalStorage()
  }

  const deleteTodo = (id: number): void => {
    const index = todos.value.findIndex((item: Todo) => item.id === id)
    todos.value.splice(index, 1)
    for (let i = index; i < todos.value.length; i++) {
      todos.value[i].id -= 1
    }
    setLocalStorage()
  }

  const getLocalStorage = () => {
    if (localStorage.getItem('todos')) {
      const localData = localStorage.getItem('todos')
      todos.value = JSON.parse(localData as string)
    } else {
      setLocalStorage()
    }
  }

  const setLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos.value))
  }

  onMounted(() => {
    getLocalStorage()
  })

  return {
    todos,
    nextId,
    addTodo,
    editTodo,
    allTodos,
    doneTodos,
    changeTodoStatus,
    deleteAllTodos,
    deleteDoneTodos,
    deleteTodo
  }
})
