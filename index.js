var apiConfEngland = 'https://c19downloads.azureedge.net/downloads/json/coronavirus-cases_latest.json'
var apiDeathsEngland = 'https://c19downloads.azureedge.net/downloads/json/coronavirus-deaths_latest.json'

window.onload = function() {
    this.plotConfEngland();
    this.plotBusinessPerformance();
    this.plotTurnover();
    this.plotWellBeing();
}

//#fbe6c5,#f5ba98,#ee8a82,#dc7176,#c8586c,#9c3f5d,#70284a
// #F5BA98,#EE8A82,#DC7176,#C8586C

function plotWellBeing() {
    var wellBeingData = {
        x: wellBeing.percentage,
        y: wellBeing.state,
        type: 'bar',
        orientation: 'h',
        marker: {
            color: '#EE8A82'
        },
        transforms: [{
            type: 'sort',
            target: 'x',
            order: 'ascending'
        }]
    };

    var data = [wellBeingData];
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
            text:'In the past seven days, how has your well-being being affected?',
            font: {
              family: 'Arial, monospace',
              size: 28,
              color: '#ffffff'
            },
          },
          yaxis: {
            automargin: true,
            tickfont: {
                family: 'Arial, monospace',
                size: 14,
                color: '#ffffff'
            },
          },
          xaxis: {
            title: {
              text: 'Percentage',
              font: {
                family: 'Arial, monospace',
                size: 18,
                color: '#ffffff'
              }
            }
          },
          plot_bgcolor: '#192440',
          paper_bgcolor: '#192440'
    };

    wellbeing = document.getElementById('wellbeing');
    Plotly.newPlot(wellbeing, data, layout);
}

function plotTurnover() {
    var turnover = {
        x: businessTurnover.turnover,
        y: businessTurnover.sizes,
        mode: 'markers',
        marker: {
          size: businessTurnover.sizes,
          color: ['#C8586C','#DC7176','#EE8A82','#F5BA98'],
          sizeref: 0.004,
          sizemode: 'area',
          line: {
            width: [0, 0, 0, 0]
          },
          opacity: 1
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
                size: 28,
                color: '#ffffff'
            }
        },
        showlegend: false,
        height: 600,
        plot_bgcolor: '#192440',
        paper_bgcolor: '#192440',
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
            color: '#C8586C'
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
            color: '#EE8A82' 
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
          plot_bgcolor: '#192440',
          paper_bgcolor: '#192440'
    };

    businessPerformanceDiv = document.getElementById('businessPerformance');
    Plotly.newPlot(businessPerformanceDiv, data, layout);
}

function plotConfEngland() {
    fetch(apiConfEngland)
    .then(responseConf => responseConf.json())
    .then(confData => {
        tsConf = confData.countries
        fetch(apiDeathsEngland)
        .then(responseDeaths => responseDeaths.json())
        .then(deathsData => {
            tsDeaths = deathsData.countries
            dateConf = []
            conf = []
            dateDeaths = []
            deaths = []

            for (i = 0; i < tsConf.length; i++) {
                if(tsConf[i].areaName === 'England') {
                    dateConf.push(tsConf[i].specimenDate);
                    conf.push(tsConf[i].totalLabConfirmedCases);
                }
            }
            for (i = 0; i < tsDeaths.length; i++) {
                if(tsDeaths[i].areaName === 'England') {
                    dateDeaths.push(tsDeaths[i].reportingDate);
                    deaths.push(tsDeaths[i].cumulativeDeaths);
                }
            }

            var confData = {
                x: dateConf,
                y: conf,
                name: 'Confirmed',
                type: 'scatter',
                line: {
                    color: '#EE8A82',
                    width: 8
                }
            };
    
            var deathsData = {
                x: dateDeaths,
                y: deaths,
                name: 'Deaths',
                type: 'scatter',
                line: {
                    color: '#C8586C',
                    width: 8
                }
            }
    
            parsedData = [confData, deathsData]

            var layout = {
                legend: {
                    font: {
                      family: 'Arial, monospace',
                      size: 24,
                      color: '#ffffff'
                    },
                },
                annotations: [
                    {
                        x: '2020-03-15',
                        y: 0,
                        xref: 'x',
                        yref: 'y',
                        text: 'UK: 7 day self-quarantine for those with cough or fever.',
                        showarrow: true,
                        arrowhead: 7,
                        ax: 0,
                        ay: -100,
                        font: {
                            color: '#ffffff',
                            size: 14
                        },
                        xanchor:'right'
                    },
                    {
                        x: '2020-03-20',
                        y: 0,
                        xref: 'x',
                        yref: 'y',
                        text: 'UK: Schools to close for all except the children of keyworkers and vulnerable children. Nurseries, private schools and sixth forms are also closing.',
                        showarrow: true,
                        arrowhead: 7,
                        ax: 0,
                        ay: -200,
                        font: {
                          color: '#ffffff',
                          size: 14
                        },
                        xanchor:'right'
                    },
                    {
                        x: '2020-03-24',
                        y: 0,
                        xref: 'x',
                        yref: 'y',
                        text: 'UK: All social events will be stopped excluding funerals',
                        showarrow: true,
                        arrowhead: 7,
                        ax: 0,
                        ay: -300,
                        font: {
                          color: '#ffffff',
                          size: 14
                        },
                        xanchor:'right'
                    },
                    {
                        x: '2020-04-16',
                        y: 0,
                        xref: 'x',
                        yref: 'y',
                        text: 'UK: The UK extends its lockdown for at least another 3 weeks.',
                        showarrow: true,
                        arrowhead: 7,
                        ax: 0,
                        ay: -510,
                        font: {
                          color: '#ffffff',
                          size: 14
                        },
                        xanchor:'right'
                    }
                ],
    
                title: {
                  text:'Number of confirmed cases and deaths in England and measures in the UK',
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
                plot_bgcolor: '#192440',
                paper_bgcolor: '#192440'
            };
    
            confUK = document.getElementById('confDeadUK');
            Plotly.newPlot(confUK, parsedData, layout);
        });}
    )
}