// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
];

const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) { 
    for (let i = 0; i < dishData.length; i++) { 
        // Access the name and price properties of each object
        const dishName = dishData[i].name;
        const dishPrice = dishData[i].price;
        let finalPrice; 

        if (taxBoolean === true) { 
            finalPrice = dishPrice * tax; // Apply tax to the dish price
        } else if (taxBoolean === false) { 
            finalPrice = dishPrice; // Do not apply tax
        } else { 
            console.log("You need to pass a boolean to the getPrices call!");
            return; // Exit the function if the taxBoolean is neither true nor false
        }

        console.log(`Dish: ${dishName} Price: $${finalPrice}`); // Display the dish name and final price
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) { 
    getPrices(taxBoolean); // Call getPrices() to display the dish names and prices with or without tax
    if (typeof guests === "number" && guests > 0 && guests < 30) { // Check if guests is a valid number between 0 and 30
        let discount = 0;

        if (guests < 5) { 
            discount = 5; // Set a 5% discount for less than 5 guests
        } else if (guests >= 5) {
            discount = 10; // Set a 10% discount for 5 or more guests
        }
        console.log('Discount is: $' + discount); // Display the discount amount
    } else {
        console.log("The second argument must be a number between 0 and 30");
    }
}

// Call getDiscount() with different arguments
getDiscount(true, 2); // Calculate and display prices with tax and apply a 5% discount for 2 guests
getDiscount(false, 10); // Calculate and display prices without tax and apply a 10% discount for 10 guests
