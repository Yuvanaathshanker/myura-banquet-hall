// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Target the form using the ID you added in the HTML
    const form = document.getElementById('inquiryForm');
    // Target the message area using the ID you added
    const messageElement = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        // 1. Stop the browser from refreshing the page
        event.preventDefault();

        // 2. Initial state: Show a 'sending' message
        messageElement.textContent = 'Sending inquiry...';
        messageElement.style.color = '#333';
        messageElement.style.backgroundColor = 'transparent';
        messageElement.style.padding = '0';
        
        // 3. Collect the form data (not strictly necessary for the demo, but good practice)
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            contactNumber: document.getElementById('contact-number').value,
            message: document.getElementById('message').value
        };

        // 4. Simulate the server communication delay (1.5 seconds)
        setTimeout(() => {
            
            // 5. Display the success message and style it
            messageElement.textContent = '✅ Inquiry sent successfully! We will contact you within 24 hours.';
            messageElement.style.color = 'white';
            messageElement.style.backgroundColor = 'green';
            messageElement.style.padding = '8px';
            messageElement.style.borderRadius = '4px';

            // 6. Clear the form fields
            form.reset();

        }, 1500); // 1500 milliseconds = 1.5 seconds
    });
});