<template>
    <div class="user-profile">
      <div class="profile-header">
        <h2>User Profile</h2>
      </div>
      <div class="profile-body">
        <div class="profile-item">
          <label for="username">Name</label>
          <span id="username">{{ username}}</span>
        </div>
        <div class="profile-item">
          <label for="username">Surname</label>
          <span id="username">{{ usersurname }}</span>
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
      </div>
    </div>
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
            ForgotPassword
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
    margin-top: 300px;

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
  