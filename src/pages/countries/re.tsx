import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/re/flagmap.png";
import coat from "../../assets/img/re/coat.svg";

function Reunion() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Reunion shaped flag"
        title="Reunion"
        coat={coat}
        coatAlt="Coat of Arms of Reunion"
      />
      <CountrySummary
        capital="Saint-Denis"
        largestCities="Saint-Denis, Saint-Paul, Saint-Pierre, Le Tampon, Saint-André"
        lang="French"
        currencies="€ EUR"
        iso="re"
        tld="re"
        callingCode="262"
        drivingSide="R"
      />
    </>
  );
}

export default Reunion;
