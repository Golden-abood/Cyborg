<template>
  <div
    class="bg-lightDark rounded-[23px] px-[15px] py-[30px]"
    v-for="popular in populars"
  >
    <img :src="popular.src" class="rounded-[23px] mx-auto w-[100%]" />
    <div class="flex justify-between pt-5">
      <div>
        <h4 class="text-white font-[700]">{{ popular.title }}</h4>
        <p class="text-light text-[15px] mt-1">{{ popular.type }}</p>
      </div>
      <div>
        <div class="flex gap-x-1 items-center text-white">
          <Icon
            name="material-symbols:star-rounded"
            size="20px"
            color="#ffff00"
          />
          <span>{{ popular.count }}</span>
        </div>
        <div class="flex gap-x-1 text-white">
          <Icon name="ph:download-simple-fill" size="20px" color="#ec6090" />
          <span>{{ popular.follows }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePopularStore } from "~/stores/popular";
import { storeToRefs } from "pinia";
const popularStore = usePopularStore();
const { populars } = storeToRefs(popularStore);
</script>

<style scoped></style>
~/stores/popular
