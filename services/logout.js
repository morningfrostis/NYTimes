//signOut es una función de Firebase que permite cerrar la sesion desde nuestro frontend
import { signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

import { auth } from "./firebase.js"

const logout = document.querySelector('#logout')

logout.addEventListener('click', async () => {
    await signOut(auth)
    console.log('user sign Out')
    location = '../index.html'

})