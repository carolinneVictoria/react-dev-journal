const mergeClass = (isItemCompleted) => {
  return isItemCompleted
    ? "todo-item completed"
    : "todo-item";
};

export default mergeClass;