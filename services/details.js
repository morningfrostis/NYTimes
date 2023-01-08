import { saveFavs, getFavs } from "./firebase.js";
const booksByCategory = document.getElementById('row')

const nameCategory = document.getElementById('nameCategoryBooks')

const LOCALSTORAGE_NY = 'id_categoria'
const categoria = localStorage.getItem(LOCALSTORAGE_NY);

if (categoria) {

    getFavs().then((favs) => {
        console.log(favs)
        fetch('https://api.nytimes.com/svc/books/v3/lists/current/' + categoria + '.json?api-key=zDcNYZLAAAyz53sPI5rfz9DJnND9qEpO')
            .then((response) => response.json())
            .then((data) => { display(data, favs) })
            .catch(error => console.log(error))
    })
} else {
    window.location.href = "dashboard.html";
}
function display(data, favs) {
    /**
     * Corrección
     * console.log sobra
     */
    console.log(data.results)
    booksByCategory.innerHTML = '';
    nameCategory.innerHTML = `Best Sellers in ${categoria}`

    /**
     * Corrección
     * Deberíamos usar un FOR..OF
     */
    for (let i = 0; i < data.results.books.length; i++) {
        // Pintamos en el DOM los elementos de cada libro de la categoría solicitada

        const item = data.results.books[i]
        const divCategoryChild = document.createElement('div')
        divCategoryChild.setAttribute("class", "col-lg-3 col-md-4 col-sm-6 col-12 p-2")

        const card = document.createElement('div')
        card.setAttribute("class", "card")

        const divCardBody = document.createElement('div')
        divCardBody.setAttribute("class", "card-body")

        let name = document.createElement("name");
        name.innerHTML = `<h6>#${item.rank + " " + item.title}</h6><br>`


        const buttonFav = document.createElement('button');
        let classFav = "fa-regular fa-heart rounded-circle btn btn-sm float-right border border-white color-red position-absolute top-0 end-0 m-2";
        if(favs.findIndex((f)=>f.title === item.title) !== -1){
            classFav += ' btn-danger'
        }
        buttonFav.setAttribute("class", classFav)
        buttonFav.setAttribute("id", "testButtonFav")

        let img = document.createElement("img");
        let width;
        img.setAttribute("class", "card-img-top position-relative", width = "40%")
        img.src = `${item.book_image}`

        let weeks = document.createElement("weeks");
        weeks.innerHTML = `<br>Weeks on list: ${item.weeks_on_list}<br>`

        let description = document.createElement("description");
        description.innerHTML = `${item.description}<br>`

        const buttonAmazon = document.createElement("a")
        const linkBook = item.amazon_product_url;
        buttonAmazon.setAttribute("href", linkBook);
        buttonAmazon.innerHTML = (`Buy From Amazon <i class="fa-regular fa-circle-play"></i>`);
        buttonAmazon.setAttribute("class", "card-link btn btn-warning")

        // Añado estos elementos al body de cada card
        divCardBody.appendChild(name)
        divCardBody.appendChild(buttonFav)
        divCardBody.appendChild(img)
        divCardBody.appendChild(weeks)
        divCardBody.appendChild(description)
        divCardBody.appendChild(buttonAmazon)
        card.appendChild(divCardBody)
        divCategoryChild.appendChild(card)
        booksByCategory.appendChild(divCategoryChild)

        /* Añadimos escucha al botón del corazón para enviar a la DB de Firestore los favoritos */

        buttonFav.addEventListener("click", function () {
            saveFavs(item)
        })
    }
}
