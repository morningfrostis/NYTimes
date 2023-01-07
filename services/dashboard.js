const localStorageListKey = 'bookList';

const fetchCategoryBooks = async () => {
    let values = JSON.parse(window.localStorage.getItem(localStorageListKey));
    //let list = [];
    if (!values) {
        try {
            const response = await fetch("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=zDcNYZLAAAyz53sPI5rfz9DJnND9qEpO");
            const data = await response.json()
            if (data.num_results > 0) {
                list = data.results;
                window.localStorage.setItem(localStorageListKey, JSON.stringify(data.results));
                values = data.results;
            }
            //document.getElementById('container_spinner').style.display = "none";
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    }else{

        //document.getElementById('container_spinner').style.display = "none";
    }
    return values
}