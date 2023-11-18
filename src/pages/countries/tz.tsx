import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/tz/flagmap.png";
import coat from "../../assets/img/tz/coat.svg";

function Tanzania() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Tanzania shaped flag"
        title="Tanzania"
        coat={coat}
        coatAlt="Coat of Arms of Tanzania"
      />
      <CountrySummary
        capital="Dodoma"
        largestCities="Dar es Salaam, Mwanza, Arusha, Dodoma, Mbeya"
        lang="Swahili, English"
        currencies="TZS"
        iso="tz"
        tld="tz"
        callingCode="255"
        drivingSide="L"
      />
    </>
  );
}

export default Tanzania;
