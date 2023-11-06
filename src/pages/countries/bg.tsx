import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/bg/flagmap.png";
import coat from "../../assets/img/bg/coat.svg";

function Bulgaria() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Bulgaria shaped flag"
        title="Bulgaria (България)"
        coat={coat}
        coatAlt="Coat of Arms of Bulgaria"
      />
      <CountrySummary
        capital="Sofia (София)"
        largestCities="Sofia, Plovdiv, Varna, Burgas"
        lang="Bulgarian"
        currencies="лвBGN"
        iso="bg"
        tld="bg and .бг"
        callingCode="359"
        drivingSide="R"
      />
    </>
  );
}

export default Bulgaria;
