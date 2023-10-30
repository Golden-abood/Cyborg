<template>
  <div class="relative top-0 left-[50%] translate-x-[-50%] rounded-[23px]">
    <div class="mx-auto mb-0 mt-[15px]">
      <div class="md:flex justify-center w-full gap-x-8 items-center">
        <img
          data-aos="zoom-in-right"
          class="rounded-[23px] h-[300px]"
          4
          :src="popular.photo"
        />
        <div class="relative mt-7 md:mt-0">
          <img
            class="rounded-[23px] h-[300px]"
            data-aos="zoom-in-left"
            :src="popular.video"
          />
          <Icon
            name="material-symbols:play-arrow-rounded"
            size="50"
            color="#ec6090"
            class="absolute top-[50%] left-[50%] bg-white rounded-full translate-x-[-50%] translate-y-[-50%] cursor-pointer"
          >
          </Icon>
        </div>
      </div>
      <h2
        data-aos="zoom-in-down"
        class="text-center mt-[60px] mb-[40px] text-white text-[45px] font-bold"
      >
        {{ popular.title.toUpperCase() }} DETAILS
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePopularStore } from "~/stores/popular";
const popularStore = usePopularStore();
const { popular } = storeToRefs(popularStore);
const route = useRoute();
const { pending } = useLazyAsyncData(() =>
  popularStore.getPopular(route.params.id)
);
</script>

<style scoped></style>
