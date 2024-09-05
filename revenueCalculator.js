// revenueCalculator.js

// Example inputs

const dealAmount = 4000;     //New 2024 Deal Amount
const companyDelta = 2000;

// Function to calculate new revenue
/* function calculateNewRevenue(dealAmount, companyDelta){
    if (companyDelta < 0) {
        if (dealAmount > -companyDelta){
            return dealAmount + companyDelta;
        }else{
            return 0;
        }
    }else if(dealAmount >= 0){
        return dealAmount;
    }else{
        return 0;
    }
} */

function calculateNewRevenue2(dealAmount, companyDelta) {
    if (companyDelta < 0) {
        return Math.max(0, dealAmount + companyDelta);
    }
    return Math.max(0, dealAmount);
}


// Print results to console
console.log("Inputs:");
console.log("Company Delta: ",companyDelta);
console.log("Deal Amount: ",dealAmount);
console.log("");
console.log("Outputs:");
console.log("New Revenue2: ",calculateNewRevenue2(dealAmount,companyDelta));
console.log("");
