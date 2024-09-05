function calculateNewRevenue2(dealAmount, companyDelta) {
    if (companyDelta < 0) {
        return Math.max(0, dealAmount + companyDelta);
    }
    return Math.max(0, dealAmount);
}

document.getElementById('revenue-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const dealAmount = parseFloat(document.getElementById('dealAmount').value);
    const companyDelta = parseFloat(document.getElementById('companyDelta').value);

    const newRevenue = calculateNewRevenue2(dealAmount, companyDelta);

    document.getElementById('newRevenue').textContent = `New Revenue: $${newRevenue.toFixed(2)}`;
});
