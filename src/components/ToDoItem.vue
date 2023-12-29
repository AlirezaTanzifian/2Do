<template>
  <div class="group hover:bg-purple-300 transition flex justify-between p-3 border-2 border-solid border-purple-400 rounded-xl">
    <div class="flex items-center gap-4">
      <span
          class="size-6 flex justify-center items-center p-1 bg-purple-300 rounded-full  cursor-pointer"
          @click="useTodo.changeTodoStatus(props.data.id)"
      >
        <i class="fa fa-check hover:text-xl transition" aria-hidden="true" :class="[props.data.is_finished ? 'text-green-600' : 'text-gray-300']"></i>
      </span>
      <span class="text-base font-medium text-gray-700">{{ props.data.title }}</span>
    </div>
    <div class="hidden items-center gap-4 px-2 group-hover:flex group-hover:flex-row">
      <i class="fa fa-pencil-square-o text-[20px] cursor-pointer hover:text-purple-600 mt-[2px]" aria-hidden="true"></i>
      <i
          class="fa fa-trash text-[20px] cursor-pointer hover:text-red-500"
          aria-hidden="true"
          @click="useTodo.deleteTodo(props.data.id)"
      ></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useTodoStore} from "../store/todos.ts";

interface Props {
  data: {
    id: number
    title: string
    is_finished: boolean
  }
}

const props = withDefaults(defineProps<Props>(), {})
const useTodo = useTodoStore()

const isDone = ref(false)

</script>

<style scoped>

</style>