
const allBooks = document.getElementById('row')

const LOCALSTORAGE_NY = 'id_categoria'

async function postAllData() {
        allBooks.innerHTML = '';
        const listCategory = await fetchCategoryBooks()
        for (let i = 0; i < listCategory.length; i++) {

                const item = listCategory[i]
                const divCategoryChild = document.createElement('div')
                divCategoryChild.setAttribute("id", "listBooksChildId")
                divCategoryChild.setAttribute("class", "col-lg-3 col-md-4 col-sm-6 col-12 p-2")

                const card = document.createElement('div')
                card.setAttribute("class", "card shadow p-3 mb-5 bg-body")

                const divCardBody = document.createElement('div')
                divCardBody.setAttribute("class", "card-body")

                const separator = document.createElement('hr')
                separator.setAttribute("class", "separator-title")

                const divTitle = document.createElement('h5')
                divTitle.setAttribute("class", "card-title")
                divTitle.innerText = item.list_name

                const divDateOldest = document.createElement('p')
                divDateOldest.setAttribute("class", "card-text")
                divDateOldest.innerText = ("Oldest:" + ' ' + item.oldest_published_date)

                const divDateNewest = document.createElement('p')
                divDateNewest.setAttribute("class", "card-text")
                divDateNewest.innerText = ("Newest:" + ' ' + item.newest_published_date)

                const divUpdated = document.createElement('p')
                divUpdated.setAttribute("class", "card-text")
                divUpdated.innerText = ("Updated:" + ' ' + item.updated)

                const button = document.createElement("a")
                button.setAttribute("href", "/views/details.html")
                button.innerText = ("READ MORE! >")
                button.setAttribute("class", "btn btn-light shadow p-3 mb-5 bg-body card-link fw-semibold")
                button.onclick = () => {
                        localStorage.setItem(LOCALSTORAGE_NY, item.list_name)
                }

                divCardBody.appendChild(divTitle)
                divCardBody.appendChild(separator)
                divCardBody.appendChild(divDateOldest)
                divCardBody.appendChild(divDateNewest)
                divCardBody.appendChild(divUpdated)
                divCardBody.appendChild(button)
                card.appendChild(divCardBody)
                divCategoryChild.appendChild(card)
                allBooks.appendChild(divCategoryChild)

        }

}

postAllData()