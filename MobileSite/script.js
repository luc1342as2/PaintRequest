// script.js
document.getElementById('quote-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Retrieve form values
    const customerName = document.getElementById('customer-name').value;
    const customerEmail = document.getElementById('customer-email').value;
    const roomType = document.getElementById('room-type').value;
    const roomWidth = document.getElementById('room-width').value;
    const roomLength = document.getElementById('room-length').value;
    const colorBox = document.getElementById('color-box').value;
    const paintType = document.getElementById('paint-type').value;
  
    // Calculate square footage of the room
    const squareFootage = roomWidth * roomLength;
  
    // Calculate the number of paint cans needed
    const cansNeeded = Math.ceil(squareFootage / 400);
  
    // Calculate the final price
    let paintPrice = 0;
    if (paintType === 'standard') {
      paintPrice = 24.99;
    } else if (paintType === 'premium') {
      paintPrice = 39.99;
    }
    const totalPrice = (paintPrice * cansNeeded) * 1.13;
  
    // Store data in local storage
    localStorage.setItem('customerName', customerName);
    localStorage.setItem('customerEmail', customerEmail);
    localStorage.setItem('roomType', roomType);
    localStorage.setItem('squareFootage', squareFootage);
    localStorage.setItem('colorBox', colorBox);
    localStorage.setItem('paintCans', cansNeeded);
    localStorage.setItem('finalPrice', totalPrice.toFixed(2));
  
    // Redirect to the quote page
    window.location.href = 'quote.html';
  });
  