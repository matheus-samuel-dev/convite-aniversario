import { initializeApp }
from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {

    apiKey: "AIzaSyARmEdekRrYz48-iKjKALWsHoTZVeVMOAA",

    authDomain:
        "convite-aniversario-9398f.firebaseapp.com",

    projectId:
        "convite-aniversario-9398f",

    storageBucket:
        "convite-aniversario-9398f.firebasestorage.app",

    messagingSenderId:
        "697178657589",

    appId:
        "1:697178657589:web:65a3ed09e68c7d3e8af27c"
};

const app =
    initializeApp(firebaseConfig);

const auth =
    getAuth(app);

const form =
    document.getElementById(
        "login-form"
    );

form.addEventListener(
    "submit",

    async (event) => {

        event.preventDefault();

        const email =
            document.getElementById(
                "email"
            ).value;

        const password =
            document.getElementById(
                "password"
            ).value;

        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            window.location.href =
                "pages/dashboard.html";

        }

        catch (error) {

            alert(
                "E-mail ou senha inválidos."
            );

            console.error(error);

        }

    }
);