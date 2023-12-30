<template>
  <AModal :open="show" @cancel="handleCancel" title="Edit Task">
    <div class="flex flex-col gap-2">
      <span class="text-sm font-medium">Task Title:</span>
      <AInput v-model:value="title" size="large" />
    </div>
    <template #footer>
      <AButton key="back" @click="handleCancel">cancel</AButton>
      <CustomBtn class="bg-purple-500" size="middle" type="primary" @click="handleSave">save</CustomBtn>
    </template>
  </AModal>
</template>

<script setup lang="ts">

import { Todo } from "../model/todo.ts";
import {onMounted, ref} from "vue";
import CustomBtn from "./CustomBtn.vue";
import {useTodoStore} from "../store/todos.ts";

interface Props {
  show: boolean
  data: Todo
}
const props = withDefaults(defineProps<Props>(), {
  show: false
})
const emit = defineEmits<{
  ( e: 'update:show', value: boolean ): void
}>()

const title = ref<string>("")
const useTodo = useTodoStore()

const handleCancel = () => {
  emit('update:show', false)
}

const handleSave = () => {
  if (title.value !== props.data.title) {
    useTodo.editTodo(props.data.id, title.value)
  }
  emit('update:show', false)
}

onMounted(() => {
  title.value = props.data.title
})


</script>

<style scoped>

</style>