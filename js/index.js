let bagItems = [];
let wishItems = [];

document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ DOM fully loaded");

    // Wait for .bag-items and .wish-items to appear
    waitForElement(".bag-items", (bagItemCount) => {
        waitForElement(".wish-items", (wishItemCount) => {
            console.log("✅ .bag-items & .wish-items found in the DOM!");

            onLoad();
            setupNavMenu();
        });
    });
});

// ✅ Function to wait for an element in the DOM
function waitForElement(selector, callback) {
    let element = document.querySelector(selector);
    if (element) {
        callback(element);
    } else {
        setTimeout(() => waitForElement(selector, callback), 100);
    }
}

// 🛍️ Load bag & wishlist items from localStorage
function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    let wishItemsStr = localStorage.getItem('wishItems');

    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    wishItems = wishItemsStr ? JSON.parse(wishItemsStr) : [];

    displayItemsOnHomepage();
    displayBagIcon();
}

// 🛒 Update bag & wishlist icons
function displayBagIcon() {
    let bagItemCount = document.querySelector('.bag-items');
    let wishItemCount = document.querySelector('.wish-items');

    if (!bagItemCount || !wishItemCount) {
        console.error("❌ Error: '.bag-items' or '.wish-items' not found in DOM.");
        return;
    }

    bagItemCount.style.visibility = bagItems.length > 0 ? 'visible' : 'hidden';
    wishItemCount.style.visibility = wishItems.length > 0 ? 'visible' : 'hidden';

    bagItemCount.innerText = bagItems.length;
    wishItemCount.innerText = wishItems.length;
}

// ➕ Add items to Bag
function addToBag(itemId) {
    itemId = itemId.toString();
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

// ❤️ Add items to Wishlist
function addToWish(itemId) {
    itemId = itemId.toString();
    wishItems.push(itemId);
    localStorage.setItem('wishItems', JSON.stringify(wishItems));
    displayBagIcon();
}

// 🏠 Display Homepage Items
function displayItemsOnHomepage() {
    let itemContainerElement = document.querySelector('.items-container');
    let newItemContainerElement = document.querySelector('.newitems-container');

    if (!itemContainerElement || !newItemContainerElement) {
        console.error("❌ Error: '.items-container' or '.newitems-container' not found.");
        return;
    }

    let newItemsHTML = '<div class="heading"><h3 class="New">Trending Now</h3></div>';
    let trendingItemsHTML = '<div class="heading1"><h3 class="trending">New Arrivals</h3></div>';

    items.forEach(item => {
        newItemsHTML += generateItemHTML(item);
    });
    itemContainerElement.innerHTML = newItemsHTML;

    New.forEach(isitem => {
        trendingItemsHTML += generateItemHTML(isitem);
    });
    newItemContainerElement.innerHTML = trendingItemsHTML;
}

// 🖼️ Generate Item HTML
function generateItemHTML(item) {
    return `
    <div class="item-container">
        <img class="item-img" src="${item.image}" alt="${item.item_name}">
        <div class="rating">
            <div class="Wishlist">
                <span class="material-symbols-outlined action_icon" onclick="addToWish('${item.id}')">favorite</span>
            </div>
            ${item.rating.stars}⭐ | ${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag('${item.id}')">Add to Bag</button>
    </div>`;
}

// 📖 Setup Navigation Menu Toggle
function setupNavMenu() {
    const menuToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    const headingText = document.querySelector(".heading");

    if (!menuToggle || !navLinks) {
        console.error("❌ Error: Navigation elements not found.");
        return;
    }

    menuToggle.addEventListener("click", function (event) {
        event.preventDefault();
        navLinks.classList.toggle("active");

        if (headingText) {
            headingText.style.display = navLinks.classList.contains("active") ? "none" : "block";
        }
    });
}
