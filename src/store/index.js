import { createStore } from 'vuex'
import router from '../router'
import { auth} from '../firebase'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  
  
} from 'firebase/auth'
// import { getDownloadURL } from "firebase/storage";
// import { ref } from "firebase/database";
import {  getDoc,collection, getFirestore, setDoc, doc } from 'firebase/firestore';
export default createStore({
  state: {
    user: null
  },
  mutations: {

    SET_USER (state, user) {
      state.user = user,
      localStorage.setItem('user', JSON.stringify(user));

    },

    CLEAR_USER (state) {
      state.user = null,
      localStorage.removeItem('user');

    }

  },
  // mutations: {
  //   SET_USER(state, user) {
  //     state.user = user;
  
  //     // Kullanıcı bilgilerini localStorage'a kaydet
  //     localStorage.setItem('user', JSON.stringify(user));
  //   },
  //   // Diğer mutation'lar...
  // },
  
  // // Vuex store'un state kısmında başlangıç değerlerini belirleyin
  // state: {
  //   user: JSON.parse(localStorage.getItem('user')) || null,
  //   // Diğer state değerleri...
  // },
  actions: {
    // async login ({ commit }, details) {
    //   const { email, password} = details

    //   try {
    //     await signInWithEmailAndPassword(auth, email, password)
        
    //   const user = auth.currentUser;
    //   const uid = user.uid;

    // // Kullanıcının adını storage'dan çek
    // const storageRef = ref(storage(), "users/" + uid + "/name");
    // const storageRef2 = ref(storage(), "users/" + uid + "/surname");
    // const storageRef3 = ref(storage(), "users/" + uid + "/job");


    // try {
    //   const url = await getDownloadURL(storageRef);
    //   const url2 = await getDownloadURL(storageRef2);
    //   const url3 = await getDownloadURL(storageRef3);

    //   console.log("Kullanıcının adı:", url);

    //   // Kullanıcı adını Vuex store'a ekleyebilirsiniz
    //   commit('SET_USER', { ...user, name: url,surname: url2,job : url3 });
    // } catch (error) {
    //   console.error("Kullanıcı adını çekerken bir hata oluştu:", error.message);
    // }

    //   } catch (error) {
    //     switch(error.code) {
    //       case 'auth/user-not-found':
    //         alert("User not found")
    //         break
    //       case 'auth/wrong-password':
    //         alert("Wrong password")
    //         break
    //       default:
    //         alert("Something went wrong")
    //     }

    //     return
    //   }





    //   router.push('/')
    // },


    async login({ commit }, details) {
      const { email, password } = details;
    
      try {
        await signInWithEmailAndPassword(auth, email, password);
    
        const user = auth.currentUser;
        const uid = user.uid;
    
        // Firestore bağlantısı oluştur
        const db = getFirestore();
    
        // Kullanıcının bilgilerini Firestore'dan çek
        const userDocRef = doc(db, 'users', uid);
        const userDoc = await getDoc(userDocRef);
    
        if (userDoc.exists()) {
          // Firestore'dan çekilen belgeyi kullanarak kullanıcı bilgilerini al
          const userData = userDoc.data();
          const name = userData.name;
          const surname = userData.surname;
          const gender = userData.gender;
          const date = userData.date;
          const job = userData.job;
          const country = userData.country;

          // Kullanıcı adını Vuex store'a ekleyebilirsiniz
          commit('SET_USER', { ...user, name, surname, gender,date,job,country });
        } else {
          console.error('Kullanıcı belgesi bulunamadı.');
        }
    
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert('User not found');
            break;
          case 'auth/wrong-password':
            alert('Wrong password');
            break;
          default:
            alert('Something went wrong');
        }
    
        return;
      }
    
      router.push('/');
    },

    // async register ({ commit}, details) {
    //    const { email, password,name,surname,job} = details

    //   try {
    //     await createUserWithEmailAndPassword(auth, email, password)
    //     const uid = auth.currentUser.uid;

    //     // Kullanıcının adını storage'da "name" dosyasına kaydet
    //     const nameStorageRef = storage().ref("users/" + uid + "/name");
    //     await nameStorageRef.putString(name, 'utf-8');
    
    //     // Kullanıcının soyadını storage'da "surname" dosyasına kaydet
    //     const surnameStorageRef = storage().ref("users/" + uid + "/surname");
    //     await surnameStorageRef.putString(surname, 'utf-8');
    
    //     // Kullanıcının işini storage'da "job" dosyasına kaydet
    //     const jobStorageRef = storage().ref("users/" + uid + "/job");
    //     await jobStorageRef.putString(job, 'utf-8');
        
    //   } catch (error) {
    //     switch(error.code) {
    //       case 'auth/email-already-in-use':
    //         alert("Email already in use")
    //         break
    //       case 'auth/invalid-email':
    //         alert("Invalid email")
    //         break
    //       case 'auth/operation-not-allowed':
    //         alert("Operation not allowed")
    //         break
    //       case 'auth/weak-password':
    //         alert("Weak password")
    //         break
    //       default:
    //         alert("Something went wrong")
    //     }

    //     return
    //   }
      
    //   commit('SET_USER', auth.currentUser)


    //   router.push('/')
    // },

    
    // ...
    
    async register({ commit }, details) {
      const { email, password, name, surname,gender,date, job,country } = details;
    
      try {
        // Yeni kullanıcıyı oluştur
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
        // Kullanıcı oluşturulduktan sonra UID'yi al
        const uid = userCredential.user.uid;
    
        // Firestore bağlantısı oluştur
        const db = getFirestore();
    
        // Kullanıcı bilgilerini Firestore'a kaydet
        const usersCollection = collection(db, 'users');
        const userDocRef = doc(usersCollection, uid);
    
        await setDoc(userDocRef, {
          name: name,
          surname: surname,
          job: job,
          gender:gender,
          country : country,
          date : date,
          // Diğer kullanıcı bilgilerini buraya ekleyebilirsiniz
        });
    
        // Kullanıcı bilgilerini güncelle ve yönlendirme işlemini gerçekleştir
        commit('SET_USER', { uid, email, name, surname,gender,date, job,country });
    
        router.push('/');
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert('Email already in use');
            break;
          case 'auth/invalid-email':
            alert('Invalid email');
            break;
          case 'auth/operation-not-allowed':
            alert('Operation not allowed');
            break;
          case 'auth/weak-password':
            alert('Weak password');
            break;
          default:
            alert('Something went wrong');
        }
    
        return;
      }
    },
    
    

    async logout ({ commit }) {
      await signOut(auth)

      commit('CLEAR_USER')

      router.push('/login')
    },

    fetchUser ({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER')
        } else {
          const user = JSON.parse(localStorage.getItem('user'));

          commit('SET_USER', user)


          if (router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/')
          }
        }
      })
    }
    
  }
})


















