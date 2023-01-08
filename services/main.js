//Usamos onAuthStateChanged para saber si el usuario está logueado o no.
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

import { auth } from './firebase.js'
import { loginCheck } from './loginCheck.js'

import './signupForm.js'
import './signinForm.js'
import './googleLogin.js'
import './facebookLogin.js'
import './githubLogin.js'
import './logout.js'


onAuthStateChanged(auth, async (user) => {
    /**
     * Corrección
     * console.log sobra
     */
    console.log(user)
    loginCheck(user)
    //if (user) {
    //    loginCheck(user)
    //} else {
    //    loginCheck(user)
    //}
});