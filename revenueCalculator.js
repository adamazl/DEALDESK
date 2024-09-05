// revenueCalculator.js

// Function to calculate renewal revenue
function calculateRenewalRevenue(previousARR, currentARR, dealAmount) {
    if (previousARR >= currentARR) { // If previous year ARR is more than or equal to this year's ARR
        if (dealAmount >= (previousARR - currentARR)) { // And if the amendment amount is more than or equal to the delta
            return previousARR - currentARR; // Calculate the delta
        } else {
            return dealAmount; // Else, return the amendment amount
        }
    } else { // If previous year ARR is less than this year's ARR
        return 0; // No renewal revenue needed if this year's total is greater than last year's total
    }
}

// Function to calculate new revenue
function calculateNewRevenue(dealAmount, previousARR, currentARR) {
    var renewalRevenue = calculateRenewalRevenue(previousARR, currentARR, dealAmount);
    
    if (previousARR < currentARR) {
        return dealAmount;
    } else if (dealAmount > (previousARR - currentARR)) {
        return dealAmount - renewalRevenue; // Calculate new revenue when deal amount is greater than the difference
    } else {
        return 0; // No new revenue if deal amount doesn't cover the difference
    }
}

// Example inputs
const previousARR = 10000; //2023 ARR
const currentARR = 8000;  //2024 ARR
const dealAmount = 4000;     //New 2024 Deal Amount


// Calculate renewal and new revenue
const renewalRevenue = calculateRenewalRevenue(previousARR, currentARR, dealAmount);
const newRevenue = calculateNewRevenue(dealAmount, previousARR, currentARR);

// Print results to console
console.log("Inputs:");
console.log("");
console.log("2023 ARR:", previousARR);
console.log("2024 ARR:", currentARR);
console.log("2024 Amendment:", dealAmount);
console.log("");
console.log("");
console.log("Outputs:");
console.log("");
console.log("Renewal Revenue:", renewalRevenue);
console.log("New Revenue:", newRevenue);
console.log("");
