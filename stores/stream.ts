import { defineStore } from "pinia";
interface stream {
  id: number;
  photo: string;
  src: string;
  name: string;
  desc: string;
}
export const useStreamStore = defineStore("stream", () => {
  const streams = ref<stream[]>([]);
  const stream = ref<stream>();
  const list = async () => {
    const res = await fetch("http://localhost:3000/streams");
    const data = await res.json();
    streams.value = data;
  };

  const createStream = async () => {
    const res = await fetch("http://localhost:3000/streams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...stream.value,
      }),
    });
    const data = await res.json();
    await list();
  };

  const updateStream = async (id: number) => {
    const res = await fetch("http://localhost:3000/streams/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...stream.value,
      }),
    });
    const data = await res.json();
    await list();
  };

  const deleteStream = async (id: number) => {
    const res = await fetch(`http://localhost:3000/streams/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    await list();
  };
  return {
    streams,
    stream,
    list,
    createStream,
    deleteStream,
    updateStream,
  };
});
