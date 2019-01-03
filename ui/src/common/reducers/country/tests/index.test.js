// @flow
import { fromJS } from "immutable";

import {
  addCountry,
  addCountrySuccess,
  addCountryFail,
  saveCountry,
  saveCountrySuccess,
  saveCountryFail,
  updateCountry,
  updateCountrySuccess,
  updateCountryFail,
  searchCountry,
  searchCountrySuccess,
  searchCountryFail,
  getCountry,
  getCountrySuccess,
  getCountryFail,
  setRegion
} from "common/actions/country";
import { countryReducer } from "common/reducers/country";

describe("Country Reducer", () => {
  let state;
  beforeEach(() => {
    state = {
      search: "",
      country: {},
      countries: [],
      start: 0,
      limit: 10,
      totalItemsCount: 0,
      otherSearchStart: 0,
      otherSearchLimit: 10,
      otherSearchTotalItemsCount: 0,
      otherSearchCountries: [],
      error: ""
    };
  });
  it("should return the initial state", () => {
    const expectedResult = state;
    expect(countryReducer(undefined, {})).toEqual(expectedResult);
  });

  describe("addCountrySuccess", () => {
    it("should update state with add results", () => {
      const country = {
        _id: "5c2e375503e0403c99c2188f",
        countryName: "Serbia",
        region: {
          _id: "5c2e375503e0403c99c21885",
          regionName: "South-east Asia"
        }
      };
      const expectedResult = { ...state, country: country };

      expect(countryReducer(state, addCountrySuccess(country))).toEqual(
        expectedResult
      );
    });
  });

  describe("addCountryFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(countryReducer(state, addCountryFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("saveCountrySuccess", () => {
    it("should update state with save results", () => {
      const country = {
        _id: "5c2e375503e0403c99c2188f",
        countryName: "Serbia",
        region: {
          _id: "5c2e375503e0403c99c21885",
          regionName: "South-east Asia"
        }
      };
      const expectedResult = { ...state, country: country };

      expect(countryReducer(state, saveCountrySuccess(country))).toEqual(
        expectedResult
      );
    });
  });

  describe("saveCountryFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(countryReducer(state, saveCountryFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("updateCountrySuccess", () => {
    it("should update state with update results", () => {
      const country = {
        _id: "5c2e375503e0403c99c2188f",
        countryName: "Serbia",
        region: {
          _id: "5c2e375503e0403c99c21885",
          regionName: "South-east Asia"
        }
      };
      const expectedResult = { ...state, country: country };

      expect(countryReducer(state, updateCountrySuccess(country))).toEqual(
        expectedResult
      );
    });
  });

  describe("updateCountryFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(countryReducer(state, updateCountryFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("searchCountrySuccess", () => {
    it("should update state with search results", () => {
      const countries = [
        {
          _id: "5c2e375503e0403c99c2188f",
          countryName: "Serbia",
          region: {
            _id: "5c2e375503e0403c99c21885",
            regionName: "South-east Asia"
          }
        },
        {
          _id: "5c2e375503e0403c99c21890",
          countryName: "Serbia",
          region: {
            _id: "5c2e375503e0403c99c21885",
            regionName: "South-east Asia"
          }
        },
        {
          _id: "5c2e375503e0403c99c21891",
          countryName: "Lithuania",
          region: {
            _id: "5c2e375503e0403c99c21885",
            regionName: "South-east Asia"
          }
        }
      ];
      const expectedResult = {
        ...state,
        countries: countries,
        totalItemsCount: countries.length
      };

      expect(
        countryReducer(state, searchCountrySuccess(countries, countries.length))
      ).toEqual(expectedResult);
    });
  });

  describe("searchCountryFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(countryReducer(state, searchCountryFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("getCountrySuccess", () => {
    it("should update state with get results", () => {
      const country = {
        _id: "5c2e375503e0403c99c2188f",
        countryName: "Serbia",
        region: {
          _id: "5c2e375503e0403c99c21885",
          regionName: "South-east Asia"
        }
      };
      const expectedResult = { ...state, country: country };

      expect(countryReducer(state, getCountrySuccess(country))).toEqual(
        expectedResult
      );
    });
  });

  describe("getCountryFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(countryReducer(state, getCountryFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("setRegion", () => {
    it("should update state with region", () => {
      const region = {
        _id: "5c2e375503e0403c99c21885",
        regionName: "South-east Asia"
      };

      const expectedResult = {
        ...state,
        country: {
          ...state.country,
          region: region
        }
      };

      expect(countryReducer(state, setRegion(region))).toEqual(expectedResult);
    });
  });
});
