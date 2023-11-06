import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/lu/flagmap.png";
import coat from "../../assets/img/lu/coat.svg";

function Luxembourg() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Luxembourg shaped flag"
        title="Luxembourg"
        coat={coat}
        coatAlt="Coat of Arms of Luxembourg"
      />
      <CountrySummary
        capital="Luxembourg City"
        largestCities="Luxembourg City, Esch-sur-Alzette, Differdange, Dudelange"
        lang="Luxembourgish, French, German"
        currencies="€EUR"
        iso="lu"
        tld="lu"
        callingCode="352"
        drivingSide="R"
      />
    </>
  );
}

export default Luxembourg;
