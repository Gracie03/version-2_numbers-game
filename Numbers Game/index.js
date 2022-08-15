const playerscore=document.querySelector('.player-score');
const computerscore=document.querySelector('.comp-score');
const playerguess=document.querySelector('.player-number');
const computerguess=document.querySelector('.comp-number');
const gobtn=document.querySelector('.guess-btn');
const input=document.querySelector('.text-input');
const final=document.querySelector('.final-say');
const refreshbtn=document.querySelector('#refresh');
const rulesbtn=document.querySelector('.info-btn');
const count=document.querySelector('.count');


//game function
const guessing=()=>{
    const randomnum=Math.floor(Math.random()*10);
    let inputvalue=input.value;
    
    //player side
     if(randomnum==inputvalue) {
        playerguess.textContent=inputvalue;
        computerguess.textContent=randomnum;
        playerscore.textContent++;
        input.value='';
        count.textContent++;
        final.textContent=`cheers! you guessed right`;
        final.classList.remove('error-final-say');
    
     //computer side
     }else{
     playerguess.textContent=inputvalue;
     computerguess.textContent=randomnum;
     computerscore.textContent++;
     input.value='';
     count.textContent++;
     final.textContent=`Wrong guess! try again`;
     final.classList.add('error-final-say');
     }
    }

    //end gane function
    function endgame(){
        if(count.textContent==20){
            final.textContent=`player scored ${playerscore.textContent} point`;
            input.value = '';
            playerguess.textContent=00;
            computerguess.textContent=00;
            playerscore.textContent = 00;
            computerscore.textContent = 00;
            count.textContent=00;
            if(final.classList.contains('error-final-say')){
            final.classList.remove('error-final-say')
            alert(`20 counts completed
            Restart`)
}
}}


// eventlisteners
rulesbtn.addEventListener('click', (e)=>{
 
alert(`if your guess is the same as the computer's guess then, you win...
       but if your guess is different from the computer's then, you lose...
       Use the restart button to re-start the game again.
       player has 20 guesses per session
               Enjoy ! `);
}
)

input.addEventListener('keypress', (e)=>{
    e.preventDefault;
    if(e.key === 'Enter'){
        guessing(), endgame();
       }
}
)

gobtn.addEventListener('click',(e)=>{
    e.preventDefault
    if (input.value==''){
        alert(`input can not be empty`)
    }
    else if(input.value.length>1){
        alert(`input can not be more than one,input a single number betwwen 0-9`)
        input.value = '';
     }
    
    else{
       return guessing(), endgame();
    }
    })

refreshbtn.addEventListener('click',(e)=>{
    e.preventDefault
    input.value = '';
    playerguess.textContent=00;
    computerguess.textContent=00;
    playerscore.textContent = 00;
    computerscore.textContent = 00;
    final.textContent=`Ready ?`;
    count.textContent=00;
    if(final.classList.contains('error-final-say')){
final.classList.remove('error-final-say')
    } 
 })


 



 


