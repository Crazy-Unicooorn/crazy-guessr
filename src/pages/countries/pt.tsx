import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/pt/flagmap.png";
import coat from "../../assets/img/pt/coat.svg";

function Portugal() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Portugal shaped flag"
        title="Portugal (Portuguesa)"
        coat={coat}
        coatAlt="Coat of Arms of Portugal"
      />
      <CountrySummary
        capital="Lisbon (Lisboa)"
        largestCities="Lisbon, Porto, Amadora, Braga, Setúbal"
        lang="Portuguese"
        currencies="€ EUR"
        iso="pt"
        tld="pt"
        callingCode="351"
        drivingSide="R"
      />
    </>
  );
}

export default Portugal;
