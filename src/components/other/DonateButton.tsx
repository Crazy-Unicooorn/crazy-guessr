/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";
import Button from "../common/Button";
import HeartIcon from "../../assets/icons/general/heart";
import CloseIcon from "../../assets/icons/actions/close";
import BitcoinIcon from "../../assets/icons/general/currency_bitcoin";

declare const Blockonomics: any;

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
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  // overflow: hidden;

  border-radius: 8px;
  background: var(--pastel-white);
  color: #000000;

  position: fixed;
  top: 150%;

  box-shadow: var(--elevation-5);
`;

const Heading = styled.div`
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
`;

function DonateButton() {
  const [displayModal, setDisplayModal] = useState(false);
  const toggleModal = () => setDisplayModal(!displayModal);

  const boopConfig = { scale: 1.1, timing: 200, springConfig: { tension: 100, friction: 5 } };

  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(1);

  // This function calls the Blockonomics Payment Widget,
  // you can call it when you want to trigger Payment Widget
  function payWithBitcoin() {
    Blockonomics.widget({
      msg_area: "bitcoinpay",
      uid: "07ef38a850f7435c",
      email,
      amount,
    });
  }

  function handleEmailInput(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleAmountInput(e: React.ChangeEvent<HTMLInputElement>) {
    setAmount(Number(e.target.value));
  }

  const onClose = useCallback(() => {
    setDisplayModal(false);
  }, []);

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
  }, [displayModal, onClose]); // Dependency array ensures effect runs only if onClose changes

  return (
    <>
      <Button
        text="Donate"
        title="Donate BTC to the author of this website."
        collapseText
        onClick={toggleModal}
        hasIconLeft
        iconLeft={<HeartIcon />}
        bgcolor="var(--pastel-yellow, #f7edc3);"
        boop={boopConfig}
        shadow="light"
      />
      {displayModal && (
        <ModalContainer id="modal">
          <Overlay onClick={onClose} />
          <Modal>
            <Heading>
              <h2 style={{ width: "100%" }}>Donate</h2>
              <Button
                onClick={onClose}
                text=""
                hasIconLeft
                iconLeft={<CloseIcon size={24} fill="var(--pastel-pink)" />}
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
            <p>
              Help funding the development of this website by sending BTC to the author. You can choose any amount of
              USD and it will get converted to BTC that you will have to send.
            </p>
            <input
              type="number"
              id="amount"
              placeholder="Amount in USD"
              onInput={handleAmountInput}
              style={{ width: "100%" }}
            />
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              onInput={handleEmailInput}
              style={{ width: "100%" }}
            />
            <Button
              text="Pay with bitcoin"
              // eslint-disable-next-line react/jsx-no-bind
              onClick={payWithBitcoin}
              style={{ width: "100%" }}
              bgcolor="#F7931A"
              hasIconRight
              iconRight={<BitcoinIcon />}
            />
            <div id="bitcoinpay" style={{ width: "100%" }} />
          </Modal>
        </ModalContainer>
      )}
    </>
  );
}

export default DonateButton;
