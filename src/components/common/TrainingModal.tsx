import { useState, useEffect } from "react";
import { animated } from "react-spring";
import { styled } from "styled-components";
import useBoop from "../../hooks/use-boop";
import { StyledButton } from "./Button";
import ArrowRight from "../../assets/icons/directional/arrow_right";
import ButtonClose from "./ButtonClose";
import ButtonTraining from "./ButtonTraining";

interface ButtonProps {
  onClick: () => void;
  text: string;
  backgroundColor: string;
}

function ButtonNext({ onClick, text, backgroundColor }: ButtonProps) {
  const [styleHovering, triggerHovering] = useBoop({
    x: 8,
    timing: 200,
    springConfig: { tension: 100, friction: 5 },
  }) as [never, () => void];

  const [currentStyle, setCurrentStyle] = useState<React.CSSProperties>(() => styleHovering);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) {
      return;
    }
    const timeoutId = setTimeout(() => {
      setIsAnimating(false);
      setCurrentStyle(() => styleHovering);
    }, 220);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isAnimating, styleHovering]);

  return (
    <StyledButton
      type="button"
      backgroundColor={backgroundColor}
      shadow="dark"
      onMouseEnter={() => {
        setCurrentStyle(() => styleHovering);
        triggerHovering();
      }}
      onClick={onClick}
      style={{ width: "100%" }}
    >
      <span className="front">
        <div style={{ flexGrow: 1, textAlign: "left" }}>{text}</div>
        <animated.span style={currentStyle}>
          <ArrowRight size={24} fill="black" />
        </animated.span>
      </span>
    </StyledButton>
  );
}

function randomCard() {
  interface Card {
    [key: string]: string;
  }

  const internetDomains: Card = {
    ae: "United Arab Emirates",
    af: "Afghanistan",
    al: "Albania",
    aq: "Antarctica",
    ar: "Argentina",
    at: "Austria",
    au: "Australia",
    bd: "Bangladesh",
    be: "Belgium",
    bg: "Bulgaria",
    bo: "Bolivia",
    br: "Brazil",
    bt: "Bhutan",
    bw: "Botswana",
    by: "Belarus",
    ca: "Canada",
    ch: "Switzerland",
    cl: "Chile",
    cn: "China",
    co: "Colombia",
    cr: "Costa Rica",
    cz: "Czech Republic",
    de: "Germany",
    dk: "Denmark",
    do: "Dominican Republic",
    ec: "Ecuador",
    ee: "Estonia",
    eg: "Egypt",
    es: "Spain",
    fi: "Finland",
    fk: "Falkland Islands",
    fr: "France",
    gb: "United Kingdom",
    uk: "United Kingdom",
    "co.uk": "United Kingdom",
    gh: "Ghana",
    gl: "Greenland",
    gr: "Greece",
    gs: "South Georgia",
    gt: "Guatemala",
    hk: "Hong Kong",
    hr: "Croatia",
    hu: "Hungary",
    id: "Indonesia",
    ie: "Ireland",
    il: "Israel",
    in: "India",
    iq: "Iraq",
    is: "Iceland",
    it: "Italy",
    jo: "Jordan",
    jp: "Japan",
    ke: "Kenya",
    kg: "Kyrgyzstan",
    kh: "Cambodia",
    kr: "South Korea",
    la: "Laos",
    lb: "Lebanon",
    lk: "Sri Lanka",
    ls: "Lesotho",
    lt: "Lithuania",
    lv: "Latvia",
    mg: "Madagascar",
    me: "Montenegro",
    mk: "North Macedonia",
    ml: "Mali",
    mn: "Mongolia",
    mo: "Macao",
    mq: "Martinique",
    mx: "Mexico",
    my: "Malaysia",
    na: "Namibia",
    ng: "Nigeria",
    nl: "Netherlands",
    no: "Norway",
    np: "Nepal",
    nz: "New Zealand",
    pa: "Panama",
    pe: "Peru",
    ph: "Philippines",
    pk: "Pakistan",
    pl: "Poland",
    pt: "Portugal",
    re: "Reunion",
    ro: "Romania",
    rs: "Serbia",
    ru: "Russia",
    rw: "Rwanda",
    se: "Sweden",
    si: "Slovenia",
    sk: "Slovakia",
    sn: "Senegal",
    sy: "Syria",
    sz: "Eswatini / Swaziland",
    th: "Thailand",
    tn: "Tunisia",
    tr: "Turkey",
    tw: "Taiwan",
    tz: "Tanzania",
    ua: "Ukraine",
    ug: "Uganda",
    us: "United States",
    uy: "Uruguay",
    vn: "Vietnam",
    vu: "Vanuatu",
    xv: "Svalbard",
    za: "South Africa",
  };

  const keys = Object.keys(internetDomains);
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomFront = keys[randomIndex];
  const randomBack = internetDomains[randomFront];

  return { randomFront, randomBack };
}

const Heading = styled.h2`
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

const Modal = styled.div`
  display: flex;
  max-width: 600px;
  width: 95%;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  border-radius: 8px;
  background: var(--pastel-white);

  z-index: 999;

  position: fixed;
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
`;

const TipH1 = styled.h1`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 16px;
`;

const Feedback = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const Separator = styled.div`
  flex-grow: 1;
  height: 2px;
  border-radius: 2px;
  background: black;
`;

function TrainingModal() {
  const [modal, setModal] = useState(false);
  const [back, setBack] = useState(false);

  const [front, setFront] = useState("");
  const [answer, setAnswer] = useState("");

  const [countCorrect, setCountCorrect] = useState(0);
  const [countTotal, setCountTotal] = useState(0);

  useEffect(() => {
    const { randomFront, randomBack } = randomCard();

    setFront(randomFront);
    setAnswer(randomBack);
  }, [modal, countTotal]);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleBack = () => {
    setBack(!back);
  };

  const onClose = () => {
    setBack(false);
    setModal(false);
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
      <TipH1>
        Internet Domain
        <Separator />
        <ButtonTraining onClick={toggleModal} />
      </TipH1>
      {modal && (
        <>
          <Overlay onClick={toggleModal} />
          <Modal>
            <Heading>
              <div style={{ flexGrow: 1 }}>Recall the answer</div>
              <div>
                <span style={{ color: "green" }}>{countCorrect}</span>/{countTotal}
              </div>
              <ButtonClose onClick={onClose} />
            </Heading>
            <h1 style={{ width: "100%", textAlign: "center" }}>.{front}</h1>
            {back && (
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
                  {answer}
                </h1>
                <Feedback>
                  <ButtonNext onClick={onWrong} backgroundColor="var(--pastel-purple)" text="Wrong" />
                  <ButtonNext onClick={onCorrect} backgroundColor="var(--pastel-green)" text="Correct" />
                </Feedback>
              </>
            )}
            {!back && <ButtonNext onClick={toggleBack} backgroundColor="var(--pastel-pink)" text="Reveal the answer" />}
          </Modal>
        </>
      )}
    </>
  );
}

export default TrainingModal;
