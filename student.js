document.addEventListener('DOMContentLoaded', () => {
    // Navigation bar switching logic
    const navLinks = document.querySelectorAll('.nav-links li');
    const contentSections = {
        'nav-dashboard': document.getElementById('dashboard-content'),
        'nav-learn': document.getElementById('learning-content'),
        'nav-challenges': document.getElementById('challenges-content'),
    };

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all nav links
            navLinks.forEach(item => item.classList.remove('active'));
            // Add active class to the clicked link
            link.classList.add('active');
            
            // Hide all content sections
            for (const id in contentSections) {
                if (contentSections.hasOwnProperty(id)) {
                    contentSections[id].classList.remove('active');
                    contentSections[id].classList.add('hidden');
                }
            }

            // Show the selected content section
            const targetId = link.id;
            if (contentSections[targetId]) {
                contentSections[targetId].classList.remove('hidden');
                contentSections[targetId].classList.add('active');
            }
        });
    });

    // Dashboard tabs switching logic (for 'Eco Tasks', 'Learning', 'Community')
    const tabs = document.querySelectorAll(".tab");
    const availableTasksContainer = document.querySelector(".available-tasks-container");
    const learningModulesContainer = document.querySelector(".learning-modules-container");
    
    // Create the learning content section for the dashboard tab
    const learningDashboardContent = document.createElement('div');
    learningDashboardContent.classList.add('learning-modules-container', 'hidden-content');
    learningDashboardContent.innerHTML = `
        <div class="container-header">
            <h2 class="container-title">Learning Modules</h2>
        </div>
        <div class="module-grid">
            <div class="module-card">
                <div class="module-header">
                    <h4 class="module-title">Climate Change Basics</h4>
                    <span class="module-points">20 pts</span>
                </div>
                <p class="module-description">Understanding global warming and its impacts on India</p>
                <div class="module-meta">
                    <span class="module-duration">20min</span>
                    <span class="module-tag">climate change</span>
                </div>
            </div>
            <div class="module-card">
                <div class="module-header">
                    <h4 class="module-title">Biodiversity in India</h4>
                    <span class="module-points">25 pts</span>
                </div>
                <p class="module-description">Explore India's rich biodiversity and conservation efforts</p>
                <div class="module-meta">
                    <span class="module-duration">25min</span>
                    <span class="module-tag">biodiversity</span>
                </div>
            </div>
            <div class="module-card">
                <div class="module-header">
                    <h4 class="module-title">Renewable Energy Solutions</h4>
                    <span class="module-points">30 pts</span>
                </div>
                <p class="module-description">Solar, wind, and other renewable energy sources</p>
                <div class="module-meta">
                    <span class="module-duration">30min</span>
                    <span class="module-tag">renewable energy</span>
                </div>
            </div>
            <div class="module-card">
                <div class="module-header">
                    <h4 class="module-title">Waste Management Strategies</h4>
                    <span class="module-points">22 pts</span>
                </div>
                <p class="module-description">Effective waste reduction, reuse, and recycling</p>
                <div class="module-meta">
                    <span class="module-duration">18min</span>
                    <span class="module-tag">waste management</span>
                </div>
            </div>
        </div>
    `;

    // Append the learning content to the dashboard grid
    const dashboardGrid = document.querySelector('.dashboard-content-grid');
    if (dashboardGrid) {
        dashboardGrid.appendChild(learningDashboardContent);
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            
            const recentActivityContainer = document.querySelector(".recent-activity-container");
            recentActivityContainer.classList.remove("hidden-content");
            recentActivityContainer.classList.add("active-content");

            if (tab.textContent.trim() === 'Eco Tasks') {
                availableTasksContainer.classList.remove("hidden-content");
                availableTasksContainer.classList.add("active-content");
                learningDashboardContent.classList.remove("active-content");
                learningDashboardContent.classList.add("hidden-content");
            } else if (tab.textContent.trim() === 'Learning') {
                availableTasksContainer.classList.remove("active-content");
                availableTasksContainer.classList.add("hidden-content");
                learningDashboardContent.classList.remove("hidden-content");
                learningDashboardContent.classList.add("active-content");
            } else if (tab.textContent.trim() === 'Community') {
                availableTasksContainer.classList.remove("active-content");
                availableTasksContainer.classList.add("hidden-content");
                learningDashboardContent.classList.remove("active-content");
                learningDashboardContent.classList.add("hidden-content");
                
                // You can add logic here to display community content if you have it
                // For now, it will just show the Recent Activity container.
            }
        });
    });

    // Example progress update
    const progressFill = document.querySelector(".progress-fill");
    let progress = 0;
    const updateProgress = () => {
        progress += 10;
        if (progress > 100) {
            progress = 0;
        }
        progressFill.style.width = `${progress}%`;
    };

    // You can call this function to update progress, e.g., on task completion
    // setInterval(updateProgress, 1000); 
});S