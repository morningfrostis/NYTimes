import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'

const siginForm = document.querySelector('#login-form')
if (siginForm) {
    siginForm.addEventListener('submit', async e => {
        e.preventDefault()

        const email = siginForm['login-email'].value;
        const password = siginForm['login-password'].value;

        try {
            const credentials = await signInWithEmailAndPassword(auth, email, password)
            console.log(credentials)

            const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
            modal.hide()

            alert('Welcome: ' + credentials.user.email)

            location = '../views/dashboard.html'

        } catch (error) {
            console.log(error)
            if (error.code === 'auth/wrong-password') {
                alert('Wrong password')
            } else if (error.code === 'auth/user-not-found') {
                alert('User not found');
            } else {
                alert('Something went wrong')
            }
        }
    })
}