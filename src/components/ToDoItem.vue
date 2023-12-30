<template>
  <div
    class="group hover:bg-purple-300 transition flex justify-between p-3 border-2 border-solid border-purple-400 rounded-xl"
  >
    <div class="flex items-center gap-4">
      <span
        class="size-6 flex justify-center items-center p-1 bg-purple-300 rounded-full cursor-pointer"
        @click="useTodo.changeTodoStatus(props.data.id)"
      >
        <i
          class="fa fa-check hover:text-xl transition"
          aria-hidden="true"
          :class="[props.data.is_finished ? 'text-green-600' : 'text-gray-300']"
        ></i>
      </span>
      <span
        class="text-base font-medium text-gray-700"
        :class="[props.data.is_finished && 'line-through']"
      >
        {{ props.data.title }}
      </span>
    </div>
    <div class="hidden items-center gap-4 px-2 group-hover:flex group-hover:flex-row">
      <i
        class="fa fa-pencil-square-o text-[20px] cursor-pointer hover:text-purple-600 mt-[2px]"
        aria-hidden="true"
        @click="showModal = true"
      ></i>
      <i
        class="fa fa-trash text-[20px] cursor-pointer hover:text-red-500"
        aria-hidden="true"
        @click="useTodo.deleteTodo(props.data.id)"
      ></i>
    </div>
    <EditModal :data="props.data" v-model:show="showModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '../store/todos.ts'
import { Todo } from '../model/todo.ts'
import EditModal from './EditModal.vue'

const showModal = ref<boolean>(false)

interface Props {
  data: Todo
}

const props = withDefaults(defineProps<Props>(), {})
const useTodo = useTodoStore()
</script>

<style scoped></style>
