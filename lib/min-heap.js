import { getLeftChildIndex, getParentIndex, getRightChildIndex } from "./heap.js";

const heapifyMin = (minHeap, index) => {
  const leftChildIndex = getLeftChildIndex(index);
  const rightChildIndex = getRightChildIndex(index);

  let smallerElementIndex = index;

  if (leftChildIndex < minHeap.length && minHeap[leftChildIndex] < minHeap[index]) {
    smallerElementIndex = leftChildIndex;
  }

  if (rightChildIndex < minHeap.length && minHeap[rightChildIndex] < minHeap[smallerElementIndex]) {
    smallerElementIndex = rightChildIndex;
  }

  if (index != smallerElementIndex) {
    const currentElement = minHeap[index];
    minHeap[index] = minHeap[smallerElementIndex];
    minHeap[smallerElementIndex] = currentElement;

    return heapifyMin(minHeap, smallerElementIndex);
  }

  return minHeap;
};

const deleteMinimum = (minHeap) => {
  if (minHeap.length === 1) {
    minHeap.pop();
    return minHeap;
  }

  const lastElement = minHeap.pop();
  minHeap[0] = lastElement;

  return heapifyMin(minHeap, 0);
};

const swapMin = (minHeap, index) => {
  let currentIndex = index;
  let currentElement = minHeap[currentIndex];
  let parentIndex = getParentIndex(currentIndex);

  while (currentIndex > 0 && minHeap[parentIndex] > currentElement) {
    const parentElement = minHeap[parentIndex];
    minHeap[parentIndex] = currentElement;
    minHeap[currentIndex] = parentElement;
    currentIndex = parentIndex;
    parentIndex = getParentIndex(currentIndex);
  }

  return minHeap;
};

function insertMinHeap(minHeap, element) {
  minHeap.push(element);
  const lastIndex = minHeap.length - 1;

  const minHeapSwapped = swapMin(minHeap, lastIndex);

  return minHeapSwapped;
}

export { insertMinHeap, deleteMinimum };
