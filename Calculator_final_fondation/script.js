// variable declarations
let num_1,num_2,operator,result;

let nums = document.getElementById(`nums`);
let inp = document.getElementById(`input`);
let backspace = document.querySelector(`.backspace`);



//functionssssssssssssss
function add(a, b){
    return (a +b).toFixed(2);
}

function subtract(a, b){
    return (a - b).toFixed(2);
}
function multiply(a, b){
    return (a * b).toFixed(2);
}
function divide(a, b){
    if(b === 0){
        return "Error: Division by zero is not allowed.";
    }
    return (a / b).toFixed(2);
}

function operate(operator, a, b){
    switch(operator){
        case `+`:
            return add(a, b);
        case `-`:
            return subtract(a, b);
        case `*`:
            return multiply(a, b);
        case `/`:
            return divide(a, b);
    }
}    




nums.addEventListener(`click`, function(e){
    
    if(e.target.classList.contains(`btn`) && e.target.classList.contains(`nom`) && num_1 !== undefined && operator === undefined && num_2 === undefined){
        
        if(result !== undefined && inp.textContent === String(result)){
            inp.textContent = e.target.textContent;
            num_1 = Number(e.target.textContent);
        }
        
    }else{
            if(e.target.classList.contains(`btn`) && e.target.classList.contains(`nom`) && num_1 === undefined){
            num_1 = Number(e.target.textContent);
            inp.textContent = "";
            inp.textContent += num_1;
            }else if(e.target.classList.contains(`btn`) && e.target.classList.contains(`nom`) && num_1 !== undefined && operator !== undefined){
                if(result !== undefined && inp.textContent === result){
                    inp.textContent = "";
                    num_1 = Number(e.target.textContent);
                }else{
                    num_2 = Number(e.target.textContent);
                    inp.textContent += num_2;
                }
                
            }else if(e.target.classList.contains(`btn`) && e.target.classList.contains(`operator`) && num_1 !== undefined){
                if(typeof operate(operator, num_1, num_2) ===  "number"){
                    result = operate(operator, num_1, num_2)
                    inp.textContent = result;
                    num_1 = result
                }
                operator = e.target.textContent;
                inp.textContent += operator;
            }else if(e.target.classList.contains(`btn`) && e.target.classList.contains(`equal`) && num_1 !== undefined && operator !== undefined && num_2 !== undefined){
                result = operate(operator, num_1, num_2);
                num_1 = result;
                num_2 = undefined;
                operator = undefined;
                inp.textContent = result;
            }else if(e.target.classList.contains(`clear`)){
                num_1 = undefined;
                num_2 = undefined;
                operator = undefined;
                result = undefined;
                inp.textContent = `Click on Numbers`;
            }else if(e.target.classList.contains(`backspace`)){
                if(inp.textContent!== undefined ){
                    inp.textContent = inp.textContent.slice(0, -1);
                    if(inp.textContent === ""){
                        num_1 = undefined;
                        num_2 = undefined;
                        operator = undefined;
                        result = undefined;
                    }
                }
            }
    }
    
});