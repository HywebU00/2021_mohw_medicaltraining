$(function () {

    var chartData = {
        labels: [
            "2014", 
            "2015", 
            "2016", 
            "2017",
            "2018",
            "2019",
        ],
        datasets: [
            {
                fill:false,
                borderColor: '#000000',
                borderWidth: 0,
                backgroundColor: "#03A59F",
                data: [
                    459, 
                    553, 
                    523,
                    594,
                    738,
                    818 
                ]
            },
        ]
    };

    //set chart options
    var config = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 40,
                right: 40,
                bottom: 15,
                left: 15
            }
        },
        legend: {
            display: false,     //show or hide the legend
        },
        title: {
            display: false,
        },

        scales: {
            xAxes: [
                {
                    gridLines: {
                        display:true,
                        drawBorder: true,
                    },
                    ticks: {
                        display: true,
                        fontSize:14,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Year',
                        fontSize:14,
                        fontColor: '#707070',
                        fontStyle: 'bold',
                    },
                }
            ],
            yAxes: [
                {
                    gridLines: {
                        display:true,
                        drawBorder: true,
                    },
                    ticks: {
                        min: 0,
                        max: 900,
                        fontColor: "#707070",
                        fontSize: 16,
                        fontStyle: 'bold',
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Number',
                        fontSize:14,
                        fontColor: '#707070',
                        fontStyle: 'bold',
                    },
                }
            ],
        },
        options: {
            hover: {
                mode: 'nearest',
                intersect: true
            },

        }
        

    };

    //generate a chart
    var ctx = document.getElementById("myChart"), 
        myRadarChart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: config,
        });
  
  
  });