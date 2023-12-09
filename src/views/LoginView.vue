<template>
	<main class="login mainlogin">
		<section class="forms">


			<form class="login login-for" @submit.prevent="login" v-if="!isHidden && !isForgot">
				<div>
					<h2>Sign in</h2>
				</div>

				<div class="divin">
					<div><input type="email" placeholder="Email address" v-model="login_form.email" /></div>
					<div> <input type="password" placeholder="Password" v-model="login_form.password" /></div>
				</div>

				<div class="divin">
					<div><h5 class="forgot-pass" @click="isForgot = true">Forgot password?</h5></div>
					<div><input type="submit" value="Login" class="login-btn" /></div>
					<div>
						<h4>Don't have an account? <a href="#" @click="isHidden = !isHidden">Sign up</a></h4>
					</div>
					<div class="for-google">

						<div><img src="../assets/google-icon.png" alt=""></div>
						<div>
							<h6 class="google-btn" @click="handleGoogle()">Login With Google</h6>
						</div>
					</div>
				</div>




			</form>


			<form class="register login-for" @submit.prevent="register" v-if="isHidden && !isForgot">
				<div>
					<h2>Sign up</h2>
				</div>
				<div class="divin">
					<div> <input type="name" placeholder="Name" v-model="register_form.name" /></div>
					<div> <input type="surname" placeholder="Surname" v-model="register_form.surname" /></div>
					<div> <input type="email" placeholder="Email address" v-model="register_form.email" /></div>
					<div> <input type="password" placeholder="Password" v-model="register_form.password" /></div>
					
				</div>

				<div class="divin">
					<div> <input type="submit" value="Register" class="login-btn" /></div>
					<div>
						<h4>Already have an account? <a href="#" @click="isHidden = !isHidden">Sign in</a></h4>
					</div>
				</div>

			</form>

			<form class="forgotten" @submit.prevent="ForgotPassword" v-if="isForgot">

				<div class="divin">
					<h3>Change password</h3>
					<input type="email" placeholder="Email address" v-model="email_forgotten.email" />
				</div>
				<div class="divin reset">
					<div> <input type="submit" value="Reset password" class="login-btn" /></div>
					<div> <input type="button" value="back" class="login-btn back" @click="isForgot = !isForgot" /></div>
				</div>

			</form>



		</section>
	</main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, sendEmailVerification } from 'firebase/auth'
import { auth } from '../firebase/index'

export default {
	setup() {
		const login_form = ref({});
		const register_form = ref({});
		const store = useStore();
		const isHidden = ref(false);
		const isForgot = ref(false);
		const email_forgotten= ref({});
		const login = () => {
			store.dispatch('login', login_form.value);
		}

		const register = () => {
			store.dispatch('register', register_form.value)
			.then(() => {
					sendEmailVerification(auth.currentUser)
					.then(()=>{
						alert("Email verfication link sent!")
					})
			});
		}
		const handleGoogle = async () => {
			const provider = await new GoogleAuthProvider();
			return signInWithPopup(auth, provider);
		}

		const ForgotPassword = () => {
			sendPasswordResetEmail(auth,email_forgotten.value.email).
			then(() => {
				alert("A Password Reset Link has been sent to your email")
			})
			.catch((error) => {
				console.log(error.code);
				console.log(error.message);

			})
		}

		return {
			login_form,
			register_form,
			login,
			register,
			handleGoogle,
			isHidden,
			ForgotPassword,
			isForgot,
			email_forgotten
		}
	}
}
</script>

<style>


.forgotten {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 30px;
	margin-top: 110px;
}

.reset input{
	width: 150px;
}
.forgot-pass {
	cursor: pointer;
	font-size: 12px;
}
.for-google {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	margin-bottom: 10px;
	border: 2px solid rgb(21, 16, 16);
	height: 30px;
	border-radius: 4px;
}

.mainlogin {
	background-image: url("../assets/bck.jpg");
	margin: 0;
	padding: 0;
	height: 100vh;
	background-size: cover;
	/* Arka planın boyutunu kaplaması için */
	background-position: center;
	display: flex;
	align-items: center;
	justify-content: center;

}


.google-btn {
	border: 0px;
	cursor: pointer;
	border-radius: 4px;
}

h2 {
	margin: 0;
	padding: 0;
}

.divin h4 {
	font-size: 12px;

}

.divin a {
	border: 0;
	color: rgb(120, 201, 174);
}

.divin img {
	width: 24px;
	height: 24px;
	text-align: center;
}

.forms {
	background-color:aliceblue;
	width: 350px;
	height: 420px;
	margin-top: 150px;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
	border: 1px solid aliceblue;
}

.forms input {
	border: 0;
	border-radius: 4px;
}

.login-btn {
	background-color: rgb(120, 201, 174);
	width: 100px;
	cursor: pointer;
	font-size: 15px;
	color: #ffff;

}

.login-for {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 30px;
	margin-top: 50px;
}

.divin {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 5px;
}
</style>