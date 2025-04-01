const display= document.getElementById("display");
let percentage = document.getElementById ("percentage");
let equalBtn = document.getElementById ("equal");
let exponent = document.getElementById("exponent");



function appendToDisplay(input){
    display.value += input ;
}

function clearDisplay(){
    display.value = "";
}

function insertSqrt(){
    display.value +="√";
}

function calculate(){
    let expression = display.value;
    expression= expression.replace(/√(\d+(\.\d+)?)/g, (match, number) =>{
        return `Math.sqrt(${number})`;
    })
    expression= expression.replace(/(\d+(\.\d+)?)\^(\d+(\.\d+)?)/g, (match, base, decimal1, exponent, decimal2) =>{
        return `Math.pow(${base}, ${exponent})`;
    });
    expression= expression.replace(/(\d+(\.\d+)?)%/g, (match, number) =>{
        return `(${number}/100)`;
    })
    try{
        display.value= eval(expression);
    }
    catch{
        display.value= 'Error'
    }

    // equalBtn.addEventListener('click', ()=>{
    //     let result= evaluateExpression(expression);
    //     display.value = result;
    // });
}

function updateDisplay(value){
    display.value += value
}
function evaluateExpression(expression){
    try{
        let processedExpression = expression.replace(/(\d+(\.\d+)?)%/g, '(($1/100))');
        processedExpression= processedExpression.replace(/(\d+(\.\d+)?)\^(\d+(\.\d+)?)/g, 'Math.pow($1, $3)');
        return eval(processedExpression);
    }
    catch(e){
        display.value = 'Error';
    }
}
percentage.addEventListener('click', ()=>{
    updateDisplay('%');
});
exponent.addEventListener('click', ()=>{
    updateDisplay("^");
})
equalBtn.addEventListener('click', () =>{
    calculate();
});
