/*
 *  Test sagas for adding Region 
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

import { initialState, regionReducer } from "common/reducers/region";

import {
  REGION_ADD,
  addRegion as addRegionAction,
  addRegionSuccess,
  addRegionFail
} from "common/actions/region";

import { regionAddAPI } from "common/api/RegionSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doAddRegion, addRegion } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doAddRegion Saga", () => {
  let doAddRegionGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    doAddRegionGenerator = doAddRegion();
  });
  afterEach(() => {});

  it("should add Region", () => {
    let fakeRegion = {
      _id: "5c2e375503e0403c99c21885",
      regionName: "South-east Asia"
    };
    delete fakeRegion["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "a2f9e4b9-cde3-4b98-bcf3-bc32a8a9dbed", ...fakeRegion }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeRegion,
        form: "REGION_ADD_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doAddRegion, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(regionAddAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield addRegionSuccess action with new entity data
          .put(addRegionSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to add Region with message', () => {
    let fakeRegion = {"_id":"5c2e375503e0403c99c21885","regionName":"South-east Asia"}
    delete fakeRegion['_id'];
    let fakeResult={ok: false, data: {message: 'Failed to add Region, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeRegion, form: 'REGION_ADD_FORM', promise: {resolve, reject} }
       return expectSaga(doAddRegion, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(regionAddAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield addRegionFail action with error message
           .put(addRegionFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeRegion = {
      _id: "5c2e375503e0403c99c21885",
      regionName: "South-east Asia"
    };
    delete fakeRegion["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "7f051755-aa02-443d-b09d-ab9254b74653", ...fakeRegion }
    };
    let finalState = {
      ...initialState,
      region: { ...fakeRegion, _id: fakeResult.data._id }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeRegion,
        form: "REGION_ADD_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doAddRegion, action)
        .withReducer(regionReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(regionAddAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(addRegionAction(action.payload, action.form, action.promise))
        .run();
    });
  });
});
