let calculate = document.querySelector('#calculate');

calculate.addEventListener('click', () => {
    let totalBill = document.querySelector('#totalBill').value;
    let tipPercent = document.querySelector('#tipPercent').value;
    let split = document.querySelector('#split').value;

    if (totalBill === '' || tipPercent < 0 || split == 0) {
        alert('Please enter values');
        return;
    }
    else if (tipPercent == 0) {
        alert('No tip? Bad karma.');
        return;
    }

    let total = (totalBill * tipPercent) / split;
    total = total.toFixed(2);
    
    document.getElementById('tip').innerHTML = total;
})