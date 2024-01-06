const output = document.getElementById('output')
const meter = document.getElementById('meter')
const pilus = document.querySelector('.pilus')
const minus = document.querySelector('.minus')

let x = 0;



output.innerHTML = x;

pilus.addEventListener('click', function piluss() {
    if (x >= 10) {
        return false;
    }
    
    output.innerHTML = ++x;
    meter.style.height = x*10+'%';
});
minus.addEventListener('click', function minuss() {
    if (x <= 0) {
        return false;
    }
    
    output.innerHTML = --x;
    meter.style.height = x*10+'%';
});