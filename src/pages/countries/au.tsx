import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/au/flagmap.png";
import coat from "../../assets/img/au/coat.svg";

function Australia() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Australia shaped flag"
        title="Australia"
        coat={coat}
        coatAlt="Coat of Arms of Australia"
      />
      <CountrySummary
        capital="Canberra"
        largestCities="Sydney, Melbourne, Brisbane, Perth, Adelaide"
        lang="English"
        currencies="$ AUD"
        iso="AU"
        tld="au"
        callingCode="61"
        drivingSide="L"
      />
    </>
  );
}

export default Australia;
