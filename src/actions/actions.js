export const addTask = (task) => ({
  type: 'ADD_NEW_TASK',
  payload: task,
});

export const deleteTask = (taskIndex) => ({
  type: 'DELETE_TASK',
  payload: taskIndex,
});

export const doneTask = (taskIndex) => ({
  type: 'DONE_TASK',
  payload: taskIndex,
});
