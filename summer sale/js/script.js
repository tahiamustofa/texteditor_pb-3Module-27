function spoonFor(){
    const spoon = document.getElementById('spoon');
     const spoonName = spoon.innerText;
     const spoonsId = document.getElementById('spoonsId');
     const spoonPrice = parseFloat(spoonsId.innerText);
     
     addName(spoonName,spoonPrice); 
}

function accessories() {
    const accessories = document.getElementById('accessories');
    const accessoriesName = accessories.innerText;
    
    const accessoriesId = document.getElementById('accessoriesId');
    const accessoriesPrice = parseFloat(accessoriesId.innerText);
    addName(accessoriesName,accessoriesPrice); 
}
function cooker(){
    const cooker= document.getElementById('cooker');
    const cookerName = cooker.innerText;
    addName(cookerName); 
    }

    function sportsBackCap() {
        const sportsBackCap = document.getElementById('sportsBackCap');
        const sportsBackCapName = sportsBackCap.innerText;
        addName(sportsBackCapName); 
    }

    function jersey() {
      const jersey = document.getElementById('jersey');
      const jerseyName = jersey.innerText;
      addName(jerseyName); 
    }
    function sportsCates() {
       const sportsCates= document.getElementById('sportsCates');
       const  sportsCatesName =sportsCates.innerText;
       addName(sportsCatesName); 
    }

// function addName(productName,price) {
//     const makeProduct = document.getElementById('makeProduct');
//     const count = makeProduct.childElementCount;
//     const p =  document.createElement ('p');
//     p.classList.add('my-4');
//     p.innerHTML = `${count+1}.  ${productName}`;
//     makeProduct.appendChild(p);

//     const currentTotal = document.getElementById('currentTotal');
//     const span = document.createElement('span');
//     span.innerHTML = price;

//     currentTotal.appendChild(span);
//     console.log(span);

//     const makePurchase = document.getElementById('makePurchase');
   
    
   
//     if (price <= 0) {
//         makePurchase.classList.add('bg-red-600');   
//     } else {
//         makePurchase.classList.remove('bg-red-600');
//     }

// }

// function addName(productName, price) {
//     // Get the container where product names will be displayed
//     const makeProduct = document.getElementById('makeProduct');
//     const count = makeProduct.childElementCount;

//     // Create a new paragraph for the product name
//     const p = document.createElement('p');
//     p.classList.add('my-4');
//     p.innerHTML = `${count + 1}.  ${productName}`;
//     makeProduct.appendChild(p);
//     for (let index = price; index < 100; index++) {
//         const element = index;
//         console.log(element);
        
//     }
   
    
//     // Get the current total element and create a span for the price
//     const currentTotal = document.getElementById('currentTotal');
//     const span = document.createElement('span');
//     span.innerHTML = price;
//     currentTotal.appendChild(span);

//     // Log the span for debugging purposes
//     console.log(span);

//     // Get the makePurchase element to potentially update its class
//     const makePurchase = document.getElementById('makePurchase');

//     // Check the price and update the class accordingly
//     if (price) {
//        makePurchase.addAttribute('disabled');
//     } else {
//         makePurchase.removeAttribute('disabled');
//     }
// }


// let totalPrice = 0; // Initialize total price variable


 
// function addName(productName, price) {
//     // Get the container where product names will be displayed
//     const makeProduct = document.getElementById('makeProduct');
//     const count = makeProduct.childElementCount;

//     // Create a new paragraph for the product name
//     const p = document.createElement('p');
//     p.classList.add('my-4');
//     p.innerHTML = `${count + 1}.  ${productName}`;
//     makeProduct.appendChild(p);

//     // Update total price
//     totalPrice += price; // Add the product price to the total
//     applyClick(totalPrice);
//     updateTotalDisplay(); // Update the total display

//     // Get the makePurchase element to potentially update its class
//     const makePurchase = document.getElementById('makePurchase');

//     // Check the total price and update the button state accordingly
//     if (totalPrice <= 0) {
//         makePurchase.classList.add('bg-red-600');   
//         makePurchase.setAttribute('disabled', 'true'); // Disable button if no price
//     } else {
//         makePurchase.classList.remove('bg-red-600');
//         makePurchase.removeAttribute('disabled'); // Enable button if price exists
//     }
// }


// Function to update the total price display
function updateTotalDisplay() {
    const currentTotal = document.getElementById('currentTotal');
    currentTotal.innerHTML = `Total Price: ${totalPrice.toFixed(2)} TK`; // Format to 2 decimal places
}

const applyBtn= document.getElementById('applyBtn');

const searchText= document.getElementById('searchText');

// function applyClick(totalPrice) {
//     console.log(totalPrice);
//     const userInput = searchText.value;
    
//     if (totalPrice>20) {
//         applyBtn.classList.add ('bg-red-600'); 

//         let discount= document.getElementById('discount');
//         let discountValue = discount.innerText;
//       if (userInput == 'a') { 
//           discount.innerText=20;
//           console.log(discount);
//       } else {
//           console.log('not');
//       }
//     } else {
//         applyBtn.classList.add ('bg-green-600'); 
//     }

// }



// agdghad
// gufisufjfjsfjsfjf
let totalPrice = 0; // Initialize total price variable
let discountAmount = 0; // Initialize discount amount

// Function to add product names and prices
function addName(productName, price) {
    const makeProduct = document.getElementById('makeProduct');
    const count = makeProduct.childElementCount;

    // Create a new paragraph for the product name
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}.  ${productName}`;
    makeProduct.appendChild(p);

    // Update total price
    totalPrice += price;
    updateTotalDisplay(); // Update the total display

    const makePurchase = document.getElementById('makePurchase');
    if (totalPrice <= 0) {
        makePurchase.classList.add('bg-red-600');
        // makePurchase.setAttribute('disabled', 'true'); // Disable button if no price
    } else {
        makePurchase.classList.add('bg-green-600');
        // makePurchase.removeAttribute('disabled'); // Enable button if price exists
    }
}

// Function to update the total price display
function updateTotalDisplay() {
    const currentTotal = document.getElementById('currentTotal');
    const discountDisplay = document.getElementById('discount');
    const totalDisplay = document.getElementById('finalTotal');

    // Update current total
    currentTotal.innerHTML = `Total Price: ${totalPrice.toFixed(2)} TK`;
    discountDisplay.innerHTML = discountAmount.toFixed(2); // Display discount if any

    // Calculate and display final total after discount
    const finalTotal = totalPrice - discountAmount;
    totalDisplay.innerHTML = finalTotal.toFixed(2);
}

// Function to apply coupon code and calculate discount
function applyClick() {
    const couponInput = document.getElementById('searchText').value;

    if (couponInput === 'a' && totalPrice >= 200) {
        discountAmount = totalPrice * 0.20; // Apply 20% discount
        alert("Coupon applied! You received 20% off.");
        applyBtn.classList.add ('bg-green-600'); 
    } else {
        discountAmount = 0; // No discount if invalid
        alert("Invalid coupon or minimum amount not met.");
        applyBtn.classList.add ('bg-red-600'); 
    }
    updateTotalDisplay(); // Update totals with or without discount
}
