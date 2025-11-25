document.addEventListener('DOMContentLoaded', function() {
    // Initialize all prompt cards
    const promptCards = document.querySelectorAll('.prompt-card');
    
    promptCards.forEach(card => {
        // Set the prompt text from data attribute
        const promptText = card.getAttribute('data-prompt');
        card.querySelector('.prompt-text').textContent = promptText;
        
        // Add click event to flip card
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
        
        // Add copy functionality
        const copyBtn = card.querySelector('.copy-btn');
        copyBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card flip when clicking copy button
            
            // Copy text to clipboard
            navigator.clipboard.writeText(promptText).then(() => {
                // Change icon to checkmark temporarily
                const icon = this.querySelector('i');
                const originalIcon = icon.getAttribute('data-feather');
                icon.setAttribute('data-feather', 'check');
                feather.replace();
                
                // Revert after 2 seconds
                setTimeout(() => {
                    icon.setAttribute('data-feather', originalIcon);
                    feather.replace();
                }, 2000);
            });
        });
    });
    
    // Close card when clicking outside (if needed)
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.prompt-card')) {
            promptCards.forEach(card => {
                card.classList.remove('flipped');
            });
        }
    });
});