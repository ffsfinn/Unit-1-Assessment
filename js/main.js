//Cache
let inputValue = document.getElementById('input')
let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');

let inputArrPlus = [];
let inputArrMinus = [];
let inputArr1 = [];
let inputArr2 = [];
let total = 0;

//Functions
plusButton.addEventListener('click', function(){
    let inputAdd = inputValue.value;
    let inputArr1 = parseInt(inputAdd);

    if(inputAdd !== Number) {
        inputArrPlus.push(inputArr1);
        for(i = 0; i < inputArrPlus.length; i++) {
            total = total + inputArrPlus[i];
            createTotal();
        }
        return total;
    };

});

minusButton.addEventListener('click', function(){
    let inputMinus = inputValue.value;
    let inputArr2 = parseInt(inputMinus);

    if(inputMinus !== Number) {
        inputArrMinus.push(inputArr2);
        for(i = 0; i < inputArrMinus.length; i++) {
            total = total -= inputArrMinus[i];
            createTotal();
        }
        return total;
    };

});

function createTotal() {
    total1 = document.getElementById('numTotal');
    total1.innerHTML = total;
}

createTotal();