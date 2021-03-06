/*
 *  Test sagas for deleting Location 
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

import { initialState, locationReducer } from "common/reducers/location";

import {
  LOCATION_DELETE,
  deleteLocation as deleteLocationAction,
  deleteLocationSuccess,
  deleteLocationFail
} from "common/actions/location";

import { locationDeleteAPI } from "common/api/LocationSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doDeleteLocation, deleteLocation } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doDeleteLocation Saga", () => {
  let doDeleteLocationGenerator;

  beforeEach(() => {
    doDeleteLocationGenerator = doDeleteLocation();
  });
  afterEach(() => {});

  it("should delete Location ", () => {
    let fakeLocation = {
      _id: "5c2e375503e0403c99c21899",
      streetAddress: "05338 Lang Ranch",
      postalCode: "55428-8647",
      city: "Fritschshire",
      stateProvince: "Georgia",
      country: {
        _id: "5c2e375503e0403c99c2188f",
        countryName: "Serbia",
        region: {
          _id: "5c2e375503e0403c99c21885",
          regionName: "South-east Asia"
        }
      }
    };
    let locationId = fakeLocation._id;
    let fakeResult = { ok: true, data: fakeLocation };
    let action = { payload: locationId };
    return (
      expectSaga(doDeleteLocation, action)
        .provide([[call(locationDeleteAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield deleteLocationSuccess action
        .put(deleteLocationSuccess(fakeResult.data))
        .run()
    );
  });
  it("should fail to delete Location with message", () => {
    let fakeLocation = {
      _id: "5c2e375503e0403c99c21899",
      streetAddress: "05338 Lang Ranch",
      postalCode: "55428-8647",
      city: "Fritschshire",
      stateProvince: "Georgia",
      country: {
        _id: "5c2e375503e0403c99c2188f",
        countryName: "Serbia",
        region: {
          _id: "5c2e375503e0403c99c21885",
          regionName: "South-east Asia"
        }
      }
    };
    let locationId = fakeLocation._id;
    let fakeResult = {
      ok: false,
      data: { message: "Failed to get Location, random error" }
    };
    let action = { payload: locationId };
    return (
      expectSaga(doDeleteLocation, action)
        .provide([[call(locationDeleteAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield deleteLocationFail action with error message
        .put(deleteLocationFail(fakeResult.data.message))
        .run()
        .catch(error => {
          expect(error).toEqual(
            new SubmissionError({ _error: result.data.message })
          );
        })
    );
  });
  it("should handle reducer and store state", () => {
    let fakeLocation = {
      _id: "5c2e375503e0403c99c21899",
      streetAddress: "05338 Lang Ranch",
      postalCode: "55428-8647",
      city: "Fritschshire",
      stateProvince: "Georgia",
      country: {
        _id: "5c2e375503e0403c99c2188f",
        countryName: "Serbia",
        region: {
          _id: "5c2e375503e0403c99c21885",
          regionName: "South-east Asia"
        }
      }
    };
    let locationId = fakeLocation._id;
    let fakeResult = { ok: true, data: fakeLocation };
    let finalState = { ...initialState, location: {} };
    let action = { payload: locationId };
    return expectSaga(doDeleteLocation, action)
      .withReducer(locationReducer)
      .provide([[call(locationDeleteAPI, action.payload), fakeResult]])
      .hasFinalState(finalState)
      .dispatch(
        deleteLocationAction(action.payload, action.form, action.promise)
      )
      .run();
  });
});
