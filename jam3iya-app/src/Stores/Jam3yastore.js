import { makeAutoObservable } from "mobx";
import api from "./api";

class Jam3yaStore {
  jam3ya = [];
  constructor() {
    makeAutoObservable(this, {});
  }

  fetchJam3ya = async () => {
    try {
      const response = await api.get("/jam3ya");
      this.jam3ya = response.data;
    } catch (e) {
      console.log(e);
    }
  };

  createJam3ya = async (newjam3ya) => {
    try {
      const response = await api.post("/jam3ya", newjam3ya);

      this.jam3ya.push(response.data);
    } catch (e) {
      alert("cannot create new jam3ya");
      console.log(e);
    }
    // to do : call BE to create a jam3ya
  };

  deleteJam3ya = async (jam3yaId) => {
    try {

      await api.delete(
       `jam3ya/${jam3yaId}`
      );
      const tempjam3ya = this.jam3ya.filter((jam3ya) => jam3ya.id !== jam3yaId);
      this.jam3ya = tempjam3ya;
    } catch (e) {
      alert("Cannot delete the jam3ya");
    }
    // to do : call BE to delete a jam3ya
  };

  updateJam3ya = async (jam3ya, jam3yaId) => {
    console.log("🚀 ~ file: Jam3yastore.js ~ line 46 ~ Jam3yaStore ~ updateJam3ya= ~ jam3ya", jam3ya)
    try {
      const response = await api.put(
        `/jam3ya/${jam3yaId}`,
        jam3ya
      );
      const tempjam3ya = this.jam3ya.map((jam3yatoupdate) =>
      jam3yatoupdate.id === jam3yaId ? response.data : jam3yatoupdate
      );
      this.jam3ya = tempjam3ya;
    
    } catch (error) {
      console.log(error);
    }
  };
}
const jam3yaStore = new Jam3yaStore();
jam3yaStore.fetchJam3ya();
export default jam3yaStore;