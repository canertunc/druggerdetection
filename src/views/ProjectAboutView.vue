

<template>
    <div class="project-about">

        <div class="project-about-mains">
            <h3>App background</h3>
            <div><p>
    Predicts whether the human face given to the model is a drug addict. This model was coded with the
    convutaional neural network method, which is one of the deep learning techniques. The model has been
    filtered 3 times and the data in the model has been replicated using data duplication technique. You can
    call this replication technique by the name 'Data Augmentation'. The accuracy rate of the model is 92
    percent, this rate is quite high, but as more improvements are made to the model, this rate will
    decrease gradually, but it will become a better model. Improvements of the model are still in progress.
    If you want to get more detailed information about the model, you can contact us from the contact
    section.</p></div>
        </div>


        <div class="project-about-mains">
            <h3>The Usage of the Application</h3>
            <p>The application is remarkably simple and user-friendly. It will be developed to be compatible with the Android platform and can be downloaded to mobile devices through the respective platform's application store. Additionally, compatibility with the iOS platform will be introduced in the near future. Users will have access to usage information and privacy policies during the application installation process.</p>
        </div>
        <div class="project-about-mains interface">
            <div><img src="../assets/home.jpeg" alt=""></div>
            <div>
                <h4>Home:</h4>
                <p>We have not yet completed our home page. But we have interfaced the basic functions.</p>
            </div>
        </div>

        <div class="project-about-mains interface">
            <div><img src="../assets/login.jpeg" alt=""></div>
            <div>
                <h4>Login and Register:</h4>
                <p>In this section, we added the login and sign up functions, but we have not yet added the direct sign up and log in function with Google or similar accounts.</p>
            </div>
        </div>

        
        <!-- <div class="project-about-mains interface">
            <div><img src="" alt=""></div>
            <div>
                <h4>Lorem ipsum dolor sit:</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime alias facilis aliquid omnis quis voluptate vel blanditiis sint ut dolores fugit, sapiente esse dolorem!</p>
            </div>
        </div>
        
        <div class="project-about-mains interface">
            <div><img src="" alt=""></div>
            <div>
                <h4>Lorem ipsum dolor sit amet:</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime alias facilis aliquid omnis quis voluptate vel blanditiis sint ut dolores fugit, sapiente esse dolorem!</p>
            </div>
        </div> -->


    </div>
</template>


<style>

    .project-about {
        height: 2070px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 58px;
    }

    .project-about-int {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .project-about-mains {
        width: 800px;
        margin-top: 100px;
    }

    .interface img {
        width: 225px;
        height: 450px;

    }
    .interface {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
    @media only screen and (max-width: 850px) {

        .project-about-mains {
        width: 350px;
    }

    .interface img {
        width: 115px;
        height: 228px;

    }





    }

</style>