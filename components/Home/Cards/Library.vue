<template>
  <div
    class="lg:flex lg:justify-between items-center py-5 border-b-solid border-b-[1px] border-b-lightDark"
  >
    <img
      :src="element.img"
      alt=""
      class="rounded-[23px] mx-auto lg:mx-0 my-7 lg:my-0"
    />
    <div class="flex justify-around lg:w-[50%] my-7 lg:my-0">
      <div>
        <h4 class="text-white text-[15px] font-[600]">{{ element.title }}</h4>
        <p class="text-light text-[14px] mt-2">{{ element.name }}</p>
      </div>
      <div>
        <h4 class="text-white text-[15px] font-[600]">Date Added</h4>
        <p class="text-light text-[14px] mt-2">{{ element.dateFormat }}</p>
      </div>
    </div>
    <div class="flex justify-around lg:w-[50%] my-7 lg:my-0">
      <div>
        <h4 class="text-white text-[15px] font-[600]">Hours Played</h4>
        <p class="text-light text-[14px] mt-2">{{ element.hoursNum }}</p>
      </div>
      <div>
        <h4 class="text-white text-[15px] font-[600]">Currently</h4>
        <p class="text-light text-[14px] mt-2">Downloaded</p>
      </div>
    </div>
    <BaseTheButton
      class="bg-transparent mx-auto lg:mx-0 py-[10px] !text-light border-light border-solid rounded-[40px] border-[1px] hover:bg-transparent"
      :title="element.active ? 'Download' : 'Downloaded'"
      :class="{ active: element.active }"
    />
  </div>
</template>

<script setup lang="ts">
defineProps(["element"]);
</script>

<style scoped></style>
