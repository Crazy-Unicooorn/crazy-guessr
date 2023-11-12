import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/pr/flagmap.png";
import coat from "../../assets/img/pr/coat.svg";

function PuertoRico() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Puerto Rico shaped flag"
        title="Puerto Rico"
        coat={coat}
        coatAlt="Coat of Arms of Puerto Rico"
      />
      <CountrySummary
        capital="San Juan"
        largestCities="San Juan, Bayamón, Carolina, Ponce, Caguas"
        lang="Spanish, English"
        currencies="$ USD"
        iso="pr"
        tld="pr"
        callingCode="1-787, 1-939"
        drivingSide="R"
      />
    </>
  );
}

export default PuertoRico;
