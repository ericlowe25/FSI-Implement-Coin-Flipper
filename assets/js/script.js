// TODO: Declare any global variables we need
let headsRolls = 0
let tailsRolls = 0

// TODO: Add event listener and handler for flip and clear buttons
document.addEventListener('DOMContentLoaded', function () {
   
    // Flip Button Click Handler  
    document.getElementById('flip').addEventListener('click', () => {
    
    // TODO: Determine flip outcome    
        let flippedHeads = Math.random() < 0.5
        if (flippedHeads) {
             document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
             document.getElementById('message').textContent = 'You Flipped Heads!'
             headsRolls += 1
        }
         else {
             document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
             document.getElementById('message').textContent = 'You Flipped tails!'
             tailsRolls += 1
         }
         
    // TODO: Calculate the total number of rolls/flips
             let total = headsRolls + tailsRolls

    // Make variables to track the percentages of heads and tails    
         let percentHeads = 0
         let percentTails = 0
         if (total > 0) {
     
        // TODO: Use the calculated total to calculate the percentages  
         percentHeads = Math.round((headsRolls / total) * 100)
         percentTails = Math.round((tailsRolls / total) * 100)
         }            

// TODO: Update the display of each table cell
         document.getElementById('heads').textContent = headsRolls
         document.getElementById('heads-percent').textContent = percentHeads + '%'
         document.getElementById('tails').textContent = tailsRolls
         document.getElementById('tails-percent').textContent = percentTails + '%'
})
// TODO: Reset global variables to 0
document.getElementById('clear').addEventListener('click', function () {
     headsRolls = 0
     tailsRolls = 0

     document.getElementById('message').textContent = 'Let\'s Get Rolling!'

     let total = headsRolls + tailsRolls

    // Create variables to track percent heads and tails
     let percentHeads = 0
     let percentTails = 0
     if (total > 0) {
        percentHeads = Math.round((headsRolls / total) * 100)
        percentTails = Math.round((tailsRolls / total) * 100)
     }

     document.getElementById('heads').textContent = headsRolls
     document.getElementById('heads-percent').textContent = percentHeads + '%'
     document.getElementById('tails').textContent = tailsRolls
     document.getElementById('tails-percent').textContent = percentTails + '%'
     })
 })
        
        

        

 


        // Uses the Math.random function to generate a random number.
        // If the rand num is less than 1/2, it is classified as heads.
        // Otherwise, the num is above 1/2 and is classified as tails.
         // Calls the main function to begin the coin flipping simulation.