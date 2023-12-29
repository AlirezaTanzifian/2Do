<template>
  <Card>
    <div class="flex flex-col gap-4">
      <div class="p-4 pb-0">
        <div class="h-fit flex gap-2 md:justify-center overflow-x-auto no-scrollbar">
          <CounterTag title="All Tasks" :count="useTodo.allTodos" />
          <CounterTag title="Tasks Done" :count="useTodo.doneTodos" />
          <CustomBtn title="All Tasks" icon="fa fa-trash" @click="useTodo.deleteAllTodos" />
          <CustomBtn title="Tasks Done" icon="fa fa-trash" @click="useTodo.deleteDoneTodos" />
        </div>
      </div>
      <div class="h-48 flex flex-col gap-4 overflow-y-auto px-4">
        <ToDoItem v-for="item in useTodo.todos" :data="item"  />
      </div>
    </div>
    <div class="absolute w-full left-0 right-0 bottom-4 px-4">
      <Input />
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from "./Card.vue"
import Input from "./Input.vue"
import CustomBtn from "./CustomBtn.vue";
import CounterTag from "./CounterTag.vue";
import ToDoItem from "./ToDoItem.vue";
import {useTodoStore} from "../store/todos.ts";

const useTodo = useTodoStore()

</script>

<style>

</style>