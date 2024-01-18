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

					<div class="inf-divin">
						<div><label for="date">Date of Birth:</label></div>
						<div><input class="input-widt2" type="date" placeholder="date" v-model="register_form.date" /></div>
					</div>
					<!-- <div> <input type="gender" placeholder="gender" v-model="register_form.gender" /></div> -->


					<div class="inf-divin">
						<div>
							<label for="gender" class="gender-label">Gender:</label>
						</div>

						<div>
							<select v-model="register_form.gender" id="gender" name="gender" class="input-widt">
								<option :value="null" disabled>Select gender</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="other">Other</option>
							</select>
						</div>



					</div>

					<div> <input type="job" placeholder="Job" v-model="register_form.job" /></div>
					<div class="inf-divin">
						<!-- <input type="country" placeholder="Country" v-model="register_form.country" /> -->
						<div>
							<label for="country">Country:</label>
						</div>
						<div>
							<select v-model="register_form.country" id="country" name="country" class="input-widt">
								<option :value="null" disabled>Select country</option>
								<option value="Turkey">Turkey</option>
								<option value="U.S. Virgin Islands">U.S. Virgin Islands</option>
								<option value="Afghanistan">Afghanistan</option>
								<option value="Åland Islands">Åland Islands</option>
								<option value="Germany">Germany</option>
								<option value="United States">United States</option>
								<option value="United States Minor Outlying Islands">United States Minor Outlying Islands
								</option>
								<option value="American Samoa">American Samoa</option>
								<option value="Andorra">Andorra</option>
								<option value="Angola">Angola</option>
								<option value="Anguilla">Anguilla</option>
								<option value="Antarctica">Antarctica</option>
								<option value="Antigua and Barbuda">Antigua and Barbuda</option>
								<option value="Argentina">Argentina</option>
								<option value="Albania">Albania</option>
								<option value="Armenia">Armenia</option>
								<option value="Aruba">Aruba</option>
								<option value="European Union">European Union</option>
								<option value="Australia">Australia</option>
								<option value="Austria">Austria</option>
								<option value="Azerbaijan">Azerbaijan</option>
								<option value="Bahamas">Bahamas</option>
								<option value="Bahrain">Bahrain</option>
								<option value="Bangladesh">Bangladesh</option>
								<option value="Barbados">Barbados</option>
								<option value="Western Sahara">Western Sahara</option>
								<option value="Belize">Belize</option>
								<option value="Belgium">Belgium</option>
								<option value="Benin">Benin</option>
								<option value="Bermuda">Bermuda</option>
								<option value="Belarus">Belarus</option>
								<option value="Bhutan">Bhutan</option>
								<option value="Unknown or Invalid Region">Unknown or Invalid Region</option>
								<option value="United Arab Emirates">United Arab Emirates</option>
								<option value="United Kingdom">United Kingdom</option>
								<option value="Bolivia">Bolivia</option>
								<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
								<option value="Botswana">Botswana</option>
								<option value="Bouvet Island">Bouvet Island</option>
								<option value="Brazil">Brazil</option>
								<option value="Brunei">Brunei</option>
								<option value="Bulgaria">Bulgaria</option>
								<option value="Burkina Faso">Burkina Faso</option>
								<option value="Burundi">Burundi</option>
								<option value="Cape Verde">Cape Verde</option>
								<option value="Gibraltar">Gibraltar</option>
								<option value="Algeria">Algeria</option>
								<option value="Christmas Island">Christmas Island</option>
								<option value="Djibouti">Djibouti</option>
								<option value="Cocos Islands">Cocos Islands</option>
								<option value="Cook Islands">Cook Islands</option>
								<option value="Chad">Chad</option>
								<option value="Czech Republic">Czech Republic</option>
								<option value="China">China</option>
								<option value="Denmark">Denmark</option>
								<option value="Dominican Republic">Dominican Republic</option>
								<option value="East Timor">East Timor</option>
								<option value="Ecuador">Ecuador</option>
								<option value="Equatorial Guinea">Equatorial Guinea</option>
								<option value="El Salvador">El Salvador</option>
								<option value="Indonesia">Indonesia</option>
								<option value="Eritrea">Eritrea</option>
								<option value="Armenia">Armenia</option>
								<option value="Estonia">Estonia</option>
								<option value="Ethiopia">Ethiopia</option>
								<option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
								<option value="Faroe Islands">Faroe Islands</option>
								<option value="Morocco">Morocco</option>
								<option value="Fiji">Fiji</option>
								<option value="Ivory Coast">Ivory Coast</option>
								<option value="Philippines">Philippines</option>
								<option value="Palestinian Territory">Palestinian Territory</option>
								<option value="Finland">Finland</option>
								<option value="France">France</option>
								<option value="French Guiana">French Guiana</option>
								<option value="French Southern Territories">French Southern Territories</option>
								<option value="French Polynesia">French Polynesia</option>
								<option value="Gabon">Gabon</option>
								<option value="Gambia">Gambia</option>
								<option value="Ghana">Ghana</option>
								<option value="Guinea">Guinea</option>
								<option value="South Africa">South Africa</option>
								<option value="South Georgia and the South Sandwich Islands">South Georgia and the South
									Sandwich Islands</option>
								<option value="South Korea">South Korea</option>
								<option value="Cyprus">Cyprus</option>
								<option value="Georgia">Georgia</option>
								<option value="Haiti">Haiti</option>
								<option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
								<option value="India">India</option>
								<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
								<option value="Netherlands">Netherlands</option>
								<option value="Netherlands Antilles">Netherlands Antilles</option>
								<option value="Honduras">Honduras</option>
								<option value="Hong Kong SAR - China">Hong Kong SAR - China</option>
								<option value="Croatia">Croatia</option>
								<option value="Iraq">Iraq</option>
								<option value="British Virgin Islands">British Virgin Islands</option>
								<option value="Iran">Iran</option>
								<option value="Ireland">Ireland</option>
								<option value="Spain">Spain</option>
								<option value="Israel">Israel</option>
								<option value="Sweden">Sweden</option>
								<option value="Switzerland">Switzerland</option>
								<option value="Italy">Italy</option>
								<option value="Iceland">Iceland</option>
								<option value="Jamaica">Jamaica</option>
								<option value="Japan">Japan</option>
								<option value="Jersey">Jersey</option>
								<option value="Cambodia">Cambodia</option>
								<option value="Cameroon">Cameroon</option>
								<option value="Canada">Canada</option>
								<option value="Montenegro">Montenegro</option>
								<option value="Qatar">Qatar</option>
								<option value="Cayman Islands">Cayman Islands</option>
								<option value="Kazakhstan">Kazakhstan</option>
								<option value="Kenya">Kenya</option>
								<option value="Kiribati">Kiribati</option>
								<option value="Colombia">Colombia</option>
								<option value="Comoros">Comoros</option>
								<option value="Congo">Congo</option>
								<option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
								<option value="Costa Rica">Costa Rica</option>
								<option value="Kuwait">Kuwait</option>
								<option value="North Korea">North Korea</option>
								<option value="Northern Mariana Islands">Northern Mariana Islands</option>
								<option value="Cuba">Cuba</option>
								<option value="Kyrgyzstan">Kyrgyzstan</option>
								<option value="Laos">Laos</option>
								<option value="Lesotho">Lesotho</option>
								<option value="Latvia">Latvia</option>
								<option value="Liberia">Liberia</option>
								<option value="Libya">Libya</option>
								<option value="Liechtenstein">Liechtenstein</option>
								<option value="Lithuania">Lithuania</option>
								<option value="Lebanon">Lebanon</option>
								<option value="Luxembourg">Luxembourg</option>
								<option value="Hungary">Hungary</option>
								<option value="Madagascar">Madagascar</option>
								<option value="Macao SAR - China">Macao SAR - China</option>
								<option value="Macedonia">Macedonia</option>
								<option value="Malawi">Malawi</option>
								<option value="Maldives">Maldives</option>
								<option value="Malaysia">Malaysia</option>
								<option value="Mali">Mali</option>
								<option value="Malta">Malta</option>
								<option value="Isle of Man">Isle of Man</option>
								<option value="Marshall Islands">Marshall Islands</option>
								<option value="Martinique">Martinique</option>
								<option value="Mauritius">Mauritius</option>
								<option value="Mayotte">Mayotte</option>
								<option value="Mexico">Mexico</option>
								<option value="Micronesia">Micronesia</option>
								<option value="Moldova">Moldova</option>
								<option value="Monaco">Monaco</option>
								<option value="Montserrat">Montserrat</option>
								<option value="Mauritania">Mauritania</option>
								<option value="Mozambique">Mozambique</option>
								<option value="Mongolia">Mongolia</option>
								<option value="Myanmar">Myanmar</option>
								<option value="Egypt">Egypt</option>
								<option value="Namibia">Namibia</option>
								<option value="Nauru">Nauru</option>
								<option value="Nepal">Nepal</option>
								<option value="Niger">Niger</option>
								<option value="Nigeria">Nigeria</option>
								<option value="Nicaragua">Nicaragua</option>
								<option value="Niue">Niue</option>
								<option value="Norfolk Island">Norfolk Island</option>
								<option value="Norway">Norway</option>
								<option value="Central African Republic">Central African Republic</option>
								<option value="Uzbekistan">Uzbekistan</option>
								<option value="Pakistan">Pakistan</option>
								<option value="Palau">Palau</option>
								<option value="Panama">Panama</option>
								<option value="Papua New Guinea">Papua New Guinea</option>
								<option value="Paraguay">Paraguay</option>
								<option value="Peru">Peru</option>
								<option value="Pitcairn">Pitcairn</option>
								<option value="Poland">Poland</option>
								<option value="Portugal">Portugal</option>
								<option value="Puerto Rico">Puerto Rico</option>
								<option value="Réunion">Réunion</option>
								<option value="Romania">Romania</option>
								<option value="Rwanda">Rwanda</option>
								<option value="Russian Federation">Russian Federation</option>
								<option value="Saint Helena">Saint Helena</option>
								<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
								<option value="Saint Lucia">Saint Lucia</option>
								<option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
								<option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
								<option value="Samoa">Samoa</option>
								<option value="San Marino">San Marino</option>
								<option value="Sao Tome and Principe">Sao Tome and Principe</option>
								<option value="Senegal">Senegal</option>
								<option value="Seychelles">Seychelles</option>
								<option value="Sierra Leone">Sierra Leone</option>
								<option value="Singapore">Singapore</option>
								<option value="Slovakia">Slovakia</option>
								<option value="Slovenia">Slovenia</option>
								<option value="Solomon Islands">Solomon Islands</option>
								<option value="Somalia">Somalia</option>
								<option value="Sri Lanka">Sri Lanka</option>
								<option value="Sudan">Sudan</option>
								<option value="Suriname">Suriname</option>
								<option value="Syria">Syria</option>
								<option value="Saudi Arabia">Saudi Arabia</option>
								<option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
								<option value="Swaziland">Swaziland</option>
								<option value="Serbia">Serbia</option>
								<option value="Serbia and Montenegro">Serbia and Montenegro</option>
								<option value="Chile">Chile</option>
								<option value="Tajikistan">Tajikistan</option>
								<option value="Tanzania">Tanzania</option>
								<option value="Thailand">Thailand</option>
								<option value="Taiwan">Taiwan</option>
								<option value="Togo">Togo</option>
								<option value="Tokelau">Tokelau</option>
								<option value="Tonga">Tonga</option>
								<option value="Trinidad and Tobago">Trinidad and Tobago</option>
								<option value="Tunisia">Tunisia</option>
								<option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
								<option value="Tuvalu">Tuvalu</option>
								<option value="Turkmenistan">Turkmenistan</option>
								<option value="Uganda">Uganda</option>
								<option value="Ukraine">Ukraine</option>
								<option value="Oman">Oman</option>
								<option value="Uruguay">Uruguay</option>
								<option value="Oceania">Oceania</option>
								<option value="Jordan">Jordan</option>
								<option value="Vanuatu">Vanuatu</option>
								<option value="Vatican">Vatican</option>
								<option value="Venezuela">Venezuela</option>
								<option value="Vietnam">Vietnam</option>
								<option value="Wallis and Futuna">Wallis and Futuna</option>
								<option value="Yemen">Yemen</option>
								<option value="New Caledonia">New Caledonia</option>
								<option value="New Zealand">New Zealand</option>
								<option value="Greece">Greece</option>
								<option value="Zambia">Zambia</option>
								<option value="Zimbabwe">Zimbabwe</option>


							</select>
						</div>
					</div>

					<div> <input type="email" placeholder="Email address" v-model="register_form.email" /></div>
					<div> <input type="password" placeholder="Password" v-model="register_form.password" /></div>

				</div>



				<div class="divin">
					<div> <input type="submit" value="Register" class="login-btn" /></div>

					<div class="for-google">

						<div><img src="../assets/google-icon.png" alt=""></div>
						<div>
							<h6 class="google-btn" @click="handleGoogle()">Register With Google</h6>
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
import { getDoc, getFirestore, setDoc, collection, doc } from 'firebase/firestore';

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
		register_form.value.address = "";
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
						address: ""
					};

					const name = result.user.displayName;
					const surname = "default";
					const gender = "default";
					const date = "1999-09-21";
					const job = "default";
					const country = "default";
					const address = "";

					const userDocRef = doc(collection(getFirestore(), 'users'), auth.currentUser.uid);
					await setDoc(userDocRef, {
						...googleUser,
					});

					// Kullanıcı bilgilerini Vuex'ta güncelleyin
					store.commit('SET_USER', { ...auth.currentUser, name, surname, gender, date, job, country, address });


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
				const result = await signInWithPopup(auth, provider);
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
						const address = userData.address;

						// Kullanıcı adını Vuex store'a ekleyebilirsiniz
						store.commit('SET_USER', { ...auth.currentUser, name, surname, gender, date, job, country, address });
					} else {
						const googleUser = {
							name: result.user.displayName,
							surname: "default",
							job: "default",
							date: "1999-09-21",
							gender: "default",
							country: "default",
							address: ""
						};

						const name = result.user.displayName;
						const surname = "default";
						const gender = "default";
						const date = "1999-09-21";
						const job = "default";
						const country = "default";
						const address = "";

						const userDocRef = doc(collection(getFirestore(), 'users'), auth.currentUser.uid);
						await setDoc(userDocRef, {
							...googleUser,
						});

						// Kullanıcı bilgilerini Vuex'ta güncelleyin
						store.commit('SET_USER', { ...auth.currentUser, name, surname, gender, date, job, country, address });
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


.input-widt {
	width: 110px;
}

.input-widt2 {
	width: 80px;
}

.inf-divin {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	gap: 7px;
}

.inf-divin label {
	font-size: 12px;

}


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
	margin-top: 10px;
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
	height: 450px;
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