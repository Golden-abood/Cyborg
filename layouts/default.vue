<template>
  <div class="bg-dark">
    <Nav />
    <div class="mx-auto px-[15px] md:px-[110px] pt-10 md:pt-0 min-h-screen">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import AOS from "aos";

onMounted(() => {
  AOS.init({
    once: true,
    offset: 50,
    duration: 700,
  });
});
</script>

<style>
::selection {
  background-color: #e75e8d !important;
}
</style>
