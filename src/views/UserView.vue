<template>
    <div class="user-profile" v-if="!isEdit">
      <div class="profile-header">
        <h2>User Profile</h2>
      </div>
      <div class="profile-body">
        <div class="profile-item">
          <label for="name">Name:</label>
          <span id="name">{{ username }}</span>
        </div>
        <div class="profile-item">
          <label for="surname">Surname:</label>
          <span id="surname">{{ usersurname }}</span>
        </div>
        <div class="profile-item">
          <label for="gender">Gender:</label>
          <span id="gender">{{ usergender}}</span>
        </div>
        <div class="profile-item">
          <label for="date">Date of Birth:</label>
          <span id="date">{{ userdate}}</span>
        </div>
        <div class="profile-item">
          <label for="job">Job:</label>
          <span id="job">{{ userjob }}</span>
        </div>

        <div class="profile-item">
          <label for="country">Country:</label>
          <span id="country">{{ usercountry }}</span>
        </div>

        <div class="profile-item">
          <label for="email">Email:</label>
          <span id="email">{{ useremail }}</span>
        </div>
        <div class="profile-item">
          <label for="password">Password:</label>
          <span id="password">********</span>
          <button class="change-password-user" @click="ForgotPassword()">Change password</button>
        </div>
        <div class="profile-item">
          <label for="verification">verification:</label>
          <span id="verification" v-if="verfy">verified</span>
          <span id="verification" v-if="!verfy">not verified</span>

        </div>

        <button class="edit" @click="isEdit = !isEdit">edit</button>
      </div>
    </div>





    <div class="user-profile" v-if="isEdit">
      <div class="profile-header">
        <h2>User Profile</h2>
      </div>
      <div class="profile-body">
        <div class="profile-item">
          <label for="name">Name:</label>
          <input type="name" :placeholder="username" :value="username" v-model="username" />

        </div>
        <div class="profile-item">
          <label for="surname">Surname:</label>
          <input type="surname" :placeholder="usersurname" :value="usersurname" v-model="usersurname" />
        </div>
        <div class="profile-item">
          <label for="gender">Gender:</label>
          <select v-model="usergender" id="gender" name="gender" :value="usergender" >
						<option :value="null" disabled>Select gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="other">Other</option>
					</select>
        </div>
        <div class="profile-item">
          <label for="date">Date of Birth:</label>
          <input type="date" :placeholder="userdate" :value="userdate" v-model="userdate" />
        </div>
        <div class="profile-item">
          <label for="job">Job:</label>
          <input type="job" :placeholder="userjob" :value="userjob" v-model="userjob" />
        </div>

        <div class="profile-item">
          <label for="country">Country:</label>
          <input type="country" :placeholder="usercountry" :value="usercountry" v-model="usercountry"/>
        </div>

        <div class="profile-item">
          <label for="email">Email:</label>
          <span id="email">{{ useremail }}</span>
        </div>
        <div class="profile-item">
          <label for="password">Password:</label>
          <span id="password">********</span>
          <button class="change-password-user" @click="ForgotPassword()">Change password</button>
        </div>
        <div class="profile-item">
          <label for="verification">verification:</label>
          <span id="verification" v-if="verfy">verified</span>
          <span id="verification" v-if="!verfy">not verified</span>

        </div>

        <button class="save" @click="updateUserInfo()">save</button>
      </div>

      
    </div>

    
  <footer class="footer">

<div>
  <h5>Drugger Detection © 2023-2024</h5>
</div>
</footer>
  </template>
  
  <!-- <script>
    import { useStore } from 'vuex'
    import { ref } from 'vue'
    import { sendPasswordResetEmail } from 'firebase/auth'
    import { auth } from '../firebase/index'
    import { getFirestore, collection, doc, updateDoc } from 'firebase/firestore';

    
  export default {
	setup() {

		const store = useStore();
        const useremail = ref(store.state.user.email);
        const username = ref(store.state.user.name);
        const usersurname = ref(store.state.user.surname);
        const userjob = ref(store.state.user.job);
        const usergender = ref(store.state.user.gender);
        const usercountry = ref(store.state.user.country);
        const userdate = ref(store.state.user.date);

        const verfy = ref(store.state.user.emailVerified);


        const isEdit = ref(false);



        const ForgotPassword = () => {
			sendPasswordResetEmail(auth,useremail.value).
			then(() => {
				alert("A Password Reset Link has been sent to your email")
			})
			.catch((error) => {
				console.log(error.code);
				console.log(error.message);

			})
		}


    const updateUserInfo = async () => {
      if (auth.currentUser) {
        try {
          // Firestore'daki kullanıcı belgesini güncelle
          await Firestore.collection('users').doc(auth.currentUser.uid).update({
            name: 'Yeni İsim', // Güncellenen isim
            // Diğer güncellenecek alanlar buraya eklenebilir
          })
          // Kullanıcı bilgilerini güncelle
        } catch (error) {
          console.error('Kullanıcı bilgileri güncellenirken bir hata oluştu:', error)
        }
      }
    }

    

    



		return {
            
            useremail,
            username,
            usersurname,
            userjob,
            usergender,
            usercountry,
            userdate,
            ForgotPassword,
            verfy,
            isEdit,
            updateUserInfo
		}
	}
}
  </script> -->

  <script>
import { useStore } from 'vuex'
import { ref } from 'vue'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase/index'
import { getFirestore, collection, doc, updateDoc } from 'firebase/firestore';
import router from '@/router';

