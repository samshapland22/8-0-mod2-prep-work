const bands = [
  {
    bandName: "Living Colour",
    yearFormed: 1984,
    origin: {
      country: "USA",
      city: "New York, NY",
    },
    genres: ["alternative", "rock", "funk", "metal"],
    members: [
      {
        name: "Vernon Reid",
        instruments: ["guitar"],
      },
      {
        name: "Corey Glover",
        instruments: ["vocals"],
      },
      {
        name: "Will Calhoun",
        instruments: ["drums"],
      },
      {
        name: "Doug Wimbish",
        instruments: ["bass guitar"],
      },
    ],
    mostPlayedSongOnSpotify: {
      name: "Cult of Personality",
      plays: "72,589,518",
    },
  },
  {
    bandName: "The Beach Boys",
    yearFormed: 1961,
    origin: {
      country: "USA",
      city: "Hawthorne, CA",
    },
    genres: ["pop", "rock", "surf"],
    members: [
      {
        name: "Brian Wilson",
        instruments: ["bass guitar", "vocals"],
      },
      {
        name: "Dennis Wilson",
        instruments: ["drums", "vocals"],
      },
      {
        name: "Carl Wilson",
        instruments: ["guitar", "vocals"],
      },
      {
        name: "Mike Love",
        instruments: ["saxophone", "vocals"],
      },
      {
        name: "Al Jardine",
        instruments: ["guitar", "vocals"],
      },
    ],
    mostPlayedSongOnSpotify: {
      name: "Wouldn't It Be Nice",
      plays: "333,610,990",
    },
  },
  {
    bandName: "Hole",
    yearFormed: 1989,
    origin: {
      country: "USA",
      city: "Los Angeles, CA",
    },
    genres: ["punk", "rock", "grunge"],
    members: [
      {
        name: "Courtney Love",
        instruments: ["guitar", "vocals"],
      },
      {
        name: "Eric Erlandson",
        instruments: ["guitar"],
      },
      {
        name: "Patty Schemel",
        instruments: ["drums"],
      },
      {
        name: "Kristen Pfaff",
        instruments: ["bass guitar"],
      },
      {
        name: "Melissa Auf der Maur",
        instruments: ["bass guitar"],
      },
    ],
    mostPlayedSongOnSpotify: {
      name: "Celebrity Skin",
      plays: "86,849,227",
    },
  },
  {
    bandName: "Earth, Wind & Fire",
    yearFormed: 1969,
    origin: {
      country: "USA",
      city: "Chicago, IL",
    },
    genres: ["funk", "rock", "soul", "disco", "jazz", "blues"],
    members: [
      {
        name: "Maurice White",
        instruments: ["drums", "vocals"],
      },
      {
        name: "Phillip Bailey",
        instruments: ["mbira"],
      },
      {
        name: "Verdine White",
        instruments: ["bass guitar"],
      },
      {
        name: "Ralph Johnson",
        instruments: ["drums"],
      },
      {
        name: "Larry Dunn",
        instruments: ["keyboard"],
      },
      {
        name: "Al McKay",
        instruments: ["guitar"],
      },
      {
        name: "Roland Bautista",
        instruments: ["vocals"],
      },
      {
        name: "Robert Brookins",
        instruments: ["vocals"],
      },
      {
        name: "Sonny Emory",
        instruments: ["drums"],
      },
      {
        name: "Fred Ravel",
        instruments: ["keyboard"],
      },
      {
        name: "Ronnie Laws",
        instruments: ["flute"],
      },
      {
        name: "Sheldon Reynolds",
        instruments: ["guitar"],
      },
      {
        name: "Andrew Woolfolk",
        instruments: ["saxophone"],
      },
    ],
    mostPlayedSongOnSpotify: {
      name: "September",
      plays: "887,796,085",
    },
  },
  {
    bandName: "Cocteau Twins",
    yearFormed: 1979,
    origin: {
      country: "Scotland",
      city: "Grangemouth",
    },
    genres: ["alternative", "rock", "post-punk", "dream pop"],
    members: [
      {
        name: "Robin Guthrie",
        instruments: ["guitar", "drum machine"],
      },
      {
        name: "Elizabeth Fraser",
        instruments: ["vocals"],
      },
      {
        name: "Will Heggie",
        instruments: ["bass guitar"],
      },
      {
        name: "Simon Raymonde",
        instruments: ["bass guitar"],
      },
    ],
    mostPlayedSongOnSpotify: {
      name: "Cherry-coloured Funk",
      plays: "44,552,490",
    },
  },
  {
    bandName: "Nirvana",
    yearFormed: 1987,
    origin: {
      country: "USA",
      city: "Aberdeen, WA",
    },
    genres: ["grunge", "rock", "punk", "alternative"],
    members: [
      {
        name: "Kurt Cobain",
        instruments: ["guitar", "vocals"],
      },
      {
        name: "Krist Novoselic",
        instruments: ["bass guitar"],
      },
      {
        name: "Dave Grohl",
        instruments: ["drums"],
      },
    ],
    mostPlayedSongOnSpotify: {
      name: "Smells Like Teen Spirit",
      plays: "1,048,485,790",
    },
  },
  {
    bandName: "Destiny's Child",
    yearFormed: 1990,
    origin: {
      country: "USA",
      city: "Houston, TX",
    },
    genres: ["R&B", "soul", "hip hop", "pop"],
    members: [
      {
        name: "Beyoncé Knowles",
        instruments: ["vocals"],
      },
      {
        name: "Kelly Rowland",
        instruments: ["vocals"],
      },
      {
        name: "Michelle Williams",
        instruments: ["vocals"],
      },
    ],
    mostPlayedSongOnSpotify: {
      name: "Say My Name",
      plays: "510,549,917",
    },
  },
  {
    bandName: "Nine Inch Nails",
    yearFormed: 1988,
    origin: {
      country: "USA",
      city: "Cleveland, OH",
    },
    genres: ["industrial", "rock", "alternative", "ambient"],
    members: [
      {
        name: "Trent Reznor",
        instruments: ["vocals", "guitar", "keyboard"],
      },
      {
        name: "Atticus Ross",
        instruments: ["keyboard", "synthesizer"],
      },
    ],
    mostPlayedSongOnSpotify: {
      name: "Closer",
      plays: "125,372,812",
    },
  },
  {
    bandName: "The Clash",
    yearFormed: 1976,
    origin: {
      country: "England",
      city: "London",
    },
    genres: ["punk", "new wave", "rock"],
    members: [
      {
        name: "Joe Strummer",
        instruments: ["guitar", "vocals"],
      },
      {
        name: "Mick Jones",
        instruments: ["guitar", "vocals"],
      },
      {
        name: "Paul Simonon",
        instruments: ["bass guitar"],
      },
      {
        name: "Nicky Headon",
        instruments: ["drums"],
      },
    ],
    mostPlayedSongOnSpotify: {
      name: "Should I Stay or Should I Go",
      plays: "597,231,800",
    },
  },
  {
    bandName: "Roxy Music",
    yearFormed: 1970,
    origin: {
      country: "England",
      city: "County Durham",
    },
    genres: ["glam rock", "new wave", "art pop"],
    members: [
      {
        name: "Bryan Ferry",
        instruments: ["vocals"],
      },
      {
        name: "Graham Simpson",
        instruments: ["bass guitar"],
      },
      {
        name: "Phil Manzanera",
        instruments: ["guitar"],
      },
      {
        name: "Andy Mackay",
        instruments: ["saxophone", "oboe"],
      },
      {
        name: "Paul Thompson",
        instruments: ["drums"],
      },
      {
        name: "Brian Eno",
        instruments: ["synthesizer"],
      },
    ],
    mostPlayedSongOnSpotify: {
      name: "More Than This",
      plays: "98,789,098",
    },
  },
  {
    bandName: "Boyz II Men",
    yearFormed: 1987,
    origin: {
      country: "USA",
      city: "Philadelphia, PA",
    },
    genres: ["R&B", "soul"],
    members: [
      {
        name: "Nathan Morris",
        instruments: ["vocals"],
      },
      {
        name: "Michael McCary",
        instruments: ["vocals"],
      },
      {
        name: "Shawn Stockman",
        instruments: ["vocals"],
      },
      {
        name: "Wanya Morris",
        instruments: ["vocals"],
      },
    ],
    mostPlayedSongOnSpotify: {
      name: "End Of The Road",
      plays: "189,037,138",
    },
  },
  {
    bandName: "Blondie",
    yearFormed: 1974,
    origin: {
      country: "USA",
      city: "New York, NY",
    },
    genres: ["punk", "disco", "rock", "pop", "new wave"],
    members: [
      {
        name: "Debbie Harry",
        instruments: ["vocals"],
      },
      {
        name: "Chris Stein",
        instruments: ["guitar"],
      },
      {
        name: "Clem Burke",
        instruments: ["drums"],
      },
      {
        name: "Gary Valentine",
        instruments: ["bass guitar"],
      },
      {
        name: "Jimmy Destri",
        instruments: ["keyboard"],
      },
    ],
    mostPlayedSongOnSpotify: {
      name: "Call Me",
      plays: "222,235,621",
    },
  },
  {
    bandName: "Joy Division",
    yearFormed: 1976,
    origin: {
      country: "England",
      city: "Salford",
    },
    genres: ["post-punk", "goth", "new wave", "rock"],
    members: [
      {
        name: "Ian Curtis",
        instruments: ["vocals"],
      },
      {
        name: "Bernard Sumner",
        instruments: ["guitar", "keyboard"],
      },
      {
        name: "Peter Hook",
        instruments: ["bass guitar"],
      },
      {
        name: "Stephen Morris",
        instruments: ["drums"],
      },
    ],
    mostPlayedSongOnSpotify: {
      name: "Love Will Tear Us Apart",
      plays: "242,697,763",
    },
  },
];

module.exports = bands;
