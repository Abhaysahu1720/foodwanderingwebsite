document.addEventListener('DOMContentLoaded', () => {
    const foodCards = document.querySelector('.food-cards');

    const foods = [
        {
            name: "Sushi",
            description: "Delicious sushi rolls with fresh fish.",
            image: "https://via.placeholder.com/300x200"
        },
        {
            name: "Pizza",
            description: "Cheesy pizza with various toppings.",
            image: "https://via.placeholder.com/300x200"
        },
        {
            name: "Burger",
            description: "Juicy burger with a side of fries.",
            image: "https://via.placeholder.com/300x200"
        }
    ];

    foods.forEach(food => {
        const foodCard = document.createElement('div');
        foodCard.classList.add('food-card');
        foodCard.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <h3>${food.name}</h3>
            <p>${food.description}</p>
        `;
        foodCards.appendChild(foodCard);
    });
});
