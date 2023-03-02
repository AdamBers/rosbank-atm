//////////////////////////////////////////////// Chart-1
const ctx1 = document.getElementById('chart-1');
data1 = [1, 2, 1]
backgroundColor1 = [
    '#E40038',
    '#001C3D',
    '#D9D9D9'
]


new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ["Оценка 1-2", "Оценка 3-4", "Оценка 5"],
        datasets: [{
            data: data1,
            backgroundColor: backgroundColor1
        }]
    },
    options: {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});