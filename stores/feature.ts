import { defineStore } from "pinia";
export const useFeatureStore = defineStore("feature", () => {
  const features = ref([]);
  const list = async () => {
    const res = await fetch("http://localhost:3000/features");
    const data = await res.json();
    features.value = data;
  };
  list();

  return {
    features,
    list,
  };
});
