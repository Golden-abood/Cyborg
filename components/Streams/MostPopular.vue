<template>
  <div class="rounded-[20px] bg-dark">
    <BaseTheTitle title="Most Popular" text="Live Stream" />
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-[25px] relative"
    >
      <div v-for="box in mostPopular" :key="box.name" data-aos="zoom-in-down">
        <img :src="box.photo" class="rounded-[23px] w-full" />
        <div class="flex justify-start items-start mt-[15px]">
          <img class="rounded-full" :src="box.src" />
          <div class="flex-col ml-[20px]">
            <div class="flex justify-start items-center text-prmary">
              <Icon
                size="20"
                name="mdi:checkbox-marked-circle"
                class="mr-[5px]"
                color="#e75e8d"
              ></Icon>
              <span class="text-sm text-primary">{{ box.name }}</span>
            </div>
            <p class="text-white font-bold text-xl">{{ box.desc }}</p>
          </div>
        </div>
      </div>
      <BaseTheButton
        title="Load More Streams"
        color="white"
        class="absolute bottom-[-8%] !left-[50%] translate-x-[-50%] w-[20%]"
      />
    </div>
  </div>
</template>

<script setup>
const mostPopular = ref([
  {
    photo: "/images/stream-05.jpg",
    src: "/images/avatar-01.jpg",
    name: "KenganC",
    desc: "Just Talking With Fans",
  },
  {
    photo: "/images/stream-06.jpg",
    src: "/images/avatar-02.jpg",
    name: "LunaMa",
    desc: "CS-GO 36 Hours Live Stream",
  },
  {
    photo: "/images/stream-07.jpg",
    src: "/images/avatar-03.jpg",
    name: "Areluwa",
    desc: "Maybe Nathej Allnight Chillin'",
  },
  {
    photo: "/images/stream-08.jpg",
    src: "/images/avatar-04.jpg",
    name: "GangTm",
    desc: "Live Streaming Till Morning",
  },
  {
    photo: "/images/stream-07.jpg",
    src: "/images/avatar-01.jpg",
    name: "KenganC",
    desc: "Just Talking With Fans",
  },
  {
    photo: "/images/stream-08.jpg",
    src: "/images/avatar-02.jpg",
    name: "LunaMa",
    desc: "CS-GO 36 Hours Live Stream",
  },
  {
    photo: "/images/stream-05.jpg",
    src: "/images/avatar-03.jpg",
    name: "Areluwa",
    desc: "Maybe Nathej Allnight Chillin'",
  },
  {
    photo: "/images/stream-06.jpg",
    src: "/images/avatar-04.jpg",
    name: "GangTm",
    desc: "Live Streaming Till Morning",
  },
]);
</script>

<style scoped></style>
