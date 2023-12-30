<template>
  <AButton :type="props.type" :size="props.size">
    <div class="flex items-center gap-2">
      <i class="text-white" :class="props.icon" aria-hidden="true" v-if="props.icon"></i>
      <slot></slot>
    </div>
  </AButton>
</template>


<script setup lang="ts">

interface Props {
  icon?: string
  size?: string
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'large',
  type: 'default'
})

</script>

<style scoped>

</style>