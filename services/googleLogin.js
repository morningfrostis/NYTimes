import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'

const googleButton = document.querySelector('#googleLogin')
if (googleButton) {
    googleButton.addEventListener('click', async () => {

        const provider = new GoogleAuthProvider()

        try {
            const credentials = await signInWithPopup(auth, provider)
            /**
             * Corrección
             * console.log sobra
             */
            console.log(credentials)

            const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
            modal.hide()

            alert('Welcome: ' + credentials.user.displayName)
            location = '../views/dashboard.html'

        } catch (error) {
            console.log(error)
        }
    }

    )
}