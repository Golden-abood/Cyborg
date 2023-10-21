<template>
  <BaseTheTitle title="Top" text="Downloaded " data-aos="zoom-in-left" />
  <div
    class="flex justify-between items-center py-5 border-b-solid border-b-[1px] border-b-lightDark"
    v-for="item in populars.slice(0, 3)"
    data-aos="zoom-in-left"
  >
    <div class="flex gap-x-5 py-3">
      <img :src="item.src" class="rounded-[30px] w-[35%]" />
      <div>
        <h4 class="font-bold text-white">{{ item.title }}</h4>
        <p class="text-light">{{ item.type }}</p>
        <div class="flex gap-x-4">
          <div class="flex gap-x-1 items-center text-white">
            <Icon
              name="material-symbols:star-rounded"
              size="20px"
              color="#ffff00"
            />
            <span class="text-[14px]">{{ item.count }}</span>
          </div>
          <div class="flex gap-x-1 text-white">
            <Icon name="ph:download-simple-fill" size="20px" color="#ec6090" />
            <span class="text-[14px]">{{ item.follows }}</span>
          </div>
        </div>
      </div>
    </div>
    <button class="text-center bg-lightDark p-4 rounded-full">
      <Icon name="mdi:download" color="#ec6090" size="20px"> </Icon>
    </button>
  </div>
  <BaseTheButton
    title="View All Games"
    class="text-center bg-transparent !text-primary font-bold mt-3 w-full hover:!bg-transparent"
  />
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

import { usePopularStore } from "~/stores/popular";
const popularStore = usePopularStore();
const { populars } = storeToRefs(popularStore);
</script>

<style scoped></style>
