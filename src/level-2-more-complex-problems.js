const bandsData = require("../data/bands-data.js");
const RRHOFData = require("../data/RRHOF-data.js");

const {
  mostMembers,
  mostPlayedSong,
} = require("../src/level-1-building-blocks.js");

/**
 *
 *
 *
 * mostOrLeastMembers()
 * -----------------------------
 * Returns the `bandName` of the band with either the most or least `members`, based on the inputted switch.
 * @param {Object[]} bands - An array of band objects.
 * @param {string} switch1 - A string that can either be "most" or "least"
 * @returns {string} The `bandName` of the band with either the most or least `members`, based on the inputted switch.
 *
 * EXAMPLE: mostOrLeastMembers(bandsData, "most");
 * > "Earth, Wind & Fire"
 *
 * EXAMPLE: mostOrLeastMembers(bandsData, "least");
 * > "Nine Inch Nails"
 */

//WRITE A HELPER FUNCTION THAT FINDS THE BAND WITH THE MOST MEMBERS.
//(you already wrote a function like this in 'level-1-building-blocks.js')
// function mostMembers(bands) {
//   let mostMembers = bands[0].members.length;

//   for (const eachBand of bands) {
//     if (eachBand.members.length > mostMembers) {
//       mostMembers = eachBand.members.length;
//       bandName = eachBand.bandName;
//     }
//   }
//   return bandName;
// }

//WRITE A HELPER FUNCTION THAT FINDS THE BAND WITH THE LEAST MEMBERS.
function leastMembers(bands) {
  let leastMembers = Infinity;

  for (const eachBand of bands) {
    if (eachBand.members.length <= leastMembers) {
      leastMembers = eachBand.members.length;
      bandName = eachBand.bandName;
    }
  }
  return bandName;
}

//USE BOTH OF YOUR HELPER FUNCTIONS INSIDE OF THE MAIN FUNCTION BELOW. 
function mostOrLeastMembers(bands, switch1) {
  let theBandName = '';
  if (bands.length === 0) {
    return theBandName;
  }
  
  if (switch1 === 'most') {
    return mostMembers(bands);
  } else if (switch1 === 'least') {
    return leastMembers(bands);
  }
}

