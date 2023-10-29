<template>
  <div class="lg:flex justify-center items-center gap-y-0 gap-x-[30px]">
    <BaseContainer
      data-aos="zoom-in-right"
      class="flex justify-between items-center gap-y-0 gap-x-[40px] !p-[30px] w-full md:w-[48%] mb-[30px] md:mb-0"
    >
      <div>
        <h4 class="text-white text-[15px] m-0">{{ popular.title }}</h4>
        <p class="text-light mt-[7px] font-400">{{ popular.type }}</p>
      </div>
      <div class="right">
        <div class="text-right flex items-center gap-x-1">
          <Icon
            name="material-symbols:star-rounded"
            size="20px"
            color="#ffff00"
            class="mr-[5px]"
          />
          <span class="mb-0 text-[14px] text-white">{{ popular.count }}</span>
        </div>
        <div class="text-right flex items-center gap-x-1 mt-0">
          <Icon
            name="ph:download-simple-fill"
            class="mr-[5px]"
            size="20px"
            color="#ec6090"
          />
          <span class="mb-0 text-[14px] text-white">{{ popular.follows }}</span>
        </div>
      </div>
    </BaseContainer>
    <BaseContainer
      data-aos="zoom-in-left"
      class="flex justify-evenly items-center gap-y-0 gap-x-[40px] !p-[30px] w-full md:w-[48%]"
    >
      <div class="flex-col text-center font-400">
        <Icon
          name="material-symbols:star-rounded"
          size="20px"
          color="#ffff00"
        />
        <p class="text-white text-[13px] mt-2">{{ popular.count }}</p>
      </div>
      <div class="flex-text-center font-400">
        <Icon name="ph:download-simple-fill" size="20px" color="#ec6090" />
        <p class="text-white text-[13px] mt-2">{{ popular.follows }}</p>
      </div>
      <div class="flex-col text-center font-400">
        <Icon name="zondicons:servers" size="20px" color="#ec6090" />
        <p class="text-white text-[13px] mt-2">{{ popular.size }}</p>
      </div>
      <div class="flex-col text-center font-400 justify-center">
        <Icon name="ph:game-controller-fill" size="20px" color="#ec6090" />
        <p class="text-white text-[13px] mt-2">{{ popular.action }}</p>
      </div>
    </BaseContainer>
  </div>
  <div class="mt-[40px]">
    <div class="md:flex justify-center items-center gap-x-5">
      <img
        data-aos="zoom-in-right"
        src="/images/details-01.jpg"
        class="mb-5 md:mb-0 rounded-[23px] w-full"
      />
      <img
        data-aos="zoom-in"
        src="/images/details-02.jpg"
        class="mb-5 md:mb-0 rounded-[23px] w-full"
      />
      <img
        data-aos="zoom-in-left"
        src="/images/details-03.jpg"
        class="mb-5 md:mb-0 rounded-[23px] w-full"
      />
    </div>
    <div class="text-light mt-[25px] text-[15px]" data-aos="fade-down">
      Cyborg Gaming is free HTML CSS website template provided by TemplateMo.
      This is Bootstrap v5.2.0 layout. You can make
      <span class="text-white"> a small contribution via PayPal </span> to info
      [at] templatemo.com and thank you for supporting. If you want to get the
      PSD source files, please contact us. Lorem ipsum dolor sit consectetur es
      dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.
    </div>
    <BaseTheButton title="Download Fortnite Now!" class="w-full mt-6" />
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
