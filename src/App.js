import React, { useState } from 'react';
import './App.css';
import card1 from './assets/card1 (1).jpg';
import card2 from './assets/card1 (2).jpg';
import card3 from './assets/card1 (3).jpg';
import card4 from './assets/card1 (4).jpg';
import card5 from './assets/card1 (5).jpg';
import card6 from './assets/card1 (6).jpg';
import card7 from './assets/card1 (7).jpg';
import card8 from './assets/card1 (8).jpg';
import card9 from './assets/card1 (9).jpg';
import card10 from './assets/card1 (10).jpg';

function App() {
  const [cards, setCards] = useState(generateCards());
  const [collectedCards, setCollectedCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card

  function generateCards() {
    const cardImages = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];
    return Array.from({ length: 3 }, () => ({
      id: Math.random().toString(36).substr(2, 9), // Unique ID
      image: cardImages[Math.floor(Math.random() * cardImages.length)], // Random image
    }));
  }

  function handleCardClick(card) {
    setCollectedCards([...collectedCards, card]); // Add card to collected
    setCards(generateCards()); // Generate new cards
  }

  function handleMouseEnter(card) {
    setHoveredCard(card); // Set the hovered card
  }

  function handleMouseLeave() {
    setHoveredCard(null); // Clear the hovered card
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>エクサステラ</h1>
        <div className="card-container">
          {cards.map((card) => (
            <div
              key={card.id}
              className="card"
              onClick={() => handleCardClick(card)}
              onMouseEnter={() => handleMouseEnter(card)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={card.image} alt="Card" className="card-image" />
              {hoveredCard === card && (
                <div className="card-hover">
                  <img src={card.image} alt="Hovered Card" className="hovered-card-image" />
                </div>
              )}
            </div>
          ))}
        </div>
        <h2>Collected Cards</h2>
        <div className="collected-cards">
          {collectedCards.map((card) => (
            <div
              key={card.id}
              className="collected-card"
              onMouseEnter={() => handleMouseEnter(card)}
              onMouseLeave={handleMouseLeave}
              style={{ position: 'relative' }} // 親要素に position: relative を追加
            >
              <img src={card.image} alt="Collected Card" className="card-image" />
              {hoveredCard === card && (
                <div className="card-hover">
                  <img src={card.image} alt="Hovered Card" className="hovered-card-image" />
                </div>
              )}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
