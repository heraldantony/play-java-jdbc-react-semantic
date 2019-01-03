// @flow
/*
 * Test actions for entity Job 
 *
*/

import {
  JOB_ADD,
  JOB_ADD_SUCCESS,
  JOB_ADD_FAIL,
  JOB_SAVE,
  JOB_SAVE_SUCCESS,
  JOB_SAVE_FAIL,
  JOB_UPDATE,
  JOB_UPDATE_SUCCESS,
  JOB_UPDATE_FAIL,
  JOB_GET,
  JOB_GET_SUCCESS,
  JOB_GET_FAIL,
  JOB_SEARCH,
  JOB_SEARCH_SUCCESS,
  JOB_SEARCH_FAIL,
  JOB_ADD_TASK_SUCCESS,
  addJob,
  addJobSuccess,
  addJobFail,
  saveJob,
  saveJobSuccess,
  saveJobFail,
  updateJob,
  updateJobSuccess,
  updateJobFail,
  getJob,
  getJobSuccess,
  getJobFail,
  searchJob,
  searchJobSuccess,
  searchJobFail,
  addTask
} from "..";
import type {
  JOB_ADD_TYPE,
  JOB_ADD_SUCCESS_TYPE,
  JOB_ADD_FAIL_TYPE,
  JOB_SAVE_TYPE,
  JOB_SAVE_SUCCESS_TYPE,
  JOB_SAVE_FAIL_TYPE,
  JOB_UPDATE_TYPE,
  JOB_UPDATE_SUCCESS_TYPE,
  JOB_UPDATE_FAIL_TYPE,
  JOB_GET_TYPE,
  JOB_GET_SUCCESS_TYPE,
  JOB_GET_FAIL_TYPE,
  JOB_SEARCH_TYPE,
  JOB_SEARCH_SUCCESS_TYPE,
  JOB_SEARCH_FAIL_TYPE,
  JOB_ADD_TASK_SUCCESS_TYPE
} from "..";

describe("Job Actions", () => {
  describe("addJob", () => {
    it("should return the correct action with add data, form name, and promise", () => {
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
      const form = "JOB_ADD_FORM";
      const promise = {};
      const expectedResult = {
        type: JOB_ADD,
        payload: job,
        form: form,
        promise: promise
      };

      expect(addJob(job, form, promise)).toEqual(expectedResult);
    });
  });

  describe("addJobSuccess", () => {
    it("should return the correct action with results", () => {
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
      const expectedResult = {
        type: JOB_ADD_SUCCESS,
        payload: job
      };

      expect(addJobSuccess(job)).toEqual(expectedResult);
    });
  });

  describe("addJobFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: JOB_ADD_FAIL,
        error: error
      };

      expect(addJobFail(error)).toEqual(expectedResult);
    });
  });

  describe("saveJob", () => {
    it("should return the correct action with save data, form name, and promise", () => {
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
      const form = "JOB_SAVE_FORM";
      const promise = {};
      const expectedResult = {
        type: JOB_SAVE,
        payload: job,
        form: form,
        promise: promise
      };

      expect(saveJob(job, form, promise)).toEqual(expectedResult);
    });
  });

  describe("saveJobSuccess", () => {
    it("should return the correct action with results", () => {
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
      const expectedResult = {
        type: JOB_SAVE_SUCCESS,
        payload: job
      };

      expect(saveJobSuccess(job)).toEqual(expectedResult);
    });
  });

  describe("saveJobFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: JOB_SAVE_FAIL,
        error: error
      };

      expect(saveJobFail(error)).toEqual(expectedResult);
    });
  });

  describe("updateJob", () => {
    it("should return the correct action with update data, form name, and promise", () => {
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
      const form = "JOB_UPDATE_FORM";
      const promise = {};
      const expectedResult = {
        type: JOB_UPDATE,
        payload: job,
        form: form,
        promise: promise
      };

      expect(updateJob(job, form, promise)).toEqual(expectedResult);
    });
  });

  describe("updateJobSuccess", () => {
    it("should return the correct action with results", () => {
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
      const expectedResult = {
        type: JOB_UPDATE_SUCCESS,
        payload: job
      };

      expect(updateJobSuccess(job)).toEqual(expectedResult);
    });
  });

  describe("updateJobFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: JOB_UPDATE_FAIL,
        error: error
      };

      expect(updateJobFail(error)).toEqual(expectedResult);
    });
  });

  describe("getJob", () => {
    it("should return the correct action with Job ID", () => {
      const jobId = "5c2e375503e0403c99c218b7";
      const expectedResult = {
        type: JOB_GET,
        payload: jobId
      };

      expect(getJob(jobId)).toEqual(expectedResult);
    });
  });

  describe("getJobSuccess", () => {
    it("should return the correct action with results", () => {
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
      const expectedResult = {
        type: JOB_GET_SUCCESS,
        payload: job
      };

      expect(getJobSuccess(job)).toEqual(expectedResult);
    });
  });

  describe("getJobFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: JOB_GET_FAIL,
        error: error
      };

      expect(getJobFail(error)).toEqual(expectedResult);
    });
  });

  describe("searchJob", () => {
    it("should return the correct action with search data, form name, and promise", () => {
      const payload = { search: "test", pageNumber: 1, pageSize: 10 };
      const form = "JOB_SEARCH_FORM";
      const promise = {};
      const expectedResult = {
        type: JOB_SEARCH,
        payload: payload,
        form: form,
        promise: promise
      };

      expect(searchJob(payload, form, promise)).toEqual(expectedResult);
    });
  });
  describe("searchJobSuccess", () => {
    it("should return the correct action with results", () => {
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
        type: JOB_SEARCH_SUCCESS,
        payload: jobs,
        total: jobs.length
      };

      expect(searchJobSuccess(jobs, jobs.length)).toEqual(expectedResult);
    });
  });

  describe("searchJobFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: JOB_SEARCH_FAIL,
        error: error
      };

      expect(searchJobFail(error)).toEqual(expectedResult);
    });
  });

  describe("addTask", () => {
    it("should return the correct action with task", () => {
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
        type: JOB_ADD_TASK_SUCCESS,
        task
      };

      expect(addTask(task)).toEqual(expectedResult);
    });
  });
});
