import { defineStore } from "pinia";
export const useLibraryStore = defineStore("library", () => {
  const libraries = ref([
    {
      img: "/images/game-01.jpg",
      title: "Dota 2",
      name: "Sandbox",
      dateFormat: "24/08/2036",
      hours: "Hours Played",
      hoursNum: "634 H 22 Mins",
      active: false,
    },
    {
      img: "/images/game-02.jpg",
      title: "Fortnite",
      name: "Sandbox",
      dateFormat: "23/06/2036",
      hours: "Hours Played",
      hoursNum: "334 H 21 Mins",
      active: true,
    },
    {
      img: "/images/game-03.jpg",
      title: "CS-GO",
      name: "Sandbox",
      dateFormat: "14/08/2016",
      hours: "Hours Played",
      hoursNum: "234 H 20 Mins",
      active: false,
    },
  ]);
  return {
    libraries,
  };
});
