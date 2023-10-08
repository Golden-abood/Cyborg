<template>
  <div>
    <BaseContainer class="mt-[120px] md:mt-0">
      <div class="xl:flex justify-between gap-x-10">
        <BaseWrapper class="w-full xl:w-[65%] !mt-[10px]">
          <BaseTheTitle title="Featured " text="Games" />
          <FeaturedGames />
        </BaseWrapper>
        <BaseWrapper class="w-full xl:w-[35%] !mt-[10px]">
          <BrowseTopDownolad />
        </BaseWrapper>
      </div>
      <BaseTheTitle
        class="mt-16 text-center"
        title="How To Start Your"
        text=" Live Stream"
      />
      <BrowseStream />
      <BaseWrapper>
        <BaseTheTitle title="Most Popular" text="Live Stream" />
        <BrowseMostPopular />
      </BaseWrapper>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
