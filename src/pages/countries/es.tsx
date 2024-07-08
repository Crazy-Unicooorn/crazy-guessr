import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/es/flagmap.png";
import coat from "../../assets/img/es/coat.svg";

function Spain() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Spain shaped flag"
        title="Spain (España)"
        coat={coat}
        coatAlt="Coat of Arms of Spain"
      />
      <CountrySummary
        capital="Madrid"
        largestCities="Madrid, Barcelona, Valencia"
        lang="Spanish"
        currencies="€ EUR"
        iso="es"
        tld="es"
        callingCode="34"
        drivingSide="R"
      />
    </>
  );
}

export default Spain;
