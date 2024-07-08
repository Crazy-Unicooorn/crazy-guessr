import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/dk/flagmap.png";
import coat from "../../assets/img/dk/coat.svg";

function Denmark() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Denmark shaped flag"
        title="Denmark"
        coat={coat}
        coatAlt="Coat of Arms of Denmark"
      />
      <CountrySummary
        capital="Copenhagen (København)"
        largestCities="Copenhagen, Aarhus, Odense, Aalborg, Frederiksberg"
        lang="Danish"
        currencies="kr DKK"
        iso="DK"
        tld="dk"
        callingCode="45"
        drivingSide="R"
      />
    </>
  );
}

export default Denmark;
