const header = document.querySelector('header');
const section = document.querySelector('section');

let url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
// instantiate XMLHttpRequesr()
let xhr = new XMLHttpRequest();

// gunakan open() kemudian isikan method http dan url 
xhr.open('GET', url);
xhr.responseType = 'json';

xhr.send();

xhr.onload = () => {
    const superheroes = xhr.response;
    populateHeader(superheroes);
    showHeroes(superheroes);
}

const populateHeader = (jsonObj) => {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    const squadDetail = document.createElement('p');
    squadDetail.textContent = `Hometown: ${jsonObj['homeTown']} // Formed: ${jsonObj['formed']}`;
    header.appendChild(squadDetail);
} 

function showHeroes(jsonObj) {
    const heroes = jsonObj['members'];
        
    for (let i = 0; i < heroes.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = heroes[i].name;
      myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
      myPara2.textContent = 'Age: ' + heroes[i].age;
      myPara3.textContent = 'Superpowers:';
          
      const superPowers = heroes[i].powers;
      for (let j = 0; j < superPowers.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }