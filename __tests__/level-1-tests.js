const {
  getAllBandNames,
  bandMembersTotal,
  mostPlayedSong,
  mostMembers,
  findBandBySong,
  findBandByMember,
  filterByInstrument,
  reverseFilterByGenre,
  countByCountry,
} = require("../src/level-1-building-blocks");

const bands = require("../data/bands-data");
const otherBands = require("../data/bands2-data");

describe("getAllBandNames()", () => {
  test("should return all band names in an array of bands", () => {
    const actual = getAllBandNames(bands);
    const expected = [
      "Living Colour",
      "The Beach Boys",
      "Hole",
      "Earth, Wind & Fire",
      "Cocteau Twins",
      "Nirvana",
      "Destiny's Child",
      "Nine Inch Nails",
      "The Clash",
      "Roxy Music",
      "Boyz II Men",
      "Blondie",
      "Joy Division",
    ];
    expect(actual).toEqual(expected);
  });

  test("should work dynamically with other similar data sets", () => {
    const actual = getAllBandNames(otherBands);
    const expected = ["Chrome", "Yellow Magic Orchestra", "X"];
    expect(actual).toEqual(expected);
  });

  test("should return an empty array if there are no bands", () => {
    const actual = getAllBandNames([]);
    const expected = [];

    expect(actual).toEqual(expected);
  });
});

describe("bandMembersTotal()", () => {
  test("should return the total number of band members", () => {
    const actual = bandMembersTotal(bands);
    const expected = 62;
    expect(actual).toEqual(expected);
  });

  test("should work dynamically with other similar data sets", () => {
    const actual = bandMembersTotal(otherBands);
    const expected = 9;
    expect(actual).toEqual(expected);
  });

  test("should return 0 if there are no bands", () => {
    const actual = bandMembersTotal([]);
    const expected = 0;

    expect(actual).toEqual(expected);
  });
});

describe("mostPlayedSong()", () => {
  test("should return a string containing the band, song, and number of plays", () => {
    const actual = mostPlayedSong(bands);
    const expected = "Nirvana, 'Smells Like Teen Spirit', 1,048,485,790 plays";
    expect(actual).toEqual(expected);
  });

  test("should work dynamically with other similar data sets", () => {
    const actual = mostPlayedSong(otherBands);
    const expected = "X, 'Los Angeles', 13,762,508 plays";
    expect(actual).toEqual(expected);
  });

  test("should return '' if there are no bands", () => {
    const actual = mostPlayedSong([]);
    const expected = "";

    expect(actual).toEqual(expected);
  });
});

describe("mostMembers()", () => {
  test("should return a string containing the name of the band with the most members", () => {
    const actual = mostMembers(bands);
    const expected = "Earth, Wind & Fire";
    expect(actual).toEqual(expected);
  });

  test("should work dynamically with other similar data sets", () => {
    const actual = mostMembers(otherBands);
    const expected = "X";
    expect(actual).toEqual(expected);
  });

  test("should return '' if there are no bands", () => {
    const actual = mostMembers([]);
    const expected = "";

    expect(actual).toEqual(expected);
  });
});

describe("findBandBySong()", () => {
  test("should return a string containing the name of the band that matches the inputted song", () => {
    const actual = findBandBySong(bands, "Cherry-coloured Funk");
    const expected = "Cocteau Twins";
    expect(actual).toEqual(expected);
  });

  test("should work dynamically with other similar data sets", () => {
    const actual = findBandBySong(otherBands, "Static Gravity");
    const expected = "Chrome";
    expect(actual).toEqual(expected);
  });

  test("should return '' if there are no bands", () => {
    const actual = findBandBySong([]);
    const expected = "";

    expect(actual).toEqual(expected);
  });
});

describe("findBandByMember()", () => {
  test("should return a string containing the name of the band that matches the inputted band member", () => {
    const actual = findBandByMember(bands, "Kelly Rowland");
    const expected = "Destiny's Child";
    expect(actual).toEqual(expected);
  });

  test("should work dynamically with other similar data sets", () => {
    const actual = findBandByMember(otherBands, "Ryuichi Sakamoto");
    const expected = "Yellow Magic Orchestra";
    expect(actual).toEqual(expected);
  });

  test("should return '' if there are no bands", () => {
    const actual = findBandByMember([]);
    const expected = "";

    expect(actual).toEqual(expected);
  });
});

describe("filterByInstrument()", () => {
  test("should return an array of strings containing the name of band members who play the inputted instrument", () => {
    const actual = filterByInstrument(bands, "synthesizer");
    const expected = ["Atticus Ross", "Brian Eno"];
    expect(actual).toEqual(expected);
  });

  test("should work dynamically with other similar data sets", () => {
    const actual = filterByInstrument(otherBands, "bass guitar");
    const expected = ["Haruomi Hosono", "John Doe"];
    expect(actual).toEqual(expected);
  });

  test("should return [] if there are no bands", () => {
    const actual = filterByInstrument([]);
    const expected = [];

    expect(actual).toEqual(expected);
  });
});

describe("reverseFilterByGenre()", () => {
  test("should return an array of strings containing the names of bands who do NOT fit the inputted genre", () => {
    const actual = reverseFilterByGenre(bands, "rock");
    const expected = ["Destiny's Child", "Roxy Music", "Boyz II Men"];
    expect(actual).toEqual(expected);
  });

  test("should work dynamically with other similar data sets", () => {
    const actual = reverseFilterByGenre(otherBands, "alternative");
    const expected = ["Chrome", "Yellow Magic Orchestra"];
    expect(actual).toEqual(expected);
  });

  test("should return [] if there are no bands", () => {
    const actual = reverseFilterByGenre([]);
    const expected = [];

    expect(actual).toEqual(expected);
  });
});

describe("countByCountry()", () => {
  test("should return an object with keys representing countries and values representing the number of bands from each country", () => {
    const actual = countByCountry(bands);
    const expected = { USA: 9, Scotland: 1, England: 3 };
    expect(actual).toEqual(expected);
  });

  test("should work dynamically with other similar data sets", () => {
    const actual = countByCountry(otherBands);
    const expected = { USA: 2, Japan: 1 };
    expect(actual).toEqual(expected);
  });

  test("should return {} if there are no bands", () => {
    const actual = countByCountry([]);
    const expected = {};

    expect(actual).toEqual(expected);
  });
});
