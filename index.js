var apiConfEngland = 'https://c19downloads.azureedge.net/downloads/json/coronavirus-cases_latest.json'
var apiDeathsEngland = 'https://c19downloads.azureedge.net/downloads/json/coronavirus-deaths_latest.json'

window.onload = function() {
    this.plotConfEngland();
    this.plotBusinessPerformance();
    this.plotTurnover();
    this.plotWellBeing();
    this.plotHeatMap();
}

function plotHeatMap() {
    var data = [
        {
          z: concerns.z,
          x: concerns.worries,
          y: concerns.groups,
          type: 'heatmap',

          colorscale: [
            [0, '#F5BA98'],
            [0.2, '#EE8A82'],
            [0.4, '#DC7176'],
            [0.6, '#C8586C'],
            [0.8, '#9C3F5D'],
            [1, '#70284A']
          ],
          hoverongaps: false
        }
    ];
      
    var layout = {
      plot_bgcolor: '#081732',
      paper_bgcolor: '#081732',
      annotations: [],

      font: {
        family: "'Raleway', sans-serif",
        size: 16,
        color: '#ffffff'
      },

      title: {
        text:'Ways of worrying about COVID-19 effects on friends and family',
        font: {
          family: "'Raleway', sans-serif",
          size: 32,
          color: '#ffffff'
        },
      },

      yaxis: {
        automargin: true,
        tickfont: {
          family: "'Raleway', sans-serif",
          color: '#ffffff'
        }
      },
      xaxis: {
        automargin: true,
        tickangle: 30,
        tickfont: {
            family: "'Raleway', sans-serif",
            color: '#ffffff'
        },
      }
    }

    for ( var i = 0; i < data[0].y.length; i++ ) {
      for ( var j = 0; j < data[0].x.length; j++ ) {
        var currentValue = data[0].z[i][j];
        if (currentValue != 0.0) {
          var textColor = 'white';
        }else{
          var textColor = 'black';
        }
        var result = {
          xref: 'x1',
          yref: 'y1',
          x: data[0].x[j],
          y: data[0].y[i],
          text: '<b>'+ data[0].z[i][j] + '%</b>',
          font: {
            family: "'Raleway', sans-serif",
            color: '#081732',

            size: 16
          },
          showarrow: false
        };
        layout.annotations.push(result);
      }
    }
    

    heatMapDiv = document.getElementById('heatMapDiv');
    Plotly.newPlot(heatMapDiv, data, layout);
}

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
        }],
        hoverinfo:"x"
    };

    var data = [wellBeingData];
    var layout = {
        barmode: 'stack',
        font: {
            family: "'Raleway', sans-serif",
            size: 16,
            color: '#ffffff'
        },
        legend: {
            font: {
              family: "'Raleway', sans-serif",
              size: 24,
              color: '#ffffff'
            },
        },
        title: {
            text:'Effect on well-being',
            font: {
              family: "'Raleway', sans-serif",
              size: 32,
              color: '#ffffff'
            },
          },
          yaxis: {
            automargin: true,
            tickfont: {
                family: "'Raleway', sans-serif",
                color: '#ffffff'
            },
          },
          xaxis: {
            range: [0, 100],
            title: {
              text: 'Percentage',
              font: {
                family: "'Raleway', sans-serif",
                size: 24,
                color: '#ffffff'
              }
            }
          },
          plot_bgcolor: '#081732',
          paper_bgcolor: '#081732'
    };

    wellbeing = document.getElementById('wellbeing');
    Plotly.newPlot(wellbeing, data, layout);
}

