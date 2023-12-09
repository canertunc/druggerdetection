<template>

  <div id="nav" class="nav-bar" :class="{ scrolled: isScrolled }" v-if="$store.state.user">

<div class="head">
  <div>
  </div>
  <div>
    <h2 id="start">Drugger Detection</h2>
  </div>
</div>

<div class="links">
  <router-link class="page" to="/">Home</router-link> 
  <router-link class="page" to="/projectabout">Application Guide</router-link>
  <router-link class="page" to="/about">About</router-link>
  <router-link class="page" to="/contact">Contact</router-link>
  <router-link class="page" to="/user">User</router-link>
  <button id="logoutbut" class="page" @click="$store.dispatch('logout')">Logout</button>

</div>

<div class="res-menu" :class="{ change: isClick }" @click="isClick = !isClick">
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>

  <div :class="{ res: !isClick, resmenu: isClick }">
    <div>
      <router-link class="page3" to="/">Home</router-link>
    </div>
    <div> <router-link class="page3" to="/projectabout">Application Guide</router-link>
    </div>
    <div> <router-link class="page3" to="/about">About</router-link>
    </div>
    <div> <router-link class="page3" to="/contact">Contact</router-link>
    </div>
  </div>

</div>


</div>
<router-view></router-view>



  
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'


export default {

  data() {
    return {
      isScrolled: false,
      isWhite: false,
      isBottom: true,
      dynamicStyles: {
        backgroundColor: '#ffff' // Başlangıçta varsayılan arka plan rengi    
      },
      isClick: false,
      isValidate: false,
      

      // Caner Tunç 


    }
  },
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
      this.isBottom = !this.isBottom;
    },


  }
}
</script>

<style>
#logoutbut{
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgb(212, 28, 8);
  color: #ffff;
}

.res {
  display: none;
  cursor: none;
}

.resmenu {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  margin-top: 20px;
  margin-bottom: 12px;
}

.page3 {
  text-decoration: none;
  color: #00BFFF;
  transition: 0.5s;
  font-size: 14px;
}
.page3:hover {
  color: red;
  font-size: 14px;
  
}

.res-menu {
  display: none;
  cursor: pointer;
  margin-right: 95px;
  margin-left: 70px;
  margin-top: 10px;
}


.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
  margin-left: 14px;
}

/* Rotate first bar */
.change .bar1 {
  transform: translate(0, 11px) rotate(-45deg);
}

/* Fade out the second bar */
.change .bar2 {
  opacity: 0;
}

/* Rotate last bar */
.change .bar3 {
  transform: translate(0, -11px) rotate(45deg);
}


#start {
  font-size: 40px;
}

#start img {
  width: 270px;
  height: 70px;
}

.head {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  color: rgb(235, 114, 29); /*rgb(177, 57, 57)*/
}

.nav-bar {
  position: fixed;
  transition: background-color 0.1s ease;
}

.scrolled {
  background-color: rgb(0, 0, 0);
}

.white {
  background-color: white;
}

body {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #ffff;   /*rgb(234, 233, 233) */
  color: black;
  font-family: 'Dosis', sans-serif;
  font-family: 'Lato', sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Nunito', sans-serif;
  font-family: 'Roboto Mono', monospace;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  color: aliceblue;
  width: 1646px;
  backdrop-filter: blur(25px);
  margin-top: 40px;
  height: 100px;
}

.head {
  margin-left: 75px;
}

.links {
  margin-right: 175px;
}

.page {
  text-decoration: none;
  color: rgb(255, 98, 0);
  margin-right: 35px;
  border-radius: 4px;
  padding: 10px 10px;
}













.page2 {
  text-decoration: none;
  color: #00BFFF;
  margin-right: 35px;
  border-radius: 4px;
  padding: 10px 10px;
}


.page:hover {
  padding: 12px 12px;
  border-bottom: 5px rgb(243, 189, 156) solid;
  font-size: 18px;
}

.page2:hover {
  padding: 12px 12px;
  border-bottom: 5px black solid;
  font-size: 18px;
}

.footer {
  text-align: center;
  margin-top: 150px;
}

.home {
  animation: slideInLeft 1.5s ease-in-out;

}

p {
  word-spacing: 3px;
  line-height: 2;

}

@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}


@media only screen and (max-width: 850px) {
  body {
    font-size: 12px;
  }

  #start img {
    width: 150px;
    height: 39px;
    margin-top: 20px;
  }

  .links {
    display: none;
  }

  .res-menu {
    display: block;
  }

  .nav-bar {
    width: auto;

  }

}</style>
