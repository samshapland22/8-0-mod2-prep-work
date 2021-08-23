const bandsData = require("../data/bands-data.js");

/**
 *
 *
 *
 * getAllBandNames()
 * -----------------------------
 * Returns all `bandNames` from an array of bands. If the inputted `bands` array is empty, return `[]`.
 * @param {Object[]} bands - An array of band objects.
 * @returns {string[]} An array of strings, which are the names of every band.
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

function getAllBandNames() {}

/**
 *
 *
 *
 * bandMembersTotal()
 * -----------------------------
 * Returns total number of `members` from an array of bands. If the inputted `bands` array is empty, return `0`.
 * @param {Object[]} bands - An array of band objects.
 * @returns {number} A number that represents the total number of band members included in the `bands` array that gets passed in.
 *
 * EXAMPLE: bandMembersTotal(bandsData);
 * > 62
 */

function bandMembersTotal() {}

/**
 *
 *
 *
 * mostPlayedSong()
 * -----------------------------
 * Returns a string that contains the name of the band with the most played song, the song name,
 * and the number of plays on Spotify. If the inputted `bands` array is empty, return 'Bands array is empty.'
 * @param {Object[]} bands - An array of band objects.
 * @returns {string} A formatted string that contains the name of the band with the most played song,
 *                   the song name, and the number of plays on Spotify
 *
 * EXAMPLE: mostPlayedSong(bandsData);
 * > "Nirvana, 'Smells Like Teen Spirit', 1,048,485,790 plays"
 *
 * HINT: Use "toLocaleString()" if you need to reformat the plays number at the end. Look it up on MDN if you're not already familiar.
 */

function mostPlayedSong() {}

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

function mostMembers() {}

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

function findBandBySong() {}

/**
 *
 *
 *
 * findBandByMember()
 * -----------------------------
 * Returns the `bandName` of the band that matches the target `member`. If the inputted `bands` array is empty, return null.
 * @param {Object[]} bands - An array of band objects.
 * @param {string} name - A person's name that represents one of the bands' members.
 * @returns {string} The `bandName` of the band that matches the target `name`.
 *
 * EXAMPLE: findBandByMember(bandsData, 'Kelly Rowland');
 * > "Destiny's Child"
 *
 */

function findBandByMember() {}

/**
 *
 *
 *
 * filterByInstrument()
 * -----------------------------
 * Returns an array of all member names that match the target `instrument`. If the inputted `bands` array is empty, return `[]`.
 * @param {Object[]} bands - An array of band objects.
 * @param {string} instrument - An instrument name, (ie 'guitar', 'bass guitar', 'vocals', etc.)
 * @returns {string[]} An array of strings that represent the names of all band members who play
 *                      the given `instrument`
 *
 * EXAMPLE: filterByInstrument(bandsData, 'synthesizer');
 * > ["Brian Eno", "Atticus Ross"]
 */

function filterByInstrument() {}

/**
 *
 *
 *
 * reverseFilterByGenre()
 * -----------------------------
 * Returns an array of all bands' `bandNames` that do NOT contain the given genre in their `genres` array. If the inputted `bands` array is empty, return `[]`.
 * @param {Object[]} bands - An array of band objects.
 * @param {string} genre - A genre of music
 * @returns {string[]} An array of strings that represent the `bandNames` of all bands that do
 *                      NOT fit the given `genre`.
 *
 * EXAMPLE: reverseFilterByGenre(bandsData, 'rock');
 * > ["Destiny's Child", "Roxy Music", "Boyz II Men"]
 */

function reverseFilterByGenre() {}

/**
 *
 *
 *
 * countByCountry()
 * -----------------------------
 * Returns an object with keys representing countries and values representing the number of bands from that country. If the inputted `bands` array is empty, return {}.
 * @param {Object[]} bands - An array of band objects.
 * @returns {Object} An object containing keys that represent countries and values respresenting
 *                   the number of bands from each country.
 *
 * EXAMPLE: countByCountry(bandsData);
 * > { USA: 9, Scotland: 1, England: 3 }
 */

function countByCountry() {}

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
