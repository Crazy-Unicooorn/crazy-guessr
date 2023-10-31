import { useState, useEffect, useCallback } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import CloseIcon from "../../assets/icons/actions/close";
import DeckIcon from "../../assets/icons/general/deck";
import ArrowRight from "../../assets/icons/directional/arrow_right";
import { Card } from "./TipsBuilder";

const Heading = styled.div`
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;

  @media (min-height: 360px) {
    top: calc(var(--header-height) / 2);
  }
`;

const Modal = styled.div`
  display: flex;
  max-width: 800px;
  width: 95%;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  max-height: 560px;
  height: 90%;
  overflow: hidden;

  border-radius: 8px;
  background: var(--pastel-white);

  position: relative;

  box-shadow: var(--elevation-5);
`;

const Front = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Feedback = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

function TrainingModal({ cards }: { cards: Card[] }) {
  const [displayModal, setDisplayModal] = useState(false);
  const [displayAnswer, setDisplayAnswer] = useState(false);

  const [countCorrect, setCountCorrect] = useState(0);
  const [countTotal, setCountTotal] = useState(0);

  const getRandomCard = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
  }, [cards]);

  const [randomCard, setRandomCard] = useState(getRandomCard());

  useEffect(() => {
    setRandomCard(getRandomCard());
  }, [displayModal, countTotal, getRandomCard]);

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

  const toggleBack = () => {
    setDisplayAnswer(!displayAnswer);
  };

  const onClose = () => {
    setDisplayModal(false);
    setDisplayAnswer(false);
  };

  const onCorrect = () => {
    setCountCorrect(countCorrect + 1);
    setCountTotal(countTotal + 1);
    toggleBack();
  };

  const onWrong = () => {
    setCountTotal(countTotal + 1);
    toggleBack();
  };

  return (
    <>
      <Button
        text="Recall Training"
        collapseText
        onClick={toggleModal}
        hasIconRight
        iconRight={<DeckIcon size={24} fill="#000" />}
        backgroundColor="var(--pastel-pink)"
        boop={{
          x: 4,
          y: -4,
          rotation: -27,
          timing: 200,
          springConfig: { tension: 100, friction: 5 },
        }}
      />
      {displayModal && (
        <ModalContainer>
          <Overlay onClick={onClose} />
          <Modal>
            <Heading>
              <h2 className="singleline-text" style={{ flexGrow: 1 }}>
                Recall the answer
              </h2>
              <h2>
                <span style={{ color: "green" }}>{countCorrect}</span>/{countTotal}
              </h2>
              <Button
                onClick={onClose}
                text=""
                hasIconLeft
                iconLeft={<CloseIcon size={24} fill="var(--pastel-pink)" />}
                backgroundColor="var(--pastel-black)"
                boop={{
                  rotation: 180,
                  scale: 0.72,
                  timing: 500,
                  springConfig: { tension: 100, friction: 5 },
                }}
              />
            </Heading>
            <Front>{randomCard.front}</Front>
            {displayAnswer && (
              <>
                <h1
                  id="back"
                  style={{
                    borderRadius: "8px",
                    border: "2px solid var(--pastel-pink, #DEA4C0)",
                    width: "100%",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  {randomCard.back}
                </h1>
                <Feedback>
                  <Button
                    onClick={onWrong}
                    text="Wrong"
                    hasIconRight
                    iconRight={<ArrowRight fill="black" size={24} />}
                    boop={{
                      x: 8,
                      timing: 200,
                      springConfig: { tension: 300, friction: 10 },
                    }}
                    style={{ width: "100%" }}
                  />
                  <Button
                    onClick={onCorrect}
                    backgroundColor="var(--pastel-green)"
                    text="Correct"
                    hasIconRight
                    iconRight={<ArrowRight fill="black" size={24} />}
                    boop={{
                      x: 8,
                      timing: 200,
                      springConfig: { tension: 300, friction: 10 },
                    }}
                    style={{ width: "100%" }}
                  />
                </Feedback>
              </>
            )}
            {!displayAnswer && (
              <Button
                onClick={toggleBack}
                backgroundColor="var(--pastel-pink)"
                text="Reveal the answer"
                hasIconRight
                iconRight={<ArrowRight fill="black" size={24} />}
                boop={{
                  x: 8,
                  timing: 200,
                  springConfig: { tension: 300, friction: 10 },
                }}
                style={{ width: "100%" }}
              />
            )}
          </Modal>
        </ModalContainer>
      )}
    </>
  );
}

export default TrainingModal;