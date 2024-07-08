import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flamap from "../../assets/img/al/flagmap.png";
import coat from "../../assets/img/al/coat.svg";

function Albania() {
  return (
    <>
      <CountryHeader
        flagmap={flamap}
        flagAlt="Albania shaped flag"
        title="Albania (Shqipëria)"
        coat={coat}
        coatAlt="Coat of Arms of Albania"
      />
      <CountrySummary
        capital="Tirana (Tiranë)"
        largestCities="Tirana"
        lang="Albanian"
        currencies="Lek (ALL)"
        iso="AL"
        tld="al"
        callingCode={355}
        drivingSide="R"
      />
    </>
  );
}

export default Albania;
