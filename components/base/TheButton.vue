<template>
  <div
    class="bg-primary py-2 text-center px-6 w-[150px] transition-all duration-500 text-white rounded-[20px] hover:bg-white hover:text-primary cursor-pointer"
  >
    {{ $props.title }}
  </div>
</template>

<script setup lang="ts">
defineProps(["title"]);
</script>

<style scoped></style>
