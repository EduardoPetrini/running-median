function findMedian(maxHeap, minHeap) {
  const maxSize = maxHeap.length;
  const minSize = minHeap.length;

  if (maxSize > minSize) {
    return maxHeap[0];
  }

  const maxPop = maxHeap[0];
  const minPop = minHeap[0];

  return (maxPop + minPop) / 2;
}

export { findMedian };
