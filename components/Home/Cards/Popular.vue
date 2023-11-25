<template>
  <div
    v-for="(popular, index) in populars"
    class="bg-lightDark rounded-[23px] px-[15px] py-[30px] cursor-pointer relative"
    data-aos="zoom-in-down"
    @click="router.push(`/populars/${popular.id}`)"
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
const { pending } = useLazyAsyncData(() => popularStore.list());
const getPopular = useLazyAsyncData(() => popularStore.getPopular(1));

const router = useRouter();
const route = useRoute();
console.log(route.redirectedFrom);
</script>

<style scoped></style>
