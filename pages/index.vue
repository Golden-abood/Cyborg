<template>
  <div :class="dialog ? ' relative z-0 bg-primary' : ''">
    <BaseContainer class="mt-[100px] md:mt-0">
      <HomeHeroSection />
      <BaseWrapper class="relative">
        <div class="flex justify-between items-center">
          <BaseTheTitle title="Most Popular" text="Right Now" />
          <BaseTheButton
            data-aos="zoom-in-left"
            title="Add Popular"
            class="rounded-md mb-9 mx-auto md:mx-0"
            @click="dialog = true"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 pb-6">
          <HomeCardsPopular data-aos="fade-down" />
          <Dialog v-if="dialog" @close-dialog="closeDialog()" />
        </div>
        <BaseTheButton
          class="absolute left-[50%] translate-x-[-50%] top-[99.5%] md:top-[97%] w-[190px] py-2"
          title="Discover Popular"
        />
      </BaseWrapper>
      <BaseWrapper>
        <BaseTheTitle title="Your Gaming " text="Library" />
        <div>
          <HomeCardsLibrary
            data-aos="fade-down"
            v-for="library in libraries"
            :element="library"
          />
        </div>
      </BaseWrapper>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import { useLibraryStore } from "~/stores/Library";
import { storeToRefs } from "pinia";
const libraryStore = useLibraryStore();
const { libraries } = storeToRefs(libraryStore);
const dialog = ref(false);

const closeDialog = () => {
  dialog.value = !dialog.value;
};
</script>

<style scoped></style>
