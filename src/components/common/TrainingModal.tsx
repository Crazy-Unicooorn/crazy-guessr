import { useState, useEffect, useCallback, useRef } from "react";
import { styled } from "styled-components";
import { animated } from "react-spring";
import Button from "./Button";
import CloseIcon from "../../assets/icons/actions/close";
import DeckIcon from "../../assets/icons/general/deck";
import ArrowRight from "../../assets/icons/directional/arrow_right";
import fire from "../../assets/icons/informational/fire2.png";
import CorrectIcon from "../../assets/icons/informational/correct";
import WrongIcon from "../../assets/icons/informational/wrong";
import { Card } from "./TipsBuilder";
import useBoop from "../../hooks/use-boop";
import HappyIcon from "../../assets/icons/general/happy.svg";
import SadIcon from "../../assets/icons/general/sad.svg";
import DeleteIcon from "../../assets/icons/actions/delete_forever";

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
  // overflow: hidden;

  border-radius: 8px;
  background: var(--purple-100);

  position: relative;

  box-shadow: var(--elevation-5);
`;

const Heading = styled.div`
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 1rem;
  align-self: stretch;

  min-height: 3rem;
`;

const Stat = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const Front = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 0;
  height: 100%;
  flex-grow: 9999;
`;

const Back = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  max-height: 100%;
  min-height: 8rem;
  flex-grow: 1;
`;

const Feedback = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  min-height: 3rem;
`;

interface RandomCard {
  front: string | JSX.Element;
  back: string | JSX.Element;
  weight: number;
  suspended: boolean;
}

interface ModalProps {
  cards: Card[];
  displayFrontOnFrontSideOnly?: boolean;
  btnText?: string;
  shrinkBtn?: boolean;
}

