const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')
const userLogged = document.querySelectorAll('.userLogged')

console.log(loggedOutLinks)
console.log(loggedInLinks)
console.log(userLogged)

export const loginCheck = user => {

    if (user) {
        loggedInLinks.forEach(link => link.style.display = 'block')
        loggedOutLinks.forEach(link => link.style.display = 'none')
        userLogged.forEach(link => link.style.display = 'block')
    } else {
        userLogged.forEach(link => link.style.display = 'none')
        loggedOutLinks.forEach(link => link.style.display = 'block')
        loggedInLinks.forEach(link => link.style.display = 'none')
    }
}