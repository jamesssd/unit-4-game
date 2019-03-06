// Pseudo coding

// game with 4 crystal and random result
// every crystal needs a random number between 1-12
//A new random number should be generated every single time we win or lost
// to those four crystal
// When clicking any crystal, it should be adding with the previous result until it equals the total score
// If it is grater than the random result then we decrement a lost counter
// if it is equal, we increment a win counter and start over with a new random number

var random_result;
var lost = 0; 
var win = 0;
var previous = 0;

var resetAndStart = function () {
    $(".crystals").empty();

    var images = [ '', '', '', '',],
    
    random_result = Math.floor(Math.random() * 69 ) + 30;

    $("#result").html('Random Result: ' + random_result);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        // console.log(random);
        
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });

            //Shows the numbers in the crystal
            crystal.html(random);

        $(".crystals").append(crystal);    
    }
    $("#previous").html("Total Score: " + previous);
}

resetAndStart();


$(document).on('click', ".crystal", function() {
    
    var num = parseInt($(this).attr('data-random'));
   
    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous)

    if(previous > random_result){

        lost--;

        $("#lost").html("You lost!: " + lost);

        previous = 0;

        resetAndStart();
    } 
    else if(previous === random_result) {

        win++;

        previous = 0;

        $("#win").html("You win!:" + win);
 
        resetAndStart();
    }
});


