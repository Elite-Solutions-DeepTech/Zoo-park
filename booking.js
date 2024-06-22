function calculateTotal() {
    const adultPrice = 50;
    const childPrice = 30;

    const numAdults = parseInt(document.getElementById('adults').value);
    const numChildren = parseInt(document.getElementById('children').value);
    const date = document.getElementById('date').value;
    

    if (isNaN(numAdults) || isNaN(numChildren) || !date) {
        alert("Please fill out all fields.");
        return;
    }
    
    const totalCost = (numAdults * adultPrice) + (numChildren * childPrice);

    document.getElementById('result').innerText = `Total cost is: ${totalCost}`;
}
document.getElementById('button1').addEventListener('click', function() {
    document.getElementById('button2').style.display = 'inline-block'; // Show the second button
});
function showPopup() {
    document.getElementById('popup').style.display = 'block';
    
}
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
