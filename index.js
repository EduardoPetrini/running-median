import { add } from "./lib/add-element.js";
import { findMedian } from "./lib/find-median.js";

function start(input) {
  const maxHeap = [];
  const minHeap = [];

  const medians = input.map((element) => {
    add(maxHeap, minHeap, element);
    return findMedian(maxHeap, minHeap);
  });

  // console.log(medians);
  return medians;
}

const test = (increaseRate = 2, testLimit = 10) => {
  let n = 10;
  for (let testIndex = 0; testIndex < testLimit; testIndex++) {
    const input = [];

    for (let i = 0; i < n; i++) {
      const element = Math.round(Math.random() * n * 10);
      input.push(element);
    }

    console.log(n)
    console.time();
    start(input);
    console.timeEnd();
    console.log('----------------');

    n *= increaseRate;
  }
}

test(2, 20);
