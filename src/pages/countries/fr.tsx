import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/fr/flagmap.png";
import coat from "../../assets/img/fr/coat.svg";

function France() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="France shaped flag"
        title="France"
        coat={coat}
        coatAlt="Coat of Arms of France"
      />
      <CountrySummary
        capital="Paris"
        largestCities="Paris, Marseille, Lyon, Toulouse, Nice"
        lang="French"
        currencies="€ EUR"
        iso="fr"
        tld="fr"
        callingCode="33"
        drivingSide="R"
      />
    </>
  );
}

export default France;
