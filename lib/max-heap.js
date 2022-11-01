import { getLeftChildIndex, getParentIndex, getRightChildIndex } from "./heap.js";

const heapifyMax = (maxHeap, index) => {
  const leftChildIndex = getLeftChildIndex(index);
  const rightChildIndex = getRightChildIndex(index);

  let biggestElementIndex = index;

  if (leftChildIndex < maxHeap.length && maxHeap[leftChildIndex] > maxHeap[index]) {
    biggestElementIndex = leftChildIndex;
  }

  if (rightChildIndex < maxHeap.length && maxHeap[rightChildIndex] > maxHeap[biggestElementIndex]) {
    biggestElementIndex = rightChildIndex;
  }

  if (index != biggestElementIndex) {
    const currentElement = maxHeap[index];
    maxHeap[index] = maxHeap[biggestElementIndex];
    maxHeap[biggestElementIndex] = currentElement;

    return heapifyMax(maxHeap, biggestElementIndex);
  }

  return maxHeap;
};

const deleteMaximum = (maxHeap) => {
  if (maxHeap.length === 1) {
    maxHeap.pop();
    return maxHeap;
  }
  const lastElement = maxHeap.pop();
  maxHeap[0] = lastElement;

  return heapifyMax(maxHeap, 0);
};

const swapMax = (maxHeap, index) => {
  let currentIndex = index;
  let currentElement = maxHeap[currentIndex];
  let parentIndex = getParentIndex(currentIndex);

  while (currentIndex > 0 && maxHeap[parentIndex] < currentElement) {
    const parentElement = maxHeap[parentIndex];
    maxHeap[parentIndex] = currentElement;
    maxHeap[currentIndex] = parentElement;
    currentIndex = parentIndex;
    parentIndex = getParentIndex(currentIndex);
  }

  return maxHeap;
};

function insertMaxHeap(maxHeap, element) {
  maxHeap.push(element);
  const lastIndex = maxHeap.length - 1;

  const maxHeapSwapped = swapMax(maxHeap, lastIndex);

  return maxHeapSwapped;
}

export { insertMaxHeap, deleteMaximum };
