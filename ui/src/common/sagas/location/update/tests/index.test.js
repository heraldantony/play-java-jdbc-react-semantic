/*
 *  Test sagas for updating Location 
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
  LOCATION_UPDATE,
  updateLocation as updateLocationAction,
  updateLocationSuccess,
  updateLocationFail
} from "common/actions/location";

import { locationUpdateAPI } from "common/api/LocationSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doUpdateLocation, updateLocation } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doUpdateLocation Saga", () => {
  let doUpdateLocationGenerator;

  beforeEach(() => {
    doUpdateLocationGenerator = doUpdateLocation();
  });
  afterEach(() => {});

  it("should update Location", () => {
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

    fakeLocation["streetAddress"] = "1304 Dannie Lakes";

    fakeLocation["postalCode"] = "39281-2873";

    fakeLocation["city"] = "South Garnettton";

    fakeLocation["stateProvince"] = "Washington";

    let fakeResult = { ok: true, data: fakeLocation };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeLocation,
        form: "LOCATION_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doUpdateLocation, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(locationUpdateAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield updateLocationSuccess action with updating entity data
          .put(updateLocationSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to update Location with message', () => {
    let fakeLocation = {"_id":"5c2e375503e0403c99c21899","streetAddress":"05338 Lang Ranch","postalCode":"55428-8647","city":"Fritschshire","stateProvince":"Georgia","country":{"_id":"5c2e375503e0403c99c2188f","countryName":"Serbia","region":{"_id":"5c2e375503e0403c99c21885","regionName":"South-east Asia"}}}
    let fakeResult={ok: false, data: {message: 'Failed to update Location, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeLocation, form: 'LOCATION_UPDATE_FORM', promise: {resolve, reject} }
       return expectSaga(doUpdateLocation, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(locationUpdateAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield updateLocationFail action with error message
           .put(updateLocationFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
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

    fakeLocation["streetAddress"] = "42578 Schuppe Overpass";

    fakeLocation["postalCode"] = "31710-2939";

    fakeLocation["city"] = "North Alexandre";

    fakeLocation["stateProvince"] = "Vermont";

    let fakeResult = { ok: true, data: fakeLocation };
    let finalState = { ...initialState, location: fakeLocation };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeLocation,
        form: "LOCATION_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(updateLocation, action)
        .withReducer(locationReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(locationUpdateAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          updateLocationAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
