import { defineStore } from "pinia";
export const useLibraryStore = defineStore("library", () => {
  const libraries = ref([]);
  const list = async () => {
    const res = await fetch("http://localhost:3000/libraries");
    const data = await res.json();
    libraries.value = data;
  };
  list();
  return {
    libraries,
    list,
  };
});