// import { createStore } from 'vuex'
// import router from '../router'
// import { auth} from '../firebase'
// import { 
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
  
  
// } from 'firebase/auth'
// // import { getDownloadURL } from "firebase/storage";
// // import { ref } from "firebase/database";
// import {  getDoc,collection, getFirestore, setDoc, doc } from 'firebase/firestore';
// export default createStore({
//   state: {
//     user: null
//   },
//   mutations: {

//     SET_USER (state, user) {
//       state.user = user,
//       localStorage.setItem('user', JSON.stringify(user));

//     },

//     CLEAR_USER (state) {
//       state.user = null,
//       localStorage.removeItem('user');

//     }

//   },
//   // mutations: {
//   //   SET_USER(state, user) {
//   //     state.user = user;
  
//   //     // Kullanıcı bilgilerini localStorage'a kaydet
//   //     localStorage.setItem('user', JSON.stringify(user));
//   //   },
//   //   // Diğer mutation'lar...
//   // },
  
//   // // Vuex store'un state kısmında başlangıç değerlerini belirleyin
//   // state: {
//   //   user: JSON.parse(localStorage.getItem('user')) || null,
//   //   // Diğer state değerleri...
//   // },
//   actions: {
//     // async login ({ commit }, details) {
//     //   const { email, password} = details

//     //   try {
//     //     await signInWithEmailAndPassword(auth, email, password)
        
//     //   const user = auth.currentUser;
//     //   const uid = user.uid;

//     // // Kullanıcının adını storage'dan çek
//     // const storageRef = ref(storage(), "users/" + uid + "/name");
//     // const storageRef2 = ref(storage(), "users/" + uid + "/surname");
//     // const storageRef3 = ref(storage(), "users/" + uid + "/job");


//     // try {
//     //   const url = await getDownloadURL(storageRef);
//     //   const url2 = await getDownloadURL(storageRef2);
//     //   const url3 = await getDownloadURL(storageRef3);

//     //   console.log("Kullanıcının adı:", url);

//     //   // Kullanıcı adını Vuex store'a ekleyebilirsiniz
//     //   commit('SET_USER', { ...user, name: url,surname: url2,job : url3 });
//     // } catch (error) {
//     //   console.error("Kullanıcı adını çekerken bir hata oluştu:", error.message);
//     // }

//     //   } catch (error) {
//     //     switch(error.code) {
//     //       case 'auth/user-not-found':
//     //         alert("User not found")
//     //         break
//     //       case 'auth/wrong-password':
//     //         alert("Wrong password")
//     //         break
//     //       default:
//     //         alert("Something went wrong")
//     //     }

//     //     return
//     //   }





//     //   router.push('/')
//     // },


//     async login({ commit }, details) {
//       const { email, password } = details;
    
