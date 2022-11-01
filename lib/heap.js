const getParentIndex = (childIndex) => {
  const parentIndex = Math.floor((childIndex - 1) / 2);

  return parentIndex;
};

const getLeftChildIndex = (parentIndex) => {
  const childIndex = 2 * parentIndex + 1;

  return childIndex;
};

const getRightChildIndex = (parentIndex) => {
  const childIndex = 2 * parentIndex + 2;

  return childIndex;
};

export { getLeftChildIndex, getParentIndex, getRightChildIndex };
