var config = {
    style: 'mapbox://styles/lorinczszabolcs/ck9odz1nc2d7j1imo8lb7x1u2/draft?fresh=true',
    accessToken: 'pk.eyJ1IjoibG9yaW5jenN6YWJvbGNzIiwiYSI6ImNrOWZjcDdvdTBhYm0zbW8zZjBvMzFlbzkifQ.Mdj6SfBhLQgF7hrwx-ASGw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'CoviDataWiz',
    // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    // byline: 'By a Digital Storyteller',
    // footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Title1',
            // image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            title: 'Second Title',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
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
            title: 'Third Title',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: { lon: 13.73695, lat: 41.97617 },
                zoom: 5.76,
                pitch: 58.00,
                bearing: -7.16
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
