<template>
    <div class="home">
      
      <div class="header">
  
        <div class="header-text">      
          <h3>Do you want to find a drugger?</h3>
            <p>The primary goal of the application is to identify individuals whom we suspect may be drug addicts in our surroundings, diagnose them, and rescue them from this menace. The aim is to take preventive measures and liberate these individuals from the clutches of drug addiction.</p>
            <a href="https://play.google.com/store/apps?hl=tr&gl=US" target="_blank"><img id="playstoreicon" src="../assets/playstore.jpg" alt="" ></a>
        </div>
  
        <div class="header-image">
          <img src="../assets/drugger.jpg" alt="">
        </div>
  
  
      </div>
  
    </div>
  
    <div class="home-body">
  
  
      <div class="home-body-sec">
  
  
  
        <div class="gallery">

  
    </div>
  
      </div>
  
    <div class="home-body-details"> 
        <p>Drug addiction is a health issue that seriously affects individuals' lives and becomes a societal problem. Drug use typically negatively impacts an individual's mental and physical health, disrupting their social relationships and work life. Addiction often begins as curiosity, stress, or peer influence but can evolve into a habit of uncontrollable use over time. Drug addicts frequently experience estrangement from their families, friends, and society due to their addictions. The treatment process is a crucial step in combating addiction and generally involves medical, psychosocial, and rehabilitation approaches. During this process, it is important for the addict to receive support, have strong social connections, and acquire the necessary skills to sustain their life. Combating drug addiction is a significant issue for both individual and societal health, and effective solutions require both preventive measures and efficient treatment methods.</p>
    </div>
    
    <div class="home-body-details">
      <img id="drugger2" src="../assets/drugger2.jpg" alt="">
    </div>
  
      <div class="home-body-details">
        <p>Designed as an ideal application for parents, this platform provides a comprehensive diagnostic opportunity regarding the health and development of your children. Through this application, parents can better understand the needs of their children and support their healthy growth. On the other hand, tailored for police officers, this application offers a special ability to instantly identify suspects in their surroundings. This enables police officers to enhance their security measures more effectively and contribute to community safety. Aimed at providing customizable options, this practical application strives to offer solutions tailored to the individual needs of each user.</p>
    </div>
  
    
  
  
  
  
  
  
    </div>
  
  </template>
  
  <script>
  export default {
    
    data() {
      return {
        currentIndex: 0,
      };
    },
  };
  </script>
  
  
  <style>
    .home {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      padding-top: 40px;
      height: 800px;
      margin-left: 120px;
      /* background-image: url(../assets/bck.jpg);
      background-size: 100%; */

  }
  
  #playstoreicon{
    width: 150px;
    cursor: pointer;
  }
  
  .header {
      display: flex;
      flex-direction: row;

      
  }
  .header h3 {
    font-size: 27px;
  }
  #drugger2 {
    width: 500px;
    margin-left: 100px;
    margin-top: 50px;
    margin-bottom: 50px;
    border-radius: 5px;
  }

  .header-text {
    width: 750px;
    margin-top: 54px;
  }
  .header-image img {
    width: 380px;
    margin-left: 30px;
    height: 320px;
    border-radius: 5px;

    /* width: 680px; */
    /* margin-left: 150px;  */
    /* height: 120px; */
    /* margin-top: 145px; */
  }
  
  .home-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    height: 1350px; /* 800px */
    margin-bottom: 250px;
  }
  
  .image-homepage {
    width: 500px;
    border-radius: 10px;
    height: 300px;

    
  }
  
  .home-body-sec {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
  }
  
  .home-body-details {
    width: 700px;
    text-align: left;
    
  }
  .moon-star img {
    width: 70px;
    height: 50px;

  }
  
  .home-body ul li {
      padding-top: 25px;
      line-height: 2;
      word-spacing: 3px;
  }
  
  
  .slider button {
    border: 0;
    color: #ffff;
    cursor: pointer;
    border-radius: 10px;
    background-color: #00BFFF;
    transition:  0.2s;
    width: 70px;
    height: 30px;
  }
  
  .btn-for-img:hover {
    background-color: #ffff;
    color: #00BFFF;
  }
  
  .slider {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin-bottom: 75px;
  
  }
  
  .image-btn {
  
    width: 50px;
    height: auto;
    cursor: pointer;
  
  
  }
  
  @media only screen and (max-width: 850px) {
  
    .home {
      margin-left: 40px;
    }
    .header-image img {
    width: 270px;
    margin-left: 20px;
    margin-top: 50px;
  }
  .header-text {
    width: 300px;
    height: 300px;
  }
  .header h3 {
    font-size: 17px;
  }
  .image-btn {
    width: 30px;
  }
  .image-homepage {
    width: 272px;
    height: 194px;
  }
  .home-body-details {
    width: 345px;
  
  }
  .header {
      display: flex;
      flex-direction: column;
  }
  
  
  }
  
  </style>