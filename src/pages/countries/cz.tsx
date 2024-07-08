import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/cz/flagmap.png";
import coat from "../../assets/img/cz/coat.svg";

function CzechRepublic() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Czech Republic shaped flag"
        title="Czech Republic"
        coat={coat}
        coatAlt="Coat of Arms of Czech Republic"
      />
      <CountrySummary
        capital="Prague (Praha)"
        largestCities="Prague, Brno, Ostrava, Plzeň, Liberec"
        lang="Czech"
        currencies="CZK"
        iso="CZ"
        tld="cz"
        callingCode="420"
        drivingSide="R"
      />
    </>
  );
}

export default CzechRepublic;
