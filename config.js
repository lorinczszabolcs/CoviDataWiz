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
                center: { lon: 19.42883, lat: 47.16100 },
                zoom: 6.48,
                pitch: 0.00,
                bearing: 0.00
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
                center: { lon: 10.34157, lat: 51.02902 },
                zoom: 5.60,
                pitch: 0.00,
                bearing: 0.00
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
                center: { lon: 14.23296, lat: 41.74773 },
                zoom: 5.60,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
