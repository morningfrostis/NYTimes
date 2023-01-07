import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'

const githubButton = document.querySelector('#githubLogin')
if (githubButton) {
    githubButton.addEventListener('click', async () => {

        const provider = new GithubAuthProvider()

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