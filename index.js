function calculateProbability() {
    const card1 = document.getElementById('card1').value.toUpperCase().trim(); // Get the values entered in the card input fields, convert them to uppercase
    const card2 = document.getElementById('card2').value.toUpperCase().trim();
    
    const highCards = ['A', 'K', 'Q', 'J', '10'];
    const lowCards = ['2', '3', '4', '5', '6', '7', '8', '9'];
  
    const card1Rank = card1.substring(0, card1.length - 1); // subsctring extraction starts at 0 and ends at card.length - 1. To determine if high card or low card
    const card2Rank = card2.substring(0, card2.length - 1);
  
    if (highCards.includes(card1Rank) && highCards.includes(card2Rank)) {
      document.getElementById('result').innerHTML = 'Probability of winning is high. Consider playing.';
    } else if (lowCards.includes(card1Rank) && lowCards.includes(card2Rank)) {
      document.getElementById('result').innerHTML = 'Probability of winning is low. Consider folding.';
    } else {
      document.getElementById('result').innerHTML = 'Mixed hand. Play cautiously.';
    }
  }
  