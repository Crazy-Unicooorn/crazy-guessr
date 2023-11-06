import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/gu/flagmap.png";
import coat from "../../assets/img/gu/coat.svg";

function Guam() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Guam shaped flag"
        title="Guam (Guåhan)"
        coat={coat}
        coatAlt="Coat of Arms of Guam"
      />
      <CountrySummary
        capital="Hagåtña"
        largestCities="Dededo, Yigo, Tamuning, Mangilao, Barrigada"
        lang="English, Chamoru"
        currencies="$USD"
        iso="gu"
        tld="gu"
        callingCode="1-671"
        drivingSide="R"
      />
    </>
  );
}

export default Guam;
