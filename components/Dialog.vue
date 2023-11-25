<template>
  <BaseWrapper
    class="fixed border-primary border-solid border-[3px] top-[10%] left-[50%] translate-x-[-50%] text-white w-[90%] md:w-[35%] z-[1000]"
  >
    <form>
      <div class="flex justify-between items-center">
        <BaseTheTitle v-if="method === 'post'" title="Add Your" text="Game" />
        <BaseTheTitle v-else title="Edit Your" text="Game" />
        <Icon
          name="material-symbols:cancel"
          color="primary"
          size="40"
          class="mb-9 cursor-pointer"
          @click="$emit('closeDialog')"
        ></Icon>
      </div>
      <div>
        <div class="mb-10">
          <label class="block mb-[10px] font-medium"
            >{{ path === "/" ? "Game" : "Stream" }} name</label
          >
          <input
            v-if="path === '/'"
            v-model="title"
            type="text"
            :placeholder="path === '/' ? 'Game Name ' : 'Stream Name'"
            class="bg-lightDark rounded-[23px] text-lighten w-full outline-0 border-solid border-1 border-bocolor p-3 text-sm"
          />
          <input
            v-else
            v-model="stream"
            type="text"
            :placeholder="path === '/' ? 'Game Name ' : 'Stream Name'"
            class="bg-lightDark rounded-[23px] text-lighten w-full outline-0 border-solid border-1 border-bocolor p-3 text-sm"
          />
        </div>

        <div class="flex-col pt-[30px] sm:pt-0">
          <label class="block mb-[10px] font-medium"
            >{{ path === "/" ? "Game Type" : "Stream Description" }}
          </label>
          <input
            v-if="path === '/'"
            v-model="type"
            type="text"
            :placeholder="path === '/' ? 'Game Type ' : 'Stream Description'"
            class="bg-lightDark rounded-[23px] text-lighten w-full outline-0 border-solid border-1 border-bocolor p-3 text-sm"
          />
          <input
            v-else
            v-model="stream"
            type="text"
            :placeholder="path === '/' ? 'Game Type ' : 'Stream Description'"
            class="bg-lightDark rounded-[23px] text-lighten w-full outline-0 border-solid border-1 border-bocolor p-3 text-sm"
          />
        </div>
        <BaseTheButton
          v-if="path === '/' && method === 'post'"
          title="Add Game"
          class="mt-10 w-full"
          @click="
            popularStore.CreatePopular();
            $emit('closeDialog');
          "
        />
        <BaseTheButton
          v-else-if="method === 'put'"
          title="Save Stream"
          class="mt-10 w-full"
          @click="
            streamStore.updateStream(id);
            $emit('closeDialog');
          "
        />
        <BaseTheButton
          v-else
          title="Add Strem"
          class="mt-10 w-full"
          @click="
            streamStore.createStream();
            $emit('closeDialog');
          "
        />
      </div>
    </form>
  </BaseWrapper>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePopularStore } from "~/stores/popular";
import { useStreamStore } from "~/stores/stream";

const streamStore = useStreamStore();
const popularStore = usePopularStore();

const { title, type } = storeToRefs(popularStore);
const { stream } = storeToRefs(streamStore);

const router = useRouter();
const path = router.currentRoute.value.path;
defineEmits(["closeDialog"]);

defineProps({
  method: { type: String, default: "post" },
  id: { type: Number },
});
</script>

<style scoped></style>
