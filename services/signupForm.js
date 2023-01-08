import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from "./firebase.js";

const signupForm = document.querySelector('#signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault()

        const email = signupForm['signup-email'].value
        const password = signupForm['signup-password'].value

        /**
         * Corrección
         * Este console.log sobra
         */
        console.log(email, password)

        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
            console.log(userCredentials);
            //Para cerrar la ventana emergente que se quedaba abierta
            const signupModal = document.querySelector('#signupModal')
            const modal = bootstrap.Modal.getInstance(signupModal)
            modal.hide()

            alert('Welcome: ' + email)

            location = '../views/dashboard.html'

        } catch (error) {
            console.log(error.message)
            console.log(error.code)
            /**
             * Corrección
             * Deberíamos usar en este caso un switch
             */
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use')
            }
            else if (error.code === 'auth/invalid-email') {
                alert('Invalid email');
            } else if (error.code === 'auth/weak-password') {
                alert('Password is too weak')
            } else if (error.code) {
                alert('Something went wrong')
            }

        }
    })
}