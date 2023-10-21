<template>
  <div class="mt-[60px]">
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[25px]">
      <div
        class="relative p-[30px] border-[1px] border-solid border-light rounded-[23px]"
        v-for="(box, index) in stream"
        :key="box.title"
        :data-aos="
          index === 0
            ? 'zoom-in-right'
            : index === 1
            ? 'zoom-in-up'
            : 'zoom-in-left'
        "
      >
        <img class="rounded-full mb-[15px]" :src="box.src" />
        <h3 class="text-white text-[20px] mb-[15px] font-bold">
          {{ box.title }}
        </h3>
        <p class="text-light text-[15px] leading-7">{{ box.text }}</p>
      </div>
    </div>
    <BaseTheButton class="mt-8 mx-auto" title="Go To Profile" />
  </div>
</template>
<script lang="ts" setup>
const stream = ref([
  {
    src: "/images/service-01.jpg",
    title: "Go To Your Profile",
    text: "Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.",
  },
  {
    src: "/images/service-02.jpg",
    title: "Live Stream Button",
    text: "If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com",
  },
  {
    src: "/images/service-03.jpg",
    title: "You Are Live",
    text: "You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website.",
  },
]);
</script>

<style scoped></style>
