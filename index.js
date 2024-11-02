
// Handle contact form submission (simulating backend)
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Collect form data
    const fullName = document.querySelector('input[placeholder="Full Name"]').value;
    const email = document.querySelector('input[placeholder="Email Name"]').value;
    const phone = document.querySelector('input[placeholder="Phone number"]').value;
    const subject = document.querySelector('input[placeholder="Subject"]').value;
    const message = document.querySelector('textarea').value;

    // Validate form data
    if (!fullName || !email || !phone || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Display a message as if form submission is successful
    alert(`Thank you, ${fullName}! Your message has been sent.`);
    
    // Clear form after submission
    document.querySelector('form').reset();
});


