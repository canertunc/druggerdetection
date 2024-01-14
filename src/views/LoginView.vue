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
					<div>
						<h5 class="forgot-pass" @click="isForgot = true">Forgot password?</h5>
					</div>
					<div><input type="submit" value="Login" class="login-btn" /></div>
					<div>
						<h4>Don't have an account? <a href="#/login" @click="isHidden = !isHidden">Sign up</a></h4>
						<!-- <h4>Don't have an account? <a href="#" @click="isHidden = !isHidden">Sign up</a></h4> -->

					</div>
					<div class="for-google">

						<div><img src="../assets/google-icon.png" alt=""></div>
						<div>
							<h6 class="google-btn" @click="handleGoogle2()">Login With Google</h6>
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

					<div> <input type="date" placeholder="date" v-model="register_form.date" /></div>
					<!-- <div> <input type="gender" placeholder="gender" v-model="register_form.gender" /></div> -->

					<select v-model="register_form.gender" id="gender" name="gender">
						<option :value="null" disabled>Select gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="other">Other</option>
					</select>
					<div> <input type="job" placeholder="Job" v-model="register_form.job" /></div>
					<div> <input type="country" placeholder="Country" v-model="register_form.country" /></div>

					<div> <input type="email" placeholder="Email address" v-model="register_form.email" /></div>
					<div> <input type="password" placeholder="Password" v-model="register_form.password" /></div>

				</div>



				<div class="divin">
					<div> <input type="submit" value="Register" class="login-btn" /></div>

					<div class="for-google">

						<div><img src="../assets/google-icon.png" alt=""></div>
						<div>
							<h6 class="google-btn" @click="handleGoogle()">Continue With Google</h6>
						</div>
					</div>
					<div>
						<h4>Already have an account? <a href="#/login" @click="isHidden = !isHidden">Sign in</a></h4>
						<!-- <h4>Already have an account? <a href="#" @click="isHidden = !isHidden">Sign in</a></h4> -->

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
import {getDoc, getFirestore, setDoc, collection, doc } from 'firebase/firestore';

