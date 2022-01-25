import { makeAutoObservable, observable, action } from "mobx";
import api from "./api";


class Jam3yaStore {
  jam3ya = [];
user = null;
  constructor() {
    makeAutoObservable(this, {

     
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
       ` /jam3ya/${id}`
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

export default jam3yaStore;

























































// import { makeAutoObservable} from "mobx";
// import api from "./api";
// import decode from "jwt-decode"


// class Jam3yaStore {
  
//   j = null;

//   constructor() {
//     makeAutoObservable(this, {
     
//     });
//   }
// setUser = (token) => {
//   api.defaults.headers.common.Authorization = `Bearer ${token}`
//   this.j=decode(token)
// }

// signUp = async (user) => {
//     try{
//         const response = await api.post("/signup", user)
//         this.j = decode(response.data.token)
//     } catch (error) {}
// }

// signIn = async (user) => {
//     try{
//         const response = await api.post("/signin", user)
//         this.j = decode(response.data.token)
//     } catch (error) {}
// }

// checkForToken = () => {
//   const token = localStorage.getItem("myToken")
//   if(token){
//       const currentTime = Date.now()
//       const exp = decode(decode).token
//       if(this.j.exp>currentTime){ 
//           this.setUser(token)
//       } else {
//           alert("Session Expiered")
//           this.logout()
//       }
//   }
// }


// }

//   // fetchJam3ya = async () => {
//   //   try {
//   //     const response = await api.get(
//   //       "/jam3ya"
//   //     );
//   //     this.jam3ya = response.data;
//   //   } catch (e) {
//   //     console.log(e);
//   //   }
//   // };
//   // createJam3ya = async (newjam3ya) => {
//   //   try {
//   //     const response = await api.post(
//   //       "/jam3ya",
//   //       newjam3ya
//   //     );

//   //     this.jam3ya.push(response.data);
//   //   } catch (e) {
//   //     alert("cannot create new jam3ya");
//   //     console.log(e);
//   //   }
//   //   // to do : call BE to create a jam3ya
//   // };

//   // deleteJam3ya = async (id) => {
//   //   try {
//   //     await api.delete(
//   //       `/jam3ya/${id}`
//   //     );
//   //     const tempjam3ya = this.jam3ya.filter((jam3ya) => jam3ya.id !== id);
//   //     this.jam3ya = tempjam3ya;
//   //   } catch (e) {
//   //     alert("cannot delete the jam3ya");
//   //   }
//   //   // to do : call BE to delete a jam3ya
//   // };
//   // updateJam3ya = async (updatedjam3ya) => {
//   //   try {
//   //     const response = await api.put(
//   //       `/jam3yas/${updatedjam3ya.id}`,
//   //       updatedjam3ya
//   //     );
//   //     const tempjam3ya = this.jam3yas.map((jam3ya) =>
//   //       jam3ya.id === updatedjam3ya.id ? response.data : jam3ya
//   //     );
//   //     this.jam3ya = tempjam3ya;
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
  

// const jam3yaStore = new Jam3yaStore();
// //jam3yaStore.fetchJam3ya();
// // console.log(jam3yaStore.fetchJam3ya())
// export default jam3yaStore;
