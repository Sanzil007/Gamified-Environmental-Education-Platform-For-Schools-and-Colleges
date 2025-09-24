document.addEventListener('DOMContentLoaded', () => {
    // This script manages the filters for the learning modules
    const filterButtons = document.querySelectorAll(".filter-btn");
    const moduleCards = document.querySelectorAll(".module-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove 'active' class from all filter buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add 'active' class to the clicked button
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            // Loop through all module cards and show/hide based on the filter
            moduleCards.forEach(card => {
                const category = card.getAttribute("data-category");
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Manages the state of the "Start" and "Continue" buttons
    const continueBtn = document.querySelector('.module-card .continue-btn'); // Assuming there's a continue button
    const startBtns = document.querySelectorAll('.module-card .start-btn');
    
    // Example: change 'Start' to 'Continue' after a certain action
    if (continueBtn) {
        continueBtn.textContent = 'Continue';
        continueBtn.style.backgroundColor = '#4caf50';
    }
    
    startBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Logic for starting a module
            console.log("Module started!");
        });
    });
});