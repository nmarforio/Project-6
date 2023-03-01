import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Form from "../components/Form";

export default function Home() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('/api');
      const json = await data.json();
      setCardList(json)
    }
    fetchData()
      .catch(console.error);
  }, [])


  function addCard(newCard) {
    setCardList([newCard, ...cardList]);
  }

  function handleRemoveCard(id) {
    setCardList(cardList.filter((card) => card._id !== id));
  }

  function handleUpdateCard(updatedCard) {
    const updatedCardList = cardList.map((card) => {
      if (card._id === updatedCard._id) {
        return updatedCard;
      }
      return card;
    });
    setCardList(updatedCardList);
  }

  return (
    <BoardWrapper>
      <CardGrid>
        {cardList.map((card) => {
          return (
            <Card
              key={card._id}
              name={card.name}
              text={card.text}
              onRemoveCard={handleRemoveCard}
              onUpdateCard={handleUpdateCard}
              id={card._id}
            />
          );
        })}
      </CardGrid>
      <Form onAddCard={addCard} />
    </BoardWrapper>
  );
}

const BoardWrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
`;

const CardGrid = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-content: start;
  margin: 0;
  padding: 20px;
  overflow-y: auto;
`;
