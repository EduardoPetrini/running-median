import { deleteMaximum, insertMaxHeap } from "./max-heap.js";
import { deleteMinimum, insertMinHeap } from "./min-heap.js";

function add(maxHeap, minHeap, element) {
  const maxSize = maxHeap.length;
  const minSize = minHeap.length;

  if (maxSize === 0) {
    insertMaxHeap(maxHeap, element);
  } else if (maxSize === minSize) {
    const minTop = minHeap[0];

    if (element < minTop) {
      insertMaxHeap(maxHeap, element);
    } else {
      deleteMinimum(minHeap);
      insertMinHeap(minHeap, element);
      insertMaxHeap(maxHeap, minTop);
    }
  } else {
    const maxTop = maxHeap[0];

    if (minSize === 0) {
      if (element > maxTop) {
        insertMinHeap(minHeap, element);
      } else {
        deleteMaximum(maxHeap);
        insertMaxHeap(maxHeap, element);
        insertMinHeap(minHeap, maxTop);
      }
    } else {
      const minTop = minHeap[0];

      if (element > minTop) {
        insertMinHeap(minHeap, element);
      } else {
        if (element < maxTop) {
          deleteMaximum(maxHeap);
          insertMaxHeap(maxHeap, element);
          insertMinHeap(minHeap, maxTop);
        } else {
          insertMinHeap(minHeap, element);
        }
      }
    }
  }
}

export { add };
