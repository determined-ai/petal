var projectList = [
            'Muppet Detection',
            'Cheese Classification',
            'Mentally Supreme Turkey',
            'Previously Free Raptor',
]


// **************** doughnut chart ****************

var randomScalingFactorDoughtnut = function() {
    return Math.round(Math.random() * 100);
};

var config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                randomScalingFactorDoughtnut(),
                randomScalingFactorDoughtnut(),
                randomScalingFactorDoughtnut(),
                randomScalingFactorDoughtnut(),
                randomScalingFactorDoughtnut(),
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Muppet Detection',
            'Cheese Classification',
            'Mentally Supreme Turkey',
            'Previously Free Raptor',
            'Unused'
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'On-premise Cluster Utilization per Project '
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};

var config2 = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                randomScalingFactorDoughtnut(),
                randomScalingFactorDoughtnut(),
                randomScalingFactorDoughtnut(),
                randomScalingFactorDoughtnut(),
                randomScalingFactorDoughtnut(),
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'On-premise Cluster Utilization per Project '
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};


// **************** cost per project ****************

var costPerProjectData = {
    labels: projectList,
    datasets: [{
        label: 'USD',
        backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
        ],
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]

    }]
};


// **************** bar chart ****************

var barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Production',
        backgroundColor: window.chartColors.red,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }, {
        label: 'Development',
        backgroundColor: window.chartColors.blue,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }, {
        label: 'Test',
        backgroundColor: window.chartColors.green,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }]

};

console.log(barChartData)

window.onload = function() {


    var ctx = document.getElementById('doughnut').getContext('2d');
    window.myDoughnut = new Chart(ctx, config);

    var ctx = document.getElementById('doughnut2').getContext('2d');
    window.myDoughnut2 = new Chart(ctx, config2);

    var ctx = document.getElementById('canvas').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            title: {
                display: true,
                text: 'Petal Monthly GPU spend per cluster (in USD)'
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });

    var ctx = document.getElementById('project-cost').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: costPerProjectData,
        options: {
            title: {
                display: true,
                text: 'Petal Monthly Spend per Project (in USD)'
            },
            legend: {
                display: false
             },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });
};

document.getElementById('randomizeData').addEventListener('click', function() {
    barChartData.datasets.forEach(function(dataset) {
        dataset.data = dataset.data.map(function() {
            return randomScalingFactor();
        });
    });
    window.myBar.update();
});
