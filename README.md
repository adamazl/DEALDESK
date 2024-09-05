# Revenue Calculator
This program calculates these financial metrics such as `Renewal Revenue` and `New Revenue`.

### Code elements:

1. **`exports.main` Function**: This is the entry point for the function. In serverless environments, this is where you define the logic that will be executed when the function is triggered.

2. **Event and Callback**: The `event` parameter represents the input to the function (such as data passed to the function), and `callback` is used to return results or respond to the function call.

3. **Variable Declarations**: Variables like `currentARR`, `dealAmount`, and `previousARR` are used to hold values for calculations. In a real-world scenario, these might come from the `event` object.

4. **Functions**:
   - `calculateRenewalRevenue`: Computes the renewal revenue based on the difference between `previousARR` and `currentARR`, and the `dealAmount`.
   - `calculateNewRevenue`: Determines the new revenue, considering the `dealAmount`, `previousARR`, and `currentARR`.

5. **Console Logging**: Outputs the results of the calculations to the console.

6. **Callback**: The `callback` function is used to return the computed `newRevenue` and `renewalRevenue` as output fields.

### Understanding the Code

- **Renewal Revenue Calculation**: The function checks if `previousARR` is greater than or equal to `currentARR`. If so, it calculates renewal revenue based on whether `dealAmount` is sufficient to cover the difference.
  
- **New Revenue Calculation**: The function calculates new revenue by taking into account the `dealAmount` and the difference between `previousARR` and `currentARR`.

# Installation Guide

1. Open folder on your IDE (Visual Studio Code is recommended).
2. Download and install Node.js from this [link](nodejs.org "nodejs.org"). Choose the LTS version for stability.
3. Run command in terminal to initialize Node.js project:```npm init -y```.
4. Execute script:```node revenueCalculator.js``` to run the script.

# Important Note
Please do not push **private information** online as this is a **public repository**.