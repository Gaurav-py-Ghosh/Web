document.querySelectorAll('.record-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Update tab styles
        document.querySelector('.record-tab.active').classList.remove('active');
        tab.classList.add('active');

        // Show corresponding content
        const organ = tab.dataset.organ;
        document.querySelector('.organ-content.active').classList.remove('active');
        document.getElementById(`${organ}-content`).classList.add('active');

        // Initialize or update charts based on the active tab
        initializeCharts(organ);
    });
});

function initializeCharts(organ) {
    if (organ === 'heart') {
        initHeartChart();
    } else if (organ === 'brain') {
        initBrainChart();
    } else if (organ === 'kidney') {
        initKidneyChart();
    } else if (organ === 'eyes') {
        initEyesChart();
    }
}

function initHeartChart() {
    const ctx = document.getElementById('heartRateChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Heart Rate (BPM)',
                data: [72, 75, 82, 78, 76, 80, 81],
                borderColor: '#45B1A8',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 60,
                    max: 100
                }
            }
        }
    });
}

function initBrainChart() {
    const ctx = document.getElementById('brainActivityChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Alpha', 'Beta', 'Theta', 'Delta'],
            datasets: [{
                label: 'Brain Wave Activity',
                data: [65, 82, 45, 70],
                backgroundColor: '#45B1A8',
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function initKidneyChart() {
    const ctx = document.getElementById('kidneyFunctionChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Filtration Rate',
                data: [92, 94, 93, 95, 94, 95],
                borderColor: '#45B1A8',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 80,
                    max: 100
                }
            }
        }
    });
}

function initEyesChart() {
    const ctx = document.getElementById('screenTimeChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Screen Time (hours)',
                data: [6.5, 7.2, 6.8, 7.5, 6.2, 4.5, 4.8],
                backgroundColor: '#45B1A8',
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    });
}

// Initialize charts for the default active tab (heart)
initializeCharts('heart');
