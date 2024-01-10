<template>
  <Card>
    <div class="flex flex-col">
      <div class="p-4 pb-0">
        <div class="h-fit flex gap-2 md:justify-center overflow-x-auto no-scrollbar">
          <CounterTag title="All Tasks" :count="useTodo.allTodos" />
          <CounterTag title="Tasks Done" :count="useTodo.doneTodos" />
          <CustomBtn
            class="bg-purple-500"
            icon="fa fa-trash"
            type="primary"
            @click="useTodo.deleteAllTodos"
          >
            All Tasks
          </CustomBtn>
          <CustomBtn
            class="bg-purple-500"
            icon="fa fa-trash"
            type="primary"
            @click="useTodo.deleteDoneTodos"
          >
            Tasks Done
          </CustomBtn>
        </div>
      </div>
      <ADivider class="!my-2 bg-purple-300" />
      <div class="h-48 flex flex-col gap-4 overflow-y-auto px-4" id="todos">
        <ToDoItem v-for="item in useTodo.todos" :data="item" />
      </div>
    </div>
    <div class="absolute w-full left-0 right-0 bottom-4 px-4">
      <Input @add="addTodo" />
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from './Card.vue'
import Input from './Input.vue'
import CustomBtn from './CustomBtn.vue'
import CounterTag from './CounterTag.vue'
import ToDoItem from './ToDoItem.vue'
import { useTodoStore } from '../store/todos.ts'

const useTodo = useTodoStore()

const addTodo = (text: string) => {
  console.log(text, 'this')
  const newTodo = {
    id: useTodo.nextId,
    title: text,
    is_finished: false
  }
  useTodo.addTodo(newTodo)
  setTimeout(() => {
    let todos = document.getElementById('todos')
    todos && todos.scrollBy(0, document.body.scrollHeight)
  }, 50)
}
</script>

<style></style>
