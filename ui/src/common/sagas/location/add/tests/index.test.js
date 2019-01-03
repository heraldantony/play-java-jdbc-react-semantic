/*
 *  Test sagas for adding Location 
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
  LOCATION_ADD,
  addLocation as addLocationAction,
  addLocationSuccess,
  addLocationFail
} from "common/actions/location";

import { locationAddAPI } from "common/api/LocationSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doAddLocation, addLocation } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doAddLocation Saga", () => {
  let doAddLocationGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    doAddLocationGenerator = doAddLocation();
  });
  afterEach(() => {});

  it("should add Location", () => {
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
    delete fakeLocation["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "84511b43-0bc3-42fd-9953-daf1f094bd94", ...fakeLocation }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeLocation,
        form: "LOCATION_ADD_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doAddLocation, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(locationAddAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield addLocationSuccess action with new entity data
          .put(addLocationSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to add Location with message', () => {
    let fakeLocation = {"_id":"5c2e375503e0403c99c21899","streetAddress":"05338 Lang Ranch","postalCode":"55428-8647","city":"Fritschshire","stateProvince":"Georgia","country":{"_id":"5c2e375503e0403c99c2188f","countryName":"Serbia","region":{"_id":"5c2e375503e0403c99c21885","regionName":"South-east Asia"}}}
    delete fakeLocation['_id'];
    let fakeResult={ok: false, data: {message: 'Failed to add Location, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeLocation, form: 'LOCATION_ADD_FORM', promise: {resolve, reject} }
       return expectSaga(doAddLocation, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(locationAddAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield addLocationFail action with error message
           .put(addLocationFail(fakeResult.data.message))
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
    delete fakeLocation["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "bd4022b0-b184-4fd3-912c-1e25994df7d2", ...fakeLocation }
    };
    let finalState = {
      ...initialState,
      location: { ...fakeLocation, _id: fakeResult.data._id }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeLocation,
        form: "LOCATION_ADD_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doAddLocation, action)
        .withReducer(locationReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(locationAddAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          addLocationAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
