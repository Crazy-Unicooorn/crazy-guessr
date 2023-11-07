import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/bm/flagmap.png";
import coat from "../../assets/img/bm/coat.svg";

function Bermuda() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Bermuda shaped flag"
        title="Bermuda"
        coat={coat}
        coatAlt="Coat of Arms of Bermuda"
      />
      <CountrySummary
        capital="Hamilton"
        largestCities="Hamilton, St. George's, Somerset Village, Tucker's Town"
        lang="English"
        currencies="$ BMD"
        iso="bm"
        tld="bm"
        callingCode="1-441"
        drivingSide="L"
      />
    </>
  );
}

export default Bermuda;
