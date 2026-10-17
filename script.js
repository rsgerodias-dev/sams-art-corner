
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
   5. CONSOLE LOGS
   ========================= */

console.log("Shop name:", shopName);
console.log("Current year:", currentYear);
console.log("Running total:", runningTotal);