/**
 *
 *
 *
 * mostOrLeastPlayedSong()
 * -----------------------------
 * Returns a string that contains the name of the band with the most or least played song, the song name,
 * and the number of plays on Spotify. If the inputted `bands` array is empty, return 'Bands array is empty.'
 * @param {Object[]} bands - An array of band objects.
 * @param {string} switch1 - A string that can either be "most" or "least"
 * @returns {string} A formatted string that contains the name of the band with the most or least played song, the song name, and the number of plays on Spotify
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
function formattedNum(nan) {
  let result = "";

  for (const eachChar of nan) {
    if (eachChar !== ",") {
      result += eachChar;
    }
  }
  return Number(result);
}
// Helper Function 👆🏼
function leastPlayedSong(bands) {
  let stringResult = "Bands array is empty.";

  if (bands.length === 0) {
    return stringResult;
  }

  let mostPlayed = Infinity;

  for (const eachBand of bands) {
    if (formattedNum(eachBand.mostPlayedSongOnSpotify.plays) <= mostPlayed) {
      mostPlayed = formattedNum(eachBand.mostPlayedSongOnSpotify.plays);
      stringResult = `${eachBand.bandName}, '${eachBand.mostPlayedSongOnSpotify.name}', ${eachBand.mostPlayedSongOnSpotify.plays} plays`;
    }
  }
  return stringResult;
}

//USE BOTH OF YOUR HELPER FUNCTIONS INSIDE OF THE MAIN FUNCTION BELOW.

function mostOrLeastPlayedSong(bands, switch1) {
  let stringResult = 'Bands array is empty.'

  if (bands.length === 0) {
    return stringResult;
  }

  if (switch1 === 'most') {
    return mostPlayedSong(bands);
  } else {
    return leastPlayedSong(bands);
  }
}

/**
 *
 *
 *
 * filterByRRHOFStatus()
 * -----------------------------
 * Returns an array of `bandNames` from the `bands` array that have been inducted into the Rock n Roll Hall of Fame.
 * @param {Object[]} bands - An array of band objects.
 * @param {Object[]} RRHOFBands - An array of objects representing bands that have been inducted into the Rock n Roll Hall of Fame.
 * @returns {string[]} An array of strings that represents bands that have been inducted into the Rock n Roll Hall of Fame.
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
function bandNames(RRHOFBands) {
  const bandNames = [];

  for (const eachBand of RRHOFBands) {
    bandNames.push(eachBand.bandName);
  }
  return bandNames;
}

//USE THIS HELPER FUNCTION INSIDE OF THE MAIN FUNCTION BELOW.

function filterByRRHOFStatus(bands, RRHOFBands) {
  let arrResult = [];
  
  if (bands.length === 0) {
    return arrResult;
  }
  // iterate through each band in bands
  for (const eachBand of bands) {
    // if each band's band name is included in RRHOF's band name (call the helper function)
    if (bandNames(RRHOFBands).includes(eachBand.bandName)) {
      // push each band's name into the array
      arrResult.push(eachBand.bandName);
    }
  }
  // return the modified array
  return arrResult;
}

/**
 *
 *
 *
 * membersAndInductors()
 * -----------------------------
 * Returns an array of peoples' names who are `members` in a band from the `bands` array,
 * as well as someone with an `inductedBy` key in the `RRHOFBands` array
 * @param {Object[]} bands - An array of band objects.
 * @param {Object[]} RRHOFBands - An array of objects representing bands that have been inducted into the Rock n Roll Hall of Fame.
 * @returns {string[]} An array of strings that represents people who are `members` in one of the bands from the `bands` array, and ALSO inducted someone into the RRHOF.
 *
 * EXAMPLE: membersAndInductors(bandsData, RRHOFBands)
 * > [
 * 'Trent Reznor',
 * 'Dave Grohl'
 * ]
 */

//WRITE A HELPER FUNCTION THAT RETURNS AN ARRAY CONTAINING ALL `inductedBy` STRINGS FROM THE RRHOF DATA.
function inductedBy(RRHOFBands) {
  const result = [];

  for (let i = 0; i < RRHOFBands.length; i++) {
    if (RRHOFBands[i].inductedBy !== null && RRHOFBands[i].inductedBy.includes('&')) {
      let separateNames = RRHOFBands[i].inductedBy.split(' & ');
      result.push(...separateNames);
    } else if (RRHOFBands[i].inductedBy !== null) {
      result.push(RRHOFBands[i].inductedBy);
    }
  }
  return result;
}
// inductedBy(RRHOFData);

//WRITE A HELPER FUNCTION THAT RETURNS AN ARRAY CONTAINING ALL `members.name` STRINGS FROM THE BANDS DATA.
//(you already wrote a function similar this, but not exactly the same, in 'level-1-building-blocks.js')
// use function getAllBandNames(bands)
function memberNames(bands) {
  const result = [];

  for (const eachBand of bands) {
    for (const eachMember of eachBand.members) {
      result.push(eachMember.name);
    }
  }
  return result;
}
// memberNames(bandsData);

//USE THESE HELPER FUNCTIONS INSIDE OF THE MAIN FUNCTION BELOW.
function membersAndInductors(bands, RRHOFBands) {
  const array = [];
  
  if (bands.length === 0) {
    return array;
  }

  
  for (const eachInductor of inductedBy(RRHOFBands)) {
    if (memberNames(bands).includes(eachInductor)) {
      array.push(eachInductor);
    }
  }
  return array;
}
// membersAndInductors(bandsData, RRHOFData);

module.exports = {
  mostOrLeastMembers,
  mostOrLeastPlayedSong,
  filterByRRHOFStatus,
  membersAndInductors,
};
