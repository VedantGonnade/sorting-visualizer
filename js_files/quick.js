async function quickSort(arr, low, high) {
    if (low < high) {
      let pivotIndex = await partition(arr, low, high);
      await quickSort(arr, low, pivotIndex - 1);
      await quickSort(arr, pivotIndex + 1, high);
    }
  }
  
  async function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
  
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        await swap(arr, i, j);
      }
    }
  
    await swap(arr, i + 1, high);
    return i + 1;
  }
  
  async function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  
    // Code to update the visualization of bars
    let bars = document.getElementsByClassName("bar-style");
    bars[i].style.height = arr[i] + "px";
    bars[j].style.height = arr[j] + "px";
  
    bars[i].style.borderColor = "coral";
    bars[j].style.borderColor = "coral";
  
    await new Promise(resolve => setTimeout(resolve, 10));
  
    bars[i].style.borderColor = "coral";
    bars[j].style.borderColor = "coral";
  }
  
  async function doQuickSorting() {
    let bars = document.getElementsByClassName("bar-style");
    let arr = [];
  
    for (let i = 0; i < bars.length; i++) {
      arr.push(parseInt(bars[i].style.height));
    }
  
    await quickSort(arr, 0, arr.length - 1);
  
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.borderColor = "lime";
      await new Promise(resolve => setTimeout(resolve, 10));
    }
  }
  
  const quickSortButton = document.getElementById("quick-sort-button");
  quickSortButton.addEventListener("click", doQuickSorting);
  
  getNewArrayCommand.addEventListener("click", () => {
    location.reload();
  });