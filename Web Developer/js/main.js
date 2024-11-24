document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Handle resume download
    const downloadButton = document.querySelector('.cta-button');
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            // Add your resume download logic here
            alert('Resume download will be available soon!');
        });
    }
}); 