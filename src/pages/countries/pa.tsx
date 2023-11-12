import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/pa/flagmap.png";
import coat from "../../assets/img/pa/coat.svg";

function Panama() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Panama shaped flag"
        title="Panama"
        coat={coat}
        coatAlt="Coat of Arms of Panama"
      />
      <CountrySummary
        capital="Panama City"
        largestCities="Panama City, San Miguelito, Tocumen, David, Arraiján"
        lang="Spanish"
        currencies="B/ PAB, $ USD"
        iso="pa"
        tld="pa"
        callingCode="507"
        drivingSide="R"
      />
    </>
  );
}

export default Panama;
