document.getElementById('calculateButton').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const blockchain = document.getElementById('blockchain').value;

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    // Комиссии блокчейнов (примерные значения)
    const fees = {
        Ethereum: 0.005, // 0.5% комиссия
        Binance: 0.001,  // 0.1% комиссия
        Polygon: 0.0005  // 0.05% комиссия
    };

    const fee = amount * fees[blockchain];

    document.getElementById('fee').querySelector('span').textContent = fee.toFixed(4);
});
