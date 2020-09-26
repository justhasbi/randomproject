const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

const select = document.querySelector(".breeds");

fetch(BREEDS_URL)
    // mengambil respon dari fetch kemudian konversi ke bentuk JSON
    .then(res => {
        return res.json();
    })
    // Mengambil data dari .then(res)
    .then(data => {
        const breedsObject = data.message;
        console.log(breedsObject);
        // message nama atribut pada respon

        // mengambil Key dari objek json
        const breedsArray = Object.keys(breedsObject);
        for(let i in breedsArray) {
            // membuat elemen option didalam select box
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option)
        }
        console.log(breedsArray);
    })

// membuat event, ketika meng-klik option dalam select box maka akan menampilkan hasil fetch

// event 'change' khusus untuk tag <input>, <select>, <textarea>
select.addEventListener('change', event => {
    // mengambil nilai dari event target value
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
    
    getDoggo(url)
})

// get element dog-img and spinner
const img = document.querySelector('.dog-img');
const spinner = document.querySelector('.spinner');

const getDoggo = url => {
    // add class to spinner element
    spinner.classList.add('show');
    img.classList.remove('show');

    // fetch again from DOG API

    fetch(url)
        // get response API
        .then(res => {
            // convert response to json()
            return res.json();
        })
        .then(data => {
            img.src = data.message;
        });
};


img.addEventListener('load', () => {
    spinner.classList.remove('show');
    img.classList.add('show');
  });
