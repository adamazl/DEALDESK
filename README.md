# Revenue Calculator

This is a simple web application that calculates new revenue based on deal amount and company delta.

## Features

- Input deal amount and company delta.
- Calculate new revenue based on the formula:
    - If company delta is negative, new revenue = max(0, deal amount + company delta)
    - Otherwise, new revenue = max(0, deal amount)

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository**:
    ```
    git clone https://github.com/adamazl/Revenue-Calculator.git
    ```

2. **Open the project in Visual Studio Code**:
    ```
    cd revenue-calculator
    code .
    ```

3. **Install Live Server**:
    - Open Visual Studio Code.
    - Go to Extensions (Ctrl+Shift+X) and search for `Live Server`.
    - Click `Install`.

4. **Run the project**:
    - Right-click on `index.html` and select `Open with Live Server`.
    - The application will open in your default browser.

## Files

- `index.html`: The main HTML file containing the structure of the app.
- `styles.css`: The CSS file for styling the app.
- `script.js`: The JavaScript file for handling the revenue calculation.

## Usage

1. Enter a deal amount in the input field.
2. Enter a company delta value.
3. Click "Calculate" to see the new revenue result.

## License

This project is open-source under the [MIT License](LICENSE).
