import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flamap from "../../assets/img/ad/flagmap.png";
import coat from "../../assets/img/ad/coat.svg";

function Andorra() {
  return (
    <>
      <CountryHeader
        flagmap={flamap}
        flagAlt="Andorra shaped flag"
        title="Andorra"
        coat={coat}
        coatAlt="Coat of Arms of Andorra"
      />
      <CountrySummary
        capital="Andorra la Vella"
        largestCities="Andorra la Vella"
        lang="Catalan"
        currencies="€ EUR"
        iso="AD"
        tld="ad"
        callingCode={376}
        drivingSide="R"
      />
    </>
  );
}

export default Andorra;
