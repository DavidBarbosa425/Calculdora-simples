

function insert(num) {
    document.querySelector('#result').innerHTML += num
}

function clean() {
    document.querySelector('#result').innerHTML = ' ';
}

function back() {
    let result = document.querySelector('#result').innerHTML;
    document.querySelector('#result').innerHTML = result.substring(0, result.length - 1)
}

function calcular() {
    let result = document.querySelector('#result').innerHTML;
    if(result)
