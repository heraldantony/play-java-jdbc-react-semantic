// @flow
import { fromJS } from "immutable";

import {
  addEmployee,
  addEmployeeSuccess,
  addEmployeeFail,
  saveEmployee,
  saveEmployeeSuccess,
  saveEmployeeFail,
  updateEmployee,
  updateEmployeeSuccess,
  updateEmployeeFail,
  searchEmployee,
  searchEmployeeSuccess,
  searchEmployeeFail,
  getEmployee,
  getEmployeeSuccess,
  getEmployeeFail,
  addJob
} from "common/actions/employee";
import { employeeReducer } from "common/reducers/employee";

describe("Employee Reducer", () => {
  let state;
  beforeEach(() => {
    state = {
      search: "",
      employee: {},
      employees: [],
      start: 0,
      limit: 10,
      totalItemsCount: 0,
      otherSearchStart: 0,
      otherSearchLimit: 10,
      otherSearchTotalItemsCount: 0,
      otherSearchEmployees: [],
      error: ""
    };
  });
  it("should return the initial state", () => {
    const expectedResult = state;
    expect(employeeReducer(undefined, {})).toEqual(expectedResult);
  });

  describe("addEmployeeSuccess", () => {
    it("should update state with add results", () => {
      const employee = {
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
      const expectedResult = { ...state, employee: employee };

      expect(employeeReducer(state, addEmployeeSuccess(employee))).toEqual(
        expectedResult
      );
    });
  });

  describe("addEmployeeFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(employeeReducer(state, addEmployeeFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("saveEmployeeSuccess", () => {
    it("should update state with save results", () => {
      const employee = {
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
      const expectedResult = { ...state, employee: employee };

      expect(employeeReducer(state, saveEmployeeSuccess(employee))).toEqual(
        expectedResult
      );
    });
  });

  describe("saveEmployeeFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(employeeReducer(state, saveEmployeeFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("updateEmployeeSuccess", () => {
    it("should update state with update results", () => {
      const employee = {
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
      const expectedResult = { ...state, employee: employee };

      expect(employeeReducer(state, updateEmployeeSuccess(employee))).toEqual(
        expectedResult
      );
    });
  });

  describe("updateEmployeeFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(employeeReducer(state, updateEmployeeFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("searchEmployeeSuccess", () => {
    it("should update state with search results", () => {
      const employees = [
        {
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
                    }
                  ]
                },
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
            }
          ]
        },
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
      ];
      const expectedResult = {
        ...state,
        employees: employees,
        totalItemsCount: employees.length
      };

      expect(
        employeeReducer(
          state,
          searchEmployeeSuccess(employees, employees.length)
        )
      ).toEqual(expectedResult);
    });
  });

  describe("searchEmployeeFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(employeeReducer(state, searchEmployeeFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("getEmployeeSuccess", () => {
    it("should update state with get results", () => {
      const employee = {
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
      const expectedResult = { ...state, employee: employee };

      expect(employeeReducer(state, getEmployeeSuccess(employee))).toEqual(
        expectedResult
      );
    });
  });

  describe("getEmployeeFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(employeeReducer(state, getEmployeeFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("addJob", () => {
    it("should update state with job", () => {
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
        ...state,
        employee: {
          ...state.employee,
          jobs: [job]
        }
      };

      expect(employeeReducer(state, addJob(job))).toEqual(expectedResult);
    });
  });
});
