import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/ec/flagmap.png";
import coat from "../../assets/img/ec/coat.svg";

function SouthGeorgia() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="South Georgia and the South Sandwich Islands shaped flag"
        title="South Georgia and the South Sandwich Islands"
        coat={coat}
        coatAlt="Coat of Arms of South Georgia and the South Sandwich Islands"
      />
      <CountrySummary
        capital="King Edward Point"
        largestCities="King Edward Point, Grytviken, Stromness, Leith Harbour, Husvik"
        lang="English"
        currencies="£ FKP"
        iso="gs"
        tld="gs"
        callingCode="500"
        drivingSide="L"
      />
    </>
  );
}

export default SouthGeorgia;
