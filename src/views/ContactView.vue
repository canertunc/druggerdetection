<template>
    <div class="contact">
        <div class="container">
        <h1>Contact Informations</h1>
        <div class="contact-info">
            <div class="email">
                <h2>E-mail</h2>
                <p><a href="mailto:ornek@gmail.com">druggerdetectionapp@gmail.com</a></p>
            </div>
            <div class="phone">
                <h2>Phone</h2>
                <a href="tel:+905319763107"><p>+905319763107</p></a>
            </div>
        </div>
    </div>
    </div>

    
  <footer class="footer">

<div>
  <h5>Drugger Detection © 2023-2024</h5>
</div>
</footer>

</template>

<style>
    .contact {
        height: 350px;
    }
    .container {
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-top: 300px;
}

.container h1 {
    text-align: center;
    color: #333;
    font-size: 20px;
}

.contact-info {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.email,
.phone {
    text-align: center;
}

.container h2 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #555;
}

.container a {
    text-decoration: none;
    color: rgb(53, 211, 53);
}

.container a:hover {
    text-decoration: underline;
}

@media  (max-width: 768px) {

    .container {
        max-width: 300px;
    }
    .contact-info p {
        font-size: 11px;
    }





}


</style>