import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/be/flagmap.png";
import coat from "../../assets/img/be/coat.svg";

function Belgium() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Belgium shaped flag"
        title="Belgium (België)"
        coat={coat}
        coatAlt="Coat of Arms of Belgium"
      />
      <CountrySummary
        capital="Brussels (Bruxelles)"
        largestCities="Brussels"
        lang="Dutch, French, German"
        currencies="€ EUR"
        iso="BE"
        tld="be"
        callingCode="32"
        drivingSide="R"
      />
    </>
  );
}

export default Belgium;
