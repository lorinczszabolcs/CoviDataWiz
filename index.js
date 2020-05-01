var apiConfDeadHungary = 'https://api.covid19api.com/dayone/country/hungary'

window.onload = function() {
    this.plotConfDeadHungary();
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