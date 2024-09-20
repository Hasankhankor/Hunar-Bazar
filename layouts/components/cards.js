import React, { useState } from 'react';
import styles from "../../styles/cards.module.css"; // Import CSS module

const Cards = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null); // Track selected card index

  const cardsData = [
    {
      title: 'Rangin Tabassum',
      content: 'A colorful portrayal of a rural Pashto family, showcasing the warmth and unity of community life',
      imageUrl: 'https://ik.imagekit.io/os33grffu/Mysterious%20Woman%20with%20Red%20Veil%20and%20Ornate%20Headpiece.png?updatedAt=1726852282643',
    },
    {
      title: 'Paigham-e-Pukhtun',
      content: 'An artistic representation of Pashto language and poetry, celebrating the rich literary heritage of the region',
      imageUrl: 'https://ik.imagekit.io/os33grffu/Enigmatic%20Woman%20in%20Blue%20Veil%20With%20Silver%20Headpiece.png?updatedAt=1726852432708',
    },
    {
      title: 'Sher-e-Khyber',
      content: 'A powerful depiction of a Pashto warrior, symbolizing courage and the spirit of the Khyber Pass.',
      imageUrl: 'https://ik.imagekit.io/os33grffu/Rural%20Pashtun%20Family%20Outdoors%20Against%20Weathered%20Wall.png?updatedAt=1726852562378',
    },
    {
      title: 'Zama Janan',
      content: 'An intricate painting of a couple in traditional attire, representing love and commitment in Pashto culture.',
      imageUrl: 'https://ik.imagekit.io/os33grffu/83e865656226dae33b2a7797fa67d606.png?updatedAt=1726853992309',
    },
  ];

  const handleCardClick = (index) => {
    setSelectedCardIndex(index); // Set the selected card index on click
  };

  const handleClose = () => {
    setSelectedCardIndex(null); // Reset selected card index on close
  };

  const handleNext = () => {
    if (selectedCardIndex !== null && selectedCardIndex < cardsData.length - 1) {
      setSelectedCardIndex(selectedCardIndex + 1); // Go to the next card
    }
  };

  const handlePrev = () => {
    if (selectedCardIndex !== null && selectedCardIndex > 0) {
      setSelectedCardIndex(selectedCardIndex - 1); // Go to the previous card
    }
  };

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.parent}>
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundImage: `url(${card.imageUrl})` }}
            onClick={() => handleCardClick(index)} // Handle click event
          >
            <div className={styles['content-box']}>
              <span className={styles['card-title']}>{card.title}</span>
              <p className={styles['card-content']}>{card.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay for the selected card */}
      {selectedCardIndex !== null && (
        <div className={styles.overlay} onClick={handleClose}> {/* Close on clicking the overlay */}
          <div className={styles.largeCard} onClick={(e) => e.stopPropagation()}> {/* Prevent closing on card click */}
            <button className={styles.closeButton} onClick={handleClose}>
              &times; {/* Close button */}
            </button>
            <img
              src={cardsData[selectedCardIndex].imageUrl}
              alt={cardsData[selectedCardIndex].title}
              className={styles.largeCardImage}
            />
            <div className={styles.largeCardContent}>
              <h2>{cardsData[selectedCardIndex].title}</h2>
              <p>{cardsData[selectedCardIndex].content}</p>
            </div>

            {/* Navigation buttons */}
            {selectedCardIndex > 0 && (
              <button className={`${styles.arrowButton} ${styles.prevButton}`} onClick={handlePrev}>
                &#8249; {/* Left arrow */}
              </button>
            )}
            {selectedCardIndex < cardsData.length - 1 && (
              <button className={`${styles.arrowButton} ${styles.nextButton}`} onClick={handleNext}>
                &#8250; {/* Right arrow */}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
