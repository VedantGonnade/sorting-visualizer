async function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    const sortedLeft = await mergeSort(left);
    const sortedRight = await mergeSort(right);
  
    return await merge(sortedLeft, sortedRight);
  }
  
  async function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
  
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
  
    // Code to update the visualization of bars
    let bars = document.getElementsByClassName("bar-style");
    let barIndex = 0;
    for (let k = 0; k < result.length; k++) {
      await new Promise(resolve => setTimeout(resolve, 10));
      bars[barIndex].style.height = result[k] + "px";
      bars[barIndex].style.borderColor = "coral";
      barIndex++;
    }
  
    return result;
  }
  
  async function doMergeSorting() {
    let bars = document.getElementsByClassName("bar-style");
    let arr = [];
  
    for (let i = 0; i < bars.length; i++) {
      arr.push(parseInt(bars[i].style.height));
    }
  
    const sortedArr = await mergeSort(arr);
  
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.borderColor = "lime";
      await new Promise(resolve => setTimeout(resolve, 10));
    }
  }
  
  const mergeSortButton = document.getElementById("merge-sort-button");
  mergeSortButton.addEventListener("click", doMergeSorting);
  
  getNewArrayCommand.addEventListener("click", () => {
    location.reload();
  });