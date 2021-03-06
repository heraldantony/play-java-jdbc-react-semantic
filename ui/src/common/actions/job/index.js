// @flow
/*
 * Constants and actions for entity Job 
 * Action constants and corresponding types
 *
*/

export const JOB_ADD = "job/add";
export const JOB_ADD_SUCCESS = "job/add/SUCCESS";
export const JOB_ADD_FAIL = "job/add/FAIL";

export const JOB_SAVE = "job/save";
export const JOB_SAVE_SUCCESS = "job/save/SUCCESS";
export const JOB_SAVE_FAIL = "job/save/FAIL";

export const JOB_UPDATE = "job/update";
export const JOB_UPDATE_SUCCESS = "job/update/SUCCESS";
export const JOB_UPDATE_FAIL = "job/update/FAIL";

export const JOB_GET = "job/get";
export const JOB_GET_SUCCESS = "job/get/SUCCESS";
export const JOB_GET_FAIL = "job/get/FAIL";

export const JOB_DELETE = "job/delete";
export const JOB_DELETE_SUCCESS = "job/delete/SUCCESS";
export const JOB_DELETE_FAIL = "job/delete/FAIL";

export const JOB_SEARCH = "job/search";
export const JOB_SEARCH_SUCCESS = "job/search/SUCCESS";
export const JOB_SEARCH_FAIL = "job/search/FAIL";

export type JOB_ADD_TYPE = {
  type: JOB_ADD,
  payload: Object
};
export type JOB_ADD_SUCCESS_TYPE = {
  type: JOB_ADD_SUCCESS,
  payload: Object
};
export type JOB_ADD_FAIL_TYPE = {
  type: JOB_ADD_FAIL,
  error: { errors: Object }
};

export type JOB_SAVE_TYPE = {
  type: JOB_SAVE,
  payload: Object
};
export type JOB_SAVE_SUCCESS_TYPE = {
  type: JOB_SAVE_SUCCESS,
  payload: Object
};
export type JOB_SAVE_FAIL_TYPE = {
  type: JOB_SAVE_FAIL,
  error: { errors: Object }
};

export type JOB_UPDATE_TYPE = {
  type: JOB_UPDATE,
  payload: Object
};
export type JOB_UPDATE_SUCCESS_TYPE = {
  type: JOB_UPDATE_SUCCESS,
  payload: Object
};
export type JOB_UPDATE_FAIL_TYPE = {
  type: JOB_UPDATE_FAIL,
  error: { errors: Object }
};

export type JOB_GET_TYPE = {
  type: JOB_GET,
  payload: Object
};
export type JOB_GET_SUCCESS_TYPE = {
  type: JOB_GET_SUCCESS,
  payload: Object
};
export type JOB_GET_FAIL_TYPE = {
  type: JOB_GET_FAIL,
  error: { errors: Object }
};

export type JOB_DELETE_TYPE = {
  type: JOB_DELETE,
  payload: Object
};
export type JOB_DELETE_SUCCESS_TYPE = {
  type: JOB_DELETE_SUCCESS,
  payload: Object
};
export type JOB_DELETE_FAIL_TYPE = {
  type: JOB_DELETE_FAIL,
  error: { errors: Object }
};

export type JOB_SEARCH_TYPE = {
  type: JOB_SEARCH,
  payload: Object
};
export type JOB_SEARCH_SUCCESS_TYPE = {
  type: JOB_SEARCH_SUCCESS,
  payload: [Object],

  total: number
};
export type JOB_SEARCH_FAIL_TYPE = {
  type: JOB_SEARCH_FAIL,
  error: { errors: Object }
};

export const JOB_ADD_TASK = "job/Add_Task";
export const JOB_DELETE_TASK = "job/Delete_Task";
export const JOB_ADD_TASK_SUCCESS = "job/Add_Task/SUCCESS";
export const JOB_DELETE_TASK_SUCCESS = "job/Delete_Task/SUCCESS";

export const JOB_ADD_TASK_SUCCESS_TYPE = {
  type: JOB_ADD_TASK_SUCCESS,
  task: Object
};
export const JOB_DELETE_TASK_SUCCESS_TYPE = {
  type: JOB_DELETE_TASK_SUCCESS,
  task: Object
};

/**
 * Add Job
 *
 * @param  {object} job  The Job object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type JOB_ADD
 */
export function addJob(job, form, promise) {
  return {
    type: JOB_ADD,
    payload: job,
    form,
    promise
  };
}

/**
 * Dispatched when Add Job succeeds
 *
 * @param  {object} job  The Job object
 *
 * @return {object} An action object with type JOB_ADD_SUCCESS
 */
export function addJobSuccess(job): JOB_ADD_SUCCESS_TYPE {
  return {
    type: JOB_ADD_SUCCESS,
    payload: job
  };
}

/**
 * Dispatched when Add Job fails
 *
 * @param  {object} job  The Job object
 *
 * @return {object} An action object with type JOB_ADD_FAIL
 */
export function addJobFail(error): JOB_ADD_FAIL_TYPE {
  return {
    type: JOB_ADD_FAIL,
    error: error
  };
}

/**
 * Save Job
 *
 * @param  {object} job  The Job object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type JOB_SAVE
 */
export function saveJob(job, form, promise) {
  return {
    type: JOB_SAVE,
    payload: job,
    form,
    promise
  };
}

