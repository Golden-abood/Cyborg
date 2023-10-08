<template>
  <Swiper
    :modules="modules"
    :slides-per-view="3"
    :loop="true"
    :space-between="20"
    :breakpoints="{
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    class="relative"
  >
    <SwiperSlide v-for="slide in features" :key="slide.title">
      <div>
        <img
          :src="slide.src"
          class="rounded-[23px] w-full xl:h-[380px] mb-[15px]"
        />
        <div class="flex justify-between items-center">
          <div>
            <h4 class="mb-0 text-[15px] text-white font-bold">
              {{ slide.title }}
            </h4>
            <span class="text-light text-[15px] mt-[7px]">{{
              slide.down
            }}</span>
          </div>
          <div class="text-white text-[16px]">
            <div class="mb-0 mr-[10px]">
              <Icon
                name="material-symbols:star-rounded"
                size="20px"
                color="#ffff00"
              />
              <span class="text-xs">{{ slide.star }}</span>
            </div>
            <div class="mt-0 flex gap-x-2 items-center">
              <Icon
                name="ph:download-simple-fill"
                size="20px"
                color="#ec6090"
              />
              <span class="text-xs">{{ slide.download }}</span>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <div class="">
      <span
        class="swiper-button-prev !text-white stroke-1 hover:stroke-2 stroke-dark"
      ></span>

      <span
        class="swiper-button-next !text-white stroke-1 hover:stroke-2 stroke-dark"
      ></span>
    </div>
  </Swiper>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useFeatureStore } from "~/stores/feature";
const featureStore = useFeatureStore();
const { features } = storeToRefs(featureStore);
const modules = [SwiperAutoplay, SwiperNavigation];
</script>

<style scoped></style>
