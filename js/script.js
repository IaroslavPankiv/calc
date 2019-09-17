
const display = document.querySelector('.calc_disply p');

const allButtons = document.querySelectorAll('.count');
allButtons.forEach((i)=> i.addEventListener('click', calcFunction));
let actionDisplay = [];


const allActions = document.querySelectorAll('.action');
allActions.forEach((i)=> i.addEventListener('click', action));

const counter = document.querySelector('.counter');

counter.addEventListener('click', sum);


const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', backspaced);

const clearDisplay = document.querySelector('.clear');

clearDisplay.addEventListener('click', backspaced);







function calcFunction() {


    const att = this.getAttribute('data-value');

    let find = actionDisplay.find((i)=> i == ".");


        if (att === '.') {
            if (!actionDisplay.length) {
                actionDisplay.push(0);
            }else if (!find) {
                actionDisplay.push('.');
            }
        }else if (att === "00") {
            actionDisplay.push(0,0);
        }else {
            actionDisplay.push(+att);
        }
        display.innerHTML = actionDisplay.join('');
        console.log(actionDisplay)
}

let count2=[];
function action() {
    count2.push(+actionDisplay.join(''));
    actionDisplay = [];
    const sign = this.getAttribute('data-value');
    if (count2.length===2) {
        count2.push(+actionDisplay.join(''));
        console.log(count2)
        console.log('fff')
    }

    display.innerHTML = '';
    if (count2.length === 3 ) {
        sum();
    }else if (count2.length >= 1) {
        actionDisplay = [];
        switch (sign) {
            case '*':
                count2.push('*');
                break;
            case '/':
                count2.push('/');
                break;
            case '-':
                count2.push('-');
                break;
            case '+':
                count2.push('+');
                break;
            case '%':
                count2.push('%');
                break;
            case '!^':
                count2.push('!^');


                if (+count2[0] < 0){
                    display.innerHTML = 'value';
                    count2 = [];
                    actionDisplay = [];
                }else {
                    let mathSqrt = Math.sqrt(+count2[0])
                    display.innerHTML = mathSqrt;
                    count2 = [];
                    actionDisplay = [];
                    actionDisplay.push(+mathSqrt)


                }

                break;
        }

    }
    console.log(count2)
    if (count2.length > 3) {
        count2 =[];
        actionDisplay = [];

        console.log('clear')
        display.innerHTML = 'value';
    }
}



let suum;




function backspaced() {
    const att = this.getAttribute('data-value');



    if (att === 'backspace') {

        let t = actionDisplay.splice(-1, 1)
        display.innerHTML = actionDisplay.join('');
         if (actionDisplay.length===0){
             display.innerHTML = 'value';
         }   

    }else if (att === 'ON/AC') {
        display.innerHTML = 'value';
        actionDisplay = []

    }else {

    }

}




function sum() {


    if (count2.length === 2)  {

        count2.push(+actionDisplay.join(''));

        suum = eval(count2[0] + count2[1] + count2[2]);

        display.innerHTML = suum;

        count2 = [];
        actionDisplay = [];

        actionDisplay.push(+suum)


    }else if (count2.length === 3) {

        suum = eval(count2[0] + count2[1] + count2[2]);

        display.innerHTML = suum;

        count2 = [];
        actionDisplay = [];
        actionDisplay.push(+suum)


        //     suum  = +count2[0] `S{count[1]}` +count2[2];
        //
        //     switch (count2[1]) {
        //         case '*':
        //             suum  = +count2[0] * +count2[2];
        //             display.innerHTML = suum;
        //             count2 =[];
        //             actionDisplay = [];
        //             break;
        //         case '/':
        //             suum  = +count2[0] / +count2[2];
        //             display.innerHTML = suum;
        //             count2 =[];
        //             actionDisplay = [];
        //             break;
        //         case '-':
        //             suum  = +count2[0] - +count2[2];
        //             display.innerHTML = suum;
        //             count2 =[];
        //             actionDisplay = [];
        //             break;
        //         case '+':
        //             suum  = +count2[0] + +count2[2];
        //             display.innerHTML = suum;
        //             count2 =[];
        //             actionDisplay = [];
        //             break;
        //         case '%':
        //
        //             break;
        //
        //     }
        //
        //
    }else if (count2.length < 2) {
        count2 =[];
        actionDisplay = [];

        display.innerHTML = 'value';
    }
    else if (count2.length > 3) {
        count2 =[];
        actionDisplay = [];

        console.log('clear')
        display.innerHTML = 'value';
    }





}