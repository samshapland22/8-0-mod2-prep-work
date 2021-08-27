const bandsData = require("../data/bands-data.js");
const RRHOFData = require("../data/RRHOF-data.js");
const {
  mostMembers,
  leastPlayedSong,
  mostPlayedSong,
} = require("../src/level-1-building-blocks.js");

/**
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

//WRITE A HELPER FUNCTION THAT FINDS THE BAND WITH  THE MOST MEMBERS.
//(you already wrote a function like this in 'level-1-building-blocks.js')

// function mostMembers(bands) {
//   let mostMemberName = "";
//   if (!bands.length) {
//     return mostMemberName;
//   }

//   let getMostMember = bands[0].members.length;
//   for (let member of bands) {
//     if (member.members.length > getMostMember) {
//       getMostMember = member.members.length;
//       mostMemberName = member.bandName;
//     }
//   }
//   return mostMemberName;
// }

//WRITE A HELPER FUNCTION THAT FINDS THE BAND WITH THE LEAST MEMBERS.
function leastMembers(bands) {
  let leastMemberName = "";
  if (!bands.length) {
    return mostMemberName;
  }

  let getLeastMember = Infinity;
  for (let member of bands) {
    if (member.members.length < getLeastMember) {
      getLeastMember = member.members.length;
      leastMemberName = member.bandName;
    }
  }
  return leastMemberName;
}

//USE BOTH OF YOUR HELPER FUNCTIONS INSIDE OF THE MAIN FUNCTION BELOW.

function mostOrLeastMembers(bands, witch) {
  if (!bands.length) {
    return "";
  }
  if (witch === "least") {
    return leastMembers(bands);
  }
  if (witch === "most") {
    return mostMembers(bands);
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
 * @param {string} witch - A string that can either be "most" or "least"
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

//USE BOTH OF YOUR HELPER FUNCTIONS INSIDE OF THE MAIN FUNCTION BELOW.

function mostOrLeastPlayedSong(bands, witch) {
  if (!bands.length) {
    return "Bands array is empty.";
  }
  if (witch === "least") {
    return leastPlayedSong(bands);
  }
  if (witch === "most") {
    return mostPlayedSong(bands);
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
function getBandName(RRHOFBands) {
  let result = [];
  for (let rfBand of RRHOFBands) {
    result.push(rfBand.bandName);
  }
  return result;
}
//USE THIS HELPER FUNCTION INSIDE OF THE MAIN FUNCTION BELOW.

function filterByRRHOFStatus(bands, RRHOFBands) {
  let inductedBand = [];
  for (let band of bands) {
    if (getBandName(RRHOFBands).includes(band.bandName)) {
      inductedBand.push(band.bandName);
    }
  }
  return inductedBand;
}
filterByRRHOFStatus(bandsData, RRHOFBands);
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

function getInductedBy(RRHOFBands) {
  let whoInducted = [];
  for (let induct of RRHOFBands) {
    whoInducted.push(induct.inductedBy);
  }
  return whoInducted;
}

//WRITE A HELPER FUNCTION THAT RETURNS AN ARRAY CONTAINING ALL `members.name` STRINGS FROM THE BANDS DATA.
//(you already wrote a function similar this, but not exactly the same, in 'level-1-building-blocks.js')

function getBandMembers(bands) {
  let getMember = [];
  for (let member of bands) {
    for (let eachMember of member.members) {
      getMember.push(eachMember.name);
    }
  }

  return getMember;
}
//USE THESE HELPER FUNCTIONS INSIDE OF THE MAIN FUNCTION BELOW.
//Let inductees = getInductedBy(RRHOFBands)

function membersAndInductors(bands, RRHOFBands) {
 let inductedBand = []
 if(!bands.length || !RRHOFBands.length){
   return inductedBand
 }

  for (let induct of getInductedBy(RRHOFBands)) {
      if(getBandMembers(bands).includes(induct)){
        inductedBand.push(induct);    
    }
  }
  //for (let induct of getInductedBy(RRHOFBands)) {
  //   let inductees = getInductedBy(RRHOFBands)
  //   let bandMember = getBandMembers(bands)
  //   for (let induct of inductees){
  //     if(bandMember.includes(induct)){
  //       inductedBand.push(induct);    
  //   }
    
  // }
  return inductedBand;
}
membersAndInductors(bandsData, RRHOFBands);
module.exports = {
  mostOrLeastMembers,
  mostOrLeastPlayedSong,
  filterByRRHOFStatus,
  membersAndInductors,
};
