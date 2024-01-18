<template>
  <div class="user-profile2">


    <div class="choice-inf">
      <div><h3>User Account</h3></div>

      <div><button @click="showPersonal()">Personal Informations</button></div>
      <div><button @click="showContact()">Location Informations</button></div>
      <div><button @click="showAccount()">Account settings</button></div>

    </div>


    <div class="detail-inf">

      <div class="personal-informations" v-if="isPersonal && !isEdit">
        <div style="margin-bottom: 40px;">
          <h3>Personal Informations</h3>
          <hr>
        </div>

        <div class="profile-item">
          <label class="changeable2-label2" for="name">Name:</label>
          <span id="name">{{ username }}</span>
        </div>
        <div class="profile-item">
          <label class="changeable2-label2" for="surname">Surname:</label>
          <span id="surname">{{ usersurname }}</span>
        </div>
        <div class="profile-item">
          <label class="changeable2-label2" for="gender">Gender:</label>
          <span id="gender">{{ usergender }}</span>
        </div>
        <div class="profile-item">
          <label class="changeable2-label2" for="date">Date of Birth:</label>
          <span id="date">{{ userdate }}</span>
        </div>
        <div class="profile-item">
          <label class="changeable2-label2" for="job">Job:</label>
          <span id="job">{{ userjob }}</span>
        </div>
        <button class="edit" @click="isEdit = !isEdit">edit</button>


      </div>


      <div class="personal-informations changeable2" v-if="isPersonal && isEdit">
        <div style="margin-bottom: 40px;">
          <h3>Personal Informations</h3>
          <hr>
        </div>

        <div class="profile-item">
          <label for="name" class="changeable2-label2 changeable2-label3">Name:</label>
          <input class="changeable2-label" type="name" :placeholder="username" :value="username" v-model="username" />

        </div>
        <div class="profile-item">
          <label class="changeable2-label2 changeable2-label3" for="surname">Surname:</label>
          <input class="changeable2-label" type="surname" :placeholder="usersurname" :value="usersurname" v-model="usersurname" />
        </div>
        <div class="profile-item">
          <label class="changeable2-label2 changeable2-label3" for="gender">Gender:</label>
          <select class="changeable2-label" v-model="usergender" id="gender" name="gender" :value="usergender">
            <option :value="null" disabled>Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="profile-item">
          <label class="changeable2-label2 changeable2-label3" for="date">Date of Birth:</label>
          <input class="changeable2-label" type="date" :placeholder="userdate" :value="userdate" v-model="userdate" />
        </div>
        <div class="profile-item">
          <label class="changeable2-label2 changeable2-label3" for="job">Job:</label>
          <input class="changeable2-label" type="job" :placeholder="userjob" :value="userjob" v-model="userjob" />
        </div>

        <button class="save" @click="updateUserInfo()">save</button>


      </div>







      <div class="contact-informations " v-if="isContact && !isEdit">
        <div style="margin-bottom: 40px;">
          <h3>Location Informations</h3>
          <hr>
        </div>

        <div class="profile-item address-item">
          <label class="changeable2-label2" for="country">Country:</label>
          <span id="country">{{ usercountry }}</span>
        </div>

        <div class="profile-item address-item">
          <div> 
            <label class="changeable2-label2" for="address">Address:</label>
          </div>



          <div>
            <span id="address">{{ useraddress }}</span>
          </div>
        </div>

        <button class="edit edit-contact" @click="isEdit = !isEdit">edit</button>

      </div>


      <div class="contact-informations changeable2" v-if="isContact && isEdit">
        <div style="margin-bottom: 40px;">
          <h3>Location Informations</h3>
          <hr>
        </div>

        <div class="profile-item address-item">
          <label class="changeable2-label2 changeable2-label3" for="country">Country:</label>

          <!-- <input type="country" :placeholder="usercountry" :value="usercountry" v-model="usercountry" /> -->

          <select  v-model="usercountry" id="country" name="country" class="input-widt changeable2-label" :value="usercountry">
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

        <div class="profile-item address-item">
          <label class = "changeable2-label2 changeable2-label3" for="address">Address:</label>
          <textarea class = "changeable2-label" name="address" id="address" cols="30" rows="10" :placeholder="address" :value="useraddress" v-model="useraddress" ></textarea>
          <!-- <input type="address" :placeholder="address" :value="useraddress" v-model="useraddress" /> -->
        </div>

        <button class="save save-contact" @click="updateUserInfo()">save</button>


      </div>




      <div class="account-settings" v-if="isAccount && !isEdit">
        <div style="margin-bottom: 40px;">
          <h3>Account Settings</h3>
          <hr>
        </div>

        <div class="profile-item">
          <label class="changeable2-label2" for="email">Email:</label>
          <span id="email">{{ useremail }}</span>
        </div>
        <div class="profile-item">
          <label class="changeable2-label2" for="password">Password:</label>
          <span id="password">********</span>
          <button class="change-password-user" @click="ForgotPassword()">Change password</button>
        </div>
        <div class="profile-item">
          <label class="changeable2-label2" for="verification">verification:</label>
          <span id="verification" v-if="verfy">verified</span>
          <span id="verification" v-if="!verfy">not verified</span>

        </div>
      </div>






    </div>








  </div>








  <!-- <div class="user-profile" v-if="!isEdit">
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
        <span id="gender">{{ usergender }}</span>
      </div>
      <div class="profile-item">
        <label for="date">Date of Birth:</label>
        <span id="date">{{ userdate }}</span>
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





  <div class="user-profile changeable" v-if="isEdit">
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
        <select v-model="usergender" id="gender" name="gender" :value="usergender">
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
        <label for="country">Country:</label> -->
  <!-- <input type="country" :placeholder="usercountry" :value="usercountry" v-model="usercountry" /> -->

  <!-- <select v-model="usercountry" id="country" name="country" class="input-widt" :value="usercountry">
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
  </div> -->


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
    const useraddress = ref(store.state.user.address);

    const verfy = ref(store.state.user.emailVerified);
    const isEdit = ref(false);


    const isPersonal = ref(true);
    const isContact = ref(false);
    const isAccount = ref(false);


    const showPersonal = () => {

      isPersonal.value = true;
      isContact.value = false;
      isAccount.value = false;

    }

    const showContact = () => {

      isPersonal.value = false;
      isContact.value = true;
      isAccount.value = false;

    }

    const showAccount = () => {

      isPersonal.value = false;
      isContact.value = false;
      isAccount.value = true;

    }


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
            address : useraddress.value,
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
            address : useraddress.value,

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
      useraddress,
      ForgotPassword,
      verfy,
      isEdit,
      updateUserInfo,
      isPersonal,
      isContact,
      isAccount,
      showAccount,
      showContact,
      showPersonal

    }
  }
}
</script>

  
<style>


