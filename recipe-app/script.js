class Meals {
    static async getRandomMeals() {
        const url = "https://www.themealdb.com/api/json/v1/1/random.php";
        const resp = await fetch(url);

        const respDataJSON = await resp.json();
        const randomMeal = respDataJSON.meals[0];
        console.log(randomMeal)
        HandleUI.addMeal(randomMeal)
    }

    static async meals(keyword) {
        let url = "";
        if(keyword.length == 1){
            url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${keyword}`;
        } else {
            url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`;
        }
        const resp = await fetch(url);
        const respDataJSON = await resp.json();
        const meals = respDataJSON.meals;
        HandleUI.addMeal(meals);
        return meals;
    }
}

class HandleUI {    
    constructor(keyword) {
        this.random = random
        this.keyword = keyword
    }

    static removeForm() {
        document.querySelector("#keyword").value = "";
    }

    static addMeal(data) {
        const meals = document.querySelector('.meals')
        const meal = document.createElement("div");
        meal.classList.add('meal-container');

        meal.innerHTML = `
            <img src="${data.strMealThumb}" alt="coba">
            <h2>${data.strMeal}</h2>
            <p>${data.strInstructions}</p>
        `;
        meals.appendChild(meal);
    }


}

document.querySelector("#search").addEventListener("click", async (e) => {
    // e.preventDefault();
    
    const inpValue = document.querySelector("#keyword").value;

    if(inpValue === "") {
        await Meals.getRandomMeals();
    } else {
        const mealsCard = await Meals.meals(inpValue);
        console.log(mealsCard)
        mealsCard.map(meal => {
            HandleUI.addMeal(meal)
        });
    }
    
    HandleUI.removeForm();
})
// document.querySelector(".meals").innerHTML = "";
