<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-[25px] relative"
  >
    <div v-for="box in streams" :key="box.name" data-aos="zoom-in-down">
      <Icon
        name="material-symbols:delete-forever-rounded"
        size="10"
        color="#e75e8d"
        class="absolute top-2 right-2 bg-white h-10 w-10 p-2 rounded-full cursor-pointer"
        @click="streamStore.deleteStream(box.id)"
      />
      <Icon
        name="mdi:pencil"
        size="10"
        color="#e75e8d"
        class="absolute top-2 left-2 bg-white h-10 w-10 p-2 rounded-full cursor-pointer"
        @click="
          dialog = true;
          getId(box.id);
        "
      />
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
    <Dialog v-if="dialog" method="put" @close-dialog="closeDialog()" :id="id" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStreamStore } from "~/stores/stream";
const streamStore = useStreamStore();
const { streams } = storeToRefs(streamStore);

const { pending } = useLazyAsyncData(() => streamStore.list());

const dialog = ref(false);
const closeDialog = () => {
  dialog.value = !dialog.value;
};
const id = ref();

const getId = (num: number) => {
  id.value = num;
};
</script>

<style scoped></style>
