let bagItems;
let wishItems;
onLoad();

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle?.addEventListener("click", function (event) {
        event.preventDefault();
        navLinks.classList.toggle("active");

        // Ensure heading is selected AFTER it's rendered
        setTimeout(() => {
            const headingText = document.querySelector(".Men-heading1");
            if (headingText) {
                headingText.style.display = navLinks.classList.contains("active") ? "none" : "block";
            }
        }, 50);
    });

    displayItemsOnHomepage(); // Ensure the heading is generated
});


function onLoad() {
    let bagItemsStr = localStorage.getItem("bagItems");
    let wishItemsStr = localStorage.getItem("wishItems");

    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    wishItems = wishItemsStr ? JSON.parse(wishItemsStr) : [];

    displayBagIcon();
    displaywhisIcon();
}

function addToBag(itemId) {
    itemId = itemId.toString();
    bagItems.push(itemId);
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
    displayBagIcon();
}

function addTowish(itemId) {
    itemId = itemId.toString();
    wishItems.push(itemId);
    localStorage.setItem("wishItems", JSON.stringify(wishItems));
    displaywhisIcon();
}

function displayBagIcon() {
    let bagItemCount = document.querySelector(".bag-items");
    if (!bagItemCount) return;

    if (bagItems.length > 0) {
        bagItemCount.style.visibility = "visible";
        bagItemCount.innerText = bagItems.length;
    } else {
        bagItemCount.style.visibility = "hidden";
    }
}

function displaywhisIcon() {
    let wishItemCount = document.querySelector(".wish-items");
    if (!wishItemCount) return;

    if (wishItems.length > 0) {
        wishItemCount.style.visibility = "visible";
        wishItemCount.innerText = wishItems.length;
    } else {
        wishItemCount.style.visibility = "hidden";
    }
}

function displayItemsOnHomepage() {
    let newItemContainerElement = document.querySelector(".woitems-container");

    if (!newItemContainerElement) {
        console.warn("❌ Warning: '.woitems-container' not found.");
        return;
    }

    // Ensure 'Beauty' array is available
    if (typeof Beauty === "undefined" || !Array.isArray(Beauty) || Beauty.length === 0) {
        console.warn("❌ Warning: 'Beauty' array is empty or undefined.");
        newItemContainerElement.innerHTML = "<p>No products found.</p>";
        return;
    }

    console.log("✅ Beauty array:", Beauty);

    let trendingItemsHTML = '<div class="Men-heading1"><h3 class="trending">Beauty-Products</h3></div>';

    Beauty.forEach(isitem => {
        trendingItemsHTML += `
        <div class="newitem-container">
            <img class="item-img" src="${isitem.image}" alt="${isitem.item_name}">
            <div class="rating">
                <div class="Wishlist">
                    <span class="material-symbols-outlined action_icon" onclick="addTowish('${isitem.id}')">favorite</span>
                </div>
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
