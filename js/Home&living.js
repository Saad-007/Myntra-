let bagItems;
onLoad();

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function (event) {
        event.preventDefault();
        navLinks.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".nav-toggle"); // Select the menu button
    const headingText = document.querySelector(".Men-heading1"); // Select "Trending Now"
    const navMenu = document.querySelector(".nav-links"); // Select the menu

    menuButton.addEventListener("click", function () {
        if (headingText) {
            if (navMenu.classList.contains("active")) {
                headingText.style.display = "none"; // Hide when menu is open
            } else {
                headingText.style.display = "block"; // Show when menu is closed
            }
        }
    });
});

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    let wishItemsStr = localStorage.getItem('wishItems');

    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    wishItems = wishItemsStr ? JSON.parse(wishItemsStr) : [];

    displayItemsOnHomepage();
    displayBagIcon();
    displaywhisIcon();
}
function addToBag(itemId) {
    itemId = itemId.toString(); // Ensure itemId is a string
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}
function addTowish(itemId) {
    itemId = itemId.toString(); // Ensure itemId is a string
    wishItems.push(itemId);
    localStorage.setItem('wishItems', JSON.stringify(wishItems));
    displaywhisIcon();
}

function displayBagIcon() {
    let bagItemCount = document.querySelector('.bag-items');
    
    if (bagItems.length > 0) {
        bagItemCount.style.visibility = 'visible';
        bagItemCount.innerText = bagItems.length;
    } else {
        bagItemCount.style.visibility = 'hidden';
    }
}
function displaywhisIcon(){
    
    let wishItemCount = document.querySelector('.wish-items');
    
    if (wishItems.length > 0) {
        wishItemCount.style.visibility = 'visible';
        wishItemCount.innerText = wishItems.length;
    } else {
        wishItemCount.style.visibility = 'hidden';
    }
}

function displayItemsOnHomepage() {
    let newItemContainerElement = document.querySelector('.woitems-container');

    if (!newItemContainerElement) {
        console.warn("❌ Warning: '.woitems-container' not found. Stopping execution.");
        return;
    }

    if (!Array.isArray(Home) || Home.length === 0) {
        console.warn("❌ Warning: 'Men' array is empty or undefined.");
        newItemContainerElement.innerHTML = "<p>No products found.</p>";
        return;
    }

    console.log("✅ Men array:", Home);

    let trendingItemsHTML = '<div class="Men-heading1"><h3 class="trending">Home & Living</h3></div>';

    Home.forEach(isitem => {
        trendingItemsHTML += `
        <div class="newitem-container">
            <img class="item-img" src="${isitem.image}" alt="${isitem.item_name}">
            <div class="rating"><div class="Wishlist"><span class="material-symbols-outlined action_icon"onclick="addTowish('${isitem.id}')">favorite</span></div>
                ${isitem.rating.stars}⭐ | ${isitem.rating.count}
            </div>
            <div class="company-name">${isitem.company}</div>
            <div class="item-name">${isitem.item_name}</div>
            <div class="price">
                <span class="current-price">Rs ${isitem.current_price}</span>
                <span class="original-price">Rs ${isitem.original_price}</span>
                <span class="discount">(${isitem.discount_percentage}% OFF)</span>
            </div>
            <button class="btn-add-bag" onclick="addToBag('${isitem.id}')">Add to Bag</button>
        </div>
        `;
    });
    newItemContainerElement.innerHTML = trendingItemsHTML;
}