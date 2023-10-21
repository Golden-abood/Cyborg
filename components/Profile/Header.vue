<template>
  <div>
    <div
      class="lg:flex justify-center text-center lg:text-left lg:justify-start items-center"
      data-aos="zoom-in-down"
    >
      <img
        class="mx-auto lg:mx-0 rounded-[23px] w-full lg:w-[33%] lg:mr-[30px]"
        src="/images/profile.jpg"
        data-aos="zoom-in-right"
      />
      <div
        class="flex-col relative top-[20px] lg:max-w-[400px]"
        data-aos="zoom-in-down"
      >
        <BaseTheButton
          title="Offline"
          class="relative mx-auto lg:mx-0 mb-5 w-[25%] text-[14px] hover:!bg-primary hover:!text-white"
        />
        <h3 class="text-white mb-[20px] text-[24px] font-bold">Alan Smithee</h3>
        <p class="text-light text-[15px] leading-9">
          You Haven't Gone Live yet. Go Live By Touching The Button Below.
        </p>
        <BaseTheButton
          title="Start Live Stream"
          class="w-full mb-14 md:w-[50%] mx-auto md:mx-0 mt-5 bg-transparent border-solid border-[1px] border-primary !text-primary text-[14px]"
        />
      </div>
      <BaseContainer class="w-full lg:w-[40%] !p-[20px]">
        <div
          class="flex justify-between items-center py-[20px] px-0"
          v-for="(view, index) in pro"
          :key="view.title"
          data-aos="zoom-in-left"
          :class="
            index != pro.length - 1
              ? '!border-b-light !border-b-solid !border-b-[1px]'
              : ''
          "
        >
          <p class="text-light text-[14px]">{{ view.title }}</p>
          <span class="text-primary text-[13px] font-600">{{ view.num }}</span>
        </div>
      </BaseContainer>
    </div>
    <hr />
    <BaseTheTitle text="Clips" title="Your Most Popular" class="mt-10" />
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-[15px] gap-[25px] relative"
    >
      <BaseContainer
        class="!p-[20px] !pt-[30px]"
        v-for="(clip, index) in clips"
        :data-aos="
          index === 0
            ? 'zoom-in-right'
            : index === 1
            ? 'zoom-out-right'
            : 'zoom-in-left'
        "
        :key="clip.title"
      >
        <div class="relative">
          <img :src="clip.src" class="rounded-[23px] mx-auto w-full" />
          <Icon
            name="material-symbols:play-arrow-rounded"
            size="50"
            color="#ec6090"
            class="absolute top-[50%] left-[50%] bg-white rounded-full translate-x-[-50%] translate-y-[-50%] cursor-pointer p-2"
          >
          </Icon>
        </div>
        <div class="mt-[15px] flex justify-between items-center text-white">
          <h4 class="text-[15px]">{{ clip.title }}</h4>
          <div class="flex gap-x-2 items-center">
            <Icon name="mdi:eye" size="20px" color="#e75e8d"></Icon>
            <span>{{ clip.num }}</span>
          </div>
        </div>
      </BaseContainer>
    </div>
    <div class="relative py-10">
      <BaseTheButton
        title="Load More Clips"
        class="absolute w-full md:w-[17%] py-3 left-[50%] translate-x-[-50%]"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const pro = ref([
  {
    title: "Games Downloaded",
    num: "3",
  },
  {
    title: "Friends Online",
    num: "16",
  },
  {
    title: "Live Streams",
    num: "None",
  },
  {
    title: "Clips ",
    num: "29",
  },
]);

const clips = ref([
  {
    src: "/images/clip-01.jpg",
    title: "First Clip",
    num: "250",
  },
  {
    src: "/images/clip-02.jpg",
    title: "Second Clip",
    num: "183",
  },
  {
    src: "/images/clip-03.jpg",
    title: "Third Clip",
    num: "141",
  },
  {
    src: "/images/clip-04.jpg",
    title: "Fourth Clip",
    num: "91",
  },
]);
</script>

<style scoped>
hr {
  background-color: #666;
  border: none;
  height: 1px;
  opacity: 0.3;
  margin-top: 50px;
}
</style>
