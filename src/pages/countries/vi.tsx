import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/vi/flagmap.png";
import coat from "../../assets/img/vi/coat.svg";

function USVirginIslands() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="United States Virgin Islands shaped flag"
        title="United States Virgin Islands"
        coat={coat}
        coatAlt="Coat of Arms of United States Virgin Islands"
      />
      <CountrySummary
        capital="Charlotte Amalie"
        largestCities="Charlotte Amalie, Cruz Bay, Frederiksted, Christiansted, Grove Place"
        lang="English"
        currencies="$ USD"
        iso="vi"
        tld="vi"
        callingCode="1-340"
        drivingSide="L"
      />
    </>
  );
}

export default USVirginIslands;
