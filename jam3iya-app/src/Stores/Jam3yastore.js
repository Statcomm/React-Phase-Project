import { makeAutoObservable, observable, action } from "mobx";
import axios from "axios";
import api from "./api";


class Jam3yaStore {
  jam3ya = [];

  constructor() {
    makeAutoObservable(this, {
      jam3ya: observable,
      fetchjam3ya: action,
      createjam3ya: action,
      deletejam3ya: action,
      updatejam3ya: action,
    });
  }
  fetchJam3ya = async () => {
    try {
      const response = await api.get(
        "/jam3ya"
      );
      this.jam3ya = response.data;
    } catch (e) {
      console.log(e);
    }
  };
  createJam3ya = async (newjam3ya) => {
    try {
      const response = await api.post(
        "/jam3ya",
        newjam3ya
      );

      this.jam3ya.push(response.data);
    } catch (e) {
      alert("cannot create new jam3ya");
      console.log(e);
    }
    // to do : call BE to create a jam3ya
  };

  deleteJam3ya = async (id) => {
    try {
      await api.delete(
        `/jam3ya/${id}`
      );
      const tempjam3ya = this.jam3ya.filter((jam3ya) => jam3ya.id !== id);
      this.jam3ya = tempjam3ya;
    } catch (e) {
      alert("cannot delete the jam3ya");
    }
    // to do : call BE to delete a jam3ya
  };
  updateJam3ya = async (updatedjam3ya) => {
    try {
      const response = await api.put(
        `/jam3yas/${updatedjam3ya.id}`,
        updatedjam3ya
      );
      const tempjam3ya = this.jam3yas.map((jam3ya) =>
        jam3ya.id === updatedjam3ya.id ? response.data : jam3ya
      );
      this.jam3ya = tempjam3ya;
    } catch (error) {
      console.log(error);
    }
  };
}
const jam3yaStore = new Jam3yaStore();
jam3yaStore.fetchJam3ya();
console.log(jam3yaStore.fetchJam3ya())
export default jam3yaStore;
