import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/at/flagmap.png";
import coat from "../../assets/img/at/coat.svg";

function Austria() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Austria shaped flag"
        title="Austria"
        coat={coat}
        coatAlt="Coat of Arms of Austria"
      />
      <CountrySummary
        capital="Vienna"
        largestCities="Vienna"
        lang="Austrian German"
        currencies="€EUR"
        iso="AT"
        tld="at"
        callingCode="43"
        drivingSide="R"
      />
    </>
  );
}

export default Austria;
