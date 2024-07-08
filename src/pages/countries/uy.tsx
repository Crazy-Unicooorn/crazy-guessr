import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/uy/flagmap.png";
import coat from "../../assets/img/uy/coat.svg";

function Uruguay() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Uruguay shaped flag"
        title="Uruguay"
        coat={coat}
        coatAlt="Coat of Arms of Uruguay"
      />
      <CountrySummary
        capital="Montevideo"
        largestCities="Montevideo, Salto, Paysandú, Las Piedras, Rivera"
        lang="Spanish"
        currencies="UYU"
        iso="uy"
        tld="uy"
        callingCode="598"
        drivingSide="R"
      />
    </>
  );
}

export default Uruguay;
