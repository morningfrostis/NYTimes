import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'

const facebookButton = document.querySelector('#facebookLogin')
if (facebookButton) {
    facebookButton.addEventListener('click', async () => {

        const provider = new FacebookAuthProvider()

        try {
            const credentials = await signInWithPopup(auth, provider)
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