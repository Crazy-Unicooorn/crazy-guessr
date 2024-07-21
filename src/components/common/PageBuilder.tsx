/* eslint-disable no-nested-ternary */
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import flagIcon from "../../assets/icons/general/flag.svg";
import cityIcon from "../../assets/icons/general/city.svg";
import langIcon from "../../assets/icons/general/language.svg";
import currencyIcon from "../../assets/icons/general/currency.svg";
import isoIcon from "../../assets/icons/general/iso.svg";
import internetIcon from "../../assets/icons/general/internet.svg";
import callIcon from "../../assets/icons/general/call.svg";
import LeftDriveIcon from "../../assets/icons/general/leftDrive";
import RightDriveIcon from "../../assets/icons/general/rightDrive";

const PageTitle = styled.h1`
  font-size: 4rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  max-height: 12rem;
  width: 100%;

  @media (max-width: 1000px) {
    font-size: 2.5rem;
    gap: 1rem;
  }
  @media (max-width: 640px) {
    font-size: 1.75rem;
  }
`;

function CountryHeader({
  flagmap,
  flagAlt,
  title,
  coat,
  coatAlt,
}: {
  flagmap: string;
  flagAlt: string;
  title: string;
  coat: string;
  coatAlt: string;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsMobile(window.screen.width <= 640 || window.innerWidth <= 640);
  }, []);

  const styleImg: React.CSSProperties = {
    maxHeight: "12rem",
  };

  const styleImgMobile: React.CSSProperties = {
    maxHeight: "4rem",
  };
  return (
    <PageTitle>
      <img src={flagmap} alt={flagAlt} style={isSmallScreen || isMobile ? styleImgMobile : styleImg} />
      <div style={{ textAlign: "center", whiteSpace: "normal", padding: "0 2rem", maxWidth: "100%" }}>{title}</div>
      <img src={coat} alt={coatAlt} style={isSmallScreen || isMobile ? styleImgMobile : styleImg} />
    </PageTitle>
  );
}

export default CountryHeader;

const SummaryItem = styled.div`
  display: flex;
  max-width: 100%;
  // width: 100%;
  padding: 0.5rem;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;

  border-radius: 4px;
  background: rgba(255, 255, 255, 0.2);

  /* flat */
  box-shadow: var(--shadow-flat);
`;

const Summary = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // max-width: 82rem;
  width: 100%;
  gap: 1rem;
  padding: 2rem 0;
`;

export function CountrySummary({
  capital,
  largestCities,
  lang,
  currencies,
  iso,
  tld,
  callingCode,
  drivingSide,
}: {
  capital?: string;
  largestCities?: string;
  lang?: string;
  currencies?: string;
  iso?: string;
  tld?: string;
  callingCode?: number | string;
  drivingSide?: "L" | "R";
}) {
  const data: React.CSSProperties = {
    textAlign: "right",
    fontWeight: "bold",
    flexGrow: 1,
  };

  const finalISO = iso?.toUpperCase();

  const iconStyle: React.CSSProperties = {
    minWidth: "24px",
  };

  return (
    <Summary>
      <SummaryItem>
        <img src={flagIcon} alt="" style={iconStyle} />
        Capital
        <div style={data}>{capital}</div>
      </SummaryItem>
      <SummaryItem>
        <img src={cityIcon} alt="" style={iconStyle} />
        Largest Cities
        <div style={data}>{largestCities}</div>
      </SummaryItem>
      <SummaryItem>
        <img src={langIcon} alt="" style={iconStyle} />
        Main Languages
        <div style={data}>{lang}</div>
      </SummaryItem>
      <SummaryItem>
        <img src={currencyIcon} alt="" style={iconStyle} />
        Currencies
        <div style={data}>{currencies}</div>
      </SummaryItem>
      <SummaryItem>
        <img src={isoIcon} alt="" style={iconStyle} />
        ISO 3166 Code
        <div style={data}>{finalISO}</div>
      </SummaryItem>
      <SummaryItem>
        <img src={internetIcon} alt="" style={iconStyle} />
        Internet TLD
        <div style={data}>.{tld}</div>
      </SummaryItem>
      <SummaryItem>
        <img src={callIcon} alt="" style={iconStyle} />
        Calling Code
        <div style={data}>+{callingCode}</div>
      </SummaryItem>
      <SummaryItem>
        {drivingSide === "L" ? (
          <LeftDriveIcon fill="var(--pastel-black)" />
        ) : (
          <RightDriveIcon fill="var(--pastel-black)" />
        )}
        Driving Side
        <div style={data}>{drivingSide === "L" ? "Left" : drivingSide === "R" ? "Right" : "not specified"}</div>
      </SummaryItem>
    </Summary>
  );
}

CountrySummary.defaultProps = {
  capital: "None",
  largestCities: "None",
  lang: "None",
  currencies: "None",
  iso: "None",
  tld: "??",
  callingCode: "?",
  drivingSide: null,
};