export default {
	setup() {
		const login_form = ref({});
		const register_form = ref({});
		const store = useStore();
		const isHidden = ref(false);
		const isForgot = ref(false);
		const email_forgotten = ref({});
		const login = () => {
			store.dispatch('login', login_form.value);
		}

		const register = () => {
			store.dispatch('register', register_form.value)
				.then(() => {
					sendEmailVerification(auth.currentUser)
						.then(() => {
							alert("Email verfication link sent!")
						})
				});
		}
		// const handleGoogle = async () => {
		// 	const provider = await new GoogleAuthProvider();
		// 	return signInWithPopup(auth, provider);
		// }

		// const handleGoogle = async () => {
		// 	try {
		// 		const provider = new GoogleAuthProvider();
		// 		await signInWithPopup(auth, provider);

		// 		const googleUser = {
		// 			name : "123",
		// 			surname: "123",
		// 			gender : "123",
		// 			date : "123",
		// 			job :"123",
		// 			country :"123",
		// 		// Diğer gerekli bilgileri ekleyebilirsiniz
		// 		};

		// 		const userDocRef = doc(collection(getFirestore(), 'users'), auth.user.uid);
		// 		await setDoc(userDocRef, {
		// 			...googleUser,
		// 		});

		// 		// Kullanıcı bilgilerini Vuex'ta güncelleyin
		// 		store.commit('SET_USER',auth.user.uid, googleUser);

		// 		console.log('Google ile giriş yapıldı ve kullanıcı bilgileri Firestore\'a eklendi.');
		// 	} catch (error) {
		// 		console.error('Google ile giriş yaparken bir hata oluştu:', error);
		// 	}
		// };
		const handleGoogle = async () => {
			try {
				const provider = new GoogleAuthProvider();
				const result = await signInWithPopup(auth, provider);
				if (auth.currentUser) {
					// Auth kullanıcısı tanımlıysa
					const googleUser = {
						name: result.user.displayName,
						surname: "default",
						job: "default",
						date: "1999-09-21",
						gender: "default",
						country: "default",
					};
					
					const name = result.user.displayName;
					const surname = "default";
					const gender = "default";
					const date = "1999-09-21";
					const job = "default";
					const country = "default";

					const userDocRef = doc(collection(getFirestore(), 'users'), auth.currentUser.uid);
					await setDoc(userDocRef, {
						...googleUser,
					});

					// Kullanıcı bilgilerini Vuex'ta güncelleyin
					store.commit('SET_USER', { ...auth.currentUser, name, surname, gender, date, job, country });


					console.log('Google ile giriş yapıldı ve kullanıcı bilgileri Firestore\'a eklendi.');
				} else {
					console.error('Kullanıcı nesnesi tanımsız (undefined).');
				}
			} catch (error) {
				console.error('Google ile giriş yaparken bir hata oluştu:', error);
			}
		};












		const handleGoogle2 = async () => {
			try {
				const provider = new GoogleAuthProvider();
				await signInWithPopup(auth, provider);
				const uid = auth.currentUser.uid;
				const db = getFirestore();
				if (auth.currentUser) {
					// Auth kullanıcısı tanımlıysa


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
						store.commit('SET_USER', { ...auth.currentUser, name, surname, gender, date, job, country });
					} else {
						console.error('Kullanıcı belgesi bulunamadı.');
					}
					console.log('Google ile giriş yapıldı ve kullanıcı bilgileri Firestore\'a eklendi.');
				} else {
					console.error('Kullanıcı nesnesi tanımsız (undefined).');
				}
			} catch (error) {
				console.error('Google ile giriş yaparken bir hata oluştu:', error);
			}
		};


		// const handleGoogle = async () => {
		// 	try {
		// 		const provider = new GoogleAuthProvider();
		// 		const result = await signInWithPopup(auth, provider);

		// 		if (auth.currentUser) {
		// 			// Auth kullanıcısı tanımlıysa
		// 			const userDocRef = doc(collection(getFirestore(), 'users'), auth.currentUser.uid);

		// 			const userDocSnapshot = await getDoc(userDocRef);

		// 			if (userDocSnapshot.exists()) {
		// 				// Kullanıcı dokümanı zaten varsa, mevcut bilgileri güncelle
		// 				const updatedUserInfo = {
		// 					name: result.user.displayName,
		// 					// Diğer gerekli bilgileri result.additionalUserInfo.profile veya diğer alanlardan alabilirsiniz
		// 					surname: userDocSnapshot.data().surname || "default",
		// 					job: userDocSnapshot.data().job || "default",
		// 					date: userDocSnapshot.data().date || "1999-09-21",
		// 					gender: userDocSnapshot.data().gender || "default",
		// 					country: userDocSnapshot.data().country || "default",
		// 				};

		// 				await updateDoc(userDocRef, updatedUserInfo);

		// 				// Kullanıcı bilgilerini Vuex'ta güncelleyin
		// 				store.commit('SET_USER', auth.currentUser.uid, updatedUserInfo);

		// 				console.log('Google ile giriş yapıldı ve kullanıcı bilgileri Firestore\'da güncellendi.');
		// 			} else {
		// 				// Kullanıcı dokümanı yoksa, yeni bir doküman oluştur
		// 				const googleUser = {
		// 					name: result.user.displayName,
		// 					surname: "default",
		// 					job: "default",
		// 					date: "1999-09-21",
		// 					gender: "default",
		// 					country: "default",
		// 				};

		// 				await setDoc(userDocRef, googleUser);

		// 				// Kullanıcı bilgilerini Vuex'ta güncelleyin
		// 				store.commit('SET_USER', auth.currentUser.uid, googleUser);

		// 				console.log('Google ile giriş yapıldı ve yeni kullanıcı bilgileri Firestore\'a eklendi.');
		// 			}
		// 		} else {
		// 			console.error('Kullanıcı nesnesi tanımsız (undefined).');
		// 		}
		// 	} catch (error) {
		// 		console.error('Google ile giriş yaparken bir hata oluştu:', error);
		// 	}
		// };
		// const handleGoogle = async () => {
		// 	let updatedUserInfo;
		// 	let googleUser;

		// 	try {
		// 		const provider = new GoogleAuthProvider();
		// 		const result = await signInWithPopup(auth, provider);

		// 		if (auth.currentUser) {
		// 		const userDocRef = doc(collection(getFirestore(), 'users'));

		// 		const userEmail = result.user.email;

		// 		const querySnapshot = await getDocs(query(collection(getFirestore(), 'users'), where('email', '==', userEmail)));

		// 		if (querySnapshot.empty) {
		// 			googleUser = {
		// 			name: result.user.displayName,
		// 			surname: "default",
		// 			job: "default",
		// 			date: "1999-09-21",
		// 			gender: "default",
		// 			country: "default",
		// 			email: userEmail,
		// 			};

		// 			await setDoc(userDocRef, googleUser);

		// 			console.log('Google ile giriş yapıldı ve yeni kullanıcı bilgileri Firestore\'a eklendi.');
		// 		} else {
		// 			const existingUser = querySnapshot.docs[0].data();

		// 			updatedUserInfo = {
		// 			name: result.user.displayName,
		// 			surname: existingUser.surname || "default",
		// 			job: existingUser.job || "default",
		// 			date: existingUser.date || "1999-09-21",
		// 			gender: existingUser.gender || "default",
		// 			country: existingUser.country || "default",
		// 			};

		// 			await updateDoc(userDocRef, updatedUserInfo);

		// 			console.log('Google ile giriş yapıldı ve mevcut kullanıcı bilgileri Firestore\'da güncellendi.');
		// 		}

		// 		store.commit('SET_USER', auth.currentUser.uid, updatedUserInfo || googleUser);
		// 		} else {
		// 		console.error('Kullanıcı nesnesi tanımsız (undefined).');
		// 		}
		// 	} catch (error) {
		// 		console.error('Google ile giriş yaparken bir hata oluştu:', error);
		// 	}
		// };





		const ForgotPassword = () => {
			sendPasswordResetEmail(auth, email_forgotten.value.email).
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
			handleGoogle2,
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

.reset input {
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
	background-color: aliceblue;
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