//       try {
//         await signInWithEmailAndPassword(auth, email, password);
    
//         const user = auth.currentUser;
//         const uid = user.uid;
    
//         // Firestore bağlantısı oluştur
//         const db = getFirestore();
    
//         // Kullanıcının bilgilerini Firestore'dan çek
//         const userDocRef = doc(db, 'users', uid);
//         const userDoc = await getDoc(userDocRef);
    
//         if (userDoc.exists()) {
//           // Firestore'dan çekilen belgeyi kullanarak kullanıcı bilgilerini al
//           const userData = userDoc.data();
//           const name = userData.name;
//           const surname = userData.surname;
//           const job = userData.job;


//           // Kullanıcı adını Vuex store'a ekleyebilirsiniz
//           commit('SET_USER', { ...user, name, surname,job });
//         } else {
//           console.error('Kullanıcı belgesi bulunamadı.');
//         }
    
//       } catch (error) {
//         switch (error.code) {
//           case 'auth/user-not-found':
//             alert('User not found');
//             break;
//           case 'auth/wrong-password':
//             alert('Wrong password');
//             break;
//           default:
//             alert('Something went wrong');
//         }
    
//         return;
//       }
    
//       router.push('/');
//     },

//     // async register ({ commit}, details) {
//     //    const { email, password,name,surname,job} = details

//     //   try {
//     //     await createUserWithEmailAndPassword(auth, email, password)
//     //     const uid = auth.currentUser.uid;

//     //     // Kullanıcının adını storage'da "name" dosyasına kaydet
//     //     const nameStorageRef = storage().ref("users/" + uid + "/name");
//     //     await nameStorageRef.putString(name, 'utf-8');
    
//     //     // Kullanıcının soyadını storage'da "surname" dosyasına kaydet
//     //     const surnameStorageRef = storage().ref("users/" + uid + "/surname");
//     //     await surnameStorageRef.putString(surname, 'utf-8');
    
//     //     // Kullanıcının işini storage'da "job" dosyasına kaydet
//     //     const jobStorageRef = storage().ref("users/" + uid + "/job");
//     //     await jobStorageRef.putString(job, 'utf-8');
        
//     //   } catch (error) {
//     //     switch(error.code) {
//     //       case 'auth/email-already-in-use':
//     //         alert("Email already in use")
//     //         break
//     //       case 'auth/invalid-email':
//     //         alert("Invalid email")
//     //         break
//     //       case 'auth/operation-not-allowed':
//     //         alert("Operation not allowed")
//     //         break
//     //       case 'auth/weak-password':
//     //         alert("Weak password")
//     //         break
//     //       default:
//     //         alert("Something went wrong")
//     //     }

//     //     return
//     //   }
      
//     //   commit('SET_USER', auth.currentUser)


//     //   router.push('/')
//     // },

    
//     // ...
    
//     async register({ commit }, details) {
//       const { email, password, name, surname,job} = details;
    
//       try {
//         // Yeni kullanıcıyı oluştur
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
//         // Kullanıcı oluşturulduktan sonra UID'yi al
//         const uid = userCredential.user.uid;
    
//         // Firestore bağlantısı oluştur
//         const db = getFirestore();
    
//         // Kullanıcı bilgilerini Firestore'a kaydet
//         const usersCollection = collection(db, 'users');
//         const userDocRef = doc(usersCollection, uid);
    
//         await setDoc(userDocRef, {
//           name: name,
//           surname: surname,
//           job: job,
//           // Diğer kullanıcı bilgilerini buraya ekleyebilirsiniz
//         });
    
//         // Kullanıcı bilgilerini güncelle ve yönlendirme işlemini gerçekleştir
//         commit('SET_USER', { uid, email, name, surname,job });
    
//         router.push('/');
//       } catch (error) {
//         switch (error.code) {
//           case 'auth/email-already-in-use':
//             alert('Email already in use');
//             break;
//           case 'auth/invalid-email':
//             alert('Invalid email');
//             break;
//           case 'auth/operation-not-allowed':
//             alert('Operation not allowed');
//             break;
//           case 'auth/weak-password':
//             alert('Weak password');
//             break;
//           default:
//             alert('Something went wrong');
//         }
    
//         return;
//       }
//     },
    
    

//     async logout ({ commit }) {
//       await signOut(auth)

//       commit('CLEAR_USER')

//       router.push('/login')
//     },

//     fetchUser ({ commit }) {
//       auth.onAuthStateChanged(async user => {
//         if (user === null) {
//           commit('CLEAR_USER')
//         } else {
//           const user = JSON.parse(localStorage.getItem('user'));

//           commit('SET_USER', user)


//           if (router.isReady() && router.currentRoute.value.path === '/login') {
//             router.push('/')
//           }
//         }
//       })
//     }
    
//   }
// })