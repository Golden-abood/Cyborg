<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
    <div
      class="border-b-[1px] border-b-solid border-b-lightDark pb-5 flex relative items-center justify-between"
      v-for="card in populars"
      :key="card.title"
      data-aos="zoom-in-down"
    >
      <div class="flex items-center gap-x-5" data-aos="zoom-in-right">
        <img :src="card.src" class="w-[30%] rounded-[23px]" />
        <div class="text">
          <h4 class="text-[15px] text-white">{{ card.title }}</h4>
          <span class="text-[14px] text-light">{{ card.type }}</span>
        </div>
      </div>
      <div class="text-right text-[15px] text-white" data-aos="zoom-in-left">
        <div class="mb-0">
          <Icon
            name="material-symbols:star-rounded"
            size="20px"
            color="#ffff00"
          />
          <span>{{ card.count }}</span>
        </div>
        <div class="mb-0">
          <Icon name="ph:download-simple-fill" size="20px" color="#ec6090" />
          <span>{{ card.follows }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { usePopularStore } from "~/stores/popular";
const popularStore = usePopularStore();
const { populars } = storeToRefs(popularStore);
const popularTitle = inject("popularTitle");
console.log(popularTitle);
console.log(popularTitle);
const { pending } = useLazyAsyncData(() => {
  popularStore.list();
});
</script>

<style scoped></style>
