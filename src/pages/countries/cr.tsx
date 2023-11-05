import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/cr/flagmap.png";
import coat from "../../assets/img/cr/coat.svg";

function CostaRica() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Costa Rica shaped flag"
        title="Costa Rica"
        coat={coat}
        coatAlt="Coat of Arms of Costa Rica"
      />
      <CountrySummary
        capital="San José"
        largestCities="San José, Limón, San Francisco, Alajuela, Liberia"
        lang="Spanish"
        currencies="CRC"
        iso="CR"
        tld="cr"
        callingCode="506"
        drivingSide="R"
      />
    </>
  );
}

export default CostaRica;
