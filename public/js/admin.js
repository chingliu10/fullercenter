// Admin Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
});

function initializeDashboard() {
    // Sidebar toggle functionality
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
                sidebar.classList.remove('active');
            }
        }
    });

    // Initialize tooltips
    initializeTooltips();
    
    // Initialize real-time updates
    initializeRealTimeUpdates();
    
    // Initialize notification system
    initializeNotifications();
}

function initializeTooltips() {
    // Add tooltips to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add hover effect animations
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

function initializeRealTimeUpdates() {
    // Simulate real-time updates every 30 seconds
    setInterval(function() {
        updateDashboardStats();
    }, 30000);
}

function updateDashboardStats() {
    // In a real application, this would fetch from an API
    console.log('Updating dashboard stats...');
    
    // Simulate random donation updates
    const donationElements = document.querySelectorAll('.donation-item');
    if (donationElements.length > 0 && Math.random() > 0.7) {
        addNewDonation();
    }
}

function addNewDonation() {
    const donationsList = document.querySelector('.donations-list');
    if (!donationsList) return;
    
    // Sample new donation data
    const newDonation = {
        donor: 'New Donor',
        amount: Math.floor(Math.random() * 500) + 50,
        project: 'Fuller Center Project',
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };
    
    // Create new donation element
    const donationElement = document.createElement('div');
    donationElement.className = 'donation-item new-donation';
    donationElement.innerHTML = `
        <div class="donation-info">
            <div class="donor-name">${newDonation.donor}</div>
            <div class="donation-project">${newDonation.project}</div>
        </div>
        <div class="donation-details">
            <div class="amount">$${newDonation.amount}</div>
            <div class="date">${newDonation.date} ${newDonation.time}</div>
        </div>
    `;
    
    // Add to top of list
    donationsList.insertBefore(donationElement, donationsList.firstChild);
    
    // Animate in
    setTimeout(() => {
        donationElement.classList.remove('new-donation');
    }, 100);
    
    // Remove last item if more than 5
    const items = donationsList.querySelectorAll('.donation-item');
    if (items.length > 5) {
        items[items.length - 1].remove();
    }
    
    // Update notification count
    updateNotificationCount();
}

function initializeNotifications() {
    const notificationElement = document.querySelector('.notifications');
    if (notificationElement) {
        notificationElement.addEventListener('click', function() {
            showNotificationDropdown();
        });
    }
}

function updateNotificationCount() {
    const countElement = document.querySelector('.notification-count');
    if (countElement) {
        let currentCount = parseInt(countElement.textContent) || 0;
        countElement.textContent = currentCount + 1;
        
        // Animate the notification
        countElement.style.transform = 'scale(1.3)';
        setTimeout(() => {
            countElement.style.transform = 'scale(1)';
        }, 200);
    }
}

function showNotificationDropdown() {
    // Create notification dropdown if it doesn't exist
    let dropdown = document.querySelector('.notification-dropdown');
    if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.className = 'notification-dropdown';
        dropdown.innerHTML = `
            <div class="notification-header">
                <h4>Recent Notifications</h4>
                <button class="mark-all-read">Mark all as read</button>
            </div>
            <div class="notification-list">
                <div class="notification-item">
                    <div class="notification-icon">💰</div>
                    <div class="notification-content">
                        <div class="notification-title">New donation received</div>
                        <div class="notification-time">2 minutes ago</div>
                    </div>
                </div>
                <div class="notification-item">
                    <div class="notification-icon">🎯</div>
                    <div class="notification-content">
                        <div class="notification-title">Project goal 50% reached</div>
                        <div class="notification-time">1 hour ago</div>
                    </div>
                </div>
                <div class="notification-item">
                    <div class="notification-icon">👤</div>
                    <div class="notification-content">
                        <div class="notification-title">New donor registered</div>
                        <div class="notification-time">3 hours ago</div>
                    </div>
                </div>
            </div>
            <div class="notification-footer">
                <a href="/admin/notifications">View all notifications</a>
            </div>
        `;
        
        document.body.appendChild(dropdown);
        
        // Position dropdown
        const notificationBtn = document.querySelector('.notifications');
        const rect = notificationBtn.getBoundingClientRect();
        dropdown.style.position = 'fixed';
        dropdown.style.top = (rect.bottom + 10) + 'px';
        dropdown.style.right = '20px';
        dropdown.style.zIndex = '1001';
        
        // Add styles
        dropdown.style.background = 'white';
        dropdown.style.borderRadius = '8px';
        dropdown.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        dropdown.style.width = '320px';
        dropdown.style.maxHeight = '400px';
        dropdown.style.overflowY = 'auto';
        
        // Close when clicking outside
        setTimeout(() => {
            document.addEventListener('click', function closeDropdown(e) {
                if (!dropdown.contains(e.target) && !notificationBtn.contains(e.target)) {
                    dropdown.remove();
                    document.removeEventListener('click', closeDropdown);
                }
            });
        }, 100);
    }
}

// Project management functions
function editProject(projectId) {
    // In a real app, this would open an edit modal or navigate to edit page
    console.log('Editing project:', projectId);
    
    // For now, show a simple alert
    alert(`Edit project ${projectId} - This would open the project editor`);
}

function viewProject(projectId) {
    // Navigate to the public project page
    window.open(`/donate/${projectId}`, '_blank');
}

function deleteProject(projectId) {
    if (confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
        // In a real app, this would make an API call
        console.log('Deleting project:', projectId);
        
        // Remove from DOM for demo
        const projectCard = document.querySelector(`[data-project-id="${projectId}"]`);
        if (projectCard) {
            projectCard.style.transition = 'all 0.3s ease';
            projectCard.style.transform = 'scale(0)';
            projectCard.style.opacity = '0';
            
            setTimeout(() => {
                projectCard.remove();
            }, 300);
        }
    }
}

// Dashboard utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function calculatePercentage(current, total) {
    return Math.round((current / total) * 100);
}

// Export data functions
function exportDonations() {
    // In a real app, this would generate and download a CSV/Excel file
    console.log('Exporting donations data...');
    alert('Donation data export would be generated here');
}

function exportProjects() {
    // In a real app, this would generate and download project data
    console.log('Exporting projects data...');
    alert('Project data export would be generated here');
}

// Search and filter functions
function searchDonations(query) {
    const donationItems = document.querySelectorAll('.donation-item');
    donationItems.forEach(item => {
        const donorName = item.querySelector('.donor-name').textContent.toLowerCase();
        const projectName = item.querySelector('.donation-project').textContent.toLowerCase();
        
        if (donorName.includes(query.toLowerCase()) || projectName.includes(query.toLowerCase())) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function filterProjectsByStatus(status) {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const projectStatus = card.querySelector('.project-status').textContent.toLowerCase();
        
        if (status === 'all' || projectStatus === status.toLowerCase()) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Animation helpers
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = formatCurrency(value);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize animations when dashboard loads
function initializeAnimations() {
    // Animate stat cards on page load
    const statValues = document.querySelectorAll('.stat-info h3');
    statValues.forEach((element, index) => {
        const value = parseInt(element.textContent.replace(/[^0-9]/g, ''));
        if (value > 0) {
            setTimeout(() => {
                animateValue(element, 0, value, 1000);
            }, index * 200);
        }
    });
    
    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.transition = 'width 1s ease-out';
            bar.style.width = width;
        }, index * 300);
    });
}

// Call animations after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeAnimations, 500);
});