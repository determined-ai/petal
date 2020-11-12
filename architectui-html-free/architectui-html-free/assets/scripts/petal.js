var projectList = [
            'Neil Language Processing',
            'Ameet Classification',
            'Evan-t Detection',
            'Determined Neural Network',
]

// ************** On premise vs Cloud *************


var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var cloudConfig = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'On-Premise',
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            data: [
                100,
                250,
                1200,
                1700,
                1800,
                1900,
                2100,
            ],
            fill: false,
        }, {
            label: 'Cloud',
            fill: false,
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            data: [
                2000,
                1950,
                1100,
                1000,
                930,
                300,
                100,
            ],
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Hours Used'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Hours'
                }
            }]
        }
    }
};


// ************** Money saved *************


var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var spotConfig = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Development',
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            data: [
                10000,
                20000,
                35000,
                35000,
                35000,
                37000,
                37000,
            ],
            fill: false,
        }, {
            label: 'Test',
            fill: false,
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            data: [
                10000,
                30000,
                35000,
                45000,
                45000,
                47000,
                47000,
            ],
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Money Saved Running on Spot Instances'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Money Saved'
                }
            }]
        }
    }
};

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
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.white,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Neil Language Processing',
            'Evan-t Detection',
            'Determined Neural Network',
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
            ],
            backgroundColor: [
                window.chartColors.red,
                "#FF9800",
                window.chartColors.yellow,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Neil Language Processing',
            'Ameet Classification',
            'Evan-t Detection',
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Cloud Cluster Utilization per Project '
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
                "#FF9800",
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

    var ctx = document.getElementById('spot').getContext('2d');
    window.myLine = new Chart(ctx, spotConfig);
    
    var ctx = document.getElementById('cloud').getContext('2d');
    window.myLine = new Chart(ctx, cloudConfig);
    
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
