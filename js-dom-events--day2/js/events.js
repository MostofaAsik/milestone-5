//process-1

// onclick process 2 
//most uses >>function call
//<button onclick="makeGreen()">make green</button>
///!!!!!!!!!!!imporatnt
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}
// }
// //onclick process 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue  // only function name
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// //onclick process-3 another
const makeGrayButton = document.getElementById('makeGray')
makeGrayButton.onclick = function makeGrray() {
    document.body.style.backgroundColor = 'gray'
}

//onclick process-4
const makePinkButton = document.getElementById('makePink')
makePinkButton.addEventListener('click', makeButton)
function makeButton() {
    document.body.style.backgroundColor = 'pink'
}


// onclick process-4 another
const makeYellowButton = document.getElementById('makeYellow')
makeYellowButton.addEventListener('click', function makeYellow() {
    document.body.style.backgroundColor = 'yellow'
})

// onclick process-4 final   !!!!impotant
document.getElementById('make_orange').addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange'
})














// HTML>>>>>>>

{/* <h1 onclick="console.log('Ai hay eta ki')">Dom events er Khela</h1>
<button onclick="console.log(9)">Click Me</button>
<button onclick="console.log(99)">Click Me another</button>

<!-- //onclick process-1 -->
<button onclick="document.body.style.backgroundColor='red'"
    ondblclick="document.body.style.backgroundColor='pink'">make red</button>
<!-- //onclick process-2 -->
<button onclick="makeGreen()">make green</button>
<br>
<br>
<br>
<!-- //onclick process-3 -->
<button id="make-blue">make Blue</button>
<!-- //onclick process-3 another -->
<button id="makeGray">make Gray</button>
<!-- process-4 -->

<button id="makePink"> Make Pink</button>

<!-- process-4 another -->
<button id="makeYellow">Make Yellow</button>

<!-- proces-4 final -->
<button id="make_orange">Make Orange</button>

<script src="js/events.js"></script> */}

// html end>>>>>
