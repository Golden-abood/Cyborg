<template>
  <BaseContainer class="mt-[120px] md:mt-0">
    <div class="xl:flex justify-between gap-x-10">
      <BaseWrapper class="w-full xl:w-[65%] !mt-[10px]">
        <BaseTheTitle title="Featured " text="Games" />
        <FeaturedGames />
      </BaseWrapper>
      <BaseWrapper class="w-full xl:w-[35%] !mt-[10px]">
        <BaseTheTitle title="Top " text="Streamers" data-aos="zoom-in-left" />
        <StreamsTopStream data-aos="zoom-in-left" />
      </BaseWrapper>
    </div>
    <BaseWrapper class="mt-16">
      <StreamsMostPopular />
    </BaseWrapper>
  </BaseContainer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
