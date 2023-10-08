<template>
  <div>
    <BaseContainer class="mt-[120px] md:mt-0">
      <BaseWrapper class="!mt-[10px]">
        <ProfileHeader />
      </BaseWrapper>
      <BaseWrapper>
        <BaseTheTitle title="Your Gaming " text="Library" />

        <HomeCardsLibrary v-for="library in libraries" :element="library" />
      </BaseWrapper>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import { useLibraryStore } from "~/stores/Library";
import { storeToRefs } from "pinia";
const libraryStore = useLibraryStore();
const { libraries } = storeToRefs(libraryStore);
</script>

<style scoped></style>
