<template>
  <div class="flex gap-4 bg-white border-4 border-solid border-purple-500 rounded-full p-1">
    <input
      class="w-full h-10 border-none outline-none rounded-xl px-4 text-base font-medium"
      v-model="text"
      @keyup.enter="addHandler"
      placeholder="New Task"
    />
    <button
      class="flex justify-center items-center w-12 rounded-full bg-purple-500"
      @click="addHandler"
    >
      <i class="fa fa-plus text-white" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')

const emit = defineEmits<{
  (e: 'add', value: string): void
}>()

const addHandler = () => {
  emit('add', text.value)
  text.value = ''
}
</script>

<style scoped></style>
