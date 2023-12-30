<template>
  <div class="flex items-center p-2 bg-purple-500 text-white rounded-lg gap-1">
    <span class="mr-1 whitespace-nowrap">{{ props.title }}</span>
    <span class="bg-white flex justify-center items-center rounded-full px-2 text-purple-400">
      {{ props.count }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  count: number
}
const props = withDefaults(defineProps<Props>(), {})
</script>

<style scoped></style>
