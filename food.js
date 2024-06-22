let total = 0;

function addToCart(food, price) {
    const cart = document.getElementById('cart');
    const item = document.createElement('div');
    item.textContent = `${food} - ₹${price}`;
    cart.appendChild(item);
    
    total += price;
    document.getElementById('total').textContent = total;
}
document.getElementById('button').addEventListener('click', function() {
    document.getElementById('button1').style.display = 'inline-block'; // Show the second button
});
function showPopup() {
    document.getElementById('popup').style.display = 'block';
    
}
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}