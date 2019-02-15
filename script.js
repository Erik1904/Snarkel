window.addEventListener( 'DOMContentLoaded', function () {
	
		const buttonRoolDice = document.querySelector( '.dice-roll' );

    function rollDice () {

        const diceSide1 = document.getElementById( 'dice-side-1' );
        const diceSide2 = document.getElementById( 'dice-side-2' );
				const diceSide3 = document.getElementById( 'dice-side-3' );
        const diceSide4 = document.getElementById( 'dice-side-4' );
				const diceSide5 = document.getElementById( 'dice-side-5' );
        const diceSide6 = document.getElementById( 'dice-side-6' );
        const status = document.getElementById( 'status' );

        const side1 = Math.floor( Math.random() * 6 ) + 1;
        const side2 = Math.floor( Math.random() * 6 ) + 1;
				const side3 = Math.floor( Math.random() * 6 ) + 1;
        const side4 = Math.floor( Math.random() * 6 ) + 1;
				const side5 = Math.floor( Math.random() * 6 ) + 1;
        const side6 = Math.floor( Math.random() * 6 ) + 1;
        const diceTotal = side1 + side2;

        diceSide1.innerHTML = side1;
        diceSide2.innerHTML = side2;
				diceSide3.innerHTML = side3;
        diceSide4.innerHTML = side4;
				diceSide5.innerHTML = side5;
        diceSide6.innerHTML = side6;

        status.innerHTML = 'You rolled ' + diceTotal + '.';

        if ( side1 === side2 ) {
            status.innerHTML += ' Doubles! You get a free turn!';
        }
			if (side6 === 1 || side6 === 5){
				//change color to green, these are scoring die
				document.getElementById( 'dice-side-6' ).className = "dice-scoring";
			}else {
				document.getElementById( 'dice-side-6' ).className = "dice";
			}
    }

    buttonRoolDice.addEventListener( 'click', rollDice, false );

}, false);
