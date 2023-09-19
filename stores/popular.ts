import { defineStore } from "pinia";

export const usePopularStore = defineStore("popular", () => {
  const populars = ref([
    {
      title: "Fortnite",
      type: "Battle S",
      src: "/images/popular-01.jpg",
      count: "4.8",
      follows: "2.3",
    },
    {
      title: "PubG",
      type: "Battle S",
      src: "/images/popular-02.jpg",
      count: "4.8",
      follows: "2.3",
    },
    {
      title: "Dota2",
      type: "Steam-X",
      src: "/images/popular-03.jpg",
      count: "4.8",
      follows: "2.3",
    },
    {
      title: "CS-GO",
      type: "Legendary",
      src: "/images/popular-04.jpg",
      count: "4.8",
      follows: "2.3",
    },
    {
      title: "Mini Craft",
      type: "Legendary",
      src: "/images/popular-05.jpg",
      count: "4.8",
      follows: "2.3",
    },
    {
      title: "Eagles Fly",
      type: "Matrix Games",
      src: "/images/popular-06.jpg",
      count: "4.8",
      follows: "2.3",
    },
    {
      title: "Warface",
      type: "Max 3D",
      src: "/images/popular-07.jpg",
      count: "4.8",
      follows: "2.3",
    },
    {
      title: "Warcraft",
      type: "Legend",
      src: "/images/popular-08.jpg",
      count: "4.8",
      follows: "2.3",
    },
  ]);

  return {
    populars,
  };
});
