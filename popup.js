document.getElementById('send').addEventListener('click', function () {
    let phone = document.getElementById('phone').value.trim();
    let message = document.getElementById('message').value.trim();

    // Validate phone number and message
    if (phone && message) {
        // Ensure phone number is in international format (e.g., +123456789)
        if (!phone) {
            alert('Please enter the phone number in the international format (e.g., +123456789).');
            return;
        }

        // Construct the WhatsApp URL
        let whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        // Open the WhatsApp URL in a new tab
        window.open(whatsappUrl, '_blank');
    } else {
        alert('Please enter both phone number and message.');
    }
});
