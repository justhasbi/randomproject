const superHero = async () => {
    const url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    const resp = await fetch(url);
    const respJson = await resp.json();
    const superHeroMember = respJson.members;
    superHeroList(superHeroMember);
    // const member = superHeroMember.forEach(element => {
    //     console.log(element)
    // });
    return superHeroMember;
}


const elementDiv = document.createElement('div')
elementDiv.classList.add('hero-container');
document.body.appendChild(elementDiv)


const superHeroList = (data) => {
    data.map(item => {
        const divChild = document.createElement('h1');
        divChild.classList.add('heroName');
        divChild.textContent = item.name
        elementDiv.appendChild(divChild)
        console.log(item)
    })
}

superHero();


// const url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
// fetch(url)
//     .then(resp => {
    //         return resp.json()
    //     })
    //     .then(data => {
        //         console.log(data.members)
        //     })