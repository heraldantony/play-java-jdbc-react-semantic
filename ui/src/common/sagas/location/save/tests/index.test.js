/*
 *  Test sagas for saving Location 
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
  LOCATION_SAVE,
  saveLocation as saveLocationAction,
  saveLocationSuccess,
  saveLocationFail
} from "common/actions/location";

import { locationSaveAPI } from "common/api/LocationSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doSaveLocation, saveLocation } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doSaveLocation Saga", () => {
  let doSaveLocationGenerator;

  beforeEach(() => {
    doSaveLocationGenerator = doSaveLocation();
  });
  afterEach(() => {});

  it("should save Location", () => {
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

    fakeLocation["streetAddress"] = "87521 Ivah Ways";

    fakeLocation["postalCode"] = "10653";

    fakeLocation["city"] = "West Ariel";

    fakeLocation["stateProvince"] = "Oklahoma";

    let fakeResult = { ok: true, data: fakeLocation };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeLocation,
        form: "LOCATION_EDIT_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doSaveLocation, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(locationSaveAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield saveLocationSuccess action with saving entity data
          .put(saveLocationSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to save Location with message', () => {
    let fakeLocation = {"_id":"5c2e375503e0403c99c21899","streetAddress":"05338 Lang Ranch","postalCode":"55428-8647","city":"Fritschshire","stateProvince":"Georgia","country":{"_id":"5c2e375503e0403c99c2188f","countryName":"Serbia","region":{"_id":"5c2e375503e0403c99c21885","regionName":"South-east Asia"}}}
    let fakeResult={ok: false, data: {message: 'Failed to save Location, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeLocation, form: 'LOCATION_EDIT_FORM', promise: {resolve, reject} }
       return expectSaga(doSaveLocation, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(locationSaveAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield saveLocationFail action with error message
           .put(saveLocationFail(fakeResult.data.message))
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

    fakeLocation["streetAddress"] = "96019 Abbie Vista";

    fakeLocation["postalCode"] = "14288";

    fakeLocation["city"] = "East Diego";

    fakeLocation["stateProvince"] = "Alabama";

    let fakeResult = { ok: true, data: fakeLocation };
    let finalState = { ...initialState, location: fakeLocation };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeLocation,
        form: "LOCATION_EDIT_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doSaveLocation, action)
        .withReducer(locationReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(locationSaveAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          saveLocationAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
