<template>
  <AConfigProvider
    :theme="{
      token: {
        colorPrimary: '#a855f7'
      }
    }"
  >
    <div class="relative px-4 h-dvh flex flex-col justify-center">
      <h1 class="mx-auto mb-7 font-pacifico text-3xl font-bold text-white">Vue ToDo List</h1>
      <Content class="mx-auto" />
      <div
        class="absolute w-full bottom-4 left-0 right-0 font-pacifico flex justify-center items-center text-gray-500"
      >
        developed with
        <i class="fa fa-heart mx-1 text-red-500" aria-hidden="true"></i>
        by
        <a
          class="ml-1 hover:text-gray-700 transition"
          href="https://alirezatanzifian.github.io/"
          target="_blank"
        >
          Alireza Tanzifian
        </a>
      </div>
    </div>
  </AConfigProvider>
</template>

<script setup lang="ts">
import Content from './components/Content.vue'
</script>

<style></style>
