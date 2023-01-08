import { getFavs } from "./firebase.js";
const booksByCategory = document.getElementById('row')

getFavs().then((favs) => {
    display(favs)
})

function display(data) {
    /**
     * Corrección
     * Console.log sobra
     */
    console.log(data.results)
    booksByCategory.innerHTML = '';

    /**
     * Corrección
     * Deberíamos usar un FOR..OF
     */
    for (let i = 0; i < data.length; i++) {
        // Pintamos en el DOM igual que en la vista de details pero esta vez solo los Favoritos
        const item = data[i]
        const divCategoryChild = document.createElement('div')
        divCategoryChild.setAttribute("class", "col-lg-3 col-md-4 col-sm-6 col-12 p-2")

        const card = document.createElement('div')
        card.setAttribute("class", "card")

        const divCardBody = document.createElement('div')
        divCardBody.setAttribute("class", "card-body")

        let name = document.createElement("name");
        name.innerHTML = `<h6>#${item.rank + " " + item.title}</h6><br>`


        const buttonFav = document.createElement('button');
        let classFav = "fa-regular fa-heart rounded-circle btn-danger btn btn-sm float-right border border-white color-red position-absolute top-0 end-0 m-2";
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

        // Añado estos elementos al body de cada card favoritos
        /**
         * Corrección
         * Recuerda que tenemos un .append que añade un array de childs
         */
        divCardBody.appendChild(name)
        divCardBody.appendChild(buttonFav)
        divCardBody.appendChild(img)
        divCardBody.appendChild(weeks)
        divCardBody.appendChild(description)
        divCardBody.appendChild(buttonAmazon)
        card.appendChild(divCardBody)
        divCategoryChild.appendChild(card)
        booksByCategory.appendChild(divCategoryChild)
    }
}
