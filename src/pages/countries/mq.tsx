import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/mq/flagmap.png";
import coat from "../../assets/img/mq/coat.svg";

function Martinique() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Martinique shaped flag"
        title="Martinique"
        coat={coat}
        coatAlt="Coat of Arms of Martinique"
      />
      <CountrySummary
        capital="Fort-de-France"
        largestCities="Fort-de-France, Le Lamentin, Le Robert, Sainte-Marie, Le François, Ducos, Saint-Joseph, La Trinité"
        lang="French"
        currencies="€ EUR"
        iso="mq"
        tld="mq"
        callingCode="596"
        drivingSide="R"
      />
    </>
  );
}

export default Martinique;
