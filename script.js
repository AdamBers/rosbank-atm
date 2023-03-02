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





//////////////////////////////////////////////// Chart-3
const ctx3 = document.getElementById('chart-3');
data3 = [1, 2, 1]
backgroundColor1 = [
    '#E40038',
    '#001C3D',
    '#D9D9D9'
]


new Chart(ctx3, {
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







////////////////////////////////////////////// Chart-7
const ctx7 = document.getElementById('chart-7');
data7 = [3, 4, 5, 7, 9, 10, 8, 7, 4, 3, 2, 1]
backgroundColor1 = [
    '#E40038',
    '#001C3D',
    '#D9D9D9'
]


new Chart(ctx7, {
    type: 'line',
    data: {
        labels: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек',],
        datasets: [{
            data: data7,
            borderColor: "#EE293D",
            cubicInterpolationMode: 'monotone',
        }]
    },
    options: {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    }
});



////////////////////////////////////////////// Chart-7
const ctx8 = document.getElementById('chart-8');
data8 = [
    {
        label: 'Dataset 1',
        data: [3, 4, 5, 7, 9, 10, 8, 7, 4, 3, 2, 1],
        backgroundColor: "#E40038",
    },
    {
        label: 'Dataset 1',
        data: [3, 4, 5, 7, 9, 10, 8, 7, 4, 3, 2, 1],
        backgroundColor: "#001C3D",
    },
    {
        label: 'Dataset 1',
        data: [3, 4, 5, 7, 9, 10, 8, 7, 4, 3, 2, 1],
        backgroundColor: "#D9D9D9",
    }
]

new Chart(ctx8, {
    type: 'bar',
    data: {
        labels: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек',],
        datasets: [{
            data: data8,
        }]
    },
    options: {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        }
    }
});







//////////////////////////////////////////////// Chart-9
const ctx9 = document.getElementById('chart-9');
data9 = [1, 2, 1]
backgroundColor9 = [
    '#E40038',
    '#001C3D',
    '#D9D9D9'
]


new Chart(ctx9, {
    type: 'doughnut',
    data: {
        labels: ["Оценка 1-2", "Оценка 3-4", "Оценка 5"],
        datasets: [{
            data: data9,
            backgroundColor: backgroundColor9
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