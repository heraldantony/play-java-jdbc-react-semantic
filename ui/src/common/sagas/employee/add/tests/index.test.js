/*
 *  Test sagas for adding Employee 
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

import { initialState, employeeReducer } from "common/reducers/employee";

import {
  EMPLOYEE_ADD,
  addEmployee as addEmployeeAction,
  addEmployeeSuccess,
  addEmployeeFail
} from "common/actions/employee";

import { employeeAddAPI } from "common/api/EmployeeSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doAddEmployee, addEmployee } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doAddEmployee Saga", () => {
  let doAddEmployeeGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    doAddEmployeeGenerator = doAddEmployee();
  });
  afterEach(() => {});

  it("should add Employee", () => {
    let fakeEmployee = {
      _id: "5c2e375503e0403c99c218ad",
      firstName: "Hassan",
      lastName: "Rath",
      email: "Jasper26@gmail.com",
      phoneNumber: "422-623-6554 x6296",
      hireDate: "2018-04-13T15:50:53.028Z",
      salary: 42214,
      commissionPct: 33066,
      jobs: [
        {
          _id: "5c2e375503e0403c99c218b8",
          jobTitle: "Forward Accounts Analyst",
          minSalary: 44477,
          maxSalary: 30705,
          tasks: [
            {
              _id: "5c2e375503e0403c99c218c3",
              title: "Et soluta doloremque velit velit delectus.",
              description:
                "Aut alias suscipit quia explicabo doloribus rerum incidunt. Sapiente veniam consequatur earum iure. Vel corporis fugit. Culpa eos eum earum vero.",
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
            },
            {
              _id: "5c2e375503e0403c99c218c4",
              title: "Sit impedit repellat explicabo ad possimus eos et qui.",
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
            }
          ]
        },
        {
          _id: "5c2e375503e0403c99c218b9",
          jobTitle: "International Applications Agent",
          minSalary: 64835,
          maxSalary: 76651,
          tasks: [
            {
              _id: "5c2e375503e0403c99c218c4",
              title: "Sit impedit repellat explicabo ad possimus eos et qui.",
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
        }
      ]
    };
    delete fakeEmployee["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "bc0f6021-b25f-41ee-b1b5-7ddf3b010030", ...fakeEmployee }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeEmployee,
        form: "EMPLOYEE_ADD_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doAddEmployee, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(employeeAddAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield addEmployeeSuccess action with new entity data
          .put(addEmployeeSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to add Employee with message', () => {
    let fakeEmployee = {"_id":"5c2e375503e0403c99c218ad","firstName":"Hassan","lastName":"Rath","email":"Jasper26@gmail.com","phoneNumber":"422-623-6554 x6296","hireDate":"2018-04-13T15:50:53.028Z","salary":42214,"commissionPct":33066,"jobs":[{"_id":"5c2e375503e0403c99c218b8","jobTitle":"Forward Accounts Analyst","minSalary":44477,"maxSalary":30705,"tasks":[{"_id":"5c2e375503e0403c99c218c3","title":"Et soluta doloremque velit velit delectus.","description":"Aut alias suscipit quia explicabo doloribus rerum incidunt. Sapiente veniam consequatur earum iure. Vel corporis fugit. Culpa eos eum earum vero.","jobs":[{"_id":"5c2e375503e0403c99c218ba","jobTitle":"Chief Data Agent","minSalary":25320,"maxSalary":43997,"tasks":[{"_id":"5c2e375503e0403c99c218c5","title":"Aliquid facilis neque.","description":"Atque qui quaerat veniam sunt et dolorem deleniti. Reprehenderit dolor sequi ex saepe eos necessitatibus tenetur sunt. Consequatur qui impedit et. Esse fugit est autem distinctio. Sunt voluptatum consequatur et consequatur. Officia ipsa et ut rem in sit sed.","jobs":[{"_id":"5c2e375503e0403c99c218bc","jobTitle":"Internal Division Administrator","minSalary":52215,"maxSalary":2368,"tasks":[{"_id":"5c2e375503e0403c99c218c7","title":"Voluptatem voluptatem id.","description":"Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.","jobs":[{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]},{"_id":"5c2e375503e0403c99c218bf","jobTitle":"Internal Metrics Consultant","minSalary":31798,"maxSalary":59451,"tasks":[]}]},{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]}]},{"_id":"5c2e375503e0403c99c218bd","jobTitle":"International Accountability Analyst","minSalary":9299,"maxSalary":2835,"tasks":[{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]},{"_id":"5c2e375503e0403c99c218c9","title":"Sed ex nobis ducimus ea neque et dolor repellendus.","description":"Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.","jobs":[]}]}]},{"_id":"5c2e375503e0403c99c218c6","title":"Velit consequuntur dolorem at explicabo sequi.","description":"Ut magni nesciunt quibusdam. Rem et tempora voluptatum quibusdam. Reprehenderit odit ut unde nihil qui nihil consequuntur tenetur.","jobs":[{"_id":"5c2e375503e0403c99c218bd","jobTitle":"International Accountability Analyst","minSalary":9299,"maxSalary":2835,"tasks":[{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]},{"_id":"5c2e375503e0403c99c218c9","title":"Sed ex nobis ducimus ea neque et dolor repellendus.","description":"Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.","jobs":[]}]},{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]}]}]},{"_id":"5c2e375503e0403c99c218bb","jobTitle":"Dynamic Web Engineer","minSalary":8572,"maxSalary":66540,"tasks":[{"_id":"5c2e375503e0403c99c218c6","title":"Velit consequuntur dolorem at explicabo sequi.","description":"Ut magni nesciunt quibusdam. Rem et tempora voluptatum quibusdam. Reprehenderit odit ut unde nihil qui nihil consequuntur tenetur.","jobs":[{"_id":"5c2e375503e0403c99c218bd","jobTitle":"International Accountability Analyst","minSalary":9299,"maxSalary":2835,"tasks":[{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]},{"_id":"5c2e375503e0403c99c218c9","title":"Sed ex nobis ducimus ea neque et dolor repellendus.","description":"Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.","jobs":[]}]},{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]}]},{"_id":"5c2e375503e0403c99c218c7","title":"Voluptatem voluptatem id.","description":"Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.","jobs":[{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]},{"_id":"5c2e375503e0403c99c218bf","jobTitle":"Internal Metrics Consultant","minSalary":31798,"maxSalary":59451,"tasks":[]}]}]}]},{"_id":"5c2e375503e0403c99c218c4","title":"Sit impedit repellat explicabo ad possimus eos et qui.","description":"Placeat ut reiciendis eum explicabo magnam vitae placeat quia. Corporis eum et sunt aliquam occaecati architecto porro. Eos suscipit voluptates qui doloremque dicta harum ipsum. Nihil maiores consequatur provident soluta. Architecto ea sint vitae magnam nobis ut. Enim magni corporis nam in soluta inventore temporibus rerum accusamus.","jobs":[{"_id":"5c2e375503e0403c99c218bb","jobTitle":"Dynamic Web Engineer","minSalary":8572,"maxSalary":66540,"tasks":[{"_id":"5c2e375503e0403c99c218c6","title":"Velit consequuntur dolorem at explicabo sequi.","description":"Ut magni nesciunt quibusdam. Rem et tempora voluptatum quibusdam. Reprehenderit odit ut unde nihil qui nihil consequuntur tenetur.","jobs":[{"_id":"5c2e375503e0403c99c218bd","jobTitle":"International Accountability Analyst","minSalary":9299,"maxSalary":2835,"tasks":[{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]},{"_id":"5c2e375503e0403c99c218c9","title":"Sed ex nobis ducimus ea neque et dolor repellendus.","description":"Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.","jobs":[]}]},{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]}]},{"_id":"5c2e375503e0403c99c218c7","title":"Voluptatem voluptatem id.","description":"Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.","jobs":[{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]},{"_id":"5c2e375503e0403c99c218bf","jobTitle":"Internal Metrics Consultant","minSalary":31798,"maxSalary":59451,"tasks":[]}]}]},{"_id":"5c2e375503e0403c99c218bc","jobTitle":"Internal Division Administrator","minSalary":52215,"maxSalary":2368,"tasks":[{"_id":"5c2e375503e0403c99c218c7","title":"Voluptatem voluptatem id.","description":"Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.","jobs":[{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]},{"_id":"5c2e375503e0403c99c218bf","jobTitle":"Internal Metrics Consultant","minSalary":31798,"maxSalary":59451,"tasks":[]}]},{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]}]}]}]},{"_id":"5c2e375503e0403c99c218b9","jobTitle":"International Applications Agent","minSalary":64835,"maxSalary":76651,"tasks":[{"_id":"5c2e375503e0403c99c218c4","title":"Sit impedit repellat explicabo ad possimus eos et qui.","description":"Placeat ut reiciendis eum explicabo magnam vitae placeat quia. Corporis eum et sunt aliquam occaecati architecto porro. Eos suscipit voluptates qui doloremque dicta harum ipsum. Nihil maiores consequatur provident soluta. Architecto ea sint vitae magnam nobis ut. Enim magni corporis nam in soluta inventore temporibus rerum accusamus.","jobs":[{"_id":"5c2e375503e0403c99c218bb","jobTitle":"Dynamic Web Engineer","minSalary":8572,"maxSalary":66540,"tasks":[{"_id":"5c2e375503e0403c99c218c6","title":"Velit consequuntur dolorem at explicabo sequi.","description":"Ut magni nesciunt quibusdam. Rem et tempora voluptatum quibusdam. Reprehenderit odit ut unde nihil qui nihil consequuntur tenetur.","jobs":[{"_id":"5c2e375503e0403c99c218bd","jobTitle":"International Accountability Analyst","minSalary":9299,"maxSalary":2835,"tasks":[{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]},{"_id":"5c2e375503e0403c99c218c9","title":"Sed ex nobis ducimus ea neque et dolor repellendus.","description":"Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.","jobs":[]}]},{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]}]},{"_id":"5c2e375503e0403c99c218c7","title":"Voluptatem voluptatem id.","description":"Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.","jobs":[{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]},{"_id":"5c2e375503e0403c99c218bf","jobTitle":"Internal Metrics Consultant","minSalary":31798,"maxSalary":59451,"tasks":[]}]}]},{"_id":"5c2e375503e0403c99c218bc","jobTitle":"Internal Division Administrator","minSalary":52215,"maxSalary":2368,"tasks":[{"_id":"5c2e375503e0403c99c218c7","title":"Voluptatem voluptatem id.","description":"Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.","jobs":[{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]},{"_id":"5c2e375503e0403c99c218bf","jobTitle":"Internal Metrics Consultant","minSalary":31798,"maxSalary":59451,"tasks":[]}]},{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]}]}]},{"_id":"5c2e375503e0403c99c218c5","title":"Aliquid facilis neque.","description":"Atque qui quaerat veniam sunt et dolorem deleniti. Reprehenderit dolor sequi ex saepe eos necessitatibus tenetur sunt. Consequatur qui impedit et. Esse fugit est autem distinctio. Sunt voluptatum consequatur et consequatur. Officia ipsa et ut rem in sit sed.","jobs":[{"_id":"5c2e375503e0403c99c218bc","jobTitle":"Internal Division Administrator","minSalary":52215,"maxSalary":2368,"tasks":[{"_id":"5c2e375503e0403c99c218c7","title":"Voluptatem voluptatem id.","description":"Quia eos voluptate ea itaque magni nulla. Non autem sit impedit occaecati blanditiis libero quia sunt consequatur. Et perferendis officiis officia. Ullam quibusdam odit veniam esse. Distinctio nesciunt occaecati.","jobs":[{"_id":"5c2e375503e0403c99c218be","jobTitle":"International Directives Officer","minSalary":81069,"maxSalary":56924,"tasks":[]},{"_id":"5c2e375503e0403c99c218bf","jobTitle":"Internal Metrics Consultant","minSalary":31798,"maxSalary":59451,"tasks":[]}]},{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]}]},{"_id":"5c2e375503e0403c99c218bd","jobTitle":"International Accountability Analyst","minSalary":9299,"maxSalary":2835,"tasks":[{"_id":"5c2e375503e0403c99c218c8","title":"Explicabo dolorem ipsa velit.","description":"Sint qui est impedit. Velit ex quae tempora et eum ipsam. Nisi alias commodi eligendi nam a molestiae quis distinctio maxime. Et repellat vel facilis illum repudiandae aut doloribus. Dolorem qui aut et. Vitae perferendis eveniet a molestias aut incidunt.","jobs":[]},{"_id":"5c2e375503e0403c99c218c9","title":"Sed ex nobis ducimus ea neque et dolor repellendus.","description":"Voluptatem mollitia est praesentium et quia ex rerum. Rem sint rem dolorem ipsum a quo officia ratione laborum. Iusto qui vel quo. Omnis aut a aut.","jobs":[]}]}]}]}]}
    delete fakeEmployee['_id'];
    let fakeResult={ok: false, data: {message: 'Failed to add Employee, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeEmployee, form: 'EMPLOYEE_ADD_FORM', promise: {resolve, reject} }
       return expectSaga(doAddEmployee, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(employeeAddAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield addEmployeeFail action with error message
           .put(addEmployeeFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeEmployee = {
      _id: "5c2e375503e0403c99c218ad",
      firstName: "Hassan",
      lastName: "Rath",
      email: "Jasper26@gmail.com",
      phoneNumber: "422-623-6554 x6296",
      hireDate: "2018-04-13T15:50:53.028Z",
      salary: 42214,
      commissionPct: 33066,
      jobs: [
        {
          _id: "5c2e375503e0403c99c218b8",
          jobTitle: "Forward Accounts Analyst",
          minSalary: 44477,
          maxSalary: 30705,
          tasks: [
            {
              _id: "5c2e375503e0403c99c218c3",
              title: "Et soluta doloremque velit velit delectus.",
              description:
                "Aut alias suscipit quia explicabo doloribus rerum incidunt. Sapiente veniam consequatur earum iure. Vel corporis fugit. Culpa eos eum earum vero.",
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
            },
            {
              _id: "5c2e375503e0403c99c218c4",
              title: "Sit impedit repellat explicabo ad possimus eos et qui.",
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
            }
          ]
        },
        {
          _id: "5c2e375503e0403c99c218b9",
          jobTitle: "International Applications Agent",
          minSalary: 64835,
          maxSalary: 76651,
          tasks: [
            {
              _id: "5c2e375503e0403c99c218c4",
              title: "Sit impedit repellat explicabo ad possimus eos et qui.",
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
        }
      ]
    };
    delete fakeEmployee["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "d259fc4a-1548-4053-8f00-8c4b18b2354b", ...fakeEmployee }
    };
    let finalState = {
      ...initialState,
      employee: { ...fakeEmployee, _id: fakeResult.data._id }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeEmployee,
        form: "EMPLOYEE_ADD_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doAddEmployee, action)
        .withReducer(employeeReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(employeeAddAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          addEmployeeAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
