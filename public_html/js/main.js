var a;
var b;
var answer;

var correct = 0;
var incorrect = 0;


function btnFlashcards_onclick(){
    document.getElementById('menu').style.display='none';
    document.getElementById('flashcards').style.display='block';
    loadCard();
}

function btnPractice_onclick(){
    document.getElementById('menu').style.display='none';
    document.getElementById('practice').style.display='block';
    
}

function btnMenu_onclick(m){
    document.getElementById(m).style.display='none';
    document.getElementById('menu').style.display='block';  
}


function loadCard(){
    a = Math.floor((Math.random() * 26) + 1);
    a = String.fromCharCode(96 + a);
    document.getElementById('flashcardImg').src = 'img/' + a + '.png'
}

function checkAnswer(){
    a = a.toUpperCase();
    answer = answer.toUpperCase();
    alert (a + ';' + answer );
    
    if (a == answer){
        showCorrect();
        loadCard();
    }
    else{
        showIncorrect();
    }
}

function btnOK_onclick(){
    answer=document.getElementById('flashcardAnswer').value;
    checkAnswer(); 
}

function showCorrect(){
    document.getElementById('correct').style.display = 'block';
    myVar=setTimeout(function(){hideCorrect()},2000);
}
            
function hideCorrect(){
    document.getElementById('correct').style.display='none';
    document.getElementById('flashcards').style.display='block';
}

function showIncorrect(){
    document.getElementById('incorrect').style.display = 'block';
    myVar=setTimeout(function(){hideIncorrect()},2000);
  
}

function hideIncorrect(){
    document.getElementById('incorrect').style.display='none';
    document.getElementById('flashcards').style.display='block';
}
