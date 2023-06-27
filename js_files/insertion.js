async function doInsertionSorting() {
    let bars = document.getElementsByClassName("bar-style");
    let n = bars.length;
  
    for (let i = 1; i < n; i++) {
      let key = parseInt(bars[i].style.height);
      let j = i - 1;
  
      bars[i].style.borderColor = "red";
  
      await new Promise(resolve => setTimeout(resolve, 10));
  
      while (j >= 0 && parseInt(bars[j].style.height) > key) {
        bars[j].style.borderColor = "red";
        bars[j + 1].style.height = bars[j].style.height;
        j--;
  
        await new Promise(resolve => setTimeout(resolve, 10));
  
        for (let k = 0; k <= i; k++) {
          if (k !== j + 1) {
            bars[k].style.borderColor = "coral";
          }
        }
  
        await new Promise(resolve => setTimeout(resolve, 10));
      }
  
      bars[j + 1].style.height = key + "px";
  
      for (let k = 0; k <= i; k++) {
        bars[k].style.borderColor = "lime";
        bars[k].style.transition = "border-color 0.5s";
      }
  
      await new Promise(resolve => setTimeout(resolve, 1));
    }
  
    for (let i = 0; i < n; i++) {
      bars[i].style.borderColor = "lime";
    }
  }
  
  const insertionSortButton = document.getElementById("insertion-sort-button");
  insertionSortButton.addEventListener("click", doInsertionSorting);
  
  getNewArrayCommand.addEventListener("click", () => {
    location.reload();
  });