const {
  mostOrLeastMembers,
  mostOrLeastPlayedSong,
  filterByRRHOFStatus,
  membersAndInductors,
} = require("../src/level-2-more-complex-problems");

const bands = require("../data/bands-data");
const otherBands = require("../data/bands2-data");
const RRHOFData = require("../data/RRHOF-data");

describe("mostOrLeastMembers()", () => {
  test("should return the name of the band with the most members if the second argument passed is 'most'", () => {
    const actual = mostOrLeastMembers(bands, "most");
    const expected = "Earth, Wind & Fire";
    expect(actual).toEqual(expected);
  });

  test("should return the name of the band with the least members if the second argument passed is 'least'", () => {
    const actual = mostOrLeastMembers(bands, "least");
    const expected = "Nine Inch Nails";
    expect(actual).toEqual(expected);
  });

  test("should work with the input 'most' dynamically with other similar data sets", () => {
    const actual = mostOrLeastMembers(otherBands, "most");
    const expected = "X";
    expect(actual).toEqual(expected);
  });

  test("should work with the input 'least' dynamically with other similar data sets", () => {
    const actual = mostOrLeastMembers(otherBands, "least");
    const expected = "Chrome";
    expect(actual).toEqual(expected);
  });

  test("should return '' if there are no bands", () => {
    const actual = mostOrLeastMembers([]);
    const expected = "";

    expect(actual).toEqual(expected);
  });
});

describe("mostOrLeastPlayedSong()", () => {
  test("should return the name of the band, song, and plays for the song with the most Spotify plays if the second argument passed is 'most'", () => {
    const actual = mostOrLeastPlayedSong(bands, "most");
    const expected = "Nirvana, 'Smells Like Teen Spirit', 1,048,485,790 plays";
    expect(actual).toEqual(expected);
  });

  test("should return the name of the band, song, and plays for the song with the least Spotify plays if the second argument passed is 'least'", () => {
    const actual = mostOrLeastPlayedSong(bands, "least");
    const expected = "Cocteau Twins, 'Cherry-coloured Funk', 44,552,490 plays";
    expect(actual).toEqual(expected);
  });

  test("should work with the input 'most' dynamically with other similar data sets", () => {
    const actual = mostOrLeastPlayedSong(otherBands, "most");
    const expected = "X, 'Los Angeles', 13,762,508 plays";
    expect(actual).toEqual(expected);
  });

  test("should work with the input 'least' dynamically with other similar data sets", () => {
    const actual = mostOrLeastPlayedSong(otherBands, "least");
    const expected = "Chrome, 'Static Gravity', 125,038 plays";
    expect(actual).toEqual(expected);
  });

  test("should return 'Bands array is empty.' if there are no bands", () => {
    const actual = mostOrLeastPlayedSong([]);
    const expected = "Bands array is empty.";

    expect(actual).toEqual(expected);
  });
});

describe("filterByRRHOFStatus()", () => {
  test("should return an array of names of bands from the inputted 'bands' array who are in the Rock n Roll Hall of Fame", () => {
    const actual = filterByRRHOFStatus(bands, RRHOFData);
    const expected = [
      "The Beach Boys",
      "Earth, Wind & Fire",
      "Nirvana",
      "Nine Inch Nails",
      "The Clash",
      "Roxy Music",
      "Blondie",
    ];
    expect(actual).toEqual(expected);
  });

  test("should work dynamically with other similar data sets", () => {
    const actual = filterByRRHOFStatus(otherBands, RRHOFData);
    const expected = [];
    expect(actual).toEqual(expected);
  });

  test("should return [] if there are no bands", () => {
    const actual = filterByRRHOFStatus([]);
    const expected = [];

    expect(actual).toEqual(expected);
  });
});

describe("membersAndInductors()", () => {
  test("should return an array of names of bands from the inputted 'bands' array who are in the Rock n Roll Hall of Fame", () => {
    const actual = membersAndInductors(bands, RRHOFData);
    const expected = ["Trent Reznor", "Dave Grohl"];
    expect(actual).toEqual(expected);
  });

  test("should work dynamically with other similar data sets", () => {
    const actual = membersAndInductors(otherBands, RRHOFData);
    const expected = [];
    expect(actual).toEqual(expected);
  });

  test("should return [] if there are no bands", () => {
    const actual = membersAndInductors([]);
    const expected = [];

    expect(actual).toEqual(expected);
  });
});
