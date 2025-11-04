import { use, useState } from 'react'



let run = false;
function buildDeck(){
    const face = ['10', 'J', 'Q', 'K'];
    const ace = 'A';
    const size = 52;
    let count = 0;
    let value = 2;
    let deck = [];


    while(count < size){
        
        if(value < 10){
            for(let i = 0; i < 4; i++){
                deck[count] = {id: count, sym: value.toString(), value: value};
                count++;
            }
            value++;
            
        
        }else if(value === 10){
            for(let i = 0; i < face.length; i++){
                for(let i = 0; i < face.length; i++){
                deck[count] = {id: count, sym: face[i], value: value};
                count++;
                }
            }
            value++
        
        }else{
            for(let i = 0; i < 4; i++){
                deck[count] = {id: count, sym: ace, value: value};
                count++;
            }
        }
    }

    return deck;
}//build deck function


function randomNum(deck){
    const max = deck.length -1;
    const min = 0;
    let rand =  Math.floor(Math.random() * (max - min + 1)) + min;
    
    return rand;
}

function Hit(handleHit){
    return(<button className='hit' onClick={handleHit}>hit</button>);
}

function Stay(handleStay){
    return(<button className='stay' onClick={handleStay}>stay</button>);
}


//defines what to do on hit
function hitButton(deck){

}




export default function Game(){
    const[deck, setDeck] = useState(buildDeck());
    const[player, setPlayer] = useState([])
    const[dealer, setDealer] = useState([]);
    
    function Hands(deck, player, dealer){
        //create players opening hands for player and dealer
        let index1 = randomNum(deck);
        let firstCard = deck[index1];

        const newDeck = [...deck];
        newDeck.splice(index1, 1);
        setDeck(newDeck);
    
        let index2 = randomNum(deck);
        let secondCard = deck[index2]
    
        newDeck.splice(index2, 1);
        setDeck(newDeck);
    
        let hand = [firstCard, secondCard];
        setPlayer(hand);

        let index3 = randomNum(deck);
        let dealer1 = deck[index3];

        
        newDeck.splice(index3, 1);
        setDeck(newDeck);
    
        let index4 = randomNum(deck);
        let dealer2 = deck[index4]
    
        newDeck.splice(index4, 1);
        setDeck(newDeck);
    
        let hand1 = [dealer1, dealer2];
        setDealer(hand1);


}
    



    
   
    if(!run){
        console.log(deck);
        

        Hands(deck, player, dealer);




        run = true;
    }
    
    
    return(
        <>
            


            <div>You: {player[0] + player[1]}</div>
            <div>Dealer: {dealer[0]}</div>
        
        
        </>
    );
    
    
    
    
    
    
    
    
    
    
    
}
    
    