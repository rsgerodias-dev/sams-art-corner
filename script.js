
/* =========================
   1. SHOP INFORMATION
   ========================= */

const shopName = "Sam's Art Corner";
const currentYear = new Date().getFullYear();

let runningTotal = 0;


/* =========================
   2. DISPLAY SHOP NAME
   ========================= */

const shopHeading = document.getElementById("shop-name");

if (shopHeading) {
    shopHeading.textContent = shopName;
}


/* =========================
   3. COPYRIGHT
   ========================= */

const copyright = document.getElementById("copyright");

if (copyright) {
    copyright.textContent = "\u00A9 " + currentYear + " " + shopName;
}


/* =========================
   4. CALCULATE PRODUCT TOTAL
   ========================= */

const sketchPrice = 500;
const coloredPrice = 1000;
const fullArtPrice = 1500;

runningTotal = sketchPrice + coloredPrice + fullArtPrice;

const productTotal = document.getElementById("product-total");

if (productTotal) {
    productTotal.textContent =
        "Total value of all products: PHP " + runningTotal;
}


/* =========================
   5. STOCK STATUS
   ========================= */

const stockCount = 5;
let stockMessage = "";

if (stockCount > 10) {
    stockMessage = "In stock";
} else if (stockCount > 0 && stockCount <= 10) {
    stockMessage = "Only a few left";
} else if (stockCount === 0) {
    stockMessage = "Sold out";
} else {
    stockMessage = "Stock unavailable";
}

const stockStatus = document.getElementById("stock-status");

if (stockStatus) {
    stockStatus.textContent = stockMessage;
}


/* =========================
   6. FREE DELIVERY CHECK
   ========================= */

const orderTotal = 1500;
const isMember = true;

const qualifiesForFreeDelivery = orderTotal >= 1500 && isMember;

const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;

const finalTotal = orderTotal + deliveryFee;

const deliveryResult = document.getElementById("delivery-result");

if (deliveryResult) {
    deliveryResult.textContent =
        "Order total: PHP " + orderTotal +
        " | Delivery fee: PHP " + deliveryFee +
        " | Final total: PHP " + finalTotal;
}


/* =========================
   7. SHOP OPEN OR CLOSED
   ========================= */

const isShopOpen = true;

const shopStatus = isShopOpen ? "Open today" : "Closed today";

const openStatus = document.getElementById("open-status");

if (openStatus) {
    openStatus.textContent = shopStatus;
}


/* =========================
   8. CONSOLE LOGS
   ========================= */

console.log("Shop name:", shopName);
console.log("Current year:", currentYear);
console.log("Running total:", runningTotal);
console.log("Stock status:", stockMessage);
console.log("Delivery fee:", deliveryFee);
console.log("Shop status:", shopStatus);