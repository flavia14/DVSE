let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl=0;
sumEl=document.getElementById("sum-el")

function add()
{ 
    let sum=num1+num2;
    sumEl.textContent = "Sum:" + sum
    
}

function substract()
{ 
    let sub=num1-num2;
    sumEl.textContent = "Substract: " + sub
    
}

function divide()
{ 
    let div=num1/num2;
    sumEl.textContent = "Divide: " + div
    
}

function multiply()
{ 
    let mult=num1*num2;
    sumEl.textContent = "Multiply: " + mult
    
}
multiply()