let inputText = document.getElementById('input');
let inputVal = document.querySelectorAll('.inValue');
let operator = document.querySelectorAll('.operator');
let Scoperator = document.querySelectorAll('.Scoperator');
let Cbtn = document.getElementById('clear');
let dot = document.getElementById('dot');
let fin = "";
let errormsg = document.querySelector('.address');
Cbtn.onclick = function clear() {
    input.value = 0;
    fin = '';
}

// document.getElementById('clear').onclick = () => {
//     if (inputText.value.length >= 1)
//         inputText.value = inputText.value.slice(0, -1);
// }
// global use
function _append(item) {
    if (inputText.value == '0')
        inputText.value = item.value;
    else
        inputText.value += item.value;
}
// inputVal.forEach(item.onclick =()=>{alert();}
// );
inputVal.forEach(item => {
    item.addEventListener('click', function () {
        _append(item);
    })
})
//  the dot option
dot.onclick = () => {
    if (inputText.textContent == '') { inputText.value = '0' + dot.value; }
    else { inputText.value += dot.value; }
}
operator.forEach(
    item => {
        item.addEventListener('click', function () {
            switch (item.value) {
                case '/':
                    {
                        valid(item);


                    }
                    break;
                case '*':
                    {
                        valid(item);

                    }
                    break;
                case '+':
                    {
                        valid(item);

                    }
                    break;

                case '-':
                    {
                        valid(item);
                    }
                    break;

                default: {
                    if (fin != '') {
                        //console.log('Im equale');
                        inputText.value = eval(valid(item));
                    }
                }
                    break;

            }
        })
    }
)
function valid(item) {
    let value = inputText.value;
    if (value == '' || value.split('.').pop() == '') {
        errormsg.textContent = 'insert value';

    }
    else {
        if (value == 0 && item.value == '/')
            errormsg.textContent = 'imposible to devide by 0';
        else {
            errormsg.textContent = '';
            if (item.value == "=")
                fin += value;
            else {
                fin += value + item.value;
            }

            console.log(fin);
            inputText.value = 0;
        }
        return fin;
    }

}

//the tips span
var tips = document.getElementById('tips');

// Scientifique calculator
Scoperator.forEach(item => { item.setAttribute('hidden', '') })

//opent the close for sc operation
document.getElementById('open').onclick = () => {
    if (Scoperator[0].getAttribute('hidden') == null) {
        Scoperator.forEach(item => { item.setAttribute('hidden', '') })
        tips.innerHTML = '';
    }
    else {
        Scoperator.forEach(item => { item.removeAttribute('hidden') });
        tips.innerHTML = 'hint :  when you use the scientific operators please use the number FIRST then the operator [e.g 5 then cos()] to get 0.28366218546322625       ';
    }
}

Scoperator.forEach(item => {
    item.addEventListener('click', function () {
        switch (item.value) {
            case 'sin': {
                sin();
            }
                break;

            case "cos":
                {
                    cos();
                }
                break;

            case "tan":
                {
                    tan();
                }
                break;
            case "log":
                {
                    log();
                }
                break;
            case "sqrt":
                {
                    sqrt();
                }
                break;


            case "ln":
                {
                    ln();
                }
                break;
            default:
                PI();
                break;
        }
    }
    )

});
let value;

function testValue() {
    value = parseFloat(inputText.value);
    return !isNaN(value);
}
function sin() {
    if (testValue())
        inputText.value = Math.sin(value);

}

function cos() {
    if (testValue())
        inputText.value = Math.cos(value);
}

function tan() {
    if (testValue())
        inputText.value = Math.tan(value);
}
function log() {
    if (testValue())
        inputText.value = Math.log(value);
}
function sqrt() {
    if (testValue())
        inputText.value = Math.sqrt(value);
}
function ln() {
    if (testValue())
        inputText.value = Math.LN10;
}

function PI() {
    // if (testValue())
    inputText.value = Math.PI;
}


// change the CSS value
let cal = document.querySelectorAll('#axis_x-3 .dot');