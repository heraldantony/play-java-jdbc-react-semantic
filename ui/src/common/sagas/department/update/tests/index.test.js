/*
 *  Test sagas for updating Department 
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

import { initialState, departmentReducer } from "common/reducers/department";

import {
  DEPARTMENT_UPDATE,
  updateDepartment as updateDepartmentAction,
  updateDepartmentSuccess,
  updateDepartmentFail
} from "common/actions/department";

import { departmentUpdateAPI } from "common/api/DepartmentSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doUpdateDepartment, updateDepartment } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doUpdateDepartment Saga", () => {
  let doUpdateDepartmentGenerator;

  beforeEach(() => {
    doUpdateDepartmentGenerator = doUpdateDepartment();
  });
  afterEach(() => {});

  it("should update Department", () => {
    let fakeDepartment = {
      _id: "5c2e375503e0403c99c218a3",
      departmentName: "Web",
      location: {
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
      },
      employees: [
        {
          _id: "5c2e375503e0403c99c218ae",
          firstName: "Savannah",
          lastName: "Kuhic",
          email: "Peter_Schumm75@yahoo.com",
          phoneNumber: "1-395-170-3163 x368",
          hireDate: "2018-04-10T11:12:14.360Z",
          salary: 9545,
          commissionPct: 15833,
          jobs: [
            {
              _id: "5c2e375503e0403c99c218b9",
              jobTitle: "International Applications Agent",
              minSalary: 64835,
              maxSalary: 76651,
              tasks: [
                {
                  _id: "5c2e375503e0403c99c218c4",
                  title:
                    "Sit impedit repellat explicabo ad possimus eos et qui.",
                  description:
                    "Placeat ut reiciendis eum explicabo magnam vitae placeat quia. Corporis eum et sunt aliquam occaecati architecto porro. Eos suscipit voluptates qui doloremque dicta harum ipsum. Nihil maiores consequatur provident soluta. Architecto ea sint vitae magnam nobis ut. Enim magni corporis nam in soluta inventore temporibus rerum accusamus.",
                  jobs: [
                    {
                      _id: "5c2e375503e0403c99c218bb",
                      jobTitle: "Dynamic Web Engineer",
                      minSalary: 8572,
                      maxSalary: 66540,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c6",
                          title:
                            "Velit consequuntur dolorem at explicabo sequi.",
                          description:
                            "Ut magni nesciunt quibusdam. Rem et tempora voluptatum quibusdam. Reprehenderit odit ut unde nihil qui nihil consequuntur tenetur.",
                          jobs: [
                            {
                              _id: "5c2e375503e0403c99c218bd",
                              jobTitle: "International Accountability Analyst",
                              minSalary: 9299,
                              maxSalary: 2835,
                              tasks: [
                                {
                                  _id: "5c2e375503e0403c99c218c8",
                                  title: "Explicabo dolorem ipsa velit.",
                                  description:
                                    "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                                  jobs: []
                                },
                                {
                                  _id: "5c2e375503e0403c99c218c9",
                                  title:
                                    "Sed ex nobis ducimus ea neque et dolor repellendus.",
                                  description:
                                    "Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.",
                                  jobs: []
                                }
                              ]
                            },
                            {
                              _id: "5c2e375503e0403c99c218be",
                              jobTitle: "International Directives Officer",
                              minSalary: 81069,
                              maxSalary: 56924,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5c2e375503e0403c99c218c7",
                          title: "Voluptatem voluptatem id.",
                          description:
                            "Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.",
                          jobs: [
                            {
                              _id: "5c2e375503e0403c99c218be",
                              jobTitle: "International Directives Officer",
                              minSalary: 81069,
                              maxSalary: 56924,
                              tasks: []
                            },
                            {
                              _id: "5c2e375503e0403c99c218bf",
                              jobTitle: "Internal Metrics Consultant",
                              minSalary: 31798,
                              maxSalary: 59451,
                              tasks: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      _id: "5c2e375503e0403c99c218bc",
                      jobTitle: "Internal Division Administrator",
                      minSalary: 52215,
                      maxSalary: 2368,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c7",
                          title: "Voluptatem voluptatem id.",
                          description:
                            "Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.",
                          jobs: [
                            {
                              _id: "5c2e375503e0403c99c218be",
                              jobTitle: "International Directives Officer",
                              minSalary: 81069,
                              maxSalary: 56924,
                              tasks: []
                            },
                            {
                              _id: "5c2e375503e0403c99c218bf",
                              jobTitle: "Internal Metrics Consultant",
                              minSalary: 31798,
                              maxSalary: 59451,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "5c2e375503e0403c99c218c5",
                  title: "Aliquid facilis neque.",
                  description:
                    "Atque qui quaerat veniam sunt et dolorem deleniti. Reprehenderit dolor sequi ex saepe eos necessitatibus tenetur sunt. Consequatur qui impedit et. Esse fugit est autem distinctio. Sunt voluptatum consequatur et consequatur. Officia ipsa et ut rem in sit sed.",
                  jobs: [
                    {
                      _id: "5c2e375503e0403c99c218bc",
                      jobTitle: "Internal Division Administrator",
                      minSalary: 52215,
                      maxSalary: 2368,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c7",
                          title: "Voluptatem voluptatem id.",
                          description:
                            "Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.",
                          jobs: [
                            {
                              _id: "5c2e375503e0403c99c218be",
                              jobTitle: "International Directives Officer",
                              minSalary: 81069,
                              maxSalary: 56924,
                              tasks: []
                            },
                            {
                              _id: "5c2e375503e0403c99c218bf",
                              jobTitle: "Internal Metrics Consultant",
                              minSalary: 31798,
                              maxSalary: 59451,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        }
                      ]
                    },
                    {
                      _id: "5c2e375503e0403c99c218bd",
                      jobTitle: "International Accountability Analyst",
                      minSalary: 9299,
                      maxSalary: 2835,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        },
                        {
                          _id: "5c2e375503e0403c99c218c9",
                          title:
                            "Sed ex nobis ducimus ea neque et dolor repellendus.",
                          description:
                            "Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.",
                          jobs: []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              _id: "5c2e375503e0403c99c218ba",
              jobTitle: "Chief Data Agent",
              minSalary: 25320,
              maxSalary: 43997,
              tasks: [
                {
                  _id: "5c2e375503e0403c99c218c5",
                  title: "Aliquid facilis neque.",
                  description:
                    "Atque qui quaerat veniam sunt et dolorem deleniti. Reprehenderit dolor sequi ex saepe eos necessitatibus tenetur sunt. Consequatur qui impedit et. Esse fugit est autem distinctio. Sunt voluptatum consequatur et consequatur. Officia ipsa et ut rem in sit sed.",
                  jobs: [
                    {
                      _id: "5c2e375503e0403c99c218bc",
                      jobTitle: "Internal Division Administrator",
                      minSalary: 52215,
                      maxSalary: 2368,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c7",
                          title: "Voluptatem voluptatem id.",
                          description:
                            "Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.",
                          jobs: [
                            {
                              _id: "5c2e375503e0403c99c218be",
                              jobTitle: "International Directives Officer",
                              minSalary: 81069,
                              maxSalary: 56924,
                              tasks: []
                            },
                            {
                              _id: "5c2e375503e0403c99c218bf",
                              jobTitle: "Internal Metrics Consultant",
                              minSalary: 31798,
                              maxSalary: 59451,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        }
                      ]
                    },
                    {
                      _id: "5c2e375503e0403c99c218bd",
                      jobTitle: "International Accountability Analyst",
                      minSalary: 9299,
                      maxSalary: 2835,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        },
                        {
                          _id: "5c2e375503e0403c99c218c9",
                          title:
                            "Sed ex nobis ducimus ea neque et dolor repellendus.",
                          description:
                            "Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.",
                          jobs: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "5c2e375503e0403c99c218c6",
                  title: "Velit consequuntur dolorem at explicabo sequi.",
                  description:
                    "Ut magni nesciunt quibusdam. Rem et tempora voluptatum quibusdam. Reprehenderit odit ut unde nihil qui nihil consequuntur tenetur.",
                  jobs: [
                    {
                      _id: "5c2e375503e0403c99c218bd",
                      jobTitle: "International Accountability Analyst",
                      minSalary: 9299,
                      maxSalary: 2835,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        },
                        {
                          _id: "5c2e375503e0403c99c218c9",
                          title:
                            "Sed ex nobis ducimus ea neque et dolor repellendus.",
                          description:
                            "Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.",
                          jobs: []
                        }
                      ]
                    },
                    {
                      _id: "5c2e375503e0403c99c218be",
                      jobTitle: "International Directives Officer",
                      minSalary: 81069,
                      maxSalary: 56924,
                      tasks: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          _id: "5c2e375503e0403c99c218af",
          firstName: "Sterling",
          lastName: "Fadel",
          email: "Micah_McClure59@gmail.com",
          phoneNumber: "427-834-7509 x032",
          hireDate: "2018-10-30T23:10:48.597Z",
          salary: 10292,
          commissionPct: 80848,
          jobs: [
            {
              _id: "5c2e375503e0403c99c218ba",
              jobTitle: "Chief Data Agent",
              minSalary: 25320,
              maxSalary: 43997,
              tasks: [
                {
                  _id: "5c2e375503e0403c99c218c5",
                  title: "Aliquid facilis neque.",
                  description:
                    "Atque qui quaerat veniam sunt et dolorem deleniti. Reprehenderit dolor sequi ex saepe eos necessitatibus tenetur sunt. Consequatur qui impedit et. Esse fugit est autem distinctio. Sunt voluptatum consequatur et consequatur. Officia ipsa et ut rem in sit sed.",
                  jobs: [
                    {
                      _id: "5c2e375503e0403c99c218bc",
                      jobTitle: "Internal Division Administrator",
                      minSalary: 52215,
                      maxSalary: 2368,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c7",
                          title: "Voluptatem voluptatem id.",
                          description:
                            "Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.",
                          jobs: [
                            {
                              _id: "5c2e375503e0403c99c218be",
                              jobTitle: "International Directives Officer",
                              minSalary: 81069,
                              maxSalary: 56924,
                              tasks: []
                            },
                            {
                              _id: "5c2e375503e0403c99c218bf",
                              jobTitle: "Internal Metrics Consultant",
                              minSalary: 31798,
                              maxSalary: 59451,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        }
                      ]
                    },
                    {
                      _id: "5c2e375503e0403c99c218bd",
                      jobTitle: "International Accountability Analyst",
                      minSalary: 9299,
                      maxSalary: 2835,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        },
                        {
                          _id: "5c2e375503e0403c99c218c9",
                          title:
                            "Sed ex nobis ducimus ea neque et dolor repellendus.",
                          description:
                            "Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.",
                          jobs: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "5c2e375503e0403c99c218c6",
                  title: "Velit consequuntur dolorem at explicabo sequi.",
                  description:
                    "Ut magni nesciunt quibusdam. Rem et tempora voluptatum quibusdam. Reprehenderit odit ut unde nihil qui nihil consequuntur tenetur.",
                  jobs: [
                    {
                      _id: "5c2e375503e0403c99c218bd",
                      jobTitle: "International Accountability Analyst",
                      minSalary: 9299,
                      maxSalary: 2835,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        },
                        {
                          _id: "5c2e375503e0403c99c218c9",
                          title:
                            "Sed ex nobis ducimus ea neque et dolor repellendus.",
                          description:
                            "Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.",
                          jobs: []
                        }
                      ]
                    },
                    {
                      _id: "5c2e375503e0403c99c218be",
                      jobTitle: "International Directives Officer",
                      minSalary: 81069,
                      maxSalary: 56924,
                      tasks: []
                    }
                  ]
                }
              ]
            },
            {
              _id: "5c2e375503e0403c99c218bb",
              jobTitle: "Dynamic Web Engineer",
              minSalary: 8572,
              maxSalary: 66540,
              tasks: [
                {
                  _id: "5c2e375503e0403c99c218c6",
                  title: "Velit consequuntur dolorem at explicabo sequi.",
                  description:
                    "Ut magni nesciunt quibusdam. Rem et tempora voluptatum quibusdam. Reprehenderit odit ut unde nihil qui nihil consequuntur tenetur.",
                  jobs: [
                    {
                      _id: "5c2e375503e0403c99c218bd",
                      jobTitle: "International Accountability Analyst",
                      minSalary: 9299,
                      maxSalary: 2835,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        },
                        {
                          _id: "5c2e375503e0403c99c218c9",
                          title:
                            "Sed ex nobis ducimus ea neque et dolor repellendus.",
                          description:
                            "Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.",
                          jobs: []
                        }
                      ]
                    },
                    {
                      _id: "5c2e375503e0403c99c218be",
                      jobTitle: "International Directives Officer",
                      minSalary: 81069,
                      maxSalary: 56924,
                      tasks: []
                    }
                  ]
                },
                {
                  _id: "5c2e375503e0403c99c218c7",
                  title: "Voluptatem voluptatem id.",
                  description:
                    "Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.",
                  jobs: [
                    {
                      _id: "5c2e375503e0403c99c218be",
                      jobTitle: "International Directives Officer",
                      minSalary: 81069,
                      maxSalary: 56924,
                      tasks: []
                    },
                    {
                      _id: "5c2e375503e0403c99c218bf",
                      jobTitle: "Internal Metrics Consultant",
                      minSalary: 31798,
                      maxSalary: 59451,
                      tasks: []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };

    fakeDepartment["departmentName"] = "Marketing";

    let fakeResult = { ok: true, data: fakeDepartment };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeDepartment,
        form: "DEPARTMENT_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doUpdateDepartment, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(departmentUpdateAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield updateDepartmentSuccess action with updating entity data
          .put(updateDepartmentSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to update Department with message', () => {
    let fakeDepartment = {"_id":"5c2e375503e0403c99c218a3","departmentName":"Web","location":{"_id":"5c2e375503e0403c99c21899","streetAddress":"05338 Lang Ranch","postalCode":"55428-8647","city":"Fritschshire","stateProvince":"Georgia","country":{"_id":"5c2e375503e0403c99c2188f","countryName":"Serbia","region":{"_id":"5c2e375503e0403c99c21885","regionName":"South-east Asia"}}},"employees":[{"_id":"5c2e375503e0403c99c218ae","firstName":"Savannah","lastName":"Kuhic","email":"Peter_Schumm75@yahoo.com","phoneNumber":"1-395-170-3163 x368","hireDate":"2018-04-10T11:12:14.360Z","salary":9545,"commissionPct":15833,"jobs":[{"_id":"5c2e375503e0403c99c218b9","jobTitle":"International Applications Agent","minSalary":64835,"maxSalary":76651,"tasks":[{"_id":"5c2e375503e0403c99c218c4","title":"Sit impedit repellat explicabo ad possimus eos et qui.","description":"Placeat ut reiciendis eum explicabo magnam vitae placeat quia. Corporis eum et sunt aliquam occaecati architecto porro. Eos suscipit voluptates qui doloremque dicta harum ipsum. Nihil maiores consequatur provident soluta. Architecto ea sint vitae magnam nobis ut. Enim magni corporis nam in soluta inventore temporibus rerum accusamus.","jobs":[{"_id":"5c2e375503e0403c99c218bb","jobTitle":"Dynamic Web Engineer","minSalary":8572,"maxSalary":66540,"tasks":[{"_id":"5c2e375503e0403c99c218c6","title":"Velit consequuntur dolorem at explicabo sequi.","description":"Ut magni nesciunt quibusdam. Rem et tempora voluptatum quibusdam. Reprehenderit odit ut unde nihil qui nihil consequuntur tenetur.","jobs":[{"_id":"5c2e375503e0403c99c218bd","jobTitle":"International Accountability Analyst","minSalary":9299,"maxSalary":2835,"tasks":[{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]},{"_id":"5c2e375503e0403c99c218c9","title":"Sed ex nobis ducimus ea neque et dolor repellendus.","description":"Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.","jobs":[]}]},{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]}]},{"_id":"5c2e375503e0403c99c218c7","title":"Voluptatem voluptatem id.","description":"Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.","jobs":[{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]},{"_id":"5c2e375503e0403c99c218bf","jobTitle":"Internal Metrics Consultant","minSalary":31798,"maxSalary":59451,"tasks":[]}]}]},{"_id":"5c2e375503e0403c99c218bc","jobTitle":"Internal Division Administrator","minSalary":52215,"maxSalary":2368,"tasks":[{"_id":"5c2e375503e0403c99c218c7","title":"Voluptatem voluptatem id.","description":"Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.","jobs":[{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]},{"_id":"5c2e375503e0403c99c218bf","jobTitle":"Internal Metrics Consultant","minSalary":31798,"maxSalary":59451,"tasks":[]}]},{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]}]}]},{"_id":"5c2e375503e0403c99c218c5","title":"Aliquid facilis neque.","description":"Atque qui quaerat veniam sunt et dolorem deleniti. Reprehenderit dolor sequi ex saepe eos necessitatibus tenetur sunt. Consequatur qui impedit et. Esse fugit est autem distinctio. Sunt voluptatum consequatur et consequatur. Officia ipsa et ut rem in sit sed.","jobs":[{"_id":"5c2e375503e0403c99c218bc","jobTitle":"Internal Division Administrator","minSalary":52215,"maxSalary":2368,"tasks":[{"_id":"5c2e375503e0403c99c218c7","title":"Voluptatem voluptatem id.","description":"Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.","jobs":[{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]},{"_id":"5c2e375503e0403c99c218bf","jobTitle":"Internal Metrics Consultant","minSalary":31798,"maxSalary":59451,"tasks":[]}]},{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]}]},{"_id":"5c2e375503e0403c99c218bd","jobTitle":"International Accountability Analyst","minSalary":9299,"maxSalary":2835,"tasks":[{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]},{"_id":"5c2e375503e0403c99c218c9","title":"Sed ex nobis ducimus ea neque et dolor repellendus.","description":"Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.","jobs":[]}]}]}]},{"_id":"5c2e375503e0403c99c218ba","jobTitle":"Chief Data Agent","minSalary":25320,"maxSalary":43997,"tasks":[{"_id":"5c2e375503e0403c99c218c5","title":"Aliquid facilis neque.","description":"Atque qui quaerat veniam sunt et dolorem deleniti. Reprehenderit dolor sequi ex saepe eos necessitatibus tenetur sunt. Consequatur qui impedit et. Esse fugit est autem distinctio. Sunt voluptatum consequatur et consequatur. Officia ipsa et ut rem in sit sed.","jobs":[{"_id":"5c2e375503e0403c99c218bc","jobTitle":"Internal Division Administrator","minSalary":52215,"maxSalary":2368,"tasks":[{"_id":"5c2e375503e0403c99c218c7","title":"Voluptatem voluptatem id.","description":"Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.","jobs":[{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]},{"_id":"5c2e375503e0403c99c218bf","jobTitle":"Internal Metrics Consultant","minSalary":31798,"maxSalary":59451,"tasks":[]}]},{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]}]},{"_id":"5c2e375503e0403c99c218bd","jobTitle":"International Accountability Analyst","minSalary":9299,"maxSalary":2835,"tasks":[{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]},{"_id":"5c2e375503e0403c99c218c9","title":"Sed ex nobis ducimus ea neque et dolor repellendus.","description":"Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.","jobs":[]}]}]},{"_id":"5c2e375503e0403c99c218c6","title":"Velit consequuntur dolorem at explicabo sequi.","description":"Ut magni nesciunt quibusdam. Rem et tempora voluptatum quibusdam. Reprehenderit odit ut unde nihil qui nihil consequuntur tenetur.","jobs":[{"_id":"5c2e375503e0403c99c218bd","jobTitle":"International Accountability Analyst","minSalary":9299,"maxSalary":2835,"tasks":[{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]},{"_id":"5c2e375503e0403c99c218c9","title":"Sed ex nobis ducimus ea neque et dolor repellendus.","description":"Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.","jobs":[]}]},{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]}]}]}]},{"_id":"5c2e375503e0403c99c218af","firstName":"Sterling","lastName":"Fadel","email":"Micah_McClure59@gmail.com","phoneNumber":"427-834-7509 x032","hireDate":"2018-10-30T23:10:48.597Z","salary":10292,"commissionPct":80848,"jobs":[{"_id":"5c2e375503e0403c99c218ba","jobTitle":"Chief Data Agent","minSalary":25320,"maxSalary":43997,"tasks":[{"_id":"5c2e375503e0403c99c218c5","title":"Aliquid facilis neque.","description":"Atque qui quaerat veniam sunt et dolorem deleniti. Reprehenderit dolor sequi ex saepe eos necessitatibus tenetur sunt. Consequatur qui impedit et. Esse fugit est autem distinctio. Sunt voluptatum consequatur et consequatur. Officia ipsa et ut rem in sit sed.","jobs":[{"_id":"5c2e375503e0403c99c218bc","jobTitle":"Internal Division Administrator","minSalary":52215,"maxSalary":2368,"tasks":[{"_id":"5c2e375503e0403c99c218c7","title":"Voluptatem voluptatem id.","description":"Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.","jobs":[{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]},{"_id":"5c2e375503e0403c99c218bf","jobTitle":"Internal Metrics Consultant","minSalary":31798,"maxSalary":59451,"tasks":[]}]},{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]}]},{"_id":"5c2e375503e0403c99c218bd","jobTitle":"International Accountability Analyst","minSalary":9299,"maxSalary":2835,"tasks":[{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]},{"_id":"5c2e375503e0403c99c218c9","title":"Sed ex nobis ducimus ea neque et dolor repellendus.","description":"Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.","jobs":[]}]}]},{"_id":"5c2e375503e0403c99c218c6","title":"Velit consequuntur dolorem at explicabo sequi.","description":"Ut magni nesciunt quibusdam. Rem et tempora voluptatum quibusdam. Reprehenderit odit ut unde nihil qui nihil consequuntur tenetur.","jobs":[{"_id":"5c2e375503e0403c99c218bd","jobTitle":"International Accountability Analyst","minSalary":9299,"maxSalary":2835,"tasks":[{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]},{"_id":"5c2e375503e0403c99c218c9","title":"Sed ex nobis ducimus ea neque et dolor repellendus.","description":"Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.","jobs":[]}]},{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]}]}]},{"_id":"5c2e375503e0403c99c218bb","jobTitle":"Dynamic Web Engineer","minSalary":8572,"maxSalary":66540,"tasks":[{"_id":"5c2e375503e0403c99c218c6","title":"Velit consequuntur dolorem at explicabo sequi.","description":"Ut magni nesciunt quibusdam. Rem et tempora voluptatum quibusdam. Reprehenderit odit ut unde nihil qui nihil consequuntur tenetur.","jobs":[{"_id":"5c2e375503e0403c99c218bd","jobTitle":"International Accountability Analyst","minSalary":9299,"maxSalary":2835,"tasks":[{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]},{"_id":"5c2e375503e0403c99c218c9","title":"Sed ex nobis ducimus ea neque et dolor repellendus.","description":"Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.","jobs":[]}]},{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]}]},{"_id":"5c2e375503e0403c99c218c7","title":"Voluptatem voluptatem id.","description":"Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.","jobs":[{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]},{"_id":"5c2e375503e0403c99c218bf","jobTitle":"Internal Metrics Consultant","minSalary":31798,"maxSalary":59451,"tasks":[]}]}]}]}]}
    let fakeResult={ok: false, data: {message: 'Failed to update Department, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeDepartment, form: 'DEPARTMENT_UPDATE_FORM', promise: {resolve, reject} }
       return expectSaga(doUpdateDepartment, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(departmentUpdateAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield updateDepartmentFail action with error message
           .put(updateDepartmentFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeDepartment = {
      _id: "5c2e375503e0403c99c218a3",
      departmentName: "Web",
      location: {
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
      },
      employees: [
        {
          _id: "5c2e375503e0403c99c218ae",
          firstName: "Savannah",
          lastName: "Kuhic",
          email: "Peter_Schumm75@yahoo.com",
          phoneNumber: "1-395-170-3163 x368",
          hireDate: "2018-04-10T11:12:14.360Z",
          salary: 9545,
          commissionPct: 15833,
          jobs: [
            {
              _id: "5c2e375503e0403c99c218b9",
              jobTitle: "International Applications Agent",
              minSalary: 64835,
              maxSalary: 76651,
              tasks: [
                {
                  _id: "5c2e375503e0403c99c218c4",
                  title:
                    "Sit impedit repellat explicabo ad possimus eos et qui.",
                  description:
                    "Placeat ut reiciendis eum explicabo magnam vitae placeat quia. Corporis eum et sunt aliquam occaecati architecto porro. Eos suscipit voluptates qui doloremque dicta harum ipsum. Nihil maiores consequatur provident soluta. Architecto ea sint vitae magnam nobis ut. Enim magni corporis nam in soluta inventore temporibus rerum accusamus.",
                  jobs: [
                    {
                      _id: "5c2e375503e0403c99c218bb",
                      jobTitle: "Dynamic Web Engineer",
                      minSalary: 8572,
                      maxSalary: 66540,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c6",
                          title:
                            "Velit consequuntur dolorem at explicabo sequi.",
                          description:
                            "Ut magni nesciunt quibusdam. Rem et tempora voluptatum quibusdam. Reprehenderit odit ut unde nihil qui nihil consequuntur tenetur.",
                          jobs: [
                            {
                              _id: "5c2e375503e0403c99c218bd",
                              jobTitle: "International Accountability Analyst",
                              minSalary: 9299,
                              maxSalary: 2835,
                              tasks: [
                                {
                                  _id: "5c2e375503e0403c99c218c8",
                                  title: "Explicabo dolorem ipsa velit.",
                                  description:
                                    "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                                  jobs: []
                                },
                                {
                                  _id: "5c2e375503e0403c99c218c9",
                                  title:
                                    "Sed ex nobis ducimus ea neque et dolor repellendus.",
                                  description:
                                    "Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.",
                                  jobs: []
                                }
                              ]
                            },
                            {
                              _id: "5c2e375503e0403c99c218be",
                              jobTitle: "International Directives Officer",
                              minSalary: 81069,
                              maxSalary: 56924,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5c2e375503e0403c99c218c7",
                          title: "Voluptatem voluptatem id.",
                          description:
                            "Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.",
                          jobs: [
                            {
                              _id: "5c2e375503e0403c99c218be",
                              jobTitle: "International Directives Officer",
                              minSalary: 81069,
                              maxSalary: 56924,
                              tasks: []
                            },
                            {
                              _id: "5c2e375503e0403c99c218bf",
                              jobTitle: "Internal Metrics Consultant",
                              minSalary: 31798,
                              maxSalary: 59451,
                              tasks: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      _id: "5c2e375503e0403c99c218bc",
                      jobTitle: "Internal Division Administrator",
                      minSalary: 52215,
                      maxSalary: 2368,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c7",
                          title: "Voluptatem voluptatem id.",
                          description:
                            "Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.",
                          jobs: [
                            {
                              _id: "5c2e375503e0403c99c218be",
                              jobTitle: "International Directives Officer",
                              minSalary: 81069,
                              maxSalary: 56924,
                              tasks: []
                            },
                            {
                              _id: "5c2e375503e0403c99c218bf",
                              jobTitle: "Internal Metrics Consultant",
                              minSalary: 31798,
                              maxSalary: 59451,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "5c2e375503e0403c99c218c5",
                  title: "Aliquid facilis neque.",
                  description:
                    "Atque qui quaerat veniam sunt et dolorem deleniti. Reprehenderit dolor sequi ex saepe eos necessitatibus tenetur sunt. Consequatur qui impedit et. Esse fugit est autem distinctio. Sunt voluptatum consequatur et consequatur. Officia ipsa et ut rem in sit sed.",
                  jobs: [
                    {
                      _id: "5c2e375503e0403c99c218bc",
                      jobTitle: "Internal Division Administrator",
                      minSalary: 52215,
                      maxSalary: 2368,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c7",
                          title: "Voluptatem voluptatem id.",
                          description:
                            "Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.",
                          jobs: [
                            {
                              _id: "5c2e375503e0403c99c218be",
                              jobTitle: "International Directives Officer",
                              minSalary: 81069,
                              maxSalary: 56924,
                              tasks: []
                            },
                            {
                              _id: "5c2e375503e0403c99c218bf",
                              jobTitle: "Internal Metrics Consultant",
                              minSalary: 31798,
                              maxSalary: 59451,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        }
                      ]
                    },
                    {
                      _id: "5c2e375503e0403c99c218bd",
                      jobTitle: "International Accountability Analyst",
                      minSalary: 9299,
                      maxSalary: 2835,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        },
                        {
                          _id: "5c2e375503e0403c99c218c9",
                          title:
                            "Sed ex nobis ducimus ea neque et dolor repellendus.",
                          description:
                            "Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.",
                          jobs: []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              _id: "5c2e375503e0403c99c218ba",
              jobTitle: "Chief Data Agent",
              minSalary: 25320,
              maxSalary: 43997,
              tasks: [
                {
                  _id: "5c2e375503e0403c99c218c5",
                  title: "Aliquid facilis neque.",
                  description:
                    "Atque qui quaerat veniam sunt et dolorem deleniti. Reprehenderit dolor sequi ex saepe eos necessitatibus tenetur sunt. Consequatur qui impedit et. Esse fugit est autem distinctio. Sunt voluptatum consequatur et consequatur. Officia ipsa et ut rem in sit sed.",
                  jobs: [
                    {
                      _id: "5c2e375503e0403c99c218bc",
                      jobTitle: "Internal Division Administrator",
                      minSalary: 52215,
                      maxSalary: 2368,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c7",
                          title: "Voluptatem voluptatem id.",
                          description:
                            "Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.",
                          jobs: [
                            {
                              _id: "5c2e375503e0403c99c218be",
                              jobTitle: "International Directives Officer",
                              minSalary: 81069,
                              maxSalary: 56924,
                              tasks: []
                            },
                            {
                              _id: "5c2e375503e0403c99c218bf",
                              jobTitle: "Internal Metrics Consultant",
                              minSalary: 31798,
                              maxSalary: 59451,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        }
                      ]
                    },
                    {
                      _id: "5c2e375503e0403c99c218bd",
                      jobTitle: "International Accountability Analyst",
                      minSalary: 9299,
                      maxSalary: 2835,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        },
                        {
                          _id: "5c2e375503e0403c99c218c9",
                          title:
                            "Sed ex nobis ducimus ea neque et dolor repellendus.",
                          description:
                            "Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.",
                          jobs: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "5c2e375503e0403c99c218c6",
                  title: "Velit consequuntur dolorem at explicabo sequi.",
                  description:
                    "Ut magni nesciunt quibusdam. Rem et tempora voluptatum quibusdam. Reprehenderit odit ut unde nihil qui nihil consequuntur tenetur.",
                  jobs: [
                    {
                      _id: "5c2e375503e0403c99c218bd",
                      jobTitle: "International Accountability Analyst",
                      minSalary: 9299,
                      maxSalary: 2835,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        },
                        {
                          _id: "5c2e375503e0403c99c218c9",
                          title:
                            "Sed ex nobis ducimus ea neque et dolor repellendus.",
                          description:
                            "Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.",
                          jobs: []
                        }
                      ]
                    },
                    {
                      _id: "5c2e375503e0403c99c218be",
                      jobTitle: "International Directives Officer",
                      minSalary: 81069,
                      maxSalary: 56924,
                      tasks: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          _id: "5c2e375503e0403c99c218af",
          firstName: "Sterling",
          lastName: "Fadel",
          email: "Micah_McClure59@gmail.com",
          phoneNumber: "427-834-7509 x032",
          hireDate: "2018-10-30T23:10:48.597Z",
          salary: 10292,
          commissionPct: 80848,
          jobs: [
            {
              _id: "5c2e375503e0403c99c218ba",
              jobTitle: "Chief Data Agent",
              minSalary: 25320,
              maxSalary: 43997,
              tasks: [
                {
                  _id: "5c2e375503e0403c99c218c5",
                  title: "Aliquid facilis neque.",
                  description:
                    "Atque qui quaerat veniam sunt et dolorem deleniti. Reprehenderit dolor sequi ex saepe eos necessitatibus tenetur sunt. Consequatur qui impedit et. Esse fugit est autem distinctio. Sunt voluptatum consequatur et consequatur. Officia ipsa et ut rem in sit sed.",
                  jobs: [
                    {
                      _id: "5c2e375503e0403c99c218bc",
                      jobTitle: "Internal Division Administrator",
                      minSalary: 52215,
                      maxSalary: 2368,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c7",
                          title: "Voluptatem voluptatem id.",
                          description:
                            "Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.",
                          jobs: [
                            {
                              _id: "5c2e375503e0403c99c218be",
                              jobTitle: "International Directives Officer",
                              minSalary: 81069,
                              maxSalary: 56924,
                              tasks: []
                            },
                            {
                              _id: "5c2e375503e0403c99c218bf",
                              jobTitle: "Internal Metrics Consultant",
                              minSalary: 31798,
                              maxSalary: 59451,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        }
                      ]
                    },
                    {
                      _id: "5c2e375503e0403c99c218bd",
                      jobTitle: "International Accountability Analyst",
                      minSalary: 9299,
                      maxSalary: 2835,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        },
                        {
                          _id: "5c2e375503e0403c99c218c9",
                          title:
                            "Sed ex nobis ducimus ea neque et dolor repellendus.",
                          description:
                            "Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.",
                          jobs: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "5c2e375503e0403c99c218c6",
                  title: "Velit consequuntur dolorem at explicabo sequi.",
                  description:
                    "Ut magni nesciunt quibusdam. Rem et tempora voluptatum quibusdam. Reprehenderit odit ut unde nihil qui nihil consequuntur tenetur.",
                  jobs: [
                    {
                      _id: "5c2e375503e0403c99c218bd",
                      jobTitle: "International Accountability Analyst",
                      minSalary: 9299,
                      maxSalary: 2835,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        },
                        {
                          _id: "5c2e375503e0403c99c218c9",
                          title:
                            "Sed ex nobis ducimus ea neque et dolor repellendus.",
                          description:
                            "Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.",
                          jobs: []
                        }
                      ]
                    },
                    {
                      _id: "5c2e375503e0403c99c218be",
                      jobTitle: "International Directives Officer",
                      minSalary: 81069,
                      maxSalary: 56924,
                      tasks: []
                    }
                  ]
                }
              ]
            },
            {
              _id: "5c2e375503e0403c99c218bb",
              jobTitle: "Dynamic Web Engineer",
              minSalary: 8572,
              maxSalary: 66540,
              tasks: [
                {
                  _id: "5c2e375503e0403c99c218c6",
                  title: "Velit consequuntur dolorem at explicabo sequi.",
                  description:
                    "Ut magni nesciunt quibusdam. Rem et tempora voluptatum quibusdam. Reprehenderit odit ut unde nihil qui nihil consequuntur tenetur.",
                  jobs: [
                    {
                      _id: "5c2e375503e0403c99c218bd",
                      jobTitle: "International Accountability Analyst",
                      minSalary: 9299,
                      maxSalary: 2835,
                      tasks: [
                        {
                          _id: "5c2e375503e0403c99c218c8",
                          title: "Explicabo dolorem ipsa velit.",
                          description:
                            "Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.",
                          jobs: []
                        },
                        {
                          _id: "5c2e375503e0403c99c218c9",
                          title:
                            "Sed ex nobis ducimus ea neque et dolor repellendus.",
                          description:
                            "Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.",
                          jobs: []
                        }
                      ]
                    },
                    {
                      _id: "5c2e375503e0403c99c218be",
                      jobTitle: "International Directives Officer",
                      minSalary: 81069,
                      maxSalary: 56924,
                      tasks: []
                    }
                  ]
                },
                {
                  _id: "5c2e375503e0403c99c218c7",
                  title: "Voluptatem voluptatem id.",
                  description:
                    "Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.",
                  jobs: [
                    {
                      _id: "5c2e375503e0403c99c218be",
                      jobTitle: "International Directives Officer",
                      minSalary: 81069,
                      maxSalary: 56924,
                      tasks: []
                    },
                    {
                      _id: "5c2e375503e0403c99c218bf",
                      jobTitle: "Internal Metrics Consultant",
                      minSalary: 31798,
                      maxSalary: 59451,
                      tasks: []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };

    fakeDepartment["departmentName"] = "Paradigm";

    let fakeResult = { ok: true, data: fakeDepartment };
    let finalState = { ...initialState, department: fakeDepartment };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeDepartment,
        form: "DEPARTMENT_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(updateDepartment, action)
        .withReducer(departmentReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(departmentUpdateAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          updateDepartmentAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
