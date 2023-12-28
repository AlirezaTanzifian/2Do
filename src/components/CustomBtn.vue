<template>
  <div
      class="flex items-center p-1 bg-purple-400 text-white rounded-lg flex gap-1 hover:bg-purple-500 transition cursor-pointer"
  >
    <span class="px-2" v-if="props.icon">
      <i class="fa fa-trash-o text-white" aria-hidden="true"></i>
    </span>
    <span class="mr-1 whitespace-nowrap">{{ props.title }}</span>
  </div>
</template>


<script setup lang="ts">

interface Props {
  title: string
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {})

</script>

<style scoped>

</style>