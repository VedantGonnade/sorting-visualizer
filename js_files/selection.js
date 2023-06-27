async function doSelectionSorting() {
    let bars = document.getElementsByClassName("bar-style");
    let n = bars.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < n; j++) {
        let firstBar = bars[minIndex];
        let secondBar = bars[j];
  
        let transform1 = parseInt(firstBar.style.height);
        let transform2 = parseInt(secondBar.style.height);
  
        firstBar.style.borderColor = "red";
        secondBar.style.borderColor = "red";
  
        await new Promise(resolve => setTimeout(resolve, 10));
  
        if (transform2 < transform1) {
          firstBar.style.borderColor = "coral";
          secondBar.style.borderColor = "coral";
          minIndex = j;
        } else {
          secondBar.style.borderColor = "coral";
        }
  
        await new Promise(resolve => setTimeout(resolve, 10));
      }
  
      let temp = bars[minIndex].style.height;
      bars[minIndex].style.height = bars[i].style.height;
      bars[i].style.height = temp;
  
      bars[i].style.borderColor = "lime";
      bars[i].style.transition = "border-color 0.5s";
  
      await new Promise(resolve => setTimeout(resolve, 1));
    }
  
    bars[n - 1].style.borderColor = "lime";
  }
  
  const selectionSortButton = document.getElementById("selection-sort-button");
  selectionSortButton.addEventListener("click", doSelectionSorting);
  
  getNewArrayCommand.addEventListener("click", () => {
    location.reload();
  });