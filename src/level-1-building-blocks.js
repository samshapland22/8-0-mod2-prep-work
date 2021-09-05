const bandsData = require("../data/bands-data.js");

/**
 *
 *
 *
 * getAllBandNames()
 * -----------------------------
 * Returns all `bandNames` from an array of bands.
 * If the inputted `bands` array is empty, return `[]`.
 * @param {Object[]} bands - An array of band objects.
 * @returns {string[]} An array of strings, which are 
 * the names of every band.
 *
 * EXAMPLE: getAllBandNames(bandsData);
 * > [
 * "Living Colour",
 * "The Beach Boys",
 * "Hole",
 *  "Earth, Wind & Fire",
 * "Cocteau Twins",
 * "Nirvana",
 * ...etc
 * ]
 */

function getAllBandNames(bands) {
  if (bands.length === 0) {
    return [];
  }

  const bandNamesArr = [];

  for (const eachBand of bands) {
    bandNamesArr.push(eachBand.bandName);
  }
  return bandNamesArr;
}

/**
 *
 *
 *
 * bandMembersTotal()
 * -----------------------------
 * Returns total number of `members` from an array of bands. 
 * If the inputted `bands` array is empty, return `0`.
 * @param {Object[]} bands - An array of band objects.
 * @returns {number} A number that represents the total 
 * number of band members included in the
 * `bands` array that gets passed in.
 *
 * EXAMPLE: bandMembersTotal(bandsData);
 * > 62
 */

function bandMembersTotal(bands) {
  let numOfMembers = 0;

  for (const eachBand of bands) {
    numOfMembers += eachBand.members.length;
  }
  return numOfMembers;
}

/**
 *
 *
 *
 * mostPlayedSong()
 * -----------------------------
 * Returns a string that contains the name of the band with the 
 * most played song, the song name, and the number of plays on Spotify. 
 * If the inputted `bands` array is empty, return 'Bands array is empty.'
 * @param {Object[]} bands - An array of band objects.
 * @returns {string} A formatted string that contains the name of the band with 
 * the most played song, the song name, and the number of plays on Spotify
 *
 * EXAMPLE: mostPlayedSong(bandsData);
 * > "Nirvana, 'Smells Like Teen Spirit', 1,048,485,790 plays"
 *
 * HINT: Use "toLocaleString()" if you need to reformat the plays number at the end.
 * Look it up on MDN if you're not already familiar.
 */

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
function mostPlayedSong(bands) {
  let stringResult = "Bands array is empty.";

  if (bands.length === 0) {
    return stringResult;
  }

  let mostPlayed = -Infinity; 

  for (const eachBand of bands) {
    // destructuring a 'eachBand' object, grabbing 'bandName' key and its value
    // and declaring the variable with the same key name ('bandName)
    const { bandName } = eachBand;
    // destructuring a 'mostPlayedSongOnSpotify' object from 'eachBand' parent object, 
    // grabbing 'name' and 'plays' key and their values
    // and declaring variables with the same key names ('bandName)
    // variable values are assigned respective the key values
    const { name, plays } = eachBand.mostPlayedSongOnSpotify;

    if (formattedNum(plays) > mostPlayed) {
      mostPlayed = formattedNum(plays);
      stringResult = `${bandName}, '${name}', ${plays} plays`;
    }
  }
  return stringResult;
}

/**
 *
 *
 *
 * mostMembers()
 * -----------------------------
 * Returns the `bandName` of the band with the most `members.` If the inputted `bands` array is empty, return ''.
 * @param {Object[]} bands - An array of band objects.
 * @returns {string} The `bandName` of the band with the most `members.`
 *
 * EXAMPLE: mostMembers(bandsData);
 * > "Earth, Wind & Fire"
 */

function mostMembers(bands) {
  if (bands.length === 0) {
    return '';
  }

  // initiate the most members variable at the length of members in the first bands object
  // iterate through each band in bands
  // if the current members' length is greater than the most members
  // set most members equal to the length of the current members length
  // return modified most members

  let mostMembers = bands[0].members.length;
  for (const eachBand of bands) {
    if (eachBand.members.length > mostMembers) {
      mostMembers = eachBand.members.length;
      bandName = eachBand.bandName;
    }
  }
  return bandName;
}

/**
 *
 *
 *
 * findBandBySong()
 * -----------------------------
 * Returns the `bandName` of the band that matches the target `song`. If the inputted `bands` array is empty, return null.
 * @param {Object[]} bands - An array of band objects.
 * @param {string} song - A song name that represents one of the bands' 'mostPlayedSongOnSpotify' name.
 * @returns {string} The `bandName` of the band that matches the target `song`.
 *
 * EXAMPLE: findBandBySong(bandsData, 'Cherry-coloured Funk');
 * > "Cocteau Twins"
 */

function findBandBySong(bands, song) {
  if (bands.length === 0) {
    return null;
  }

  // iterate through each band's mostPlayedSongOnSpotify's song name
  // if song matches current iterating song name
  // return band name
  for (const eachBand of bands) {
    if (song === eachBand.mostPlayedSongOnSpotify.name) {
      return eachBand.bandName;
    }
  }
}

