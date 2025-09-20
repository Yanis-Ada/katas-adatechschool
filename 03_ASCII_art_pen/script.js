const penCalendar = {
    septembre: 10,
    octobre: 9,
    novembre: 8,
    decembre: 7,
    janvier: 6,
    fevrier: 5,
    mars: 4,
    avril: 3,
    mai: 2,
    juin: 1,
};

let penTip = ' /\\\n/__\\';
let penBody = '||||';
let penBottom = '|__|';
let simpleGum = '|__|';
let doubleGum = '|  |\n|__|';

function drawMyPen(month) {
    console.log(penTip);
    
    for (let i = 0; i < penCalendar[month]; i++) {
        console.log(penBody);
    }

    if (penCalendar[month] < 4) {
        console.log(penBottom);
        console.log(simpleGum);
    } else {
        console.log(doubleGum);
    }
  
};

drawMyPen('juin');
drawMyPen('mai');
drawMyPen('avril');
drawMyPen('mars');
drawMyPen('fevrier');
drawMyPen('janvier');
drawMyPen('decembre');
drawMyPen('novembre');
drawMyPen('octobre');
drawMyPen('septembre');