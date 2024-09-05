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
const previousARR = 10000; // 2023 ARR
const currentARR = 8000;  // 2024 ARR
const dealAmount = 4000;  // New 2024 Deal Amount

const nextYearARR = 9000; // 2025 ARR
const nextYearDealAmount = 3000; // New 2025 Deal Amount

// Calculate renewal and new revenue for 2024
const renewalRevenue2024 = calculateRenewalRevenue(previousARR, currentARR, dealAmount);
const newRevenue2024 = calculateNewRevenue(dealAmount, previousARR, currentARR);

// Calculate renewal and new revenue for 2025
const renewalRevenue2025 = calculateRenewalRevenue(currentARR, nextYearARR, nextYearDealAmount);
const newRevenue2025 = calculateNewRevenue(nextYearDealAmount, currentARR, nextYearARR);

// Print results to console
console.log("");
console.log("Inputs for 2024:");
console.log("2023 ARR:", previousARR);
console.log("2024 ARR:", currentARR);
console.log("2024 Amendment:", dealAmount);
console.log("");
console.log("Outputs for 2024:");
console.log("Renewal Revenue:", renewalRevenue2024);
console.log("New Revenue:", newRevenue2024);
console.log("");
console.log("Inputs for 2025:");
console.log("2024 ARR:", currentARR);
console.log("2025 ARR:", nextYearARR);
console.log("2025 Amendment:", nextYearDealAmount);
console.log("");
console.log("Outputs for 2025:");
console.log("Renewal Revenue:", renewalRevenue2025);
console.log("New Revenue:", newRevenue2025);
console.log("");