.address-item {
  display: flex;
  flex-direction: row;
  width: 250px;
}




.user-profile2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  margin-top: 200px;
  height: 450px;
}

.choice-inf {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d4d4d4;
  width: 230px;
  height: 450px;
  gap: 10px;

}

.detail-inf {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255,255,255); /*cbedff */
  width: 370px;
  height: 450px;

}

.choice-inf button {
  width: 170px;
  font-size: 11px;
  background-color: rgb(223, 234, 250);
  cursor: pointer;
  font-size: 15px;
  border: 0;
  border-radius: 3px;
}

.choice-inf button:hover {
  background-color: rgb(183, 212, 241);
}



.edit-contact {
  margin-right: 50px;
}

.save-contact {
  margin-right: 71px
}







.changeable2-label {
  background-color: rgb(255, 255, 255);
  /*rgb(255, 245, 238) */
  border: 3px solid rgb(0, 0, 0);
  
}

.changeable2-label3 {
  margin-right: 10px;
}





.svg-half {
  position: relative;
}

.svg-half img {
  border-radius: 50%;
  width: 75px;
  height: 75px;
}

.svg-half svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 75px;
  height: 75px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  overflow: visible;
  stroke: #ff5722;
  stroke-width: 6;
  transform: rotate(90deg);
  stroke: url(#gradiant);
}

.edit {
  width: 80px;
  color: aliceblue;
  background-color: rgb(190, 40, 40);
  cursor: pointer;
  margin-left: 65px;
  margin-top: 27px;
  border: 0;
  border-radius: 4px;
}

.save {
  width: 80px;
  color: aliceblue;
  background-color: rgb(59, 208, 59);
  cursor: pointer;
  margin-left: 90px;
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

.changeable2-label2 {
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