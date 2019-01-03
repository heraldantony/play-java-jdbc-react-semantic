// @flow
/*
 * Test actions for entity Department 
 *
*/

import {
  DEPARTMENT_ADD,
  DEPARTMENT_ADD_SUCCESS,
  DEPARTMENT_ADD_FAIL,
  DEPARTMENT_SAVE,
  DEPARTMENT_SAVE_SUCCESS,
  DEPARTMENT_SAVE_FAIL,
  DEPARTMENT_UPDATE,
  DEPARTMENT_UPDATE_SUCCESS,
  DEPARTMENT_UPDATE_FAIL,
  DEPARTMENT_GET,
  DEPARTMENT_GET_SUCCESS,
  DEPARTMENT_GET_FAIL,
  DEPARTMENT_SEARCH,
  DEPARTMENT_SEARCH_SUCCESS,
  DEPARTMENT_SEARCH_FAIL,
  DEPARTMENT_SET_LOCATION_SUCCESS,
  DEPARTMENT_ADD_EMPLOYEE_SUCCESS,
  addDepartment,
  addDepartmentSuccess,
  addDepartmentFail,
  saveDepartment,
  saveDepartmentSuccess,
  saveDepartmentFail,
  updateDepartment,
  updateDepartmentSuccess,
  updateDepartmentFail,
  getDepartment,
  getDepartmentSuccess,
  getDepartmentFail,
  searchDepartment,
  searchDepartmentSuccess,
  searchDepartmentFail,
  setLocation,
  addEmployee
} from "..";
import type {
  DEPARTMENT_ADD_TYPE,
  DEPARTMENT_ADD_SUCCESS_TYPE,
  DEPARTMENT_ADD_FAIL_TYPE,
  DEPARTMENT_SAVE_TYPE,
  DEPARTMENT_SAVE_SUCCESS_TYPE,
  DEPARTMENT_SAVE_FAIL_TYPE,
  DEPARTMENT_UPDATE_TYPE,
  DEPARTMENT_UPDATE_SUCCESS_TYPE,
  DEPARTMENT_UPDATE_FAIL_TYPE,
  DEPARTMENT_GET_TYPE,
  DEPARTMENT_GET_SUCCESS_TYPE,
  DEPARTMENT_GET_FAIL_TYPE,
  DEPARTMENT_SEARCH_TYPE,
  DEPARTMENT_SEARCH_SUCCESS_TYPE,
  DEPARTMENT_SEARCH_FAIL_TYPE,
  DEPARTMENT_SET_LOCATION_SUCCESS_TYPE,
  DEPARTMENT_ADD_EMPLOYEE_SUCCESS_TYPE
} from "..";

