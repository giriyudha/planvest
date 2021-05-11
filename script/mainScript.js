// const mobileBtn = document.getElementById('mobile-cta')
// const nav = document.querySelector('nav')
// const   mobileBtnExit = document.getElementById('mobile-cta-exit')
// const   body=document.querySelector('body');

// mobileBtn.addEventListener('click', ()=> {
//          nav.classList.add('menu-btn');
// })
    
// mobileBtnExit.addEventListener('click', ()=> {
//          nav.classList.remove('menu-btn');
// })               

const   firstLow = document.getElementById('first-low')
const    firstMed = document.getElementById('first-medium')
const    firstHi = document.getElementById('first-high')
const    secondLow = document.getElementById('second-low')
const    secondMed = document.getElementById('second-medium')
const    secondHi = document.getElementById('second-high')
const    thirdLow = document.getElementById('third-low')
const    thirdMed = document.getElementById('third-medium')
const    thirdHi = document.getElementById('third-high');

let choice = [];

var firstScore=0;
var secondScore=0;
var thirdScore=0;

firstLow.addEventListener('click',()=>{
    firstScore=1;
    firstLow.classList.add('btn-clicked');
    firstMed.classList.remove('btn-clicked');
    firstHi.classList.remove('btn-clicked');
})

firstMed.addEventListener('click',()=>{
    firstScore=2;
    firstLow.classList.remove('btn-clicked');
    firstMed.classList.add('btn-clicked');
    firstHi.classList.remove('btn-clicked');
})

firstHi.addEventListener('click', ()=>{
    firstScore=3;
    firstLow.classList.remove('btn-clicked');
    firstMed.classList.remove('btn-clicked');
    firstHi.classList.add('btn-clicked');
})

secondLow.addEventListener('click',()=>{
    secondScore=1;
    secondLow.classList.add('btn-clicked');
    secondMed.classList.remove('btn-clicked');
    secondHi.classList.remove('btn-clicked');
})

secondMed.addEventListener('click',()=>{
    secondScore=2;
    secondLow.classList.remove('btn-clicked');
    secondMed.classList.add('btn-clicked');
    secondHi.classList.remove('btn-clicked');
})

secondHi.addEventListener('click', ()=>{
    secondScore=3;
    secondLow.classList.remove('btn-clicked');
    secondMed.classList.remove('btn-clicked');
    secondHi.classList.add('btn-clicked');
})

thirdLow.addEventListener('click',()=>{
    thirdScore=1;
    thirdLow.classList.add('btn-clicked');
    thirdMed.classList.remove('btn-clicked');
    thirdHi.classList.remove('btn-clicked');
})

thirdMed.addEventListener('click',()=>{
    thirdScore=2;
    thirdLow.classList.remove('btn-clicked');
    thirdMed.classList.add('btn-clicked');
    thirdHi.classList.remove('btn-clicked');
})

thirdHi.addEventListener('click', ()=>{
    thirdScore=3;
    thirdLow.classList.remove('btn-clicked');
    thirdMed.classList.remove('btn-clicked');
    thirdHi.classList.add('btn-clicked');
})


const getPlan = document.getElementById('get-plan');

var leftList = document.getElementById('left-list');
var midList = document.getElementById('mid-list');
var rightList = document.getElementById('right-list');
const   result = document.getElementById('result');



function addLeftList(text) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    leftList.appendChild(node);
}

function addMidList(text) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    midList.appendChild(node);
}

function addRightList(text) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    rightList.appendChild(node);
}

var stocksTrade = ['ETH/BTC','DOGE/BTC','ICBP.JK','WIKA.JK','PTPP.JK','ADHI.JK', 'BBTN.JK','BTPS.JK', 'BRIS.JK','ASII.JK','ANTM.JK','MDKA.JK'];
var stocksSafe= ['BBRI.JK', 'BBNI.JK', 'BMRI.JK', 'ICBP.JK'];

function calculate(score){
    if(score<5 && firstScore==2){
        addLeftList("Money Market Fund");
        addMidList(stocksTrade[3]);
        addMidList(stocksTrade[5]);
        addMidList(stocksTrade[7]);
        addMidList(stocksTrade[8]);
        for (i=0; i<stocksSafe.length; i++){
            addRightList(stocksSafe[i]);
        }}
        
        else if(score<5){
        addLeftList("Money Market Fund");
        for (i=2; i<7; i++){
            addMidList(stocksTrade[i]);
        }
        for (i=0; i<stocksSafe.length-1; i++){
            addRightList(stocksSafe[i]);
        }}

        else if(score>=5 && score<=7 ){
            for (i=0; i<stocksSafe.length-1; i++){
                addLeftList(stocksSafe[i]);
            }
            for (i=3; i<9; i++){
                addMidList(stocksTrade[i]);
            }
            addRightList("Fixed Income Mutual Fund")
        }

        else if(score>7){
            for (i=0; i<stocksSafe.length-1; i++){
                addLeftList(stocksSafe[i]);
            }
            for (i=0; i<stocksTrade.length; i++){
                addMidList(stocksTrade[i]);
            }
            addRightList("Fixed Income Mutual Fund");
        }
}



getPlan.addEventListener('click',()=>{
    result.classList.remove('result-default');
    var totalScore= firstScore+secondScore+thirdScore;
    calculate(totalScore);
   
});