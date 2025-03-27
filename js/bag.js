// ✅ Define convenience fee
const CONVENIENCE_FEES = 99;

// ✅ Retrieve bagItems from localStorage without redeclaration
window.bagItems = window.bagItems || JSON.parse(localStorage.getItem("bagItems")) || [];

// ✅ Ensure all item arrays exist before using them
window.items = window.items || [];
window.New = window.New || [];
window.Women = window.Women || [];
window.Men = window.Men || [];
window.Beauty = window.Beauty || [];
window.Home = window.Home || [];

// ✅ Merge all item categories into a single list
const allItems = [...items, ...New, ...Women, ...Men, ...Beauty, ...Home];

console.log("🛒 All Items:", allItems);
console.log("👜 Bag Items (IDs):", window.bagItems);

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle=document.querySelector('.nav-toggle');
    const navLink=this.documentElement.querySelector('.nav-links');

    menuToggle?.addEventListener("click",function(event){
        event.preventDefault();
        navLink.classList.toggle("active");
    })
    console.log("✅ DOM fully loaded");
    ensureBagSummaryExists();
    onLoad();
});

// ✅ Ensure .bag-summary exists before calling displayBagSummary
function ensureBagSummaryExists() {
    const checkBagSummary = setInterval(() => {
        const bagSummary = document.querySelector('.bag-summary');
        if (bagSummary) {
            clearInterval(checkBagSummary);
            displayBagSummary();
        }
    }, 500);
}

// ✅ Main function to load bag items
function onLoad() {
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
}

// ✅ Load items from bag and map them to their full details
function loadBagItemObjects() {
    if (!Array.isArray(window.bagItems)) {
        console.error("❌ bagItems is not an array.");
        window.bagItems = [];
    }

    console.log("🔎 Matching bag items...");

    window.bagItemObjects = window.bagItems
        .map(itemId => {
            let foundItem = allItems.find(item => item.id == itemId);
            if (!foundItem) {
                console.warn(`⚠️ Item ID ${itemId} not found in allItems`);
            }
            return foundItem || null;
        })
        .filter(item => item !== null);

    console.log("✅ Loaded Bag Item Objects:", window.bagItemObjects);
}

// ✅ Display all bag items
function displayBagItems() {
    let containerElement = document.querySelector(".bag-items-container");
    let bagCountElement = document.querySelector(".bag-items");

    if (!containerElement || !bagCountElement) {
        console.error("❌ Error: '.bag-items-container' or '.bag-items' not found.");
        return;
    }

    if (!window.bagItemObjects || window.bagItemObjects.length === 0) {
        containerElement.innerHTML = "<p>Your bag is empty.</p>";
        bagCountElement.textContent = "0";
        return;
    }

    let innerHTML = window.bagItemObjects.map(generateItemHTML).join("");

    containerElement.innerHTML = innerHTML;
    bagCountElement.textContent = window.bagItemObjects.length;
}

// ✅ Generate HTML for each bag item
function generateItemHTML(item) {
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
                <span class="return-period-days">${item.return_period || "No"}</span> days return available
            </div>
            <div class="delivery-details">
                Delivery by <span class="delivery-details-days">${item.delivery_date || "N/A"}</span>
            </div>
        </div>
        <div class="remove-from-cart" onclick="removeFromBag('${item.id}')">X</div>
    </div>`;
}

// ✅ Remove item from bag
function removeFromBag(itemId) {
    window.bagItems = window.bagItems.filter(bagItemId => String(bagItemId) !== String(itemId));
    localStorage.setItem("bagItems", JSON.stringify(window.bagItems));
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
}

// ✅ Display bag summary
function displayBagSummary() {
    const bagSummary = document.querySelector('.bag-summary');
    if (!bagSummary) {
        console.error("❌ Error: '.bag-summary' element not found.");
        return;
    }
    
    let totalItems = window.bagItemObjects.length;
    let totalMRP = 0;
    let totalDiscount = 0;
    window.bagItemObjects.forEach(bagItem => {
        totalMRP += bagItem.original_price;
        totalDiscount += bagItem.original_price - bagItem.current_price;
    });
    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

    bagSummary.innerHTML = `
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