describe("Department Actions", () => {
  describe("addDepartment", () => {
    it("should return the correct action with add data, form name, and promise", () => {
      const department = {
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
      const form = "DEPARTMENT_ADD_FORM";
      const promise = {};
      const expectedResult = {
        type: DEPARTMENT_ADD,
        payload: department,
        form: form,
        promise: promise
      };

      expect(addDepartment(department, form, promise)).toEqual(expectedResult);
    });
  });

  describe("addDepartmentSuccess", () => {
    it("should return the correct action with results", () => {
      const department = {
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
      const expectedResult = {
        type: DEPARTMENT_ADD_SUCCESS,
        payload: department
      };

      expect(addDepartmentSuccess(department)).toEqual(expectedResult);
    });
  });

  describe("addDepartmentFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: DEPARTMENT_ADD_FAIL,
        error: error
      };

      expect(addDepartmentFail(error)).toEqual(expectedResult);
    });
  });

  describe("saveDepartment", () => {
    it("should return the correct action with save data, form name, and promise", () => {
      const department = {
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
      const form = "DEPARTMENT_SAVE_FORM";
      const promise = {};
      const expectedResult = {
        type: DEPARTMENT_SAVE,
        payload: department,
        form: form,
        promise: promise
      };

      expect(saveDepartment(department, form, promise)).toEqual(expectedResult);
    });
  });

  describe("saveDepartmentSuccess", () => {
    it("should return the correct action with results", () => {
      const department = {
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
      const expectedResult = {
        type: DEPARTMENT_SAVE_SUCCESS,
        payload: department
      };

      expect(saveDepartmentSuccess(department)).toEqual(expectedResult);
    });
  });

  describe("saveDepartmentFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: DEPARTMENT_SAVE_FAIL,
        error: error
      };

      expect(saveDepartmentFail(error)).toEqual(expectedResult);
    });
  });

  describe("updateDepartment", () => {
    it("should return the correct action with update data, form name, and promise", () => {
      const department = {
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
      const form = "DEPARTMENT_UPDATE_FORM";
      const promise = {};
      const expectedResult = {
        type: DEPARTMENT_UPDATE,
        payload: department,
        form: form,
        promise: promise
      };

      expect(updateDepartment(department, form, promise)).toEqual(
        expectedResult
      );
    });
  });

  describe("updateDepartmentSuccess", () => {
    it("should return the correct action with results", () => {
      const department = {
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
      const expectedResult = {
        type: DEPARTMENT_UPDATE_SUCCESS,
        payload: department
      };

      expect(updateDepartmentSuccess(department)).toEqual(expectedResult);
    });
  });

  describe("updateDepartmentFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: DEPARTMENT_UPDATE_FAIL,
        error: error
      };

      expect(updateDepartmentFail(error)).toEqual(expectedResult);
    });
  });

  describe("getDepartment", () => {
    it("should return the correct action with Department ID", () => {
      const departmentId = "5c2e375503e0403c99c218a3";
      const expectedResult = {
        type: DEPARTMENT_GET,
        payload: departmentId
      };

      expect(getDepartment(departmentId)).toEqual(expectedResult);
    });
  });

  describe("getDepartmentSuccess", () => {
    it("should return the correct action with results", () => {
      const department = {
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
      const expectedResult = {
        type: DEPARTMENT_GET_SUCCESS,
        payload: department
      };

      expect(getDepartmentSuccess(department)).toEqual(expectedResult);
    });
  });

  describe("getDepartmentFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: DEPARTMENT_GET_FAIL,
        error: error
      };

      expect(getDepartmentFail(error)).toEqual(expectedResult);
    });
  });

  describe("searchDepartment", () => {
    it("should return the correct action with search data, form name, and promise", () => {
      const payload = { search: "test", pageNumber: 1, pageSize: 10 };
      const form = "DEPARTMENT_SEARCH_FORM";
      const promise = {};
      const expectedResult = {
        type: DEPARTMENT_SEARCH,
        payload: payload,
        form: form,
        promise: promise
      };

      expect(searchDepartment(payload, form, promise)).toEqual(expectedResult);
    });
  });
  describe("searchDepartmentSuccess", () => {
    it("should return the correct action with results", () => {
      const departments = [
        {
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
        },
        {
          _id: "5c2e375503e0403c99c218a4",
          departmentName: "Metrics",
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
            },
            {
              _id: "5c2e375503e0403c99c218b0",
              firstName: "Vida",
              lastName: "Zboncak",
              email: "Joseph_Zieme83@gmail.com",
              phoneNumber: "519.870.4474 x63291",
              hireDate: "2018-11-02T02:53:12.918Z",
              salary: 63788,
              commissionPct: 18689,
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
          _id: "5c2e375503e0403c99c218a5",
          departmentName: "Communications",
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
              _id: "5c2e375503e0403c99c218b0",
              firstName: "Vida",
              lastName: "Zboncak",
              email: "Joseph_Zieme83@gmail.com",
              phoneNumber: "519.870.4474 x63291",
              hireDate: "2018-11-02T02:53:12.918Z",
              salary: 63788,
              commissionPct: 18689,
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
              _id: "5c2e375503e0403c99c218b1",
              firstName: "Vernon",
              lastName: "Runte",
              email: "Dovie24@gmail.com",
              phoneNumber: "450.142.8860 x12499",
              hireDate: "2018-02-20T03:34:59.410Z",
              salary: 26180,
              commissionPct: 54173,
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
        type: DEPARTMENT_SEARCH_SUCCESS,
        payload: departments,
        total: departments.length
      };

      expect(searchDepartmentSuccess(departments, departments.length)).toEqual(
        expectedResult
      );
    });
  });

  describe("searchDepartmentFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: DEPARTMENT_SEARCH_FAIL,
        error: error
      };

      expect(searchDepartmentFail(error)).toEqual(expectedResult);
    });
  });

  describe("setLocation", () => {
    it("should return the correct action with location", () => {
      const location = {
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
      const expectedResult = {
        type: DEPARTMENT_SET_LOCATION_SUCCESS,
        location
      };

      expect(setLocation(location)).toEqual(expectedResult);
    });
  });

  describe("addEmployee", () => {
    it("should return the correct action with employee", () => {
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
      const expectedResult = {
        type: DEPARTMENT_ADD_EMPLOYEE_SUCCESS,
        employee
      };

      expect(addEmployee(employee)).toEqual(expectedResult);
    });
  });
});
