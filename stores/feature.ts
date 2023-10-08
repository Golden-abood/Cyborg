import { defineStore } from "pinia";
export const useFeatureStore = defineStore("feature", () => {
  const features = ref([
    {
      src: "/images/featured-01.jpg",
      title: "Gamezer",
      star: "4.8",
      download: "2.3M",
      stream: "2.4K Streaming",
      down: "249K Downloads",
    },
    {
      src: "/images/featured-02.jpg",
      title: "Island Rusty",
      star: "4.8",
      download: "2.3M",
      stream: "4.4K Streaming",
      down: "549K Downloads",
    },
    {
      src: "/images/featured-03.jpg",
      title: "CS-GO",
      star: "4.8",
      download: "2.3M",
      stream: "2.8K Streaming",
      down: "289K Downloads",
    },
    {
      src: "/images/featured-01.jpg",
      title: "Gamezer",
      star: "4.8",
      download: "2.3M",
      stream: "2.4K Streaming",
      down: "249K Downloads",
    },
  ]);
  return {
    features,
  };
});