function plotTurnover() {
    var turnover = {
        x: businessTurnover.turnover,
        y: [0,0,0,0],
        mode: 'markers',
        marker: {
          size: businessTurnover.sizes,
          color: ['#C8586C','#DC7176','#EE8A82','#F5BA98'],
          sizeref: 0.001,
          sizemode: 'area',
          line: {
            width: [0, 0, 0, 0]
          },
          opacity: 1
        },
        hoverinfo:"text",
        hovertext: businessTurnover.sizes
    };
      
    var data = [turnover];
      
    var layout = {
        hovermode: "x",
        font: {
            family: "'Raleway', sans-serif",
            size: 16,
            color: '#ffffff'
        },
        title: {
            text: 'Effect on enterprises\' turnover',
            font: {
                family: "'Raleway', sans-serif",
                size: 32,
                color: '#ffffff'
            }
        },
        showlegend: false,
        height: 600,
        plot_bgcolor: '#081732',
        paper_bgcolor: '#081732',
        yaxis: {
            automargin: true,
            showticklabels:false
        },
        xaxis: {
            tickfont: {
                family: "'Raleway', sans-serif",
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
            color: ['#C8586C','#C8586C','#C8586C','#C8586C','#C8586C','#C8586C', '#C8586C','#C8586C','#C8586C','#C8586C','#C8586C','#C8586C','#70284A']
        },
        transforms: [{
            type: 'sort',
            target: 'y',
            order: 'descending'
          }],
          hovertext:"%",
          hoverinfo:"y",
    };
      
    var yes = {
        x: businessPerformanceWithinExpectations.businesses,
        y: businessPerformanceWithinExpectations.yes,
        name: 'Yes',
        type: 'bar',
        marker: {
            color: '#EE8A82'
        },
        hovertext:"%",
        hoverinfo:"y"
    };

    var data = [no, yes];
    var layout = {
        barmode: 'stack',
        font: {
            family: "'Raleway', sans-serif",
            size: 16,
            color: '#ffffff'
        },
        legend: {
            font: {
              family: "'Raleway', sans-serif",
              size: 24,
              color: '#ffffff'
            },
        },
        title: {
            text:'Financial performance of enterprise is within normal expectations',
            font: {
              family: "'Raleway', sans-serif",
              size: 32,
              color: '#ffffff'
            },
          },
          xaxis: {
            tickangle: 30,
            automargin: true
          },
          yaxis: {
            tickfont: {
              family: "'Raleway', sans-serif",
              size: 16,
              color: '#ffffff'
            },
            title: {
              text: 'Percentage',
              font: {
                family: "'Raleway', sans-serif",
                size: 24,
                color: '#ffffff'
              }
            }
          },
          plot_bgcolor: '#081732',
          paper_bgcolor: '#081732'
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
                      family: "'Raleway', sans-serif",
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
                            family: "'Raleway', sans-serif",
                            size: 18
                        },
                        xanchor:'right'
                    },
                    {
                        x: '2020-03-20',
                        y: 0,
                        xref: 'x',
                        yref: 'y',
                        text: 'UK: Schools to close for all except the children of keyworkers and vulnerable children.',
                        showarrow: true,
                        arrowhead: 7,
                        ax: 0,
                        ay: -200,
                        font: {
                          color: '#ffffff',
                          family: "'Raleway', sans-serif",
                          size:18
                        },
                        xanchor:'right'
                    },
                    {
                      x: '2020-03-20',
                      y: 0,
                      xref: 'x',
                      yref: 'y',
                      text: 'Nurseries, private schools and sixth forms are also closing.',
                      showarrow: true,
                      arrowhead: 7,
                      ax: 0,
                      ay: -180,
                      font: {
                        color: '#ffffff',
                        family: "'Raleway', sans-serif",
                        size: 18
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
                          family: "'Raleway', sans-serif",
                          size: 18
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
                          family: "'Raleway', sans-serif",
                          size: 18
                        },
                        xanchor:'right'
                    }
                ],
    
                title: {
                  text:'Number of confirmed cases and deaths in England and measures in the UK',
                  font: {
                    family: "'Raleway', sans-serif",
                    size: 32,
                    color: '#ffffff'
                  },
                },
                xaxis: {
                  title: {
                    text: 'Date',
                    font: {
                      family: "'Raleway', sans-serif",
                      size: 24,
                      color: '#ffffff'
                    }
                  },
                },
                yaxis: {
                  title: {
                    text: 'Number of people',
                    font: {
                      family: "'Raleway', sans-serif",
                      size: 24,
                      color: '#ffffff'
                    }
                  }
                },
                plot_bgcolor: '#081732',
                paper_bgcolor: '#081732'
            };
    
            confUK = document.getElementById('confDeadUK');
            Plotly.newPlot(confUK, parsedData, layout);
        });}
    )
}