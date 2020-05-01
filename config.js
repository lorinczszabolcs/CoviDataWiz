var config = {
    style: 'mapbox://styles/lorinczszabolcs/ck9odz1nc2d7j1imo8lb7x1u2/draft?fresh=true',
    accessToken: 'pk.eyJ1IjoibG9yaW5jenN6YWJvbGNzIiwiYSI6ImNrOWZjcDdvdTBhYm0zbW8zZjBvMzFlbzkifQ.Mdj6SfBhLQgF7hrwx-ASGw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Confirmed cases per country',
    // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    // byline: 'By a Digital Storyteller',
    // footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Hungary',
            // image: './path/to/image/source.png',
            description: 'Placeholder for story about Hungary. Placeholder for story about Hungary. Placeholder for story about Hungary. Placeholder for story about Hungary.',
            location: {
                center: { lon: 19.43735, lat: 47.20254 },
                zoom: 6.64,
                pitch: 47.00,
                bearing: -12.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'Germany',
            // image: './path/to/image/source.png',
            description: 'Placeholder for story about Germany. Placeholder for story about Germany. Placeholder for story about Germany. Placeholder for story about Germany.',
            location: {
                center: { lon: 9.82083, lat: 51.38690 },
                zoom: 5.76,
                pitch: 58.00,
                bearing: -7.16
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier-2',
            title: 'Italy',
            // image: './path/to/image/source.png',
            description: 'Placeholder for story about Italy. Placeholder for story about Italy. Placeholder for story about Italy. Placeholder for story about Italy.',
            location: {
                center: { lon: 13.21679, lat: 42.27144 },
                zoom: 5.30,
                pitch: 58.00,
                bearing: -7.16
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
