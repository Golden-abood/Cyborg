import { defineStore } from "pinia";

export const usePopularStore = defineStore("popular", () => {
  const populars = ref([]);
  const popular = ref();
  const title = ref("");
  const type = ref("");

  const list = async () => {
    const res = await fetch("http://localhost:3000/populars");
    const data = await res.json();
    populars.value = data;
  };
  const getPopular = async (id: number) => {
    const res = await fetch(`http://localhost:3000/populars/${id}`);
    const data = await res.json();
    popular.value = data;
  };
  const CreatePopular = async () => {
    const res = await fetch("http://localhost:3000/populars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        type: type,
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  const deletePopular = async (id: number) => {
    const res = await fetch(`http://localhost:3000/populars/${id}`);
    const data = await res.json();
    console.log(data);
  };
  return {
    populars,
    popular,
    title,
    type,
    list,
    getPopular,
    CreatePopular,
    deletePopular,
  };
});