/**
 *
 *
 *
 * findBandByMember()
 * -----------------------------
 * Returns the `bandName` of the band that matches the target `member`. If the inputted `bands`
 * array is empty, return null.
 * @param {Object[]} bands - An array of band objects.
 * @param {string} name - A person's name that represents one of the bands' members.
 * @returns {string} The `bandName` of the band that matches the target `name`.
 *
 * EXAMPLE: findBandByMember(bandsData, 'Kelly Rowland');
 * > "Destiny's Child"
 *
 */

function findBandByMember(bands, name) {
  if (bands.length === 0) {
    return null;
  }
  // iterate though each band in bands
  // iterate though each band's members
  // if current band member's name matches name
  // return the band's name
  for (const eachBand of bands) {
    for (const eachMember of eachBand.members) {
      if (eachMember.name === name) {
        return eachBand.bandName;
      }
    }
  }
}

/**
 *
 *
 *
 * filterByInstrument()
 * -----------------------------
 * Returns an array of all member names that match the target `instrument`. If the inputted `bands`
 * array is empty, return `[]`.
 * @param {Object[]} bands - An array of band objects.
 * @param {string} instrument - An instrument name, (ie 'guitar', 'bass guitar', 'vocals', etc.)
 * @returns {string[]} An array of strings that represent the names of all band members who play the given `instrument`
 *
 * EXAMPLE: filterByInstrument(bandsData, 'synthesizer');
 * > ["Brian Eno", "Atticus Ross"]
 */

function filterByInstrument(bands, instrument) {
  if (bands.length === 0) {
    return [];
  }
  // declare matchingInstruments and assign an empty array
  const matchingInstruments = [];
  // iterate through each band in bands
  for (const eachBand of bands) {
    // iterate through each member in each band
    for (const eachMember of eachBand.members) {
    // if each band members' instrument matches instrument
      if (eachMember.instruments.includes(instrument)) {
      // push each band members' name into the array
      matchingInstruments.push(eachMember.name);
      }
    }
  }
  // return the modified array
  return matchingInstruments;
}

/**
 *
 *
 *
 * reverseFilterByGenre()
 * -----------------------------
 * Returns an array of all bands' `bandNames` that do NOt contain the given genre in their `genres` array.
 * If the inputted `bands` array is empty, return `[]`.
 * @param {Object[]} bands - An array of band objects.
 * @param {string} genre - A genre of music
 * @returns {string[]} An array of strings that represent the `bandNames` of all bands that do NOT fit the given `genre`.
 *
 * EXAMPLE: reverseFilterByGenre(bandsData, 'rock');
 * > ["Destiny's Child", "Roxy Music", "Boyz II Men"]
 */

function reverseFilterByGenre(bands, genre) {
  if (bands.length === 0) {
    return [];
  }
  // declare filterGenreArr and assign an empty array
  const filterGenreArr = [];
  // iterate through each band in bands
  for (const eachBand of bands) {
    // if each band's genres doesn't include genre
    if (!eachBand.genres.includes(genre)) {
      // push each band name into the array
      filterGenreArr.push(eachBand.bandName);
    }
  }
  // return modified filterGenreArr
  return filterGenreArr;
}

/**
 *
 *
 *
 * countByCountry()
 * -----------------------------
 * Returns an object with keys representing countries and values representing the number of bands
 * from that country. If the inputted `bands` array is empty, return {}.
 * @param {Object[]} bands - An array of band objects.
 * @returns {Object} An object containing keys that represent countries and values
 *
 * representing the number of bands from each country.
 *
 * EXAMPLE: countByCountry(bandsData);
 * > { USA: 9, Scotland: 1, England: 3 }
 */

function countByCountry(bands) {
  // guard clause
  // efficient way to code in case an array is empty
  if (bands.length === 0) {
    return {};
  }

  // declare countriesObj and assign an empty object
  const countryCount = {};
  // iterate through each band in bands
  for (const eachBand of bands) {
    // to make it easier to read, country is declared and assigned the navigation to each band's country
    let country = eachBand.origin.country; 
    // if the country key (e.g: 'USA') is undefined or doesn't have a set value
    // these two lines make the code dynamic, make it work for new country, with how the dynamic the key is set up
    if (countryCount[country] === undefined) {
      // set the value to be 1, a starting value
      countryCount[country] = 1;
      // else if it's not undefined, meaning it's 1 or more
    } else {
      // for every iteration of that country, increment the value
      countryCount[country] ++;
    }
  }
  // return the populated object
  return countryCount;
}  
countByCountry(bandsData);

module.exports = {
  getAllBandNames,
  bandMembersTotal,
  mostPlayedSong,
  mostMembers,
  findBandBySong,
  findBandByMember,
  filterByInstrument,
  reverseFilterByGenre,
  countByCountry,
};
