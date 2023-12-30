<template>
  <div class="flex gap-4 bg-white border-4 border-solid border-purple-500 rounded-full p-1">
    <input
      class="w-full h-10 border-none outline-none rounded-xl px-4"
      v-model="text"
      @keyup.enter="addTodo"
      placeholder="New Task"
    />
    <button
      class="flex justify-center items-center w-12 rounded-full bg-purple-500"
      @click="addTodo"
    >
      <i class="fa fa-plus text-white" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '../store/todos.ts'

const text = ref('')
const useTodo = useTodoStore()

const addTodo = () => {
  const newTodo = {
    id: useTodo.nextId,
    title: text.value,
    is_finished: false
  }
  useTodo.addTodo(newTodo)
  text.value = ''
}
</script>

<style scoped></style>
