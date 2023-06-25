function generateBars(){
    let i = 0;
    const randomNumbers = [];
    const barsId = document.getElementById('bars');
    barsId.innerHTML = '';
    
    while (i < 100) {
        const randomNumber = Math.floor(Math.random() *100);
        randomNumbers.push(randomNumber);
        
        const bar = document.createElement('div');
        bar.classList.add('bar-style');
        bar.style.height = randomNumber * 5 + 'px';
        barsId.appendChild(bar);
        i++;
    }
    
    barsId.classList.add('bars-style');
    
}
const getNewArrayCommand = document.getElementById('new-array-button')
getNewArrayCommand.addEventListener("click", generateBars);
generateBars();






