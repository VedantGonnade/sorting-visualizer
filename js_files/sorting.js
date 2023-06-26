function generateBars(){
    const barsId = document.getElementById('bars');
    barsId.innerHTML = '';
    
    for (let i = 0; i < 100; i++) {
        const randomNumber = Math.floor(Math.random() * 100);
        const bar = document.createElement('div');
        bar.id = 'bar-style-id-' + i;
        bar.classList.add('bar-style');
        bar.style.height = randomNumber * 5 + 'px';
        barsId.appendChild(bar);
    }
    
    barsId.classList.add('bars-style');
}

const getNewArrayCommand = document.getElementById('new-array-button')
getNewArrayCommand.addEventListener("click", generateBars);
generateBars();






