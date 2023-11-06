import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/gt/flagmap.png";
import coat from "../../assets/img/gt/coat.svg";

function Guatemala() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Guatemala shaped flag"
        title="Guatemala"
        coat={coat}
        coatAlt="Coat of Arms of Guatemala"
      />
      <CountrySummary
        capital="Guatemala City"
        largestCities="Guatemala City, Mixco, Villa Nueva, Petapa, San Juan Sacatepéquez"
        lang="Spanish"
        currencies="GTQ"
        iso="gt"
        tld="gt"
        callingCode="502"
        drivingSide="R"
      />
    </>
  );
}

export default Guatemala;