/**
 * Dispatched when Save Job succeeds
 *
 * @param  {object} job  The Job object
 *
 * @return {object} An action object with type JOB_SAVE_SUCCESS
 */
export function saveJobSuccess(job): JOB_SAVE_SUCCESS_TYPE {
  return {
    type: JOB_SAVE_SUCCESS,
    payload: job
  };
}

/**
 * Dispatched when Save Job fails
 *
 * @param  {object} job  The Job object
 *
 * @return {object} An action object with type JOB_SAVE_FAIL
 */
export function saveJobFail(error): JOB_SAVE_FAIL_TYPE {
  return {
    type: JOB_SAVE_FAIL,
    error: error
  };
}

/**
 * Update Job
 *
 * @param  {object} job  The Job object
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type JOB_UPDATE
 */
export function updateJob(job, form, promise) {
  return {
    type: JOB_UPDATE,
    payload: job,
    form,
    promise
  };
}

/**
 * Dispatched when Update Job succeeds
 *
 * @param  {object} job  The Job object
 *
 * @return {object} An action object with type JOB_UPDATE_SUCCESS
 */
export function updateJobSuccess(job): JOB_UPDATE_SUCCESS_TYPE {
  return {
    type: JOB_UPDATE_SUCCESS,
    payload: job
  };
}

/**
 * Dispatched when Update Job fails
 *
 * @param  {object} job  The Job object
 *
 * @return {object} An action object with type JOB_UPDATE_FAIL
 */
export function updateJobFail(error): JOB_UPDATE_FAIL_TYPE {
  return {
    type: JOB_UPDATE_FAIL,
    error: error
  };
}

/**
 * Get Job
 *
 * @param  {string} jobId  Id of  Job object
 *
 * @return {object} An action object with type JOB_GET
 */
export function getJob(jobId): JOB_GET_TYPE {
  return {
    type: JOB_GET,
    payload: jobId
  };
}

/**
 * Dispatched when Get Job succeeds
 *
 * @param  {object} job  The Job object
 *
 * @return {object} An action object with type JOB_GET_SUCCESS
 */
export function getJobSuccess(job): JOB_GET_SUCCESS_TYPE {
  return {
    type: JOB_GET_SUCCESS,
    payload: job
  };
}

/**
 * Dispatched when Get Job fails
 *
 * @param  {object} job  The Job object
 *
 * @return {object} An action object with type JOB_GET_FAIL
 */
export function getJobFail(error): JOB_GET_FAIL_TYPE {
  return {
    type: JOB_GET_FAIL,
    error: error
  };
}

/**
 * Delete Job
 *
 * @param  {string} jobId  Id of  Job object
 *
 * @return {object} An action object with type JOB_DELETE
 */
export function deleteJob(jobId): JOB_DELETE_TYPE {
  return {
    type: JOB_DELETE,
    payload: jobId
  };
}

/**
 * Dispatched when Delete Job succeeds
 *
 * @param  {object} job  The Job object
 *
 * @return {object} An action object with type JOB_DELETE_SUCCESS
 */
export function deleteJobSuccess(job): JOB_DELETE_SUCCESS_TYPE {
  return {
    type: JOB_DELETE_SUCCESS,
    payload: job
  };
}

/**
 * Dispatched when Delete Job fails
 *
 * @param  {object} job  The Job object
 *
 * @return {object} An action object with type JOB_DELETE_FAIL
 */
export function deleteJobFail(error): JOB_DELETE_FAIL_TYPE {
  return {
    type: JOB_DELETE_FAIL,
    error: error
  };
}

/**
 * Search Job
 *
 * @param  {string} searchString   The search string
 * @param  {string} form Name of the form
 * @param  {object} promise object with {resolve, reject} functions
 * @return {object} An action object with type JOB_SEARCH
 */
export function searchJob(searchString, form, promise) {
  return {
    type: JOB_SEARCH,
    payload: searchString,
    form,
    promise
  };
}

/**
 * Dispatched when Search Job succeeds
 *
 * @param  {object} jobs  List of jobs
 * @param  {number} total Total number of jobs
 *
 * @return {object} An action object with type JOB_SEARCH_SUCCESS
 */
export function searchJobSuccess(jobs, total): JOB_SEARCH_SUCCESS_TYPE {
  return {
    type: JOB_SEARCH_SUCCESS,
    payload: jobs,
    total: total
  };
}

/**
 * Dispatched when Search Job fails
 *
 * @param  {object} job  The Job object
 *
 * @return {object} An action object with type JOB_SEARCH_FAIL
 */
export function searchJobFail(error): JOB_SEARCH_FAIL_TYPE {
  return {
    type: JOB_SEARCH_FAIL,
    error: error
  };
}

/**
 * addTask Add Task
 *
 * @param  {object} task   The task
 *
 * @return {object} An action object with type JOB_ADD_TASK_SUCCESS
 */
export function addTask(task): JOB_ADD_TASK_SUCCESS_TYPE {
  return {
    type: JOB_ADD_TASK_SUCCESS,
    task
  };
}
/**
 * deleteTask Add Task
 *
 * @param  {object} task   The task
 *
 * @return {object} An action object with type JOB_DELETE_TASK_SUCCESS
 */
export function deleteTask(task): JOB_DELETE_TASK_SUCCESS_TYPE {
  return {
    type: JOB_DELETE_TASK_SUCCESS,
    task
  };
}
