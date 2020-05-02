var config = {
    style: 'mapbox://styles/lorinczszabolcs/ck9odz1nc2d7j1imo8lb7x1u2/draft?fresh=true',
    accessToken: 'pk.eyJ1IjoibG9yaW5jenN6YWJvbGNzIiwiYSI6ImNrOWZjcDdvdTBhYm0zbW8zZjBvMzFlbzkifQ.Mdj6SfBhLQgF7hrwx-ASGw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'CoviDataWiz',
    subtitle: 'Title',
    // byline: '',
    // footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'england',
            title: 'England and Wales',
            // image: './path/to/image/source.png',
            description: 'Between 1 March and 17 April 2020, there were 90,232 deaths occurring in England and Wales that were registered by 18 April; 20,283 of these deaths involved the coronavirus (COVID-19).',
            location: {
                center: { lon: -2.518081, lat: 54.750883 },
                zoom: 5.13,
                bearing: -10.71,
                pitch: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'coviddeaths-1',
                    opacity: 0
                },
                {
                    layer: 'Newham',
                    opacity: 0
                },
                {
                    layer: 'Brent',
                    opacity: 0
                },
                {
                    layer: 'Hackney',
                    opacity: 0
                },
                {
                    layer: 'middle-layer-soa',
                    opacity: 0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'london',
            title: 'London',
            // image: './path/to/image/source.png',
            description: 'London had the highest age-standardised mortality rate with 85.7 deaths per 100,000 persons involving COVID-19; this was statistically significantly higher than any other region and almost double the next highest rate.',
            location: {
                center: { lon: -0.113193, lat: 51.520948 },
                zoom: 10.21,
                bearing: -25.60,
                pitch: 60.00
            },
            onChapterEnter: [
                {
                    layer: 'coviddeaths-1',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'london-boroughs',
            title: 'London Boroughs',
            // image: './path/to/image/source.png',
            description: 'The local authorities with the highest age-standardised mortality rates for deaths involving COVID-19 were all London Boroughs: Newham, Brent and Hackney.',
            location: {
                center: { lon: -0.113193, lat: 51.520948 },
                zoom: 10.21,
                bearing: -25.60,
                pitch: 60.00
            },
            onChapterEnter: [
                {
                    layer: 'coviddeaths-1',
                    opacity: 1
                },
                {
                    layer: 'Newham',
                    opacity: 1
                },
                {
                    layer: 'Brent',
                    opacity: 1
                },
                {
                    layer: 'Hackney',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'Brent',
                    opacity: 0
                },
                {
                    layer: 'Hackney',
                    opacity: 0
                },
                {
                    layer: 'Newham',
                    opacity: 0
                },
            ]
        },
        {
            id: 'newham',
            title: 'Newham',
            // image: './path/to/image/source.png',
            description: 'Newham had the highest age-standardised rate with 144.3 deaths per 100,000 population.',
            location: {
                center: { lon: 0.045091, lat: 51.534672 },
                zoom: 12.47,
                bearing: -32.60,
                pitch: 41.50
            },
            onChapterEnter: [
                {
                    layer: 'Newham',
                    opacity: 1
                },
                {
                    layer: 'middle-layer-soa',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Newham',
                    opacity: 0
                }
            ]
        },
        {
            id: 'brent',
            title: 'Brent',
            // image: './path/to/image/source.png',
            description: 'Brent was the second, with a rate of 141.5 deaths per 100,000 population.',
            location: {
                center: { lon: -0.267190, lat: 51.548120 },
                zoom: 12.42,
                bearing: 21.37,
                pitch: 41.00
            },
            onChapterEnter: [
                {
                    layer: 'Brent',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Brent',
                    opacity: 0
                }
            ]
        },
        {
            id: 'hackney',
            title: 'Hackney',
            // image: './path/to/image/source.png',
            description: 'Hackney being the third, with a rate of 127.4 deaths per 100,000 population.',
            location: {
                center: { lon: -0.069671, lat: 51.547453 },
                zoom: 12.92,
                bearing: 55.80,
                pitch: 45.00
            },
            onChapterEnter: [
                {
                    layer: 'Hackney',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Hackney',
                    opacity: 0
                }
            ]
        }
    ]
};
