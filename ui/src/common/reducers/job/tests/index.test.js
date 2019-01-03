// @flow
import { fromJS } from "immutable";

import {
  addJob,
  addJobSuccess,
  addJobFail,
  saveJob,
  saveJobSuccess,
  saveJobFail,
  updateJob,
  updateJobSuccess,
  updateJobFail,
  searchJob,
  searchJobSuccess,
  searchJobFail,
  getJob,
  getJobSuccess,
  getJobFail,
  addTask
} from "common/actions/job";
import { jobReducer } from "common/reducers/job";

describe("Job Reducer", () => {
  let state;
  beforeEach(() => {
    state = {
      search: "",
      job: {},
      jobs: [],
      start: 0,
      limit: 10,
      totalItemsCount: 0,
      otherSearchStart: 0,
      otherSearchLimit: 10,
      otherSearchTotalItemsCount: 0,
      otherSearchJobs: [],
      error: ""
    };
  });
  it("should return the initial state", () => {
    const expectedResult = state;
    expect(jobReducer(undefined, {})).toEqual(expectedResult);
  });

  describe("addJobSuccess", () => {
    it("should update state with add results", () => {
      const job = {
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
                                jobTitle:
                                  "International Accountability Analyst",
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
      const expectedResult = { ...state, job: job };

      expect(jobReducer(state, addJobSuccess(job))).toEqual(expectedResult);
    });
  });

  describe("addJobFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(jobReducer(state, addJobFail(error))).toEqual(expectedResult);
    });
  });

  describe("saveJobSuccess", () => {
    it("should update state with save results", () => {
      const job = {
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
                                jobTitle:
                                  "International Accountability Analyst",
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
      const expectedResult = { ...state, job: job };

      expect(jobReducer(state, saveJobSuccess(job))).toEqual(expectedResult);
    });
  });

  describe("saveJobFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(jobReducer(state, saveJobFail(error))).toEqual(expectedResult);
    });
  });

  describe("updateJobSuccess", () => {
    it("should update state with update results", () => {
      const job = {
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
                                jobTitle:
                                  "International Accountability Analyst",
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
      const expectedResult = { ...state, job: job };

      expect(jobReducer(state, updateJobSuccess(job))).toEqual(expectedResult);
    });
  });

  describe("updateJobFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(jobReducer(state, updateJobFail(error))).toEqual(expectedResult);
    });
  });

  describe("searchJobSuccess", () => {
    it("should update state with search results", () => {
      const jobs = [
        {
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
                                  jobTitle:
                                    "International Accountability Analyst",
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
        },
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
      ];
      const expectedResult = {
        ...state,
        jobs: jobs,
        totalItemsCount: jobs.length
      };

      expect(jobReducer(state, searchJobSuccess(jobs, jobs.length))).toEqual(
        expectedResult
      );
    });
  });

  describe("searchJobFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(jobReducer(state, searchJobFail(error))).toEqual(expectedResult);
    });
  });

  describe("getJobSuccess", () => {
    it("should update state with get results", () => {
      const job = {
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
                                jobTitle:
                                  "International Accountability Analyst",
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
      const expectedResult = { ...state, job: job };

      expect(jobReducer(state, getJobSuccess(job))).toEqual(expectedResult);
    });
  });

  describe("getJobFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(jobReducer(state, getJobFail(error))).toEqual(expectedResult);
    });
  });

  describe("addTask", () => {
    it("should update state with task", () => {
      const task = {
        _id: "5c2e375503e0403c99c218c1",
        title: "Amet consequatur enim eos ullam.",
        description:
          "Unde et dolor voluptatibus. Laudantium alias minima ex asperiores. Repudiandae quidem harum. Sit sed ut sunt.",
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
                                    jobTitle:
                                      "International Directives Officer",
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

      const expectedResult = {
        ...state,
        job: {
          ...state.job,
          tasks: [task]
        }
      };

      expect(jobReducer(state, addTask(task))).toEqual(expectedResult);
    });
  });
});
