// Define convenience fee and global variables 
const CONVENIENCE_FEES = 99;

if (typeof bagItems === "undefined") {
  bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];
}



const allItems = [...items, ...New, ...Women, ...Men, ...Beauty, ...Home];

// Wait for DOM to be fully loaded before running
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded");

    let bagContainer = document.querySelector(".bag-items-container");
    let bagSummary = document.querySelector(".bag-summary");

    console.log("bag-items-container:", bagContainer);
    console.log("bag-summary:", bagSummary);

    if (!bagContainer || !bagSummary) {
        console.error("Error: Required elements '.bag-items-container' or '.bag-summary' not found.");
        return;
    }

    onLoad();
});




// Main function to load bag items
function onLoad() {
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
}

// Load items from bag and map them to their full details
function loadBagItemObjects() {
    if (!Array.isArray(bagItems)) {
        console.error("Error: bagItems is not an array.");
        bagItems = [];
    }

    bagItemObjects = bagItems.map(itemId => {
        return allItems.find(item => item.id == itemId) || null;
    }).filter(item => item !== null);

    console.log("Loaded Bag Items:", bagItemObjects);
}

// Display all bag items
function displayBagItems() {
    let containerElement = document.querySelector('.bag-items-container');

    if (!containerElement) {
        console.error("Error: Element with class 'bag-items-container' not found. Skipping displayBagItems().");
        return;
    }

    if (!bagItemObjects || bagItemObjects.length === 0) {
        console.warn("Warning: No items found in the bag.");
        containerElement.innerHTML = "<p>Your bag is empty.</p>";
        return;
    }

    let innerHTML = '';
    bagItemObjects.forEach(bagItem => {
        innerHTML += generateItemHTML(bagItem);
    });

    containerElement.innerHTML = innerHTML;
}

// Generate HTML for each bag item
function generateItemHTML(item) {
    console.log(`Generating HTML for item ID: ${item.id}`);

    return `<div class="bag-item-container">
        <div class="item-left-part">
            <img class="bag-item-img" src="${item.image}" alt="${item.item_name}">
        </div>
        <div class="item-right-part">
            <div class="company">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price-container">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
            </div>
            <div class="return-period">
                <span class="return-period-days">${item.return_period} days</span> return available
            </div>
            <div class="delivery-details">
                Delivery by <span class="delivery-details-days">${item.delivery_date}</span>
            </div>
        </div>
        <div class="remove-from-cart" onclick="removeFromBag('${item.id}')">X</div>
    </div>`;
}

// Remove item from bag
function removeFromBag(itemId) {
    console.log('Removing item with ID:', itemId);
    console.log('Before removal, bagItems:', bagItems);

    itemId = itemId.toString();
    
    bagItems = bagItems.filter(bagItemId => bagItemId !== itemId);
    console.log('After removal, bagItems:', bagItems);

    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
}

// Display bag summary
function displayBagSummary() {
    let bagSummaryElement = document.querySelector('.bag-summary');

    if (!bagSummaryElement) {
        console.error("Error: Element with class 'bag-summary' not found. Skipping displayBagSummary().");
        return;
    }

    let totalItems = bagItemObjects.length;
    let totalMRP = 0;
    let totalDiscount = 0;

    bagItemObjects.forEach(bagItem => {
        totalMRP += bagItem.original_price;
        totalDiscount += bagItem.original_price - bagItem.current_price;
    });

    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

    bagSummaryElement.innerHTML = `
        <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItems} Items) </div>
            <div class="price-item">
                <span class="price-item-tag">Total MRP</span>
                <span class="price-item-value">Rs ${totalMRP}</span>
            </div>
            <div class="price-item">
                <span class="price-item-tag">Discount on MRP</span>
                <span class="price-item-value priceDetail-base-discount">-Rs ${totalDiscount}</span>
            </div>
            <div class="price-item">
                <span class="price-item-tag">Convenience Fee</span>
                <span class="price-item-value">Rs ${CONVENIENCE_FEES}</span>
            </div>
            <hr>
            <div class="price-footer">
                <span class="price-item-tag">Total Amount</span>
                <span class="price-item-value">Rs ${finalPayment}</span>
            </div>
        </div>
        <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
        </button>
    `;
}
