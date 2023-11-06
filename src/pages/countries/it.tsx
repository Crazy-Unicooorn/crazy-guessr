import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/it/flagmap.png";
import coat from "../../assets/img/it/coat.svg";

function Italy() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Italy shaped flag"
        title="Italy (Italia)"
        coat={coat}
        coatAlt="Coat of Arms of Italy"
      />
      <CountrySummary
        capital="Rome"
        largestCities="Rome, Milan, Naples, Turin, Palermo"
        lang="Italian"
        currencies="€EUR"
        iso="it"
        tld="it"
        callingCode="39"
        drivingSide="R"
      />
    </>
  );
}

export default Italy;
