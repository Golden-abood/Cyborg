<template>
  <div>
    <div class="flex-col justify-center items-start py-[10px] px-0">
      <div
        class="flex justify-between items-center py-[20px] px-0 border-b-[1px] border-solid border-dark"
        v-for="item in topStreams"
        :key="item.num"
      >
        <div class="flex justify-around items-center">
          <span class="text-white mr-[8px] font-bold">{{ item.num }}</span>
          <img class="rounded-full mr-[12px]" :src="item.src" />
          <Icon
            size="25"
            name="mdi:checkbox-marked-circle"
            class="mr-3"
            color="#e75e8d"
          ></Icon>
          <p class="text-primary text-sm">{{ item.title }}</p>
        </div>
        <BaseTheButton class="ml-[10px] !px-0 w-[80px]" title="follow" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const topStreams = ref([
  {
    num: "01",
    src: "/images/avatar-01.jpg",
    title: "LahutaM",
  },
  {
    num: "02",
    src: "/images/avatar-02.jpg",
    title: "Kengan",
  },
  {
    num: "03",
    src: "/images/avatar-03.jpg",
    title: "Areluwa",
  },
  {
    num: "04",
    src: "/images/avatar-04.jpg",
    title: "Omeg",
  },
  {
    num: "05",
    src: "/images/avatar-01.jpg",
    title: "GangTeam",
  },
]);
</script>

<style scoped></style>
