function adjustQuantity(button, change) {
    const quantitySpan = button.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantitySpan.textContent);
    quantity += change;
    if (quantity < 1) {
        quantity = 1;
    }
    quantitySpan.textContent = quantity;

    updateTotal();
}

function removeItem(button) {
    const cartItem = button.parentElement;
    cartItem.remove();
    updateTotal();
}

function toggleLike(button) {
    button.classList.toggle('liked');
}

function updateTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;

    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.price').textContent);
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        total += price * quantity;
    });

    document.getElementById('total-price').textContent = total.toFixed(2);
}

// Initialiser le prix total lors du chargement de la page
window.onload = updateTotal;