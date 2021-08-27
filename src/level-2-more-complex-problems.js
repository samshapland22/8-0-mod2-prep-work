const bandsData = require("../data/bands-data.js");
const RRHOFData = require("../data/RRHOF-data.js");

/**
 *
 *
 *
 * mostOrLeastMembers()
 * -----------------------------
 * Returns the `bandName` of the band with either the most or least `members`, based on the inputted switch.
 * @param {Object[]} bands - An array of band objects.
 * @param {string} switch - A string that can either be "most" or "least"
 * @returns {string} The `bandName` of the band with either the most or least `members`, based on the inputted switch.
 *
 * EXAMPLE: mostOrLeastMembers(bandsData, "most");
 * > "Earth, Wind & Fire"
 *
 * EXAMPLE: mostOrLeastMembers(bandsData, "least");
 * > "Nine Inch Nails"
 */

//WRITE A HELPER FUNCTION THAT FINDS THE BAND WITH THE MOST MEMBERS.
const levelOne = require("../src/level-1-building-blocks");

//WRITE A HELPER FUNCTION THAT FINDS THE BAND WITH THE LEAST MEMBERS.
function leastMembers(bands) {
  let result = "";

  let currentBand = bands[0]; 
  for (const band of bands) {
    band.members.length < currentBand.members.length ? currentBand = band : currentBand;
    result = currentBand.bandName;
  }
  return result;
};

//USE BOTH OF YOUR HELPER FUNCTIONS INSIDE OF THE MAIN FUNCTION BELOW.

function mostOrLeastMembers(bands, order) {
  let bandName = "";

  if (bands === undefined || !bands.length) {
    return bandName
  }
  if(order.toLowerCase() === 'most') {
    bandName = levelOne.mostMembers(bands)
  }
  if(order.toLowerCase() === 'least') {
    bandName = leastMembers(bands)
  }

  return bandName
}

//check
// console.log(mostOrLeastMembers(bandsData, 'least'))

/**
 *
 *
 *
 * mostOrLeastPlayedSong()
 * -----------------------------
 * Returns a string that contains the name of the band with the most or least played song, the song name,
 * and the number of plays on Spotify. If the inputted `bands` array is empty, return 'Bands array is empty.'
 * @param {Object[]} bands - An array of band objects.
 * @param {string} switch - A string that can either be "most" or "least"
 * @returns {string} A formatted string that contains the name of the band with the most or least played song,
 *                   the song name, and the number of plays on Spotify
 *
 * EXAMPLE: mostOrLeastPlayedSong(bandsData, "most");
 * > "Nirvana, 'Smells Like Teen Spirit', 1,048,485,790 plays"
 *
 * EXAMPLE: mostOrLeastPlayedSong(bandsData, "least");
 * > "Cocteau Twins, 'Cherry-coloured Funk', 44,552,490 plays"
 */

//WRITE A HELPER FUNCTION THAT FINDS THE BAND WITH THE MOST PLAYED SONG.
//(you already wrote a function like this in 'level-1-building-blocks.js')

//WRITE A HELPER FUNCTION THAT FINDS THE BAND WITH THE LEAST PLAYED SONG.
//-------------HELPER FUNCTIONS--------------------------
function toNumber(string) {
  return Number(string.split(",").join(""))
}

function leastPlayedSong(bands) {
  let result = "Bands array is empty.";
  let currentBand = bands[0]; 

  for (const band of bands) {
    toNumber(band.mostPlayedSongOnSpotify.plays) < toNumber(currentBand.mostPlayedSongOnSpotify.plays) ? currentBand = band : currentBand; 
    result = `${currentBand.bandName}, '${currentBand.mostPlayedSongOnSpotify.name}', ${currentBand.mostPlayedSongOnSpotify.plays} plays`;
  };
  return result;

};

//USE BOTH OF YOUR HELPER FUNCTIONS INSIDE OF THE MAIN FUNCTION BELOW.

