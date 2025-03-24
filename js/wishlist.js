// ✅ Define convenience fee
const CONVENIENCE_FEES = 99;

// ✅ Ensure `wishItems` is retrieved from localStorage correctly
window.wishItems = JSON.parse(localStorage.getItem('wishItems')) || [];

// ✅ Ensure all item arrays exist before using them
window.items = window.items || [];
window.New = window.New || [];
window.Women = window.Women || [];
window.Men = window.Men || [];
window.Beauty = window.Beauty || [];
window.Home = window.Home || [];

// ✅ Merge all item categories into a single list
const allItems = [...items, ...New, ...Women, ...Men, ...Beauty, ...Home];

document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ DOM fully loaded");

    function checkElements() {
        let bagContainer = document.querySelector(".bag-items-container");
        let bagSummary = document.querySelector(".bag-summary"); // Ensure `bagSummary` exists

        if (!bagContainer || !bagSummary) {
            console.warn("⏳ Waiting for elements to load...");
            setTimeout(checkElements, 500); // Retry after 500ms
            return;
        }

        console.log("✅ Elements found, initializing...");
        onLoad();
    }

    checkElements();
});

// ✅ Main function to load wish items
function onLoad() {
    loadWishItemObjects();
    displayWishItems();
}

// ✅ Load items from `wishItems` and map them to their full details
function loadWishItemObjects() {
    if (!Array.isArray(window.wishItems)) {
        console.error("❌ Error: wishItems is not an array.");
        window.wishItems = [];
    }

    window.wishItemObjects = window.wishItems
        .map(itemId => allItems.find(item => item.id == itemId) || null)
        .filter(item => item !== null);

    console.log("🛍️ Loaded wish items:", window.wishItemObjects);
}

// ✅ Display all wish items
function displayWishItems() {
    let containerElement = document.querySelector('.bag-items-container');
    let wishCountElement = document.querySelector(".wish-items"); // Corrected selector

    if (!containerElement || !wishCountElement) {
        console.error("❌ Error: '.bag-items-container' or '.wish-items' not found.");
        return;
    }

    if (!window.wishItemObjects || window.wishItemObjects.length === 0) {
        containerElement.innerHTML = "<p>Your wishlist is empty.</p>";
        wishCountElement.textContent = "0"; // Set count to 0
        return;
    }

    let innerHTML = window.wishItemObjects.map(generateItemHTML).join("");

    containerElement.innerHTML = innerHTML;
    wishCountElement.textContent = window.wishItemObjects.length; // Update count
}

// ✅ Generate HTML for each wish item
function generateItemHTML(item) {
    console.log(`🖼️ Generating HTML for item ID: ${item.id}`);

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
        <div class="remove-from-wishlist" onclick="removeFromWish('${item.id}')">X</div>
    </div>`;
}

// ✅ Remove item from wish list
function removeFromWish(itemId) {
    console.log('🗑️ Removing item with ID:', itemId);
    
    window.wishItems = window.wishItems.filter(wishItemId => wishItemId !== itemId);
    localStorage.setItem('wishItems', JSON.stringify(window.wishItems));

    loadWishItemObjects();
    displayWishItems();
}
