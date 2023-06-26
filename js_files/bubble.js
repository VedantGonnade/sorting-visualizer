async function doBubbleSorting() {
    let bars = document.getElementsByClassName("bar-style");
    let n = bars.length;
  
    for (let i = 0; i < n - 1; i++) {
      let swapped = false;
  
      for (let j = 0; j < n - i - 1; j++) {
        let firstBar = bars[j];
        let secondBar = bars[j + 1];
  
        let transform1 = parseInt(firstBar.style.height);
        let transform2 = parseInt(secondBar.style.height);
  
        if (transform1 > transform2) {
          firstBar.style.borderColor = "coral";
          secondBar.style.borderColor = "coral";
  
          // Swap the heights by modifying the style attribute
          firstBar.style.height = transform2 + "px";
          secondBar.style.height = transform1 + "px";
  
          swapped = true;
        }
        else {
            firstBar.style.borderColor = "coral";
            secondBar.style.borderColor = "coral";
        } 
  
        await new Promise(resolve => setTimeout(resolve, 10));
      }
  
      if (!swapped) {
        break;
      }
  
      await new Promise(resolve => setTimeout(resolve, 1));
  
      // Turn the previously sorted bar red again for the next iteration
      bars[n - i - 1].style.borderColor = "lime";
      bars[n - i - 1].style.transition = "border-color 0.5s";
    }

    for (i = 0; i < n; i++) {
        bars[i].style.borderColor = "lime";
    }
    
  
  }
  
  const bubbleSortButton = document.getElementById("bubble-sort-button");
  bubbleSortButton.addEventListener("click", doBubbleSorting);
  