function mostOrLeastPlayedSong(bands, order) {
  let mostOrLeastPlayedSong = "Bands array is empty.";

  if (bands === undefined || !bands.length) {
    return mostOrLeastPlayedSong
  }
  if(order.toLowerCase() === 'most') {
    mostOrLeastPlayedSong = levelOne.mostPlayedSong(bands)
  }
  if(order.toLowerCase() === 'least') {
    mostOrLeastPlayedSong = leastPlayedSong(bands)
  }

  return mostOrLeastPlayedSong
}

/**
 *
 *
 *
 * filterByRRHOFStatus()
 * -----------------------------
 * Returns an array of `bandNames` from the `bands` array that have been inducted into the Rock n Roll Hall of Fame.
 * @param {Object[]} bands - An array of band objects.
 * @param {Object[]} RRHOFBands - An array of objects representing bands that have been inducted into
 * the Rock n Roll Hall of Fame.
 * @returns {string[]} An array of strings that represents bands that have been inducted into the
 *                      Rock n Roll Hall of Fame.
 *
 * EXAMPLE: filterByRRHOFStatus(bandsData, RRHOFBands)
 * > [
 * 'The Beach Boys',
 * 'Earth, Wind & Fire',
 * 'Nirvana',
 * 'Nine Inch Nails',
 * 'The Clash',
 * 'Roxy Music',
 * 'Blondie'
 * ]
 *
 * HINT: use the '.includes' method for this one. look up "includes" on MDN if you're not familiar with it.
 */

//WRITE A HELPER FUNCTION THAT RETURNS AN ARRAY CONTAINING ALL `bandName` STRINGS FROM THE RRHOF DATA.
function RRHOFBandNames (RRHOFBands) {
  return RRHOFBands.map(band => band.bandName)
}

//USE THIS HELPER FUNCTION INSIDE OF THE MAIN FUNCTION BELOW.

function filterByRRHOFStatus(bands, RRHOFBands) {
  let bandsInRRHOF = [];

  for (const band of bands) {
    if (RRHOFBandNames(RRHOFBands).includes(band.bandName)) {
      bandsInRRHOF.push(band.bandName);
    };
  };

  return bandsInRRHOF;
};

//check
// console.log(filterByRRHOFStatus(bandsData, RRHOFData))

/**
 *
 *
 *
 * membersAndInductors()
 * -----------------------------
 * Returns an array of peoples' names who are `members` in a band from the `bands` array,
 * as well as someone with an `inductedBy` key in the `RRHOFBands` array
 * @param {Object[]} bands - An array of band objects.
 * @param {Object[]} RRHOFBands - An array of objects representing bands that have been inducted into
 * the Rock n Roll Hall of Fame.
 * @returns {string[]} An array of strings that represents people who are `members` in one of
 *                     the bands from the `bands` array, and ALSO inducted someone into the RRHOF.
 *
 * EXAMPLE: membersAndInductors(bandsData, RRHOFBands)
 * > [
 * 'Trent Reznor',
 * 'Dave Grohl'
 * ]
 */

//WRITE A HELPER FUNCTION THAT RETURNS AN ARRAY CONTAINING ALL `inductedBy` STRINGS FROM THE RRHOF DATA.
function RRHOFInductors (RRHOFBands = []) {
  return RRHOFBands.map(band => band.inductedBy) ;
};

//WRITE A HELPER FUNCTION THAT RETURNS AN ARRAY CONTAINING ALL `members.name` STRINGS FROM THE BANDS DATA.
function allBandMembers (bands) {
  return bands.flatMap(band => band.members.map(member => member.name))
}
//check
// console.log(allBandMembers(bandsData))

//USE THESE HELPER FUNCTIONS INSIDE OF THE MAIN FUNCTION BELOW.

function membersAndInductors(bands, RRHOFBands) {
  let bandMemberAsInductor = [];

  for (const inductor of RRHOFInductors(RRHOFBands)) {
    if (allBandMembers(bands).includes(inductor)) {
      bandMemberAsInductor.push(inductor);
    };
  };
  return bandMemberAsInductor;
};

//check
// console.log(membersAndInductors(bandsData, RRHOFData))

module.exports = {
  mostOrLeastMembers,
  mostOrLeastPlayedSong,
  filterByRRHOFStatus,
  membersAndInductors,
};
