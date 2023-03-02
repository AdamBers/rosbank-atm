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







//////////////////////////////////////////////// Chart-7
// const ctx7 = document.getElementById('chart-7');
// data7 = [1, 2, 1]
// backgroundColor1 = [
//     '#E40038',
//     '#001C3D',
//     '#D9D9D9'
// ]


// new Chart(ctx7, {
//     type: 'doughnut',
//     data: {
//         labels: ["Оценка 1-2", "Оценка 3-4", "Оценка 5"],
//         datasets: [{
//             data: data7,
//             backgroundColor: backgroundColor1
//         }]
//     },
//     options: {
//         maintainAspectRatio: true,
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: false,
//             }
//         }
//     }
// });







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