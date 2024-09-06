// revenueCalculator.js

// Example inputs
const currentARR = 8000;  //2024 ARR
const dealAmount = 4000;     //New 2024 Deal Amount
const companyDelta = -2000;

//functions

//function to calculate revenue from deals
function calculateDealRevenue(dealAmount, companyDelta) {
    if (dealAmount >= 0) {
        // Positive dealAmount (logic for calculatePosNewRevenue)
        if (companyDelta < 0) {
            if (dealAmount > -companyDelta) {
                return dealAmount + companyDelta;
            } else {
                return 0;
            }
        } else {
            return dealAmount;
        }
    } else {
        // Negative dealAmount (logic for calculateNegNewRevenue)
        if (companyDelta <= 0) {
            return 0;
        } else {
            if (-dealAmount < companyDelta) {
                return dealAmount;
            } else {
                return -companyDelta;
            }
        }
    }
}


//function to calculate revenue from renewals
function calculateRenewalRevenue(dealAmount, currentARR){
    if(dealAmount>currentARR){
        return dealAmount - currentARR;
    }else{
        return 0;
    }
}

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