function TrainingModal({ cards, displayFrontOnFrontSideOnly, btnText, shrinkBtn }: ModalProps) {
  const [displayModal, setDisplayModal] = useState(false);
  const [displayAnswer, setDisplayAnswer] = useState(false);

  const [countCorrect, setCountCorrect] = useState(0);
  const [countWrong, setCountWrong] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const hue = Math.max(360 - bestStreak, 200);
  const [countTotal, setCountTotal] = useState(0);

  const [isAnimating, setIsAnimating] = useState(false);
  const [boopStreak, triggerBoopStreak] = useBoop({
    scale: Math.min((bestStreak / 10) * 0.05 + 1.2, 2),
    // rotation: (bestStreak / 10) * 5 + 1.5,
    timing: 200,
    springConfig: { tension: 200, friction: Math.max(100 / Math.log(bestStreak ** 5 + 1), 0.1) },
  }) as [never, () => void];
  const [currentStyle, setCurrentStyle] = useState<React.CSSProperties>(() => boopStreak);

  useEffect(() => {
    if (!isAnimating) {
      return;
    }
    const timeoutId = setTimeout(() => {
      setIsAnimating(false);
      setCurrentStyle(() => boopStreak);
    }, 220);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isAnimating, boopStreak]);

  const [randomCard, setRandomCard] = useState<Card>({ front: "Loading...", back: "Loading..." });
  const [newCards, setNewCards] = useState<RandomCard[]>(
    cards.map((card) => ({ ...card, weight: 1, suspended: false }))
  );

  const pickRandomCard = useCallback(() => {
    const activeCards = newCards.filter((card) => !card.suspended);
    const totalWeight = activeCards.reduce((acc, card) => acc + (card.weight || 1), 0);
    const randomNum = Math.random() * totalWeight;
    let weightSum = 0;
    for (let i = 0; i < activeCards.length; i += 1) {
      weightSum += activeCards[i].weight || 1;
      if (randomNum <= weightSum) {
        const selectedCard = { ...activeCards[i] };
        setRandomCard(selectedCard);
        const chance = Number(((selectedCard.weight || 1) / totalWeight) * 100).toFixed(2);
        // eslint-disable-next-line no-console
        console.log(`This card had ${chance}% chance of being picked (weight: ${selectedCard.weight})`);
        break;
      }
    }
  }, [newCards]);

  useEffect(() => {
    if (displayModal) {
      pickRandomCard();
    }
  }, [displayModal, countTotal, pickRandomCard]);

  const toggleModal = () => setDisplayModal(!displayModal);
  const toggleBack = () => setDisplayAnswer(!displayAnswer);

  const onClose = useCallback(() => {
    setDisplayModal(false);
    setDisplayAnswer(false);
  }, []);

  function updateWeight(factor: number) {
    setNewCards(
      newCards.map((card) => {
        if (card.front === randomCard.front && card.back === randomCard.back) {
          const newWeight = card.weight ? card.weight * factor : factor;
          return { ...card, weight: newWeight };
        }
        return card;
      })
    );
  }

  const onCorrect = () => {
    setCountCorrect(countCorrect + 1);
    setCurrentStreak(currentStreak + 1);
    if (currentStreak + 1 > bestStreak) {
      setBestStreak(currentStreak + 1);
      triggerBoopStreak();
    }
    setCountTotal(countTotal + 1);
    updateWeight(0.5);
    toggleBack();
  };

  const onWrong = () => {
    setCountWrong(countWrong + 1);
    setCurrentStreak(0);
    setCountTotal(countTotal + 1);
    updateWeight(2);
    toggleBack();
  };

  const onSuspend = () => {
    setCountTotal(countTotal + 1);
    setNewCards(
      newCards.map((card) => {
        if (card.front === randomCard.front && card.back === randomCard.back) {
          return { ...card, suspended: true };
        }
        return card;
      })
    );
    toggleBack();
  };

  const modifiedElements = useRef(new Set<Element>());

  useEffect(() => {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modalOpen = document.getElementById("modal");

    if (displayModal) {
      const elements = document.querySelectorAll(focusableElements);
      elements.forEach((el: Element) => {
        if (!modalOpen?.contains(el)) {
          el.setAttribute("tabindex", "-1");
          modifiedElements.current.add(el);
        }
      });
    } else {
      modifiedElements.current.forEach((el: Element) => {
        el.removeAttribute("tabindex");
      });
      modifiedElements.current.clear();
    }
  }, [displayModal]);

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === "Escape") {
        if (!displayModal) return;
        onClose();
      }
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyDown);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [displayModal, onClose]);

  return (
    <>
      <Button
        text={btnText}
        collapseText={shrinkBtn}
        onClick={toggleModal}
        hasIconRight
        iconRight={<DeckIcon size={24} fill="#fff" />}
        bgcolor="var(--purple-700)"
        textColor="white"
        boop={{
          x: 4,
          y: -4,
          rotation: -27,
          timing: 200,
          springConfig: { tension: 100, friction: 5 },
        }}
      />
      {displayModal && (
        <ModalContainer id="modal">
          <Overlay onClick={onClose} />
          <Modal>
            <Heading>
              <Stat title="Best streak of correct answers">
                <animated.span style={currentStyle}>
                  <img
                    src={fire}
                    alt="Icon of fire"
                    style={{
                      width: "32px",
                      filter: `hue-rotate(${hue}deg)`,
                    }}
                  />
                </animated.span>
                {bestStreak}
              </Stat>
              <Stat title="Number of correct answers">
                <CorrectIcon fill="green" size={24} />
                {countCorrect}
              </Stat>
              <Stat title="Number of wrong answers">
                <WrongIcon fill="red" size={24} />
                {countWrong}
              </Stat>
              <div className="singleline-text" style={{ flexGrow: 1 }} />
              <Button
                onClick={onClose}
                text=""
                hasIconLeft
                iconLeft={<CloseIcon size={24} fill="var(--purple-300)" />}
                bgcolor="var(--pastel-black)"
                boop={{
                  rotation: 180,
                  scale: 0.72,
                  timing: 500,
                  springConfig: { tension: 100, friction: 5 },
                }}
                title="Close"
              />
            </Heading>
            {(displayFrontOnFrontSideOnly && displayAnswer) || <Front>{randomCard.front}</Front>}
            {displayAnswer && (
              <Back>
                <h1
                  id="back"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                    border: displayFrontOnFrontSideOnly ? "none" : "2px solid var(--purple-400)",
                    padding: displayFrontOnFrontSideOnly ? "none" : "8px",
                    width: "100%",
                    maxHeight: "100%",
                    minHeight: "0",
                    textAlign: "center",
                    flexGrow: 1,
                  }}
                >
                  {randomCard.back}
                </h1>
                <Feedback>
                  <Button
                    text="Wrong"
                    title="Make the card more likely to appear again"
                    onClick={onWrong}
                    bgcolor="Salmon"
                    hasIconRight
                    iconRight={<img src={SadIcon} alt="Sad Icon" />}
                    boop={{
                      scale: 1.2,
                      timing: 200,
                      springConfig: { tension: 100, friction: 5 },
                    }}
                    style={{ width: "100%" }}
                  />
                  <Button
                    onClick={onSuspend}
                    text=""
                    bgcolor="var(--purple-300)"
                    hasIconRight
                    iconRight={<DeleteIcon fill="black" />}
                    boop={{
                      y: -8,
                      timing: 200,
                      springConfig: { tension: 300, friction: 10 },
                    }}
                    title="Suspend the card (for the session)"
                  />
                  <Button
                    title="Make the card less likely to appear again"
                    onClick={onCorrect}
                    bgcolor="var(--pastel-green)"
                    text="Correct"
                    hasIconRight
                    iconRight={<img src={HappyIcon} alt="Happy Icon" />}
                    boop={{
                      scale: 1.2,
                      timing: 200,
                      springConfig: { tension: 100, friction: 5 },
                    }}
                    style={{ width: "100%" }}
                  />
                </Feedback>
              </Back>
            )}
            {!displayAnswer && (
              <Button
                text="Reveal the answer"
                onClick={toggleBack}
                bgcolor="var(--purple-700)"
                textColor="white"
                hasIconRight
                iconRight={<ArrowRight fill="white" size={24} />}
                boop={{
                  x: 8,
                  timing: 200,
                  springConfig: { tension: 300, friction: 10 },
                }}
                style={{ width: "100%", minHeight: "3rem" }}
              />
            )}
          </Modal>
        </ModalContainer>
      )}
    </>
  );
}

TrainingModal.defaultProps = {
  displayFrontOnFrontSideOnly: false,
  btnText: "Training Cards",
  shrinkBtn: true,
};

export default TrainingModal;
