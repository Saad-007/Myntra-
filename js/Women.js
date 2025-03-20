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
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomepage();
    displayBagIcon();
}
function addToBag(itemId) {
    itemId = itemId.toString(); // Ensure itemId is a string
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
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

function displayItemsOnHomepage() {
    // let itemContainerElement = document.querySelector('.items-container');
    let newItemContainerElement = document.querySelector('.woitems-container');
    if (!newItemContainerElement) {
        return;
    }
    // if (!itemContainerElement || !newItemContainerElement) {
    //     return;
    // }
    

    // let newItemsHTML = '<div class="heading"><h3 class="New">New Items</h3></div>';
    let trendingItemsHTML = '<div class="Men-heading1"><h3 class="trending">Women-Products</h3></div>';

    // // Iterate over the items array
    // items.forEach(item => {
    //     newItemsHTML += `
    //     <div class="item-container">
    //         <img class="item-img" src="${item.image}" alt="${item.item_name}">
    //         <div class="rating">
    //             ${item.rating.stars}⭐ | ${item.rating.count}
    //         </div>
    //         <div class="company-name">${item.company}</div>
    //         <div class="item-name">${item.item_name}</div>
    //         <div class="price">
    //             <span class="current-price">Rs ${item.current_price}</span>
    //             <span class="original-price">Rs ${item.original_price}</span>
    //             <span class="discount">(${item.discount_percentage}% OFF)</span>
    //         </div>
    //         <button class="btn-add-bag" onclick="addToBag('${item.id}')">Add to Bag</button>
    //     </div>
    //     `;
    // });
    // itemContainerElement.innerHTML = newItemsHTML;

    // Iterate over the New array (assuming New is another array of items)
    Women.forEach(isitem => {
        trendingItemsHTML += `
        <div class="newitem-container">
            <img class="item-img" src="${isitem.image}" alt="${isitem.item_name}">
            <div class="rating">
            <div class="Wishlist"><span class="material-symbols-outlined action_icon"onclick="addToWishlist('${isitem.id}')">favorite</span></div>
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
