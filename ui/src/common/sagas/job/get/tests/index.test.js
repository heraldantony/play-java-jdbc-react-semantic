/*
 *  Test sagas for getting Job 
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

import { initialState, jobReducer } from "common/reducers/job";

import {
  JOB_GET,
  getJob as getJobAction,
  getJobSuccess,
  getJobFail
} from "common/actions/job";

import { jobGetAPI } from "common/api/JobSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doGetJob, getJob } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doGetJob Saga", () => {
  let doGetJobGenerator;

  beforeEach(() => {
    doGetJobGenerator = doGetJob();
  });
  afterEach(() => {});

  it("should get Job ", () => {
    let fakeJob = {
      _id: "5c2e375503e0403c99c218b7",
      jobTitle: "International Markets Liaison",
      minSalary: 58032,
      maxSalary: 33035,
      tasks: [
        {
          _id: "5c2e375503e0403c99c218c2",
          title: "Excepturi quis explicabo.",
          description:
            "Voluptas suscipit in. Sapiente officia rerum enim possimus laborum. Omnis ullam eos tempora.",
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
        }
      ]
    };
    let jobId = fakeJob._id;
    let fakeResult = { ok: true, data: fakeJob };
    let action = { payload: jobId };
    return (
      expectSaga(doGetJob, action)
        .provide([[call(jobGetAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield getJobSuccess action with retrieved entity
        .put(getJobSuccess(fakeResult.data))
        .run()
    );
  });
  it("should fail to get Job with message", () => {
    let fakeJob = {
      _id: "5c2e375503e0403c99c218b7",
      jobTitle: "International Markets Liaison",
      minSalary: 58032,
      maxSalary: 33035,
      tasks: [
        {
          _id: "5c2e375503e0403c99c218c2",
          title: "Excepturi quis explicabo.",
          description:
            "Voluptas suscipit in. Sapiente officia rerum enim possimus laborum. Omnis ullam eos tempora.",
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
        }
      ]
    };
    let jobId = fakeJob._id;
    let fakeResult = {
      ok: false,
      data: { message: "Failed to get Job, random error" }
    };
    let action = { payload: jobId };
    return (
      expectSaga(doGetJob, action)
        .provide([[call(jobGetAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield getJobFail action with error message
        .put(getJobFail(fakeResult.data.message))
        .run()
        .catch(error => {
          expect(error).toEqual(
            new SubmissionError({ _error: result.data.message })
          );
        })
    );
  });
  it("should handle reducer and store state", () => {
    let fakeJob = {
      _id: "5c2e375503e0403c99c218b7",
      jobTitle: "International Markets Liaison",
      minSalary: 58032,
      maxSalary: 33035,
      tasks: [
        {
          _id: "5c2e375503e0403c99c218c2",
          title: "Excepturi quis explicabo.",
          description:
            "Voluptas suscipit in. Sapiente officia rerum enim possimus laborum. Omnis ullam eos tempora.",
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
        }
      ]
    };
    let jobId = fakeJob._id;
    let fakeResult = { ok: true, data: fakeJob };
    let finalState = { ...initialState, job: fakeJob };
    let action = { payload: jobId };
    return expectSaga(doGetJob, action)
      .withReducer(jobReducer)
      .provide([[call(jobGetAPI, action.payload), fakeResult]])
      .hasFinalState(finalState)
      .dispatch(getJobAction(action.payload, action.form, action.promise))
      .run();
  });
});
