let randomNumbers = [];
let i = 0;
const barsId = document.getElementById('bars');

while (i < 100) {
    const randomNumber = Math.floor(Math.random() *100);
    randomNumbers.push(randomNumber);
    i++;
    const bar = document.createElement('div');
    bar.classList.add('bar-style');
    bar.style.height = randomNumber * 5 + 'px';
    barsId.appendChild(bar);
}
// i = 0;
barsId.classList.add('bars-style');




