const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tripInput = document.getElementById("trip");
const totalSpan = document.getElementById("total");

function calculate(){
    const billValue = billInput.value;
    const tripValue = tripInput.value;
    const totalValue = billValue * (1+tripValue/100);
    totalSpan.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click",calculate);