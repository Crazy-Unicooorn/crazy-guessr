import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/pn/flagmap.png";
import coat from "../../assets/img/pn/coat.svg";

function PitcairnIslands() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Pitcairn Islands shaped flag"
        title="Pitcairn Islands (Pitkern Ailen)"
        coat={coat}
        coatAlt="Coat of Arms of Pitcairn Islands"
      />
      <CountrySummary
        capital="Adamstown"
        largestCities="Adamstown"
        lang="English, Pitkern"
        currencies="NZ$ (NZD)"
        iso="pn"
        tld="pn"
        callingCode="64"
        drivingSide="L"
      />
    </>
  );
}

export default PitcairnIslands;
