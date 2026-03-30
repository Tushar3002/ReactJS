import React, { useEffect, useState } from "react";
import { GameHeader } from "./component/GameHeader";
import Card from "./component/Card";
import { WinMessage } from "./component/WinMessage";

const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
];

function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);


  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  function initializeGame() {

    const shuffled=shuffleArray(cardValues)
    const finalCard = shuffled.map((value, idx) => ({
      id: idx,
      value,
      isFlipped: false,
      isMatched: false,
    }));
    // console.log(finalCard);
    
    setCards(finalCard);
    setScore(0)
    setMoves(0)
    setIsLocked(false)
    setMatchedCards([])
    setFlippedCards([])
  }
  useEffect(() => {
    initializeGame();
  }, []);

  

  function handleCardClick(card) {
    if (card.isFlipped || card.isMatched || isLocked || flippedCards.length===2) {
      return;
    }
    // Update card flipped state
    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, isFlipped: true };
      } else {
        return c;
      }
    });

    setCards(newCards);

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    // Check for match if two cards are flipped

    if (flippedCards.length === 1) {
      setIsLocked(true);
      const firstCard = cards[flippedCards[0]];

      if (firstCard.value === card.value) {
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
            setScore((prev) => prev + 1);
            setCards((prev) =>
              prev.map((c) => {
                if (c.id === card.id || c.id === firstCard.id) {
                  return { ...c, isMatched: true };
                } else {
                  return c;
                }
              })
            );

            setFlippedCards([]);
            setIsLocked(false);
          // const newMatchedCards = cards.map((c) => {
          //   if (c.id === card.id) {
          //     return { ...c, isMatched: true };
          //   } else {
          //     return c;
          //   }
          // });
          // setCards(newMatchedCards)
        
        }, 500);
        
      } else {
        // flip back card 1, card 2

        setTimeout(() => {
          const flippedBackCard = newCards.map((c) => {
            if (newFlippedCards.includes(c.id) || c.id === card.id) {
              return { ...c, isFlipped: false };
            } else {
              return c;
            }
          });

          setCards(flippedBackCard);
          setIsLocked(false);
          setFlippedCards([]);
        }, 1000);
      }

      setMoves((prev) => prev + 1);
    }
  }

  const isGameComplete=matchedCards.length===cardValues.length



  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />
        {isGameComplete && <WinMessage moves={moves}/>}
      <div className="cards-grid">
        {cards.map((card, idx) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