export default {
  setup() {
    const store = useStore();
    const useremail = ref(store.state.user.email);
    const username = ref(store.state.user.name);
    const usersurname = ref(store.state.user.surname);
    const userjob = ref(store.state.user.job);
    const usergender = ref(store.state.user.gender);
    const usercountry = ref(store.state.user.country);
    const userdate = ref(store.state.user.date);
    const verfy = ref(store.state.user.emailVerified);
    const isEdit = ref(false);

    const ForgotPassword = () => {
      sendPasswordResetEmail(auth, useremail.value)
        .then(() => {
          alert("A Password Reset Link has been sent to your email")
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
        })
    }

    const updateUserInfo = async () => {
      if (auth.currentUser) {
        try {
          // Firestore'daki kullanıcı belgesini güncelle
          const userDocRef = doc(collection(getFirestore(), 'users'), auth.currentUser.uid);
          await updateDoc(userDocRef, {
            name: username.value,
            surname: usersurname.value,
            gender: usergender.value,
            date: userdate.value,
            job: userjob.value,
            country: usercountry.value,
          });
          const user = auth.currentUser;

          store.commit('SET_USER', {
            ...user,
            name: username.value,
            surname: usersurname.value,
            gender: usergender.value,
            date: userdate.value,
            job: userjob.value,
            country: usercountry.value,
          });
          isEdit.value = !isEdit.value;
          router.push("/user")
          console.log('Kullanıcı bilgileri güncellendi');
        } catch (error) {
          console.error('Kullanıcı bilgileri güncellenirken bir hata oluştu:', error);
        }
      }
    }

    return {
      useremail,
      username,
      usersurname,
      userjob,
      usergender,
      usercountry,
      userdate,
      ForgotPassword,
      verfy,
      isEdit,
      updateUserInfo
    }
  }
}
</script>

  
  <style>

  .edit {
    width: 80px;
    color: aliceblue;
    background-color: rgb(190, 40, 40);
    cursor: pointer;
    margin-left: 158px;
    margin-top: 20px;
    border: 0;
    border-radius: 4px;
  }

  .save {
    width: 80px;
    color: aliceblue;
    background-color: rgb(59, 208, 59);
    cursor: pointer;
    margin-left: 158px;
    margin-top: 20px;
    border: 0;
    border-radius: 4px;
  }
  .change-password-user {
    margin-left: 40px;
    border: 0;
    border-radius: 5px;
    color: rgb(222, 44, 44);
    cursor: pointer;
  }

  .user-profile {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    margin-top: 200px;

  }
  
  .profile-header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .profile-body {
    display: flex;
    flex-direction: column;
  }
  
  .profile-item {
    margin-bottom: 10px;
    margin-top: 10px;
  }
  
  label {
    font-weight: bold;
  }
  
  span {
    margin-left: 10px;
  }
  </style>
  















<!-- 








  <template>
    <div class="user-profile">
      <div class="profile-header">
        <h2>User Profile</h2>
      </div>
      <div class="profile-body">
        <div class="profile-item">
          <label for="name">Name:</label>
          <span id="name">{{ username }}</span>
        </div>
        <div class="profile-item">
          <label for="surname">Surname:</label>
          <span id="surname">{{ usersurname }}</span>
        </div>

        <div class="profile-item">
          <label for="job">Job:</label>
          <span id="job">{{ userjob }}</span>
        </div>


        <div class="profile-item">
          <label for="email">Email:</label>
          <span id="email">{{ useremail }}</span>
        </div>
        <div class="profile-item">
          <label for="password">Password:</label>
          <span id="password">********</span>
          <button class="change-password-user" @click="ForgotPassword()">Change password</button>
        </div>
        <div class="profile-item">
          <label for="verification">verification:</label>
          <span id="verification" v-if="verfy">verified</span>
          <span id="verification" v-if="!verfy">not verified</span>

        </div>
      </div>
    </div>

    
  <footer class="footer">

<div>
  <h5>Drugger Detection © 2023-2024</h5>
</div>
</footer>
  </template>
  
  <script>
    import { useStore } from 'vuex'
    import { ref } from 'vue'
    import { sendPasswordResetEmail } from 'firebase/auth'
    import { auth } from '../firebase/index'

    
  export default {
	setup() {

		const store = useStore();
        const useremail = ref(store.state.user.email);
        const username = ref(store.state.user.name);
        const usersurname = ref(store.state.user.surname);
        const userjob = ref(store.state.user.job);
        const verfy = ref(store.state.user.emailVerified);
        // const usergender = ref(store.state.user.gender);
        // const useraddress = ref(store.state.user.useraddress);
        // const userbirth= ref(store.state.user.userbirth);

        const ForgotPassword = () => {
			sendPasswordResetEmail(auth,useremail.value).
			then(() => {
				alert("A Password Reset Link has been sent to your email")
			})
			.catch((error) => {
				console.log(error.code);
				console.log(error.message);

			})
		}



		return {
            
            useremail,
            username,
            usersurname,
            userjob,
            ForgotPassword,
            verfy,
            // usergender,
            // useraddress,
            // userbirth
		}
	}
}
  </script>
  
  <style>

  .change-password-user {
    margin-left: 40px;
    border: 0;
    border-radius: 5px;
    color: rgb(222, 44, 44);
    cursor: pointer;
  }

  .user-profile {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    margin-top: 320px;

  }
  
  .profile-header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .profile-body {
    display: flex;
    flex-direction: column;
  }
  
  .profile-item {
    margin-bottom: 10px;
    margin-top: 10px;
  }
  
  label {
    font-weight: bold;
  }
  
  span {
    margin-left: 10px;
  }
  </style>
   -->