<template>
  <BaseWrapper
    class="fixed border-primary border-solid border-[3px] top-[10%] left-[50%] translate-x-[-50%] text-white w-[35%] z-[1000]"
  >
    <form>
      <BaseTheTitle title="Add Your" text="Game" />
      <div>
        <div class="mb-10">
          <label class="block mb-[10px] font-medium">Game name</label>
          <input
            v-model="title"
            type="text"
            placeholder="Game Name"
            class="bg-lightDark rounded-[23px] text-lighten w-full outline-0 border-solid border-1 border-bocolor p-3 text-sm"
          />
        </div>

        <div class="flex-col pt-[30px] sm:pt-0">
          <label class="block mb-[10px] font-medium">Game type</label>
          <input
            v-model="type"
            type="text"
            placeholder="Give Us Your Idea"
            class="bg-lightDark rounded-[23px] text-lighten w-full outline-0 border-solid border-1 border-bocolor p-3 text-sm"
          />
        </div>
        <BaseTheButton
          title="Add Game "
          class="mt-10 w-full"
          @click="popularStore.CreatePopular()"
        />
      </div>
    </form>
  </BaseWrapper>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePopularStore } from "~/stores/popular";
const popularStore = usePopularStore();
const { title, type } = storeToRefs(popularStore);
</script>

<style scoped></style>
