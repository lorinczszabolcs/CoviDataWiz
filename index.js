var apiConfDeadHungary = 'https://api.covid19api.com/dayone/country/hungary'

window.onload = function() {
    //this.plotConfDeadHungary();
    this.plotBusinessPerformance();
    this.plotTurnover();
}

function plotTurnover() {
    var turnover = {
        x: businessTurnover.turnover,
        y: businessTurnover.sizes,
        mode: 'markers',
        marker: {
          size: businessTurnover.sizes,
          color: ['#9e2121','#eb9334','#ebe534','#309e21'],
          sizeref: 0.01,
          sizemode: 'area',
          line: {
            width: [0, 0, 0, 0]
          }
        }
    };
      
    var data = [turnover];
      
    var layout = {
        font: {
            family: 'Arial, monospace',
            size: 12,
            color: '#ffffff'
        },
        title: {
            text: 'In what way was your enterprise\'s turnover within its normal range in the last two weeks?',
            font: {
                family: 'Arial, monospace',
                size: 18,
                color: '#ffffff'
            }
        },
        showlegend: false,
        width: 800,
        height: 600,
        plot_bgcolor: '#111111',
        paper_bgcolor: '#111111',
        yaxis: {
            automargin: true,
            title: {
                text: 'Percentage',
                font: {
                  family: 'Arial, monospace',
                  size: 18,
                  color: '#ffffff'
                }
            }
        },
        xaxis: {
            tickfont: {
                family: 'Arial, monospace',
                size: 16,
                color: '#ffffff'
            },
        }
    };
      
    turnover = document.getElementById('turnover');
    Plotly.newPlot(turnover, data, layout);
}

function plotBusinessPerformance() {
    var no = {
        x: businessPerformanceWithinExpectations.businesses,
        y: businessPerformanceWithinExpectations.no,
        name: 'No',
        type: 'bar',
        marker: {
            color: '#5c0b0b'
        },
        transforms: [{
            type: 'sort',
            target: 'y',
            order: 'descending'
          }]
    };
      
    var yes = {
        x: businessPerformanceWithinExpectations.businesses,
        y: businessPerformanceWithinExpectations.yes,
        name: 'Yes',
        type: 'bar',
        marker: {
            color: '#118080'
        }
    };

    var data = [no, yes];
    var layout = {
        barmode: 'stack',
        font: {
            family: 'Arial, monospace',
            size: 12,
            color: '#ffffff'
        },
        legend: {
            font: {
              family: 'Arial, monospace',
              size: 24,
              color: '#ffffff'
            },
        },
        title: {
            text:'Was the financial performance of your enterprise within normal expectations in the last two weeks? ',
            font: {
              family: 'Arial, monospace',
              size: 28,
              color: '#ffffff'
            },
          },
          xaxis: {
            tickangle: 20,
            automargin: true
          },
          yaxis: {
            title: {
              text: 'Percentage',
              font: {
                family: 'Arial, monospace',
                size: 18,
                color: '#ffffff'
              }
            }
          },
          plot_bgcolor: '#111111',
          paper_bgcolor: '#111111'
    };

    businessPerformanceDiv = document.getElementById('businessPerformance');
    Plotly.newPlot(businessPerformanceDiv, data, layout);
}

function plotConfDeadHungary() {
    fetch(apiConfDeadHungary)
    .then(response => response.json())
    .then(data => {
        date = []
        conf = []
        dead = []

        for (i = 0; i < data.length - 1; i++) {
            date.push(data[i].Date.split('T')[0]);
            console.log(date[i])
            conf.push(data[i].Confirmed);
            dead.push(data[i].Deaths)
        }

        var confData = {
            x: date,
            y: conf,
            name: 'Confirmed',
            type: 'scatter'
        };
        var deadData = {
            x: date,
            y: dead,
            name: 'Deaths',
            type: 'scatter'
        };
        parsedData = [confData, deadData]

        var layout = {
            annotations: [
                {
                  x: '2020-03-11',
                  y: 0,
                  xref: 'x',
                  yref: 'y',
                  text: 'Universities will be temporarily closed.',
                  showarrow: true,
                  arrowhead: 7,
                  ax: 0,
                  ay: -50,
                  font: {
                    color: '#ffffff'
                  }
                },
                {
                    x: '2020-03-17',
                    y: 0,
                    xref: 'x',
                    yref: 'y',
                    text: 'Only Hungarian citizens will be allowed to enter the country.',
                    showarrow: true,
                    arrowhead: 7,
                    ax: 0,
                    ay: -90,
                    font: {
                      color: '#ffffff'
                    }
                },
                {
                    x: '2020-03-28',
                    y: 0,
                    xref: 'x',
                    yref: 'y',
                    text: 'Restrictions on movement in Hungary.',
                    showarrow: true,
                    arrowhead: 7,
                    ax: 0,
                    ay: -130,
                    font: {
                      color: '#ffffff'
                    }
                },
                {
                    x: '2020-04-09',
                    y: 0,
                    xref: 'x',
                    yref: 'y',
                    text: 'Movement restrictions extended to further notice.',
                    showarrow: true,
                    arrowhead: 7,
                    ax: 0,
                    ay: -170,
                    font: {
                      color: '#ffffff'
                    }
                }
            ],

            title: {
              text:'Confirmed cases and Deaths',
              font: {
                family: 'Arial, monospace',
                size: 28,
                color: '#ffffff'
              },
            },
            xaxis: {
              title: {
                text: 'Date',
                font: {
                  family: 'Arial, monospace',
                  size: 18,
                  color: '#ffffff'
                }
              },
            },
            yaxis: {
              title: {
                text: 'Number of people',
                font: {
                  family: 'Arial, monospace',
                  size: 18,
                  color: '#ffffff'
                }
              }
            },
            plot_bgcolor: '#111111',
            paper_bgcolor: '#111111'
        };

        confDeadHungary = document.getElementById('confDeadHungary');
        Plotly.newPlot(confDeadHungary, parsedData, layout);
    });

    
}