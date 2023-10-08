<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[25px] relative"
  >
    <div v-for="box in mostPopular" :key="box.name">
      <img :src="box.photo" class="rounded-[23px] w-full" />
      <div class="flex justify-start items-start mt-[15px]">
        <img class="rounded-full" :src="box.src" />
        <div class="flex-col ml-[20px]">
          <div class="flex gap-x-1 justify-start items-center text-primary">
            <Icon
              name="material-symbols:check-circle"
              color="#e75e8d"
              size="20px"
            ></Icon>
            <span class="text-[15px]">{{ box.name }}</span>
          </div>
          <p class="text-[20px] text-white font-bold mt-2">{{ box.desc }}</p>
        </div>
      </div>
    </div>
    <BaseTheButton
      title="Discover All Streams"
      class="absolute bottom-[-60px] left-[50%] translate-x-[-50%] w-full md:w-[20%]"
    />
  </div>
</template>

<script setup>
const mostPopular = ref([
  {
    photo: "/images/stream-01.jpg",
    src: "/images/avatar-01.jpg",
    name: "KenganC",
    desc: "Just Talking With Fans",
  },
  {
    photo: "/images/stream-02.jpg",
    src: "/images/avatar-02.jpg",
    name: "LunaMa",
    desc: "CS-GO 36 Hours Live Stream",
  },
  {
    photo: "/images/stream-03.jpg",
    src: "/images/avatar-03.jpg",
    name: "Areluwa",
    desc: "Maybe Nathej Allnight Chillin'",
  },
  {
    photo: "/images/stream-04.jpg",
    src: "/images/avatar-04.jpg",
    name: "GangTm",
    desc: "Live Streaming Till Morning",
  },
]);
</script>

<style scoped>
.content .boxs .box .info p {
  font-size: 20px;
  color: white;
  font-weight: 700;
}
.butto {
  position: absolute;
  top: 110%;
  left: 50%;
  width: 300px;
}
</style>
