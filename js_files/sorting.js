function generateBars(numberOfBars){
    const barsId = document.getElementById('bars');
    barsId.innerHTML = '';
    
    for (let i = 0; i < numberOfBars; i++) {
        const randomNumber = Math.floor(Math.random() * 100);
        const bar = document.createElement('div');
        bar.id = 'bar-style-id-' + i;
        bar.classList.add('bar-style');
        bar.style.height = randomNumber * 4 + 'px';
        barsId.appendChild(bar);
    }
    
    barsId.classList.add('bars-style');
}

function createBars() {
    let arraySize = document.querySelector("#number-of-bar");
    let numberOfBars = arraySize.value;
    generateBars(numberOfBars)
}


const getNewArrayCommand = document.getElementById('new-array-button')
getNewArrayCommand.addEventListener("click", createBars);

let arraySize = document.querySelector("#number-of-bar");
arraySize.addEventListener("input", createBars)

createBars();





