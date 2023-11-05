import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/de/flagmap.png";
import coat from "../../assets/img/de/coat.svg";

function Germany() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Germany shaped flag"
        title="Germany"
        coat={coat}
        coatAlt="Coat of Arms of Germany"
      />
      <CountrySummary
        capital="Berlin"
        largestCities="Berlin, Hamburg, Munich, Cologne, Frankfurt"
        lang="German"
        currencies="€EUR"
        iso="DE"
        tld="de"
        callingCode="49"
        drivingSide="R"
      />
    </>
  );
}

export default Germany;
