/*
 *  Test sagas for deleting Country 
 *
*/

import { SubmissionError, startSubmit, reset, stopSubmit } from "redux-form";
import {
  call,
  put,
  select,
  takeLatest,
  take,
  cancel
} from "redux-saga/effects";
import { LOCATION_CHANGE } from "react-router-redux";

import { initialState, countryReducer } from "common/reducers/country";

import {
  COUNTRY_DELETE,
  deleteCountry as deleteCountryAction,
  deleteCountrySuccess,
  deleteCountryFail
} from "common/actions/country";

import { countryDeleteAPI } from "common/api/CountrySvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doDeleteCountry, deleteCountry } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doDeleteCountry Saga", () => {
  let doDeleteCountryGenerator;

  beforeEach(() => {
    doDeleteCountryGenerator = doDeleteCountry();
  });
  afterEach(() => {});

  it("should delete Country ", () => {
    let fakeCountry = {
      _id: "5c2e375503e0403c99c2188f",
      countryName: "Serbia",
      region: { _id: "5c2e375503e0403c99c21885", regionName: "South-east Asia" }
    };
    let countryId = fakeCountry._id;
    let fakeResult = { ok: true, data: fakeCountry };
    let action = { payload: countryId };
    return (
      expectSaga(doDeleteCountry, action)
        .provide([[call(countryDeleteAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield deleteCountrySuccess action
        .put(deleteCountrySuccess(fakeResult.data))
        .run()
    );
  });
  it("should fail to delete Country with message", () => {
    let fakeCountry = {
      _id: "5c2e375503e0403c99c2188f",
      countryName: "Serbia",
      region: { _id: "5c2e375503e0403c99c21885", regionName: "South-east Asia" }
    };
    let countryId = fakeCountry._id;
    let fakeResult = {
      ok: false,
      data: { message: "Failed to get Country, random error" }
    };
    let action = { payload: countryId };
    return (
      expectSaga(doDeleteCountry, action)
        .provide([[call(countryDeleteAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield deleteCountryFail action with error message
        .put(deleteCountryFail(fakeResult.data.message))
        .run()
        .catch(error => {
          expect(error).toEqual(
            new SubmissionError({ _error: result.data.message })
          );
        })
    );
  });
  it("should handle reducer and store state", () => {
    let fakeCountry = {
      _id: "5c2e375503e0403c99c2188f",
      countryName: "Serbia",
      region: { _id: "5c2e375503e0403c99c21885", regionName: "South-east Asia" }
    };
    let countryId = fakeCountry._id;
    let fakeResult = { ok: true, data: fakeCountry };
    let finalState = { ...initialState, country: {} };
    let action = { payload: countryId };
    return expectSaga(doDeleteCountry, action)
      .withReducer(countryReducer)
      .provide([[call(countryDeleteAPI, action.payload), fakeResult]])
      .hasFinalState(finalState)
      .dispatch(
        deleteCountryAction(action.payload, action.form, action.promise)
      )
      .run();
  });
});
