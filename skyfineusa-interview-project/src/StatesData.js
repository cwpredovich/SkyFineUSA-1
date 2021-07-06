    // Population data is from https://www.infoplease.com/us/states/state-population-by-rank
    // DUI data is from https://backgroundchecks.org/which-states-have-the-worst-dui-problems.html
    const StatesData = [
        {
            state: "Wyoming",
            population: 578759,
            duiArrests: 3432,
            duiFatalities: 34,
            duiSeverityScore: 12.65
        },
        {
            state: "South Dakota",
            population: 884659,
            duiArrests: 5891,
            duiFatalities: 45,
            duiSeverityScore: 12.32
        },
        {
            state: "Montana",
            population: 1068778,
            duiArrests: 3794,
            duiFatalities: 79,
            duiSeverityScore: 11.25
        },
        {
            state: "North Dakota",
            population: 762062,
            duiArrests: 5136,
            duiFatalities: 29,
            duiSeverityScore: 10.60
        },
        {
            state: "Mississippi",
            population: 2976149,
            duiArrests: 5370,
            duiFatalities: 163,
            duiSeverityScore: 10.08
        },
        {
            state: "New Mexico",
            population: 2096829,
            duiArrests: 6464,
            duiFatalities: 108,
            duiSeverityScore: 9.75
        },
        {
            state: "North Carolina",
            population: 10488084,
            duiArrests: 27915,
            duiFatalities: 421,
            duiSeverityScore: 9.24
        },
        {
            state: "South Carolina",
            population: 5148714,
            duiArrests: 15188,
            duiFatalities: 291,
            duiSeverityScore: 9.17
        },
        {
            state: "Alaska",
            population: 731545,
            duiArrests: 3148,
            duiFatalities: 29,
            duiSeverityScore: 8.22
        },
        {
            state: "Wisconsin",
            population: 5822434,
            duiArrests: 24368,
            duiFatalities: 199,
            duiSeverityScore: 7.68
        },
        {
            state: "Texas",
            population: 28995881,
            duiArrests: 69643,
            duiFatalities: 1439,
            duiSeverityScore: 7.52
        },
        {
            state: "Maine",
            population: 1344212,
            duiArrests: 5811,
            duiFatalities: 42,
            duiSeverityScore: 7.48
        },
        {
            state: "Colorado",
            population: 5758736,
            duiArrests: 20353,
            duiFatalities: 188,
            duiSeverityScore: 7.41
        },
        {
            state: "New Hampshire",
            population: 1359711,
            duiArrests: 5053,
            duiFatalities: 48,
            duiSeverityScore: 7.37
        },
        {
            state: "Oregon",
            population: 4217737,
            duiArrests: 13707,
            duiFatalities: 153,
            duiSeverityScore: 7.35
        },
        {
            state: "Kentucky",
            population: 4467673,
            duiArrests: 14812,
            duiFatalities: 137,
            duiSeverityScore: 7.30
        },
        {
            state: "Alabama",
            population: 4903185,
            duiArrests: 6391,
            duiFatalities: 246,
            duiSeverityScore: 7.11
        },
        {
            state: "Georgia",
            population: 10617423,
            duiArrests: 23449,
            duiFatalities: 375,
            duiSeverityScore: 7.04
        },
        {
            state: "Idaho",
            population: 1787065,
            duiArrests: 5689,
            duiFatalities: 58,
            duiSeverityScore: 6.96
        },
        {
            state: "Arizona",
            population: 7278717,
            duiArrests: 19200,
            duiFatalities: 285,
            duiSeverityScore: 6.89
        },
        {
            state: "Tennessee",
            population: 6833174,
            duiArrests: 19108,
            duiFatalities: 243,
            duiSeverityScore: 6.59
        },
        {
            state: "Vermont",
            population: 623989,
            duiArrests: 2576,
            duiFatalities: 15,
            duiSeverityScore: 6.58
        },
        {
            state: "Nevada",
            population: 3080156,
            duiArrests: 10984,
            duiFatalities: 87,
            duiSeverityScore: 6.51
        },
        {
            state: "Washington",
            population: 7614893,
            duiArrests: 27632,
            duiFatalities: 166,
            duiSeverityScore: 6.50
        },
        {
            state: "Kansas",
            population: 2913314,
            duiArrests: 4554,
            duiFatalities: 88,
            duiSeverityScore: 6.50
        },
        {
            state: "Nebraska",
            population: 1934408,
            duiArrests: 4630,
            duiFatalities: 66,
            duiSeverityScore: 6.47
        },
        {
            state: "Iowa",
            population: 3155070,
            duiArrests: 10082,
            duiFatalities: 85,
            duiSeverityScore: 6.45
        },
        {
            state: "Indiana",
            population: 6732219,
            duiArrests: 11890,
            duiFatalities: 227,
            duiSeverityScore: 6.35
        },
        {
            state: "Hawaii",
            population: 1415872,
            duiArrests: 4288,
            duiFatalities: 35,
            duiSeverityScore: 6.20
        },
        {
            state: "West Virginia",
            population: 1792147,
            duiArrests: 3141,
            duiFatalities: 57,
            duiSeverityScore: 6.14
        },
        {
            state: "Missouri",
            population: 6137428,
            duiArrests: 11874,
            duiFatalities: 240,
            duiSeverityScore: 6.11
        },
        {
            state: "Pennsylvania",
            population: 12801989,
            duiArrests: 43798,
            duiFatalities: 334,
            duiSeverityScore: 6.08
        },
        {
            state: "Louisiana",
            population: 4648794,
            duiArrests: 5650,
            duiFatalities: 216,
            duiSeverityScore: 6.06
        },
        {
            state: "Oklahoma",
            population: 3956971,
            duiArrests: 8660,
            duiFatalities: 145,
            duiSeverityScore: 5.93
        },
        {
            state: "California",
            population: 39512223,
            duiArrests: 127250,
            duiFatalities: 1069,
            duiSeverityScore: 5.91
        },
        {
            state: "Minnesota",
            population: 5639632,
            duiArrests: 20186,
            duiFatalities: 105,
            duiSeverityScore: 5.49
        },
        {
            state: "Connecticut",
            population: 3565287,
            duiArrests: 7484,
            duiFatalities: 115,
            duiSeverityScore: 5.38
        },
        {
            state: "Virginia",
            population: 8535519,
            duiArrests: 20885,
            duiFatalities: 240,
            duiSeverityScore: 5.35
        },
        {
            state: "Florida",
            population: 21477737,
            duiArrests: 32127,
            duiFatalities: 814,
            duiSeverityScore: 5.33
        },
        {
            state: "Michigan",
            population: 9986857,
            duiArrests: 26130,
            duiFatalities: 267,
            duiSeverityScore: 5.32
        },
        {
            state: "Maryland",
            population: 6045680,
            duiArrests: 18150,
            duiFatalities: 122,
            duiSeverityScore: 5.11
        },
        {
            state: "Utah",
            population: 3205958,
            duiArrests: 7119,
            duiFatalities: 61,
            duiSeverityScore: 4.60
        },
        {
            state: "New York",
            population: 19453561,
            duiArrests: 25094,
            duiFatalities: 307,
            duiSeverityScore: 4.19
        },
        {
            state: "Rhode Island",
            population: 1059361,
            duiArrests: 2423,
            duiFatalities: 20,
            duiSeverityScore: 4.18
        },
        {
            state: "Ohio",
            population: 11689100,
            duiArrests: 13723,
            duiFatalities: 294,
            duiSeverityScore: 4.04
        },
        {
            state: "New Jersey",
            population: 8882190,
            duiArrests: 17230,
            duiFatalities: 125,
            duiSeverityScore: 3.60
        },
        {
            state: "Illinois",
            population: 12671821,
            duiArrests: 2825,
            duiFatalities: 309,
            duiSeverityScore: 3.41
        },
        {
            state: "Delaware",
            population: 973764,
            duiArrests: 427,
            duiFatalities: 28,
            duiSeverityScore: 3.34
        },
        {
            state: "Massachusetts",
            population: 6949503,
            duiArrests: 8280,
            duiFatalities: 120,
            duiSeverityScore: 3.15
        }
    ]

    export default StatesData